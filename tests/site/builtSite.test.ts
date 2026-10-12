import test, { describe, before } from "node:test"
import assert from "node:assert"
import fs from "fs"
import path from "path"

// Contract tests over the built site in public/ — run after `npm run build` (`npm run test:site`).
// They check that what the emitters produced is what quartz/static/semantic-search.js and the
// browser expect, and that the site makes no external requests.

const PUBLIC = path.resolve("public")
const STATIC = path.join(PUBLIC, "static")

interface IndexFile {
  model: string
  dim: number
  scale: number
  entries: { title: string; slug: string; snippet: string; vector: number[] }[]
}

function listHtml(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) return listHtml(full)
    return e.name.endsWith(".html") ? [full] : []
  })
}

describe("built site", () => {
  let corpora: { value: string; label: string }[]
  const indexes: Record<string, IndexFile> = {}

  before(() => {
    assert(fs.existsSync(PUBLIC), "public/ not found — run `npm run build` first")
    corpora = JSON.parse(
      fs.readFileSync(path.join(STATIC, "search-index", "corpora.json"), "utf-8"),
    )
    for (const { value } of corpora) {
      indexes[value] = JSON.parse(
        fs.readFileSync(path.join(STATIC, "search-index", `${value}.json`), "utf-8"),
      )
    }
  })

  test("search index manifest lists the crucible and ember corpora", () => {
    assert.deepStrictEqual(
      corpora.map((c) => c.value),
      ["crucible", "ember"],
    )
    assert(corpora.every((c) => c.label.length > 0))
  })

  test("every corpus index is non-empty and well-formed", () => {
    for (const [name, index] of Object.entries(indexes)) {
      assert(index.entries.length > 0, `${name} index is empty`)
      for (const entry of index.entries) {
        assert.strictEqual(entry.vector.length, index.dim, `${name}: ${entry.slug} has wrong dim`)
        assert(entry.title && entry.slug, `${name}: entry missing title/slug`)
      }
    }
  })

  test("each corpus only contains pages from its own folder", () => {
    assert(indexes.crucible.entries.every((e) => e.slug.startsWith("Crucible/")))
    assert(indexes.ember.entries.every((e) => e.slug.startsWith("Ember/")))
  })

  test("every search result links to a page that exists", () => {
    const missing = Object.values(indexes)
      .flatMap((i) => i.entries)
      .filter((e) => !fs.existsSync(path.join(PUBLIC, `${e.slug}.html`)))
      .map((e) => e.slug)
    assert.deepStrictEqual(missing, [])
  })

  test("the model each index was built with is self-hosted", () => {
    for (const model of new Set(Object.values(indexes).map((i) => i.model))) {
      const dir = path.join(STATIC, "models", model)
      for (const file of ["config.json", "tokenizer.json", "tokenizer_config.json"]) {
        assert(fs.existsSync(path.join(dir, file)), `missing model file ${model}/${file}`)
      }
      assert(fs.readdirSync(path.join(dir, "onnx")).some((f) => f.endsWith(".onnx")))
    }
  })

  test("the transformers.js runtime and the search client are published", () => {
    for (const file of ["transformers.min.js", "ort-wasm.wasm", "ort-wasm-simd.wasm"]) {
      assert(fs.existsSync(path.join(STATIC, "transformers", file)), `missing ${file}`)
    }
    const client = fs.readFileSync(path.join(STATIC, "semantic-search.js"), "utf-8")
    assert.match(client, /from "\.\/transformers\/transformers\.min\.js"/)
  })

  test("the semantic search page has every element the client script looks up", () => {
    const html = fs.readFileSync(path.join(PUBLIC, "semantic-search.html"), "utf-8")
    const client = fs.readFileSync(path.join(STATIC, "semantic-search.js"), "utf-8")
    const ids = [...client.matchAll(/getElementById\("([^"]+)"\)/g)].map((m) => m[1])
    assert(ids.length >= 5)
    for (const id of new Set(ids)) {
      assert(html.includes(`id="${id}"`), `semantic-search.html is missing #${id}`)
    }
    assert.match(html, /<script type="module" src="\.\/static\/semantic-search\.js">/)
  })

  test("no page loads scripts, styles, images, or frames from another origin", () => {
    const external =
      /<(?:script|img|iframe|source|video|audio)\b[^>]*\bsrc="(?:https?:)?\/\/|<link\b(?=[^>]*\brel="(?:stylesheet|preload|modulepreload)")[^>]*\bhref="(?:https?:)?\/\//
    const offenders = listHtml(PUBLIC)
      .filter((file) => external.test(fs.readFileSync(file, "utf-8")))
      .map((file) => path.relative(PUBLIC, file))
    assert.deepStrictEqual(offenders, [])
  })

  test("home page links to both source indexes and the semantic search page", () => {
    const html = fs.readFileSync(path.join(PUBLIC, "index.html"), "utf-8")
    assert.match(html, /href="\.\/Crucible\/_Index"/)
    assert.match(html, /href="\.\/Ember\/_Index"/)
    assert.match(html, /semantic-search/)
  })
})
