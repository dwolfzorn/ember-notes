import { readFile } from "fs/promises"
import path from "path"
import { embedNormalized } from "../quartz/util/embed"

// End-to-end ranking guard: embeds known queries with the same model the build used and asserts
// the expected page still ranks at the top. Run after `npm run build`.

const INDEX_DIR = path.resolve("public/static/search-index")

interface IndexEntry {
  title: string
  slug: string
  vector: number[]
}
interface SearchIndex {
  model: string
  scale: number
  entries: IndexEntry[]
}

interface Case {
  corpus: string
  query: string
  // The top result must satisfy this.
  expect: (top: IndexEntry) => boolean
  describe: string
}

const cases: Case[] = [
  {
    corpus: "crucible",
    query: "how does burning damage work?",
    expect: (top) => top.title === "Burning",
    describe: 'top result is "Burning"',
  },
  {
    corpus: "ember",
    query: "who are the manifest deities?",
    expect: (top) => /deit|gods/i.test(top.title) || /\/Deities\//.test(top.slug),
    describe: "top result is deity-related",
  },
]

function cosine(query: Float32Array, vector: number[], scale: number): number {
  let dot = 0
  for (let i = 0; i < query.length; i++) {
    dot += query[i] * (vector[i] / scale)
  }
  return dot
}

let failed = false
for (const testCase of cases) {
  const index: SearchIndex = JSON.parse(
    await readFile(path.join(INDEX_DIR, `${testCase.corpus}.json`), "utf-8"),
  )
  const queryVector = await embedNormalized(index.model, testCase.query)
  const top = index.entries
    .map((entry) => ({ entry, score: cosine(queryVector, entry.vector, index.scale) }))
    .sort((a, b) => b.score - a.score)[0].entry

  const ok = testCase.expect(top)
  console.log(
    `[smoke] ${testCase.corpus}: "${testCase.query}" -> "${top.title}" — ${ok ? "OK" : "FAIL"} (${testCase.describe})`,
  )
  if (!ok) failed = true
}

if (failed) {
  console.error("[smoke] ranking regression detected")
  process.exit(1)
}
console.log("[smoke] all cases passed")
