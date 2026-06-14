import { cp, rm, mkdir } from "fs/promises"

const CONTENT_DIR = "content"

// Stages the vault into a Quartz `content/` folder (the repo root holds the Obsidian vault plus
// the Quartz engine, which Quartz's watcher can't ignore cleanly).
async function main() {
  await rm(CONTENT_DIR, { recursive: true, force: true })
  await mkdir(CONTENT_DIR, { recursive: true })

  await cp("Crucible", `${CONTENT_DIR}/Crucible`, { recursive: true })
  await cp("Ember", `${CONTENT_DIR}/Ember`, { recursive: true })
  await cp("index.md", `${CONTENT_DIR}/index.md`)
  await cp("semantic-search.md", `${CONTENT_DIR}/semantic-search.md`)

  console.log("[prepare-content] content/ ready")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
