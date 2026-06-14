import fs from "fs"
import path from "path"
import { FilePath } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { DEFAULT_MODEL, MODEL_CACHE_DIR, ensureModelLoaded } from "../../util/embed"

interface Options {
  model: string
  // Non-threaded ORT builds only; threaded WASM needs cross-origin isolation that GitHub Pages
  // does not provide, and the client pins numThreads=1.
  wasmFiles: string[]
}

const defaultOptions: Options = {
  model: DEFAULT_MODEL,
  wasmFiles: ["ort-wasm.wasm", "ort-wasm-simd.wasm"],
}

const TRANSFORMERS_DIST = path.resolve("node_modules/@xenova/transformers/dist")
const LIB_BUNDLE = "transformers.min.js"

async function copyInto(src: string, dst: string): Promise<FilePath[]> {
  const stat = await fs.promises.stat(src)
  if (stat.isDirectory()) {
    const out: FilePath[] = []
    for (const name of await fs.promises.readdir(src)) {
      out.push(...(await copyInto(path.join(src, name), path.join(dst, name))))
    }
    return out
  }
  await fs.promises.mkdir(path.dirname(dst), { recursive: true })
  await fs.promises.copyFile(src, dst)
  return [dst as FilePath]
}

// Copies the transformers.js library, its WASM backend, and the model weights into the site so
// the search page runs entirely from the site origin (no jsDelivr / Hugging Face at runtime).
// These assets come from node_modules / the build cache and are not committed to git.
export const SemanticSearchRuntime: QuartzEmitterPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "SemanticSearchRuntime",
    async *emit(ctx) {
      const runtimeDir = path.join(ctx.argv.output, "static", "transformers")

      for (const file of [LIB_BUNDLE, ...opts.wasmFiles]) {
        yield* await copyInto(path.join(TRANSFORMERS_DIST, file), path.join(runtimeDir, file))
      }

      await ensureModelLoaded(opts.model)
      yield* await copyInto(
        path.join(MODEL_CACHE_DIR, opts.model),
        path.join(ctx.argv.output, "static", "models", opts.model),
      )
    },
    async *partialEmit() {},
  }
}
