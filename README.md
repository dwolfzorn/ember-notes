# Ember Notes

This project folder is both an Obsidian vault and the source for a
[Quartz](https://quartz.jzhao.xyz/) site published to GitHub Pages, with
a semantic (natural-language) search page. The vault has two sources, each
with its own top-level folder:

- `Ember/` - the Ember adventure/setting journals
- `Crucible/` - the Crucible System Rules journals

## Website & semantic search

The site is built with Quartz and deployed automatically to GitHub Pages
on every push to `main` (see `.github/workflows/deploy.yml`).

To build/preview locally:

```powershell
npm install
npm run serve   # stages content, builds the site + search index, serves at localhost:8080
npm run build   # same, without the dev server (output in public/)
npm run check   # tsc + prettier over the project's own code
npm run smoke   # asserts known queries still rank correctly (run after build)
```

A build is two steps: `scripts/prepare-content.mjs` stages the vault into a
Quartz `content/` folder, then `quartz build` renders the site **and**
generates the semantic search index in the same pipeline.

### How search works

- The standard Quartz search bar (top left) does fast in-browser keyword
  search over the rendered site.
- The **Semantic Search** page (linked from the home page) lets you search
  either the Crucible rules or the Ember lore by meaning rather than exact
  keywords. It runs **entirely from the site's own origin — no external CDN,
  no API key, no server.** It works by:
  1. During `quartz build`, the `SemanticSearchIndex` emitter plugin
     (`quartz/plugins/emitters/semanticIndex.ts`) reads the slug, title, and
     plain text Quartz already parsed for every page, partitions pages into
     the `crucible`/`ember` corpora (configured once in `quartz.config.ts`),
     embeds each with `Xenova/all-MiniLM-L6-v2` (`quartz/util/embed.ts`), and
     writes `static/search-index/{crucible,ember}.json` (int8-quantized
     vectors) plus a `corpora.json` manifest. The model id is stamped into
     each index so the client can't drift from it.
  2. The `SemanticSearchRuntime` plugin
     (`quartz/plugins/emitters/semanticRuntime.ts`) copies the transformers.js
     library, its WASM backend, and the model weights into the published site
     (from `node_modules` / the build cache — not committed to git).
  3. In the browser, `quartz/static/semantic-search.js` loads that
     self-hosted model to embed your query, then ranks pages by cosine
     similarity against the precomputed vectors. The corpus options and the
     model id come from the emitted JSON, so UI, build, and index always
     agree.
- Rerun `npm run build`/`npm run serve` after editing vault content to
  refresh the index. (Quartz watch-mode rebuilds don't re-embed; a full
  build does.)

Fonts use the system stack (`fontOrigin: "local"`) and the unused KaTeX
plugin is removed, so the whole site loads with zero external requests.

## Prerequisites

- Foundry VTT with the **Journal Resolver Exporter** module installed and
  enabled.
- The **Crucible System Rules** compendium imported into your world.
- The **Ember** adventure imported into your world.
- Python 3 with `beautifulsoup4` installed:

  ```
  pip install beautifulsoup4
  ```

## Step 1: Export from Foundry

1. Open your world and go to the **Journal** tab in the sidebar.
2. Find the **Ember** folder, click the export icon in the top right of the
   sidebar, and select the **Ember** folder to export.
3. Click the export icon again and select the **Crucible System Rules**
   folder to export.
4. Each export downloads a zip (e.g. `Ember.resolved.zip` or
   `Crucible System Rules.resolved.zip`) to your **Downloads** folder.
   Extract it — right-click the zip in File Explorer and choose
   **Extract All...**. The extracted folder will contain a `journals/`
   directory of `*.json` files, an `assets/` directory of images, and a
   `manifest.json`.

## Step 2: Run the converter

Run the script once per source, from this project folder (open a PowerShell
terminal here, or `cd` into it). Each `--source` writes to its own
top-level folder, so converting one source never touches the other.

```powershell
python convert.py --input "$env:USERPROFILE\Downloads\Ember" --output . --source Ember --clean
python convert.py --input "$env:USERPROFILE\Downloads\Crucible System Rules" --output . --source Crucible --clean
```

(Replace the `--input` path with wherever you extracted the export folder
in Step 1 — the folder name matches what you exported, e.g. `Ember` or
`Crucible System Rules`.)

- `--input` - the extracted export folder from Step 1 (contains `journals/` and `assets/`).
- `--output` - the vault folder (`.` = this project folder).
- `--source` - the name of the top-level folder for this source (`Ember` or `Crucible`).
- `--clean` - wipes only that source's folder before regenerating, so stale
  pages/assets from a previous export don't linger.

You only need to run the command for the source you re-exported — there's
no need to redo both every time.

## Step 3: Open in Obsidian

Open this project folder as an Obsidian vault. Each source folder
(`Ember/`, `Crucible/`) contains its own `_Index.md` to browse from.

## Vault structure

Each source folder (`Ember/`, `Crucible/`) contains:

- `_Index.md` - index of all journals in this source, grouped by category.
- `<Category>/[<Subcategory>/]<Entity>/` - one folder per journal.
  - `_<Entity>.md` - journal index (links to all pages, aliased to the
    entity name so `[[Entity Name]]` references from other notes resolve
    here).
  - `<Page Name>.md` - one note per journal page.
- `assets/` - images referenced by this source's journals.

## Backlinks

References inlined by the exporter as `[Name]` are converted to
`[[Name]]` wikilinks. Roughly half resolve to existing notes immediately;
the rest become "unresolved" links in Obsidian and will connect
automatically as more lore is added in future updates.

## Re-exporting later

When either the Ember adventure or the Crucible System Rules compendium is
updated in Foundry, repeat Step 1 for just that folder, then re-run Step 2
with the matching `--source` and `--clean`. The conversion is deterministic,
so re-running with the same input produces identical output, and the other
source's content is left untouched.
