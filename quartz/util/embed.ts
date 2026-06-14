import path from "path"
import { pipeline, env } from "@xenova/transformers"

// Shared between the build-time emitter (quartz/plugins/emitters/semanticIndex.ts) and the
// ranking smoke test (scripts/smoke-search.mjs) so both embed queries/documents identically.

export const DEFAULT_MODEL = "Xenova/all-MiniLM-L6-v2"
export const EMBED_DIM = 384
// Vectors are L2-normalized floats in [-1, 1]; we store them int8-quantized by this factor.
export const SCALE = 127
export const MAX_EMBED_CHARS = 2000

// Where transformers.js caches downloaded model files; the runtime emitter copies the model
// from here into the published site so build and browser load identical files.
export const MODEL_CACHE_DIR = path.resolve(".cache/transformers")

env.cacheDir = MODEL_CACHE_DIR
env.allowLocalModels = false

let embedderPromise: Promise<unknown> | null = null

function getEmbedder(model: string): Promise<unknown> {
  if (!embedderPromise) {
    embedderPromise = pipeline("feature-extraction", model)
  }
  return embedderPromise
}

// Triggers a (memoized) model load so the weights are present in MODEL_CACHE_DIR.
export async function ensureModelLoaded(model: string): Promise<void> {
  await getEmbedder(model)
}

// Returns the mean-pooled, L2-normalized embedding for `text`.
export async function embedNormalized(model: string, text: string): Promise<Float32Array> {
  const embedder = (await getEmbedder(model)) as (
    text: string,
    opts: { pooling: "mean"; normalize: boolean },
  ) => Promise<{ data: Float32Array }>
  const output = await embedder(text.slice(0, MAX_EMBED_CHARS), {
    pooling: "mean",
    normalize: true,
  })
  return output.data
}

export function quantize(vec: Float32Array): number[] {
  return Array.from(vec, (v) => Math.round(v * SCALE))
}
