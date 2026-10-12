import test, { describe, before, after } from "node:test"
import assert from "node:assert"
import { execFileSync } from "child_process"
import fs from "fs"
import os from "os"
import path from "path"

const SCRIPT = path.resolve("scripts/prepare-content.mjs")

// prepare-content.mjs works relative to the cwd, so run it inside a throwaway vault.
describe("scripts/prepare-content.mjs", () => {
  let vault: string
  const write = (rel: string, text: string) => {
    const full = path.join(vault, rel)
    fs.mkdirSync(path.dirname(full), { recursive: true })
    fs.writeFileSync(full, text)
  }
  const exists = (rel: string) => fs.existsSync(path.join(vault, rel))

  before(() => {
    vault = fs.mkdtempSync(path.join(os.tmpdir(), "prepare-content-"))
    write("Crucible/_Index.md", "crucible")
    write("Crucible/assets/map.webp", "img")
    write("Ember/Quests/_Quests.md", "ember")
    write("index.md", "home")
    write("semantic-search.md", "search")
    write("README.md", "not site content")
    write(".obsidian/app.json", "{}")
    write("quartz/static/x.js", "engine")
    write("content/Stale.md", "left over from a previous build")

    const stdout = execFileSync(process.execPath, [SCRIPT], { cwd: vault, encoding: "utf-8" })
    assert.match(stdout, /content\/ ready/)
  })

  after(() => fs.rmSync(vault, { recursive: true, force: true }))

  test("stages both sources and the two top-level pages", () => {
    assert.strictEqual(
      fs.readFileSync(path.join(vault, "content/Crucible/_Index.md"), "utf-8"),
      "crucible",
    )
    assert(exists("content/Crucible/assets/map.webp"))
    assert(exists("content/Ember/Quests/_Quests.md"))
    assert(exists("content/index.md"))
    assert(exists("content/semantic-search.md"))
  })

  test("does not stage repo files that aren't site content", () => {
    assert(!exists("content/README.md"))
    assert(!exists("content/.obsidian"))
    assert(!exists("content/quartz"))
  })

  test("wipes stale content from a previous run", () => {
    assert(!exists("content/Stale.md"))
  })

  test("leaves the source vault untouched", () => {
    assert(exists("Crucible/_Index.md"))
    assert(exists("Ember/Quests/_Quests.md"))
  })

  test("fails with a non-zero exit when a required source is missing", () => {
    const empty = fs.mkdtempSync(path.join(os.tmpdir(), "prepare-content-empty-"))
    try {
      assert.throws(() => execFileSync(process.execPath, [SCRIPT], { cwd: empty, stdio: "pipe" }))
    } finally {
      fs.rmSync(empty, { recursive: true, force: true })
    }
  })
})
