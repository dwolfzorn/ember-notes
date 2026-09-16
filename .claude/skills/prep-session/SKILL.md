---
name: prep-session
description: Prep for an upcoming Ember TTRPG session — summarize the active/next quest, key NPCs, locations, dangers, and open threads from the vault. Use when the user wants to prep for a session, asks "what's next", wants a recap, or asks questions about upcoming or past quests, NPCs, or locations in this campaign.
---

# Prep Session

Help the GM (the user) prepare for an upcoming Ember session, or answer
questions about the campaign, using only the markdown vault in this repo
(`Ember/` and `Crucible/`). Do not use the published Quartz site or semantic
search — read the source files directly with Read/Grep/Glob.

## Step 1: Find out where the campaign is

Read `Ember/Campaign Status.md` first. It has:
- Current chapter and active quest
- Party location
- Recently completed quests
- Open threads and notes for next session

If the user's request names a specific quest, NPC, or location instead, skip
straight to Step 2/3 for that instead of relying on Campaign Status.

## Step 2: Locate the quest

Quest folders live at `Ember/Quests/Chapter <N>/<Quest Name>/`. Use
`Ember/_Index.md` to resolve a quest name to its chapter if unsure.

Each quest folder contains:
- `_<Quest Name>.md` — index of pages in the quest (read this to see the
  full page list / rough flow)
- `Overview.md` — the summary: hook, requirements, difficulty, involved
  characters, dangers & enemies. This is the best single page for prep.
- `Flowchart.md` (if present) — quest branching structure
- Individual scene/page files — read these for the next session's likely
  content, e.g. if Campaign Status says the party is partway through, look
  at the pages after the last one covered.

Note the `[!warning] Gamemaster` callout blocks in these notes — they
contain GM-only requirements/difficulty/rewards info and should be
surfaced prominently in the summary.

## Step 3: Resolve linked NPCs, locations, and monsters

Notes use Obsidian wikilinks (`[[Name]]`). For every name under "Involved
Characters" or "Dangers & Enemies" in the Overview (or mentioned in the
scene text you're covering), find and read its note:

- NPCs are usually under `Ember/Setting Compendium/Notable Figures/` or
  named directly in gazetteer/location pages.
- Locations are under `Ember/Gazetteer/<Region> Gazetteer/` or
  `Ember/Area Walkthroughs/`.
- Monsters/creatures are usually under `Ember/Setting Compendium/Bestiary/`.

Use Grep for the filename (`rg -l --glob '*.md' -F "Rala Ushna"` style, or
just Glob for `**/Rala Ushna.md`) since wikilink targets match filenames
(or aliases in frontmatter) exactly. Don't chase every link exhaustively —
pull in the ones relevant to the upcoming content (main NPCs, the
antagonist, key locations), not incidental background links.

## Step 4: Produce the prep summary

Structure the output as:

1. **Recap** — 2-3 sentences reminding the GM what's happened / where the
   party left off (from Campaign Status + recently completed quests).
2. **What's coming** — the hook/situation for the next stretch of play,
   in plain GM-facing language (not a read-aloud box).
3. **Key NPCs** — name, one-line motivation/role, and anything they want
   from the party right now.
4. **Locations** — where the action happens, with any notable features.
5. **Dangers & encounters** — likely fights or hazards, with names linked
   so the GM can look up stat blocks in Foundry/Crucible.
6. **Open threads to remember** — pulled from Campaign Status, plus
   anything foreshadowed in the quest notes that hasn't paid off yet.
7. **GM callouts** — verbatim or lightly condensed content from
   `[!warning] Gamemaster` blocks (requirements, difficulty, milestone
   progression).

Keep it tight — this is meant to be read in a few minutes before a
session, not a full re-read of the source notes.

## Answering follow-up questions

After the initial summary, the user may ask follow-ups ("remind me what
happened in Ooze Control", "what does Rala Ushna want", "who lives in
Brimtown"). Treat these as targeted lookups: Glob/Grep for the matching
note(s) under `Ember/` (or `Crucible/` for rules questions) and answer from
their content. If a name is ambiguous or not found, say so rather than
guessing.

## Updating Campaign Status

If the user tells you what happened in a session (quest completed, new
location reached, a promise made to an NPC), offer to update
`Ember/Campaign Status.md` accordingly rather than just noting it in
conversation.
