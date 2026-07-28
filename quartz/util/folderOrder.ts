import fs from "fs"
import path from "path"
import { sluggify } from "./path"
import { FileTrieNode } from "./fileTrie"

// Every folder in the vault has an underscore-prefixed "journal index" note (e.g.
// `_Combat.md`) exported straight from Foundry, listing that folder's pages as wikilinks
// under headings. Headings name a subfolder (its position among sibling headings orders that
// subfolder among its parent's children); a "## Pages" heading is sugar for "this folder's own
// pages" rather than naming a real subfolder. We walk every such note and turn that
// document order into a slug -> position map so the site's navigation can match Foundry
// instead of falling back to alphabetical.
function buildFolderOrder(contentDir: string, corpusRoots: string[]): Record<string, number> {
  const orderMap: Record<string, number> = {}
  const counters = new Map<string, number>()

  const record = (parentKey: string, childKey: string) => {
    if (childKey in orderMap) return
    const next = counters.get(parentKey) ?? 0
    counters.set(parentKey, next + 1)
    orderMap[childKey] = next
  }

  const processFolderNote = (filePath: string) => {
    const ownSegments = path
      .relative(contentDir, path.dirname(filePath))
      .split(path.sep)
      .filter(Boolean)
      .map(sluggify)

    let stack = [...ownSegments]
    let inFrontmatter = false
    let frontmatterDone = false

    const text = fs.readFileSync(filePath, "utf8")
    for (const line of text.split(/\r?\n/)) {
      if (!frontmatterDone && line.trim() === "---") {
        inFrontmatter = !inFrontmatter
        if (!inFrontmatter) frontmatterDone = true
        continue
      }
      if (inFrontmatter) continue

      const headingMatch = /^(#{1,6})\s+(.*)$/.exec(line)
      if (headingMatch) {
        const level = headingMatch[1].length
        const headingText = headingMatch[2].trim()
        if (level === 1) continue // document title, not a nesting level

        const depth = level - 1 // H2 -> 1, H3 -> 2, ...
        stack = stack.slice(0, ownSegments.length + (depth - 1))

        if (headingText.toLowerCase() !== "pages") {
          const parentKey = stack.join("/")
          const seg = sluggify(headingText)
          record(parentKey, [...stack, seg].join("/"))
          stack = [...stack, seg]
        }
        continue
      }

      const bulletMatch = /^\s*-\s+\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/.exec(line)
      if (bulletMatch) {
        const parentKey = stack.join("/")
        const seg = sluggify(bulletMatch[1].trim())
        record(parentKey, [...stack, seg].join("/"))
      }
    }
  }

  const walk = (dir: string) => {
    let entries: fs.Dirent[]
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (entry.isFile() && entry.name.startsWith("_") && entry.name.endsWith(".md")) {
        processFolderNote(full)
      }
    }
  }

  for (const root of corpusRoots) {
    walk(path.join(contentDir, root))
  }

  return orderMap
}

// Computed once when the config/layout modules load; a watch-mode (`--serve`) session won't
// pick up folder-note edits until restarted, same as the semantic search index.
export const folderOrder: Record<string, number> = buildFolderOrder(
  path.join(process.cwd(), "content"),
  ["Crucible", "Ember"],
)

// Explorer's sortFn is serialized with `.toString()` and rebuilt client-side via `new
// Function(...)`, so it can't close over `order` normally — the data has to be baked into the
// function's source text instead.
export function explorerSortFn(
  order: Record<string, number>,
): (a: FileTrieNode, b: FileTrieNode) => number {
  const body = `
    var orderMap = ${JSON.stringify(order)};
    var orderA = orderMap[a.slug.replace(/\\/index$/, "")];
    var orderB = orderMap[b.slug.replace(/\\/index$/, "")];
    if (orderA !== undefined && orderB !== undefined) return orderA - orderB;
    if (orderA !== undefined) return -1;
    if (orderB !== undefined) return 1;
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" });
    }
    return a.isFolder ? -1 : 1;
  `
  return new Function("a", "b", body) as (a: FileTrieNode, b: FileTrieNode) => number
}
