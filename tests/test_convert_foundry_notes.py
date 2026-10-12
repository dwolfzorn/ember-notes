"""Tests for convert-foundry-notes.py (Foundry journal export -> Obsidian vault).

Run from the repo root:  python -m unittest discover -s tests -v
"""

import contextlib
import importlib.util
import io
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT = REPO_ROOT / 'convert-foundry-notes.py'

# The script's filename has hyphens, so it can't be imported normally.
_spec = importlib.util.spec_from_file_location('convert_foundry_notes', SCRIPT)
cfn = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(cfn)


def md(html: str, prefix: str = 'assets/') -> str:
    return cfn.html_to_markdown(html, prefix)


class HelperTests(unittest.TestCase):
    def test_sanitize_strips_windows_invalid_chars(self):
        self.assertEqual(cfn.sanitize('What? <Why>: "A/B\\C|D*"'), 'What Why ABCD')

    def test_sanitize_collapses_whitespace_and_trailing_dots(self):
        self.assertEqual(cfn.sanitize('  Too   many\tspaces...  '), 'Too many spaces')

    def test_sanitize_empty_becomes_untitled(self):
        self.assertEqual(cfn.sanitize('???'), 'Untitled')
        self.assertEqual(cfn.sanitize(''), 'Untitled')

    def test_slugify_tag(self):
        self.assertEqual(cfn.slugify_tag('Game Mechanics'), 'game-mechanics')
        self.assertEqual(cfn.slugify_tag("  Kali's Cottage!! "), 'kali-s-cottage')

    def test_bracket_to_wikilink(self):
        self.assertEqual(cfn.bracket_to_wikilink('see [Burning] now'), 'see [[Burning]] now')
        self.assertEqual(cfn.bracket_to_wikilink('[ Padded ]'), '[[Padded]]')

    def test_bracket_to_wikilink_leaves_existing_wikilinks_and_roll_commands(self):
        self.assertEqual(cfn.bracket_to_wikilink('[[Already]]'), '[[Already]]')
        self.assertEqual(cfn.bracket_to_wikilink('[/roll 1d20]'), '[/roll 1d20]')

    def test_yaml_str_escapes_quotes_and_backslashes(self):
        self.assertEqual(cfn.yaml_str('a "b" \\c'), '"a \\"b\\" \\\\c"')

    def test_make_callout(self):
        self.assertEqual(cfn.make_callout('tip', 'Hint', ''), '> [!tip] Hint\n\n')
        self.assertEqual(
            cfn.make_callout('tip', 'Hint', 'one\n\ntwo'),
            '> [!tip] Hint\n> one\n>\n> two\n\n',
        )


