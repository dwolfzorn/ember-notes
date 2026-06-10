#!/usr/bin/env python3
"""
Convert a Foundry "Journal Resolver Exporter" JSON export into a
structured Obsidian Markdown vault, with backlinks, callouts, and embedded
images.

Usage:
    python convert.py --input Ember.resolved --output Ember.vault --source Ember [--clean]
    python convert.py --input Crucible.resolved --output Ember.vault --source Crucible [--clean]

Each --source gets its own top-level folder (with its own assets/ and
_Index.md) inside the shared --output vault. --clean only wipes that
source's folder, leaving the other source untouched.

Re-runnable: drop a fresh export folder in as --input and regenerate.
"""

import argparse
import json
import re
import shutil
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString, Tag

INVALID_CHARS = re.compile(r'[<>:"/\\|?*]')

# section/document-embed class -> (callout type, title)
CALLOUT_MAP = {
    'readaloud': ('quote', 'Read Aloud'),
    'gamemaster': ('warning', 'Gamemaster'),
    'hazard': ('danger', 'Hazard'),
    'social': ('info', 'Social'),
    'exploration': ('tip', 'Exploration'),
}

# matches a [Name] reference, but not an already-converted [[Name]] wikilink
BRACKET_RE = re.compile(r'(?<!\[)\[([^\[\]]+)\](?!\])')
ROLL_CMD_RE = re.compile(r'\[\[(/[^\]]*)\]\]')


def sanitize(name: str) -> str:
    """Make a string safe for use as a Windows file/folder name."""
    name = INVALID_CHARS.sub('', name)
    name = re.sub(r'\s+', ' ', name).strip()
    name = name.rstrip('.')
    return name or 'Untitled'


def slugify_tag(name: str) -> str:
    s = name.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')


def collapse_ws(text: str) -> str:
    return re.sub(r'\s+', ' ', text)


def pad(raw: str) -> tuple:
    """Return (leading, trailing) single-space padding to preserve from raw text."""
    lead = ' ' if raw[:1].isspace() else ''
    trail = ' ' if raw[-1:].isspace() else ''
    return lead, trail


def bracket_to_wikilink(text: str) -> str:
    """Convert [Name] -> [[Name]], but leave [/roll commands] alone."""
    def repl(m):
        inner = m.group(1).strip()
        if inner.startswith('/'):
            return m.group(0)
        return f'[[{inner}]]'
    return BRACKET_RE.sub(repl, text)


def make_callout(kind: str, title: str, content: str) -> str:
    content = content.strip()
    if not content:
        return f'> [!{kind}] {title}\n\n'
    lines = content.split('\n')
    out = [f'> [!{kind}] {title}']
    for line in lines:
        out.append(f'> {line}'.rstrip() if line.strip() else '>')
    return '\n'.join(out) + '\n\n'


