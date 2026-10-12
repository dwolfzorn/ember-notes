import test, { describe, before, after } from "node:test"
import assert from "node:assert"
import fs from "fs"
import os from "os"
import path from "path"
import { SemanticSearchIndex } from "../quartz/plugins/emitters/semanticIndex"
import { SemanticSearchRuntime } from "../quartz/plugins/emitters/semanticRuntime"
import { QuartzEmitterPluginInstance } from "../quartz/plugins/types"
import { ProcessedContent } from "../quartz/plugins/vfile"
import { BuildCtx } from "../quartz/util/ctx"
import { FilePath } from "../quartz/util/path"
import { StaticResources } from "../quartz/util/resources"
import {
  DEFAULT_MODEL,
  EMBED_DIM,
  MAX_EMBED_CHARS,
  SCALE,
  embedNormalized,
  quantize,
} from "../quartz/util/embed"

// These tests load the real embedding model (downloaded into .cache/transformers on first run,
// ~25 MB) so they exercise exactly what `quartz build` does.

async function runEmitter(
  plugin: QuartzEmitterPluginInstance,
  ctx: BuildCtx,
  content: ProcessedContent[] = [],
): Promise<FilePath[]> {
  const result = plugin.emit(ctx, content, {} as StaticResources)
  if (result instanceof Promise) return result
  const out: FilePath[] = []
  for await (const fp of result) out.push(fp)
  return out
}

function page(slug: string, text: string, title?: string): ProcessedContent {
  const data = { slug, text, frontmatter: title === undefined ? undefined : { title } }
  return [{}, { data }] as unknown as ProcessedContent
}

function dot(a: ArrayLike<number>, b: ArrayLike<number>): number {
  let sum = 0
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i]
  return sum
}

describe("embed utilities", () => {
  test("quantize scales by SCALE and rounds to integers", () => {
    assert.deepStrictEqual(
      quantize(new Float32Array([1, -1, 0.5, 0.004, -0.996])),
      [127, -127, 64, 1, -126],
    )
  })

  test("embedNormalized returns a unit-length vector of EMBED_DIM floats", async () => {
    const vec = await embedNormalized(DEFAULT_MODEL, "how does burning damage work?")
    assert.strictEqual(vec.length, EMBED_DIM)
    assert(Math.abs(dot(vec, vec) - 1) < 1e-4)
  })

  test("semantically similar text scores higher than unrelated text", async () => {
    const query = await embedNormalized(DEFAULT_MODEL, "catching fire and taking fire damage")
    const related = await embedNormalized(DEFAULT_MODEL, "The Burning condition deals fire damage")
    const unrelated = await embedNormalized(DEFAULT_MODEL, "A merchant sells rugs at the market")
    assert(dot(query, related) > dot(query, unrelated))
  })

  test(`only the first ${MAX_EMBED_CHARS} characters are embedded`, async () => {
    const head = "Burning is a condition. ".repeat(100).slice(0, MAX_EMBED_CHARS)
    const a = await embedNormalized(DEFAULT_MODEL, head)
    const b = await embedNormalized(DEFAULT_MODEL, head + " completely different trailing text")
    assert.deepStrictEqual(Array.from(a), Array.from(b))
  })
})