class InlineConversionTests(unittest.TestCase):
    def test_empty_html(self):
        self.assertEqual(md(''), '')

    def test_bold_italic_code(self):
        self.assertEqual(
            md('<p>A <strong>bold</strong> and <em>soft</em> and <code>x</code>.</p>'),
            'A **bold** and *soft* and `x`.\n',
        )
        self.assertEqual(md('<p><b>b</b><i>i</i></p>'), '**b***i*\n')

    def test_empty_inline_tags_are_dropped(self):
        self.assertEqual(md('<p>a<strong> </strong>b</p>'), 'ab\n')

    def test_bold_bracket_reference_becomes_plain_wikilink(self):
        self.assertEqual(md('<p><strong>[Burning]</strong></p>'), '[[Burning]]\n')

    def test_bold_text_with_inner_references(self):
        self.assertEqual(
            md('<p><strong>Apply [Burning] now</strong></p>'), '**Apply [[Burning]] now**\n'
        )

    def test_bare_bracket_text_is_left_alone(self):
        # Only bold/enriched references are converted; plain text brackets stay as-is.
        self.assertEqual(md('<p>See [Burning]</p>'), 'See [Burning]\n')

    def test_links(self):
        self.assertEqual(md('<p><a data-uuid="JournalEntry.x">Mira</a></p>'), '[[Mira]]\n')
        self.assertEqual(md('<p><a href="https://x.test">Site</a></p>'), '[Site](https://x.test)\n')
        self.assertEqual(md('<p><a>Plain</a></p>'), 'Plain\n')
        # A link with no text renders nothing (the converter always ends output with a newline).
        self.assertEqual(md('<p><a href="https://x.test"></a></p>'), '\n')

    def test_images_use_prefix_and_export_filename(self):
        self.assertEqual(
            md('<p><img data-export-src="assets/sub/map.webp" alt="The  map"></p>', '../../assets/'),
            '![The map](../../assets/map.webp)\n',
        )

    def test_images_without_export_src_are_dropped(self):
        self.assertEqual(md('<p>x<img src="http://remote/img.png"></p>'), 'x\n')

    def test_line_breaks(self):
        self.assertEqual(md('<p>one<br>two</p>'), 'one\ntwo\n')

    def test_whitespace_is_collapsed(self):
        self.assertEqual(md('<p>lots\n\n   of     space</p>'), 'lots of space\n')

    def test_enriched_content(self):
        self.assertEqual(md('<p><enriched-content>[Mira]</enriched-content></p>'), '[[Mira]]\n')
        self.assertEqual(
            md('<p><enriched-content>Save vs [Poisoned]</enriched-content></p>'),
            '**Save vs [[Poisoned]]**\n',
        )

    def test_roll_commands_are_wrapped_in_code(self):
        self.assertEqual(md('<p>Roll [[/r 1d20+2]] now</p>'), 'Roll `[[/r 1d20+2]]` now\n')

    def test_unknown_tags_are_unwrapped(self):
        self.assertEqual(md('<div><span>inside</span></div>'), 'inside\n')


class BlockConversionTests(unittest.TestCase):
    def test_headings_shift_h1_to_h2(self):
        self.assertEqual(md('<h1>Top</h1>'), '## Top\n')
        self.assertEqual(md('<h2>Two</h2><h3>Three</h3><h6>Six</h6>'), '## Two\n\n### Three\n\n###### Six\n')

    def test_empty_blocks_are_dropped(self):
        self.assertEqual(md('<p> </p><h2></h2><p>kept</p>'), 'kept\n')

    def test_paragraphs_are_separated_by_one_blank_line(self):
        self.assertEqual(md('<p>a</p><p></p><p>b</p>'), 'a\n\nb\n')

    def test_unordered_and_ordered_lists(self):
        self.assertEqual(md('<ul><li>a</li><li></li><li>b</li></ul>'), '- a\n- b\n')
        self.assertEqual(md('<ol><li>a</li><li>b</li></ol>'), '1. a\n2. b\n')

    def test_multiline_list_items_are_indented(self):
        self.assertEqual(md('<ul><li>a<br>more</li></ul>'), '- a\n  more\n')

    def test_blockquote(self):
        self.assertEqual(md('<blockquote><p>a</p><p>b</p></blockquote>'), '> a\n>\n> b\n')

    def test_table_pads_rows_and_escapes_pipes(self):
        html = (
            '<table><tr><th>Name</th><th>Effect</th></tr>'
            '<tr><td>A|B</td><td>x<br>y</td></tr>'
            '<tr><td>only</td></tr></table>'
        )
        self.assertEqual(
            md(html),
            '| Name | Effect |\n| --- | --- |\n| A\\|B | x y |\n| only |  |\n',
        )

    def test_definition_list(self):
        self.assertEqual(md('<dl><dt>Term</dt><dd>Meaning</dd></dl>'), '**Term**\n\nMeaning\n')

    def test_section_callouts(self):
        for cls, (kind, title) in cfn.CALLOUT_MAP.items():
            with self.subTest(cls=cls):
                self.assertEqual(
                    md(f'<section class="block {cls}"><p>Body</p></section>'),
                    f'> [!{kind}] {title}\n> Body\n',
                )

    def test_section_without_block_class_is_unwrapped(self):
        self.assertEqual(md('<section class="readaloud"><p>Body</p></section>'), 'Body\n')

    def test_qna_single_line_answer(self):
        html = (
            '<section class="block qna"><p class="question">Why?</p>'
            '<div class="answer"><p>Because.</p></div></section>'
        )
        self.assertEqual(md(html), '> [!question] Q&A\n> **Q:** Why?\n>\n> **A:** Because.\n')

    def test_qna_multiline_answer(self):
        html = (
            '<section class="block qna"><p class="question">Why?</p>'
            '<div class="answer"><p>One.</p><p>Two.</p></div></section>'
        )
        self.assertEqual(
            md(html),
            '> [!question] Q&A\n> **Q:** Why?\n>\n> **A:**\n>\n> One.\n>\n> Two.\n',
        )

    def test_actor_embed(self):
        html = (
            '<document-embed class="block actor">'
            '<img data-export-src="assets/goblin.webp" alt="Goblin">'
            '<header><strong>[Goblin Scout]</strong>'
            '<div class="meta"><span>Level 2</span><span></span><span>Minion</span></div></header>'
            '<p>Sneaky.</p></document-embed>'
        )
        self.assertEqual(
            md(html, '../assets/'),
            '> [!abstract] Goblin Scout\n'
            '> **[[Goblin Scout]]**\n>\n'
            '> Level 2 · Minion\n>\n'
            '> ![Goblin](../assets/goblin.webp)\n>\n'
            '> Sneaky.\n',
        )

    def test_actor_embed_without_header_falls_back_to_creature(self):
        self.assertEqual(
            md('<document-embed class="block actor"><p>Stats</p></document-embed>'),
            '> [!abstract] Creature\n> Stats\n',
        )

    def test_non_actor_document_embed_is_unwrapped(self):
        self.assertEqual(md('<document-embed class="block"><p>x</p></document-embed>'), 'x\n')


