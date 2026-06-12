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
npm run serve   # builds the site + search index, then serves it at localhost:8080
```

`npm run build` produces the same static output in `public/` without
starting the dev server.

Both scripts run three steps: `scripts/prepare-content.mjs` stages the
vault into a Quartz `content/` folder, `quartz build` renders the site, and
`scripts/embed-index.mjs` builds the semantic search index.

### How search works

- The standard Quartz search bar (top left) does fast in-browser keyword
  search over the rendered site.
- The **Semantic Search** page (linked from the home page) lets you search
  either the Crucible rules or the Ember lore by meaning rather than exact
  keywords. It works by:
  1. After `quartz build`, `scripts/embed-index.mjs` reads the
     `static/contentIndex.json` that Quartz emits (the authoritative slug +
     plain-text content for every page), partitions pages into the
     `crucible`/`ember` corpora by slug, computes a sentence embedding for
     each with the `Xenova/all-MiniLM-L6-v2` model, and writes
     `static/search-index/{crucible,ember}.json` (int8-quantized vectors).
     Reading Quartz's own index keeps slugs and page text in lockstep with
     the built site.
  2. In the browser, `quartz/static/semantic-search.js` loads the same
     model via [transformers.js](https://github.com/xenova/transformers.js)
     (from a CDN) to embed your query, then ranks pages by cosine
     similarity against the precomputed vectors — entirely client-side, no
     server or API key required.
- Rerun `npm run build`/`npm run serve` after editing vault content to
  refresh the semantic search index.

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
