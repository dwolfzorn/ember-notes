import { FullSlug, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { DEFAULT_MODEL, EMBED_DIM, SCALE, embedNormalized, quantize } from "../../util/embed"

export interface Corpus {
  value: string // slug-safe id, also the {value}.json filename
  label: string // shown in the search UI
  prefix: string // pages whose slug starts with this belong to the corpus
}

interface Options {
  model: string
  corpora: Corpus[]
}

const defaultOptions: Options = {
  model: DEFAULT_MODEL,
  corpora: [],
}

const SNIPPET_LEN = 220

function snippetFrom(text: string): string {
  return text.replace(/\s+/g, " ").trim().slice(0, SNIPPET_LEN)
}

interface IndexEntry {
  title: string
  slug: string
  snippet: string
  vector: number[]
}

// Emits semantic search indexes as part of the single `quartz build`. For each page it reuses
// the slug and frontmatter-stripped plain text Quartz already parsed (the same data the built-in
// keyword search uses), so slugs and content stay in lockstep with the rendered site.
export const SemanticSearchIndex: QuartzEmitterPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "SemanticSearchIndex",
    async *emit(ctx, content) {
      const byCorpus = new Map<string, IndexEntry[]>()
      for (const corpus of opts.corpora) {
        byCorpus.set(corpus.value, [])
      }

      for (const [, file] of content) {
        const slug = file.data.slug!
        const text = (file.data.text ?? "").trim()
        if (!text) continue

        const corpus = opts.corpora.find((c) => slug.startsWith(c.prefix))
        if (!corpus) continue

        const vector = quantize(await embedNormalized(opts.model, text))
        byCorpus.get(corpus.value)!.push({
          title: file.data.frontmatter?.title ?? slug,
          slug,
          snippet: snippetFrom(text),
          vector,
        })
      }

      for (const corpus of opts.corpora) {
        yield write({
          ctx,
          slug: joinSegments("static", "search-index", corpus.value) as FullSlug,
          ext: ".json",
          content: JSON.stringify({
            model: opts.model,
            dim: EMBED_DIM,
            scale: SCALE,
            entries: byCorpus.get(corpus.value),
          }),
        })
        console.log(
          `[semantic-index] ${corpus.value}: indexed ${byCorpus.get(corpus.value)!.length} pages`,
        )
      }

      // Manifest so the client renders corpus options from a single source of truth.
      yield write({
        ctx,
        slug: joinSegments("static", "search-index", "corpora") as FullSlug,
        ext: ".json",
        content: JSON.stringify(opts.corpora.map(({ value, label }) => ({ value, label }))),
      })
    },
    async *partialEmit() {
      // Watch-mode rebuilds don't regenerate embeddings; rerun a full build to refresh the index.
    },
  }
}
