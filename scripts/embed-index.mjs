import { readFile, mkdir, writeFile } from "fs/promises"
import path from "path"
import { pipeline, env } from "@xenova/transformers"

// Always fetch the model from the HF hub, caching it locally (and in CI).
env.allowLocalModels = false
env.cacheDir = path.resolve(".cache/transformers")

const MODEL = "Xenova/all-MiniLM-L6-v2"
const SCALE = 127

// Quartz emits this during `quartz build`: a map of slug -> { slug, title, content, ... }
// where `content` is the same frontmatter-stripped plain text Quartz uses for its own
// keyword search. Reading it keeps slugs and text in lockstep with the built site instead
// of re-deriving them here.
const CONTENT_INDEX = path.resolve("public/static/contentIndex.json")

// Each corpus is just the set of pages whose slug starts with this prefix.
const CORPORA = {
  crucible: "Crucible/",
  ember: "Ember/",
}

// Output dir is parameterized so the production build can write straight into `public`
// (single build) while `serve` can stage into `quartz/static` to survive watch-rebuilds.
const outDir = path.resolve(process.argv[2] ?? "public/static/search-index")

function snippetFrom(content) {
  return content.replace(/\s+/g, " ").trim().slice(0, 220)
}

// `quartz build` writes contentIndex.json as its last step; on some filesystems it isn't
// yet visible the instant the build process exits. Retry briefly before giving up.
async function readContentIndex() {
  for (let attempt = 0; ; attempt++) {
    try {
      return JSON.parse(await readFile(CONTENT_INDEX, "utf-8"))
    } catch (err) {
      if (err.code !== "ENOENT" || attempt >= 10) throw err
      await new Promise((r) => setTimeout(r, 500))
    }
  }
}

async function main() {
  const index = await readContentIndex()
  const pages = Object.values(index)

  const embedder = await pipeline("feature-extraction", MODEL)
  await mkdir(outDir, { recursive: true })

  for (const [name, prefix] of Object.entries(CORPORA)) {
    const entries = []
    for (const page of pages) {
      if (!page.slug.startsWith(prefix)) continue
      const text = (page.content ?? "").trim()
      if (!text) continue

      const output = await embedder(text.slice(0, 2000), {
        pooling: "mean",
        normalize: true,
      })
      const vector = Array.from(output.data, (v) => Math.round(v * SCALE))

      entries.push({
        title: page.title,
        slug: page.slug,
        snippet: snippetFrom(text),
        vector,
      })
    }

    await writeFile(
      path.join(outDir, `${name}.json`),
      JSON.stringify({ model: MODEL, dim: 384, scale: SCALE, entries }),
    )
    console.log(`[embed-index] ${name}: indexed ${entries.length} pages`)
  }
}

main()