class Converter:
    def __init__(self, img_prefix: str):
        self.img_prefix = img_prefix

    def render_children(self, node) -> str:
        return ''.join(self.render(child) for child in node.children)

    def render(self, node) -> str:
        if isinstance(node, NavigableString):
            return collapse_ws(str(node))

        if not isinstance(node, Tag):
            return ''

        name = node.name
        classes = node.get('class', []) or []

        handler = getattr(self, f'tag_{name.replace("-", "_")}', None)
        if handler:
            return handler(node, classes)

        # default: unwrap, just render children
        return self.render_children(node)

    # ---- inline ----

    def tag_b(self, node, classes):
        return self._strong(node)

    def tag_strong(self, node, classes):
        return self._strong(node)

    def _strong(self, node):
        raw = self.render_children(node)
        inner = raw.strip()
        if not inner:
            return ''
        lead, trail = pad(raw)
        m = re.fullmatch(r'\[([^\[\]]+)\]', inner)
        if m and not m.group(1).startswith('/'):
            return f'{lead}[[{m.group(1).strip()}]]{trail}'
        return f'{lead}**{bracket_to_wikilink(inner)}**{trail}'

    def tag_i(self, node, classes):
        return self._em(node)

    def tag_em(self, node, classes):
        return self._em(node)

    def _em(self, node):
        raw = self.render_children(node)
        inner = raw.strip()
        if not inner:
            return ''
        lead, trail = pad(raw)
        return f'{lead}*{inner}*{trail}'

    def tag_code(self, node, classes):
        raw = self.render_children(node)
        inner = raw.strip()
        if not inner:
            return ''
        lead, trail = pad(raw)
        return f'{lead}`{inner}`{trail}'

    def tag_br(self, node, classes):
        return '\n'

    def tag_a(self, node, classes):
        text = node.get_text(' ', strip=True)
        text = collapse_ws(text)
        if not text:
            return ''
        if node.get('data-uuid'):
            return f'[[{text}]]'
        href = node.get('href')
        if href:
            return f'[{text}]({href})'
        return text

    def tag_img(self, node, classes):
        src = node.get('data-export-src')
        alt = collapse_ws(node.get('alt', '')).strip()
        if not src:
            return ''
        filename = src.rsplit('/', 1)[-1]
        return f'![{alt}]({self.img_prefix}{filename})'

    def tag_enriched_content(self, node, classes):
        raw = collapse_ws(node.get_text(' '))
        text = raw.strip()
        if not text:
            return ''
        lead, trail = pad(raw)
        m = re.fullmatch(r'\[([^\[\]]+)\]', text)
        if m and not m.group(1).startswith('/'):
            return f'{lead}[[{m.group(1).strip()}]]{trail}'
        return f'{lead}**{bracket_to_wikilink(text)}**{trail}'

    # ---- block ----

    def tag_p(self, node, classes):
        inner = self.render_children(node).strip()
        if not inner:
            return ''
        return inner + '\n\n'

    def _heading(self, node, level):
        inner = self.render_children(node).strip()
        if not inner:
            return ''
        return f'{"#" * level} {inner}\n\n'

    def tag_h1(self, node, classes):
        return self._heading(node, 2)

    def tag_h2(self, node, classes):
        return self._heading(node, 2)

    def tag_h3(self, node, classes):
        return self._heading(node, 3)

    def tag_h4(self, node, classes):
        return self._heading(node, 4)

    def tag_h5(self, node, classes):
        return self._heading(node, 5)

    def tag_h6(self, node, classes):
        return self._heading(node, 6)

    def tag_blockquote(self, node, classes):
        inner = self.render_children(node).strip()
        if not inner:
            return ''
        lines = inner.split('\n')
        out = [f'> {l}' if l.strip() else '>' for l in lines]
        return '\n'.join(out) + '\n\n'

    def _list(self, node, ordered):
        items = []
        idx = 1
        for li in node.find_all('li', recursive=False):
            content = self.render_children(li).strip()
            if not content:
                continue
            lines = content.split('\n')
            marker = f'{idx}.' if ordered else '-'
            idx += 1
            out_lines = [f'{marker} {lines[0]}']
            for l in lines[1:]:
                if l.strip():
                    out_lines.append(f'  {l}')
            items.append('\n'.join(out_lines))
        if not items:
            return ''
        return '\n'.join(items) + '\n\n'

    def tag_ul(self, node, classes):
        return self._list(node, ordered=False)

    def tag_ol(self, node, classes):
        return self._list(node, ordered=True)

    def tag_table(self, node, classes):
        rows = []
        for tr in node.find_all('tr'):
            cells = []
            for cell in tr.find_all(['td', 'th']):
                c = self.render_children(cell).strip()
                c = c.replace('\n', ' ').replace('|', '\\|')
                cells.append(c)
            if cells:
                rows.append(cells)
        if not rows:
            return ''
        width = max(len(r) for r in rows)
        out = []
        header = rows[0] + [''] * (width - len(rows[0]))
        out.append('| ' + ' | '.join(header) + ' |')
        out.append('| ' + ' | '.join(['---'] * width) + ' |')
        for r in rows[1:]:
            r = r + [''] * (width - len(r))
            out.append('| ' + ' | '.join(r) + ' |')
        return '\n'.join(out) + '\n\n'

    def tag_dl(self, node, classes):
        parts = []
        for child in node.children:
            if isinstance(child, Tag) and child.name == 'dt':
                inner = self.render_children(child).strip()
                if inner:
                    parts.append(f'**{inner}**')
            elif isinstance(child, Tag) and child.name == 'dd':
                inner = self.render_children(child).strip()
                if inner:
                    parts.append(inner)
            else:
                inner = self.render(child).strip()
                if inner:
                    parts.append(inner)
        if not parts:
            return ''
        return '\n\n'.join(parts) + '\n\n'

    def tag_section(self, node, classes):
        if 'block' in classes:
            if 'qna' in classes:
                return self._qna(node)
            for key, (kind, title) in CALLOUT_MAP.items():
                if key in classes:
                    inner = self.render_children(node).strip()
                    return make_callout(kind, title, inner)
        return self.render_children(node)

    def _qna(self, node):
        question = node.find('p', class_='question')
        answer = node.find('div', class_='answer')
        q_text = self.render_children(question).strip() if question else ''
        a_text = self.render_children(answer).strip() if answer else ''
        content = f'**Q:** {q_text}'
        if a_text:
            if a_text.startswith('>') or '\n' in a_text:
                content += '\n\n**A:**\n\n' + a_text
            else:
                content += '\n\n**A:** ' + a_text
        return make_callout('question', 'Q&A', content)

    def tag_document_embed(self, node, classes):
        if 'block' in classes and 'actor' in classes:
            return self._actor_embed(node)
        return self.render_children(node)

    def _actor_embed(self, node):
        img = node.find('img')
        header = node.find('header')
        name = ''
        meta_text = ''
        if header:
            name_tag = header.find('b') or header.find('strong')
            if name_tag:
                name = re.sub(r'^\[|\]$', '', name_tag.get_text(' ', strip=True)).strip()
            meta = header.find('div', class_='meta')
            if meta:
                spans = [collapse_ws(s.get_text(' ', strip=True)) for s in meta.find_all('span')]
                meta_text = ' · '.join(s for s in spans if s)

        parts = []
        if name:
            parts.append(f'**[[{name}]]**')
        if meta_text:
            parts.append(meta_text)
        if img is not None and img.get('data-export-src'):
            filename = img['data-export-src'].rsplit('/', 1)[-1]
            alt = collapse_ws(img.get('alt', '')).strip()
            parts.append(f'![{alt}]({self.img_prefix}{filename})')

        for child in node.children:
            if isinstance(child, Tag) and child.name in ('header', 'img'):
                continue
            inner = self.render(child).strip()
            if inner:
                parts.append(inner)

        content = '\n\n'.join(parts)
        return make_callout('abstract', name or 'Creature', content)


