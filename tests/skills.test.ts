import test, { describe } from "node:test"
import assert from "node:assert"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const SKILLS_DIR = path.resolve(".claude/skills")
const skills = fs
  .readdirSync(SKILLS_DIR)
  .filter((d) => fs.statSync(path.join(SKILLS_DIR, d)).isDirectory())

// The Claude Code session skills (/prep-session, /session-review) are plain Markdown, so the
// useful checks are that Claude Code can load them and that the vault files they rely on exist.
describe("Claude Code skills", () => {
  test("prep-session and session-review are present", () => {
    assert(skills.includes("prep-session"))
    assert(skills.includes("session-review"))
  })

  for (const skill of skills) {
    test(`${skill}: SKILL.md frontmatter names the skill and describes when to use it`, () => {
      const file = path.join(SKILLS_DIR, skill, "SKILL.md")
      const { data, content } = matter(fs.readFileSync(file, "utf-8"))
      assert.strictEqual(data.name, skill)
      assert.strictEqual(typeof data.description, "string")
      assert(data.description.length > 20)
      assert(content.trim().length > 0)
    })
  }

  test("every vault path a skill references in backticks exists", () => {
    for (const skill of skills) {
      const text = fs.readFileSync(path.join(SKILLS_DIR, skill, "SKILL.md"), "utf-8")
      const refs = [...text.matchAll(/`((?:Ember|Crucible)\/[^`*<>]+\.md)`/g)].map((m) => m[1])
      for (const ref of refs) {
        assert(fs.existsSync(ref), `${skill} references missing file ${ref}`)
      }
    }
  })

  test("Ember/Campaign Status.md exists (both skills read it first)", () => {
    assert(fs.existsSync("Ember/Campaign Status.md"))
  })
})
