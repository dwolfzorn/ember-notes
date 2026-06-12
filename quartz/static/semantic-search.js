import {
  pipeline,
  env,
} from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js"

env.allowLocalModels = false

const MODEL = "Xenova/all-MiniLM-L6-v2"

// Site root, derived from this page's own URL so it works both locally
// (served at "/") and on GitHub Pages (served at "/<repo>/").
const root = location.pathname.replace(/\/?semantic-search\/?$/, "") + "/"

const corpusIndexCache = {}
let embedderPromise = null

function getEmbedder() {
  if (!embedderPromise) {
    embedderPromise = pipeline("feature-extraction", MODEL)
  }
  return embedderPromise
}

async function getCorpusIndex(corpus) {
  if (!corpusIndexCache[corpus]) {
    const res = await fetch(`${root}static/search-index/${corpus}.json`)
    corpusIndexCache[corpus] = await res.json()
  }
  return corpusIndexCache[corpus]
}

function cosineSim(query, entryVector, scale) {
  let dot = 0
  for (let i = 0; i < query.length; i++) {
    dot += query[i] * (entryVector[i] / scale)
  }
  return dot
}

async function runSearch(queryText, corpus) {
  const resultsEl = document.getElementById("search-results")
  const statusEl = document.getElementById("search-status")

  statusEl.textContent = "Loading model and index…"
  const [embedder, index] = await Promise.all([getEmbedder(), getCorpusIndex(corpus)])

  statusEl.textContent = "Searching…"
  const output = await embedder(queryText, {
    pooling: "mean",
    normalize: true,
  })
  const queryVector = Array.from(output.data)

  const scored = index.entries.map((entry) => ({
    entry,
    score: cosineSim(queryVector, entry.vector, index.scale),
  }))
  scored.sort((a, b) => b.score - a.score)

  const top = scored.slice(0, 15)
  resultsEl.innerHTML = ""
  for (const { entry } of top) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.href = root + entry.slug
    a.textContent = entry.title
    const small = document.createElement("div")
    small.className = "search-snippet"
    small.textContent = entry.snippet
    li.appendChild(a)
    li.appendChild(small)
    resultsEl.appendChild(li)
  }

  statusEl.textContent = top.length
    ? `Top ${top.length} results for "${queryText}" in ${corpus === "crucible" ? "Crucible" : "Ember"}`
    : "No results"
}

function setup() {
  const form = document.getElementById("semantic-search-form")
  const input = document.getElementById("semantic-search-input")
  if (!form || !input) return

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const query = input.value.trim()
    if (!query) return
    const corpus = document.querySelector('input[name="corpus"]:checked').value
    try {
      await runSearch(query, corpus)
    } catch (err) {
      document.getElementById("search-status").textContent = `Search failed: ${err.message}`
      console.error(err)
    }
  })
}

setup()