def html_to_markdown(html: str, img_prefix: str) -> str:
    if not html:
        return ''
    soup = BeautifulSoup(html, 'html.parser')
    conv = Converter(img_prefix)
    md = conv.render_children(soup)
    md = ROLL_CMD_RE.sub(lambda m: f'`[[{m.group(1)}]]`', md)
    md = re.sub(r'[ \t]+\n', '\n', md)
    md = re.sub(r'\n{3,}', '\n\n', md)
    return md.strip() + '\n'


def load_journals(input_dir: Path):
    journals = []
    for f in sorted((input_dir / 'journals').glob('*.json')):
        data = json.loads(f.read_text(encoding='utf-8'))
        segments = [sanitize(s.strip()) for s in data['name'].split(' / ')]
        journals.append({
            'file': f,
            'name': data['name'],
            'uuid': data.get('uuid', ''),
            'segments': segments,
            'pages': sorted(data['pages'], key=lambda p: p.get('sort', 0)),
        })
    return journals


def yaml_str(value: str) -> str:
    escaped = value.replace('\\', '\\\\').replace('"', '\\"')
    return f'"{escaped}"'


def write_page(out_path: Path, page_name: str, journal_name: str, category_tag: str,
                source_uuid: str, body_md: str):
    fm = [
        '---',
        f'title: {yaml_str(page_name)}',
        f'journal: {yaml_str(journal_name)}',
        f'source_uuid: {yaml_str(source_uuid)}',
        'type: ember.lore',
        f'tags: [ember, {category_tag}]',
        '---',
        '',
        f'# {page_name}',
        '',
    ]
    content = '\n'.join(fm) + '\n' + body_md
    out_path.write_text(content, encoding='utf-8')


def write_journal_index(folder: Path, entity_name: str, journal_name: str,
                         category_tag: str, page_links: list):
    fm = [
        '---',
        f'title: {yaml_str(entity_name)}',
        f'aliases: [{yaml_str(entity_name)}]',
        f'journal: {yaml_str(journal_name)}',
        f'tags: [ember, {category_tag}, index]',
        '---',
        '',
        f'# {entity_name}',
        '',
        '## Pages',
        '',
    ]
    for link, alias in page_links:
        if alias and alias != link:
            fm.append(f'- [[{link}|{alias}]]')
        else:
            fm.append(f'- [[{link}]]')
    fm.append('')
    out_path = folder / f'_{entity_name}.md'
    out_path.write_text('\n'.join(fm), encoding='utf-8')


