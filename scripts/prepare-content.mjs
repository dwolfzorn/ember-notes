import { cp, rm, mkdir } from "fs/promises"

const CONTENT_DIR = "content"

await rm(CONTENT_DIR, { recursive: true, force: true })
await mkdir(CONTENT_DIR, { recursive: true })

await cp("Crucible", `${CONTENT_DIR}/Crucible`, { recursive: true })
await cp("Ember", `${CONTENT_DIR}/Ember`, { recursive: true })
await cp("index.md", `${CONTENT_DIR}/index.md`)
await cp("semantic-search.md", `${CONTENT_DIR}/semantic-search.md`)

console.log("[prepare-content] content/ ready")
