import test, { describe, before, after } from "node:test"
import assert from "node:assert"
import fs from "fs"
import os from "os"
import path from "path"
import { buildFolderOrder, explorerSortFn } from "../quartz/util/folderOrder"
import { byFolderOrder } from "../quartz/components/PageList"
import { FileTrieNode } from "../quartz/util/fileTrie"
import { QuartzPluginData } from "../quartz/plugins/vfile"

// Mirrors what convert-foundry-notes.py emits: a root `_Index.md` per source plus one
// `_<Entity>.md` journal index per folder.
const fixture: Record<string, string> = {
  "Crucible/_Index.md": [
    "---",
    "title: Crucible Index",
    "## Frontmatter Comment",
    "---",
    "",
    "# Crucible",
    "",
    "- [[Welcome]]",
    "",
    "## Game Mechanics",
    "",
    "- [[Conditions]]",
    "- [[Combat]]",
    "",
    "### Deep Nest",
    "",
    "- [[Nested Thing]]",
    "",
    "## Character Options",
    "",
    "- [[Ancestries]]",
  ].join("\n"),
  "Crucible/Game Mechanics/Combat/_Combat.md": [
    "---",
    'title: "Combat"',
    'aliases: ["Combat"]',
    "---",
    "",
    "# Combat",
    "",
    "## Pages",
    "",
    "- [[Initiative]]",
    "- [[Actions (2)|Actions]]",
    "- [[Actions]]",
    "- [[Initiative]]",
  ].join("\r\n"),
  // Not underscore-prefixed: never treated as an index note.
  "Crucible/Game Mechanics/Combat/Initiative.md": "## Pages\n\n- [[Should Not Count]]\n",
  // Outside the configured corpus roots: never walked.
  "Other/_Other.md": "## Pages\n\n- [[Ignored]]\n",
}

describe("buildFolderOrder", () => {
  let contentDir: string
  let order: Record<string, number>

  before(() => {
    contentDir = fs.mkdtempSync(path.join(os.tmpdir(), "folder-order-"))
    for (const [rel, text] of Object.entries(fixture)) {
      const full = path.join(contentDir, rel)
      fs.mkdirSync(path.dirname(full), { recursive: true })
      fs.writeFileSync(full, text)
    }
    order = buildFolderOrder(contentDir, ["Crucible", "Ember"])
  })

  after(() => fs.rmSync(contentDir, { recursive: true, force: true }))

  test("orders top-level bullets and headings among their siblings", () => {
    assert.strictEqual(order["Crucible/Welcome"], 0)
    assert.strictEqual(order["Crucible/Game-Mechanics"], 1)
    assert.strictEqual(order["Crucible/Character-Options"], 2)
  })

  test("bullets under a heading are ordered within that heading's folder", () => {
    assert.strictEqual(order["Crucible/Game-Mechanics/Conditions"], 0)
    assert.strictEqual(order["Crucible/Game-Mechanics/Combat"], 1)
    assert.strictEqual(order["Crucible/Character-Options/Ancestries"], 0)
  })

  test("deeper headings nest, and a shallower heading pops back out", () => {
    assert.strictEqual(order["Crucible/Game-Mechanics/Deep-Nest"], 2)
    assert.strictEqual(order["Crucible/Game-Mechanics/Deep-Nest/Nested-Thing"], 0)
    assert.strictEqual(order["Crucible/Deep-Nest"], undefined)
  })

  test('"## Pages" refers to the note\'s own folder, not a subfolder', () => {
    const combat = "Crucible/Game-Mechanics/Combat"
    assert.strictEqual(order[`${combat}/Initiative`], 0)
    assert.strictEqual(order[`${combat}/Actions-(2)`], 1) // alias after `|` is ignored
    assert.strictEqual(order[`${combat}/Actions`], 2)
    assert.strictEqual(order[`${combat}/Pages`], undefined)
  })

  test("a page listed twice keeps its first position", () => {
    assert.strictEqual(order["Crucible/Game-Mechanics/Combat/Initiative"], 0)
  })

  test("ignores frontmatter, H1 titles, non-index notes, and other roots", () => {
    const keys = Object.keys(order)
    assert(!keys.some((k) => k.includes("Frontmatter-Comment")))
    assert(!keys.some((k) => k.endsWith("/Crucible")))
    assert(!keys.some((k) => k.includes("Should-Not-Count")))
    assert(!keys.some((k) => k.startsWith("Other")))
  })

  test("a missing content directory yields an empty map", () => {
    assert.deepStrictEqual(buildFolderOrder(path.join(contentDir, "nope"), ["Crucible"]), {})
  })
})

function trieNode(slug: string, displayName: string, isFolder: boolean): FileTrieNode {
  return { slug, displayName, isFolder } as unknown as FileTrieNode
}

describe("explorerSortFn (sidebar)", () => {
  const order = { "A/Second": 1, "A/First": 0 }
  const nodes = [
    trieNode("A/Chapter 10", "Chapter 10", false),
    trieNode("A/zeta", "zeta", true),
    trieNode("A/Second/index", "Second", true),
    trieNode("A/Chapter 2", "Chapter 2", false),
    trieNode("A/First", "First", false),
  ]
  const expected = ["First", "Second", "zeta", "Chapter 2", "Chapter 10"]

  test("listed entries first by position, then folders, then natural name order", () => {
    const sorted = [...nodes].sort(explorerSortFn(order)).map((n) => n.displayName)
    assert.deepStrictEqual(sorted, expected)
  })

  test("survives the toString()/new Function round trip the Explorer uses client-side", () => {
    const rebuilt = new Function("return " + explorerSortFn(order).toString())() as (
      a: FileTrieNode,
      b: FileTrieNode,
    ) => number
    assert.deepStrictEqual(
      [...nodes].sort(rebuilt).map((n) => n.displayName),
      expected,
    )
  })
})

describe("byFolderOrder (folder pages)", () => {
  const page = (slug: string, title: string) =>
    ({ slug, frontmatter: { title } }) as unknown as QuartzPluginData

  test("listed pages first by position, unlisted pages alphabetically after", () => {
    const sortFn = byFolderOrder({ "A/Two": 1, "A/One": 0, "A/Sub": 2 })
    const sorted = [
      page("A/beta", "beta"),
      page("A/Sub/index", "Sub"),
      page("A/Two", "Two"),
      page("A/Alpha", "Alpha"),
      page("A/One", "One"),
    ]
      .sort(sortFn)
      .map((p) => p.frontmatter!.title)
    assert.deepStrictEqual(sorted, ["One", "Two", "Sub", "Alpha", "beta"])
  })
})