describe("SemanticSearchIndex emitter", () => {
  let outDir: string
  let written: FilePath[]
  const corpora = [
    { value: "crucible", label: "Crucible (rules)", prefix: "Crucible/" },
    { value: "ember", label: "Ember (lore)", prefix: "Ember/" },
  ]
  const readJson = (name: string) =>
    JSON.parse(fs.readFileSync(path.join(outDir, "static", "search-index", name), "utf-8"))

  before(async () => {
    outDir = fs.mkdtempSync(path.join(os.tmpdir(), "semantic-index-"))
    const ctx = { argv: { output: outDir } } as unknown as BuildCtx
    written = await runEmitter(SemanticSearchIndex({ corpora }), ctx, [
      page(
        "Crucible/Conditions/Burning",
        "Burning   deals\n\nfire damage. " + "x".repeat(300),
        "Burning",
      ),
      page("Ember/Gazetteer/Ordain", "A city of canals.", "Ordain"),
      page("Ember/Untitled-Page", "Text but no frontmatter title."),
      page("Crucible/Empty", "   ", "Empty"),
      page("index", "Home page belongs to no corpus.", "Home"),
    ])
  })

  after(() => fs.rmSync(outDir, { recursive: true, force: true }))

  test("writes one index per corpus plus a corpora manifest", () => {
    const names = written.map((fp) => path.basename(fp)).sort()
    assert.deepStrictEqual(names, ["corpora.json", "crucible.json", "ember.json"])
  })

  test("manifest lists value/label only, in config order", () => {
    assert.deepStrictEqual(readJson("corpora.json"), [
      { value: "crucible", label: "Crucible (rules)" },
      { value: "ember", label: "Ember (lore)" },
    ])
  })

  test("index header stamps the model, dimension, and scale", () => {
    const index = readJson("crucible.json")
    assert.strictEqual(index.model, DEFAULT_MODEL)
    assert.strictEqual(index.dim, EMBED_DIM)
    assert.strictEqual(index.scale, SCALE)
  })

  test("pages are partitioned by slug prefix; empty and unmatched pages are skipped", () => {
    assert.deepStrictEqual(
      readJson("crucible.json").entries.map((e: { slug: string }) => e.slug),
      ["Crucible/Conditions/Burning"],
    )
    assert.deepStrictEqual(
      readJson("ember.json").entries.map((e: { slug: string }) => e.slug),
      ["Ember/Gazetteer/Ordain", "Ember/Untitled-Page"],
    )
  })

  test("title falls back to the slug when frontmatter has none", () => {
    const titles = readJson("ember.json").entries.map((e: { title: string }) => e.title)
    assert.deepStrictEqual(titles, ["Ordain", "Ember/Untitled-Page"])
  })

  test("snippet collapses whitespace and is capped at 220 characters", () => {
    const snippet: string = readJson("crucible.json").entries[0].snippet
    assert(snippet.startsWith("Burning deals fire damage. xxx"))
    assert.strictEqual(snippet.length, 220)
  })

  test("vectors are int8-quantized and match embedding the page text directly", async () => {
    const entry = readJson("ember.json").entries[0]
    assert.strictEqual(entry.vector.length, EMBED_DIM)
    assert(entry.vector.every((v: number) => Number.isInteger(v) && Math.abs(v) <= SCALE))
    const expected = quantize(await embedNormalized(DEFAULT_MODEL, "A city of canals."))
    // Round-trip through JSON like the emitter does (it turns quantize's -0 into 0).
    assert.deepStrictEqual(entry.vector, JSON.parse(JSON.stringify(expected)))
  })

  test("an empty corpus still gets an (empty) index file", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "semantic-index-empty-"))
    try {
      const ctx = { argv: { output: dir } } as unknown as BuildCtx
      await runEmitter(SemanticSearchIndex({ corpora: corpora.slice(0, 1) }), ctx, [])
      const index = JSON.parse(
        fs.readFileSync(path.join(dir, "static", "search-index", "crucible.json"), "utf-8"),
      )
      assert.deepStrictEqual(index.entries, [])
    } finally {
      fs.rmSync(dir, { recursive: true, force: true })
    }
  })
})

describe("SemanticSearchRuntime emitter", () => {
  let outDir: string
  let written: string[]

  before(async () => {
    outDir = fs.mkdtempSync(path.join(os.tmpdir(), "semantic-runtime-"))
    const ctx = { argv: { output: outDir } } as unknown as BuildCtx
    written = (await runEmitter(SemanticSearchRuntime(), ctx)).map((fp) =>
      path.relative(outDir, fp).split(path.sep).join("/"),
    )
  })

  after(() => fs.rmSync(outDir, { recursive: true, force: true }))

  test("self-hosts the transformers.js bundle and non-threaded WASM backends", () => {
    for (const file of ["transformers.min.js", "ort-wasm.wasm", "ort-wasm-simd.wasm"]) {
      assert(written.includes(`static/transformers/${file}`), `missing ${file}`)
      assert(fs.statSync(path.join(outDir, "static", "transformers", file)).size > 0)
    }
    assert(!written.some((f) => f.includes("threaded")), "threaded WASM must not be shipped")
  })

  test("self-hosts the model weights, tokenizer, and config under static/models/<model>", () => {
    const modelDir = `static/models/${DEFAULT_MODEL}`
    for (const file of ["config.json", "tokenizer.json", "tokenizer_config.json"]) {
      assert(written.includes(`${modelDir}/${file}`), `missing ${file}`)
    }
    assert(written.some((f) => f.startsWith(`${modelDir}/onnx/`) && f.endsWith(".onnx")))
  })
})