def write_journal(journals_dir: Path, filename: str, data: dict):
    (journals_dir / filename).write_text(json.dumps(data), encoding='utf-8')


class ConvertEndToEndTests(unittest.TestCase):
    def setUp(self):
        self._tmp = tempfile.TemporaryDirectory()
        self.tmp = Path(self._tmp.name)
        self.input = self.tmp / 'export'
        journals = self.input / 'journals'
        journals.mkdir(parents=True)
        (self.input / 'assets').mkdir()
        (self.input / 'assets' / 'map.webp').write_bytes(b'img')

        write_journal(journals, 'a.json', {
            'name': 'Game Mechanics / Combat',
            'uuid': 'JournalEntry.combat',
            'pages': [
                {'name': 'Attack Rolls', 'sort': 200,
                 'text': {'content': '<p>Roll <strong>[Burning]</strong></p>'}},
                {'name': 'Actions', 'sort': 100,
                 'text': {'content': '<p><img data-export-src="assets/map.webp" alt="Map"></p>'}},
                {'name': 'Actions', 'sort': 300, 'text': {'content': '<p>Second</p>'}},
                {'name': 'Empty', 'sort': 400},
            ],
        })
        write_journal(journals, 'b.json', {
            'name': 'Game Mechanics / Conditions',
            'uuid': 'JournalEntry.conditions',
            'pages': [{'name': 'Burning?', 'sort': 0, 'text': {'content': '<p>Hot.</p>'}}],
        })
        write_journal(journals, 'c.json', {
            'name': 'Welcome',
            'pages': [{'name': 'Hello "World"', 'text': {'content': '<p>Hi</p>'}}],
        })

        self.output = self.tmp / 'vault'

    def tearDown(self):
        self._tmp.cleanup()

    def run_convert(self, source='Crucible', clean=False):
        # convert() prints a summary; keep test output quiet.
        with contextlib.redirect_stdout(io.StringIO()):
            cfn.convert(self.input, self.output, source, clean)

    def read(self, rel: str) -> str:
        return (self.output / rel).read_text(encoding='utf-8')

    def snapshot(self, root: Path) -> dict:
        return {
            str(p.relative_to(root)): p.read_bytes()
            for p in sorted(root.rglob('*')) if p.is_file()
        }

    def test_creates_one_folder_per_journal_and_one_note_per_page(self):
        self.run_convert()
        combat = self.output / 'Crucible' / 'Game Mechanics' / 'Combat'
        self.assertEqual(
            sorted(p.name for p in combat.iterdir()),
            ['Actions (2).md', 'Actions.md', 'Attack Rolls.md', 'Empty.md', '_Combat.md'],
        )
        self.assertTrue((self.output / 'Crucible' / 'Game Mechanics' / 'Conditions' / 'Burning.md').exists())
        self.assertTrue((self.output / 'Crucible' / 'Welcome' / 'Hello World.md').exists())

    def test_page_frontmatter_and_body(self):
        self.run_convert()
        self.assertEqual(
            self.read('Crucible/Game Mechanics/Combat/Attack Rolls.md'),
            '---\n'
            'title: "Attack Rolls"\n'
            'journal: "Game Mechanics / Combat"\n'
            'source_uuid: "JournalEntry.combat"\n'
            'type: crucible.lore\n'
            'tags: [crucible, game-mechanics]\n'
            '---\n\n'
            '# Attack Rolls\n\n'
            'Roll [[Burning]]\n',
        )
        welcome = self.read('Crucible/Welcome/Hello World.md')
        self.assertIn('title: "Hello \\"World\\""', welcome)
        self.assertIn('source_uuid: ""', welcome)
        self.assertIn('tags: [crucible, welcome]', welcome)

    def test_image_paths_are_relative_to_source_assets(self):
        self.run_convert()
        self.assertIn(
            '![Map](../../assets/map.webp)', self.read('Crucible/Game Mechanics/Combat/Actions.md')
        )

    def test_empty_page_has_empty_body(self):
        self.run_convert()
        self.assertTrue(self.read('Crucible/Game Mechanics/Combat/Empty.md').endswith('# Empty\n\n'))

    def test_journal_index_lists_pages_in_sort_order_with_aliases(self):
        self.run_convert()
        self.assertEqual(
            self.read('Crucible/Game Mechanics/Combat/_Combat.md'),
            '---\n'
            'title: "Combat"\n'
            'aliases: ["Combat"]\n'
            'journal: "Game Mechanics / Combat"\n'
            'tags: [crucible, game-mechanics, index]\n'
            '---\n\n'
            '# Combat\n\n'
            '## Pages\n\n'
            '- [[Actions]]\n'
            '- [[Attack Rolls]]\n'
            '- [[Actions (2)|Actions]]\n'
            '- [[Empty]]\n',
        )
        self.assertIn('- [[Burning|Burning?]]', self.read('Crucible/Game Mechanics/Conditions/_Conditions.md'))

    def test_root_index_groups_journals_by_category(self):
        self.run_convert()
        self.assertEqual(
            self.read('Crucible/_Index.md'),
            '---\n'
            'title: Crucible Index\n'
            '---\n\n'
            '# Crucible\n\n'
            '- [[Welcome]]\n\n'
            '## Game Mechanics\n\n'
            '- [[Combat]]\n'
            '- [[Conditions]]\n',
        )

    def test_assets_are_copied_into_source_folder(self):
        self.run_convert()
        self.assertEqual((self.output / 'Crucible' / 'assets' / 'map.webp').read_bytes(), b'img')

    def test_missing_assets_folder_is_tolerated(self):
        (self.input / 'assets' / 'map.webp').unlink()
        (self.input / 'assets').rmdir()
        self.run_convert()
        self.assertFalse((self.output / 'Crucible' / 'assets').exists())

    def test_vault_readme_is_written_once_and_never_overwritten(self):
        self.run_convert()
        readme = self.output / 'README.md'
        self.assertIn('# Vault', readme.read_text(encoding='utf-8'))
        readme.write_text('custom', encoding='utf-8')
        self.run_convert()
        self.assertEqual(readme.read_text(encoding='utf-8'), 'custom')

    def write_stale_generated_note(self, rel: str) -> Path:
        """A page from an earlier export whose journal no longer exists (CRLF, as older
        converter runs wrote on Windows)."""
        path = self.output / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(b'---\r\ntitle: "Old"\r\njournal: "Gone / Old"\r\n---\r\n\r\n# Old\r\n')
        return path

    def test_clean_removes_stale_generated_notes_only_for_that_source(self):
        self.run_convert('Crucible')
        self.run_convert('Ember')
        stale = self.write_stale_generated_note('Crucible/Gone/Old/Old.md')
        stale_asset = self.output / 'Crucible' / 'assets' / 'old.webp'
        stale_asset.write_bytes(b'old')
        ember_before = self.snapshot(self.output / 'Ember')

        self.run_convert('Crucible', clean=True)

        self.assertFalse(stale.exists())
        self.assertFalse((self.output / 'Crucible' / 'Gone').exists(), 'empty folders are pruned')
        self.assertFalse(stale_asset.exists())
        self.assertTrue((self.output / 'Crucible' / 'assets' / 'map.webp').exists())
        self.assertTrue((self.output / 'Crucible' / '_Index.md').exists())
        self.assertEqual(self.snapshot(self.output / 'Ember'), ember_before)

    def test_clean_keeps_hand_written_notes(self):
        self.run_convert()
        hand_written = {
            # top-level GM note, like Ember/Campaign Status.md
            'Crucible/Campaign Status.md': '---\ntitle: "Campaign Status"\ntags: [ember, gm-only]\n---\n\n# Status\n',
            # note with no frontmatter, alone in its own folder
            'Crucible/Notes/Ideas.md': '# Ideas\n\njournal: mentioned in the body only\n',
            # note dropped into a generated journal folder
            'Crucible/Game Mechanics/Combat/House Rules.md': 'Initiative is rolled once per round.\n',
        }
        for rel, text in hand_written.items():
            (self.output / rel).parent.mkdir(parents=True, exist_ok=True)
            (self.output / rel).write_text(text, encoding='utf-8')
        stale = self.write_stale_generated_note('Crucible/Game Mechanics/Combat/Removed Page.md')

        result = io.StringIO()
        with contextlib.redirect_stdout(result):
            cfn.convert(self.input, self.output, 'Crucible', True)

        for rel, text in hand_written.items():
            self.assertEqual((self.output / rel).read_text(encoding='utf-8'), text, rel)
        self.assertFalse(stale.exists())
        self.assertTrue((self.output / 'Crucible/Game Mechanics/Combat/Actions.md').exists())
        self.assertIn('Hand-written:    3 kept', result.getvalue())

    def test_without_clean_stale_files_are_kept(self):
        self.run_convert()
        stale = self.write_stale_generated_note('Crucible/Gone/Old/Old.md')
        self.run_convert()
        self.assertTrue(stale.exists())

    def test_output_uses_lf_line_endings(self):
        self.run_convert()
        for path in (self.output / 'Crucible').rglob('*.md'):
            self.assertNotIn(b'\r', path.read_bytes(), path)

    def test_tags_and_type_come_from_the_source(self):
        self.run_convert('Ember')
        page = self.read('Ember/Game Mechanics/Combat/Actions.md')
        self.assertIn('type: ember.lore\n', page)
        self.assertIn('tags: [ember, game-mechanics]\n', page)
        self.assertIn(
            'tags: [ember, game-mechanics, index]\n',
            self.read('Ember/Game Mechanics/Combat/_Combat.md'),
        )

    def test_conversion_is_deterministic(self):
        self.run_convert(clean=True)
        first = self.snapshot(self.output)
        self.run_convert(clean=True)
        self.assertEqual(self.snapshot(self.output), first)

    def test_cli(self):
        result = subprocess.run(
            [sys.executable, str(SCRIPT), '--input', str(self.input), '--output', str(self.output),
             '--source', 'Ember', '--clean'],
            capture_output=True, text=True, encoding='utf-8',
        )
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('Journals:        3', result.stdout)
        self.assertIn('Pages:           6', result.stdout)
        self.assertIn('Image embeds:    1', result.stdout)
        self.assertIn('Assets copied:   1', result.stdout)
        self.assertTrue((self.output / 'Ember' / '_Index.md').exists())

    def test_cli_requires_input_and_source(self):
        result = subprocess.run([sys.executable, str(SCRIPT)], capture_output=True, text=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('--input', result.stderr)


if __name__ == '__main__':
    unittest.main()
