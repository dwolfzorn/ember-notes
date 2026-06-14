import { pipeline, env } from "./transformers/transformers.min.js"

// Site root, derived from this module's own URL so it works locally ("/") and on GitHub Pages
// ("/<repo>/").
const root = location.pathname.replace(/\/?semantic-search\/?$/, "") + "/"

// Run entirely from the site origin: no jsDelivr, no Hugging Face hub at runtime.
env.allowRemoteModels = false
env.allowLocalModels = true
env.localModelPath = root + "static/models/"
env.backends.onnx.wasm.wasmPaths = root + "static/transformers/"
env.backends.onnx.wasm.numThreads = 1 // GitHub Pages isn't cross-origin isolated; no threads

const INDEX_BASE = root + "static/search-index/"
const TOP_K = 15

let embedderPromise = null
let model = null // the embedding model id, discovered from the index header (single source of truth)
const indexCache = {}

function getEmbedder() {
  if (!embedderPromise) {
    embedderPromise = pipeline("feature-extraction", model)
  }
  return embedderPromise
}

async function getIndex(corpus) {
  if (!indexCache[corpus]) {
    indexCache[corpus] = await (await fetch(`${INDEX_BASE}${corpus}.json`)).json()
  }
  return indexCache[corpus]
}

function cosineSim(query, vector, scale) {
  let dot = 0
  for (let i = 0; i < query.length; i++) {
    dot += query[i] * (vector[i] / scale)
  }
  return dot
}

async function runSearch(queryText, corpus, label) {
  const statusEl = document.getElementById("search-status")
  const resultsEl = document.getElementById("search-results")

  statusEl.textContent = "Loading model and index…"
  const index = await getIndex(corpus)

  // The build defines the model and stamps it into every index; the client follows it rather
  // than hardcoding a (potentially drifting) copy.
  if (model === null) {
    model = index.model
  } else if (model !== index.model) {
    throw new Error(`index built with ${index.model}, but ${model} is already loaded`)
  }

  const embedder = await getEmbedder()
  statusEl.textContent = "Searching…"
  const output = await embedder(queryText, { pooling: "mean", normalize: true })
  const queryVector = Array.from(output.data)

  const results = index.entries
    .map((entry) => ({ entry, score: cosineSim(queryVector, entry.vector, index.scale) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, TOP_K)

  resultsEl.innerHTML = ""
  for (const { entry } of results) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.href = root + entry.slug
    a.textContent = entry.title
    const snippet = document.createElement("div")
    snippet.className = "search-snippet"
    snippet.textContent = entry.snippet
    li.append(a, snippet)
    resultsEl.appendChild(li)
  }

  statusEl.textContent = results.length
    ? `Top ${results.length} results for "${queryText}" in ${label}`
    : "No results"
}

async function setup() {
  const form = document.getElementById("semantic-search-form")
  const input = document.getElementById("semantic-search-input")
  const options = document.getElementById("corpus-options")
  if (!form || !input || !options) return

  // Build the corpus radios from the manifest so the UI, build, and index agree.
  const corpora = await (await fetch(`${INDEX_BASE}corpora.json`)).json()
  corpora.forEach((corpus, i) => {
    const label = document.createElement("label")
    const radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "corpus"
    radio.value = corpus.value
    radio.dataset.label = corpus.label
    radio.checked = i === 0
    label.append(radio, document.createTextNode(" " + corpus.label))
    options.appendChild(label)
  })

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const query = input.value.trim()
    if (!query) return
    const checked = options.querySelector("input[name=corpus]:checked")
    try {
      await runSearch(query, checked.value, checked.dataset.label)
    } catch (err) {
      document.getElementById("search-status").textContent = `Search failed: ${err.message}`
      console.error(err)
    }
  })
}

setup()