def build_root_index(source_root: Path, source_name: str, journals: list):
    tree = {}
    for j in journals:
        segs = j['segments']
        node = tree
        for seg in segs[:-1]:
            node = node.setdefault(seg, {})
        node.setdefault('__leaves__', []).append(segs[-1])

    def render_tree(node, level):
        lines = []
        for leaf in sorted(node.get('__leaves__', [])):
            lines.append(f'- [[{leaf}]]')
        if lines:
            lines.append('')
        for key in sorted(k for k in node if k != '__leaves__'):
            lines.append(f'{"#" * level} {key}')
            lines.append('')
            lines.extend(render_tree(node[key], level + 1))
        return lines

    lines = [
        '---',
        f'title: {source_name} Index',
        '---',
        '',
        f'# {source_name}',
        '',
    ]
    lines.extend(render_tree(tree, 2))
    (source_root / '_Index.md').write_text('\n'.join(lines).rstrip() + '\n', encoding='utf-8')


def write_readme(output_dir: Path):
    content = """# Vault

Generated by `convert.py` from Foundry "Journal Resolver Exporter" JSON
exports. Open this folder as an Obsidian vault.

## Structure

Each source has its own top-level folder (e.g. `Ember/`, `Crucible/`),
containing:

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

## Re-running on a new export

When a source is updated, drop the new export folder in and regenerate
just that source:

```
python convert.py --input <new export folder> --output Ember.vault --source Ember --clean
```

`--clean` removes only that source's previous folder (and its assets)
before regenerating, so it stays in sync with the new export without
touching other sources. The conversion is deterministic, so re-running
with the same input produces identical output.
"""
    readme_path = output_dir / 'README.md'
    if not readme_path.exists():
        readme_path.write_text(content, encoding='utf-8')


def convert(input_dir: Path, output_dir: Path, source: str, clean: bool):
    source_name = sanitize(source)
    source_root = output_dir / source_name

    if clean and source_root.exists():
        shutil.rmtree(source_root)
    source_root.mkdir(parents=True, exist_ok=True)

    journals = load_journals(input_dir)

    total_pages = 0
    total_images = 0

    for j in journals:
        segments = j['segments']
        entity_name = segments[-1]
        category_tag = slugify_tag(segments[0])
        depth = len(segments)
        img_prefix = '../' * depth + 'assets/'

        folder = source_root.joinpath(*segments)
        folder.mkdir(parents=True, exist_ok=True)

        seen_names = {}
        page_links = []

        for page in j['pages']:
            page_name = page.get('name', 'Untitled').strip() or 'Untitled'
            base = sanitize(page_name)
            count = seen_names.get(base, 0) + 1
            seen_names[base] = count
            filename = base if count == 1 else f'{base} ({count})'

            html = (page.get('text') or {}).get('content', '') or ''
            body_md = html_to_markdown(html, img_prefix)
            total_images += body_md.count('![')

            write_page(
                folder / f'{filename}.md',
                page_name=page_name,
                journal_name=j['name'],
                category_tag=category_tag,
                source_uuid=j['uuid'],
                body_md=body_md,
            )
            page_links.append((filename, page_name))
            total_pages += 1

        write_journal_index(folder, entity_name, j['name'], category_tag, page_links)

    build_root_index(source_root, source_name, journals)
    write_readme(output_dir)

    # copy assets
    src_assets = input_dir / 'assets'
    dst_assets = source_root / 'assets'
    if src_assets.exists():
        if dst_assets.exists():
            shutil.rmtree(dst_assets)
        shutil.copytree(src_assets, dst_assets)
        n_assets = sum(1 for _ in dst_assets.iterdir())
    else:
        n_assets = 0

    print(f'Source:          {source_name}')
    print(f'Journals:        {len(journals)}')
    print(f'Pages:           {total_pages}')
    print(f'Image embeds:    {total_images}')
    print(f'Assets copied:   {n_assets}')
    print(f'Output:          {source_root}')


def main():
    parser = argparse.ArgumentParser(description='Convert a Foundry journal export to an Obsidian vault.')
    parser.add_argument('--input', required=True, help='Path to the resolved export folder (contains journals/ and assets/)')
    parser.add_argument('--output', default='Ember.vault', help='Path to write the Obsidian vault')
    parser.add_argument('--source', required=True, help='Name of this source\'s top-level folder within the vault (e.g. Ember or Crucible)')
    parser.add_argument('--clean', action='store_true', help='Remove this source\'s folder before generating')
    args = parser.parse_args()

    convert(Path(args.input), Path(args.output), args.source, args.clean)


if __name__ == '__main__':
    main()
