---
name: session-review
description: Interview the GM after a session and update Ember/Campaign Status.md with what happened — current questline, party location, completed quests, open threads. Use when the user wants to log/record/review a session, says a session just happened, or wants to update campaign status.
---

# Session Review

Run a short debrief with the user (the GM) after an Ember session, then
write the answers into `Ember/Campaign Status.md`, replacing its content
(this file only ever reflects the *current* state, not a history log).

## Step 1: Read current state

Read `Ember/Campaign Status.md` first so questions can be asked as deltas
("still in Ooze Control, or did you move on?") rather than from scratch,
and so unanswered fields can default to their previous value instead of
being blanked.

## Step 2: Ask the GM

Ask about the session in a natural, conversational way — don't dump a
giant form. Use AskUserQuestion for questions with a small set of likely
answers (e.g. "did the party finish the active quest?"), and plain
follow-up questions in chat for open-ended narrative detail. Cover:

1. **Quest progress** — Is the party still on the same active quest
   (`Active quest` in the current file)? If they finished it, what's next
   (check `Ember/_Index.md` / the quest's `_<Quest>.md` for the next
   quest in the chapter if it's not obvious)? If they're mid-quest, which
   scene/page are they on (compare against the quest folder's page list)?
2. **Chapter** — still the same chapter, or did they cross into a new one?
3. **Party location** — where the party physically ended the session
   (place name, and what they're about to do).
4. **Recently completed** — any quests, side quests, or notable
   standalone events finished this session. Append to (not just overwrite)
   the existing "Recently completed" list, keeping it to a handful of the
   most recent entries — trim the oldest if it grows past ~5.
5. **Open threads** — new unresolved NPC promises, foreshadowing,
   decisions pending, items/clues picked up. Ask whether any *previous*
   open threads got resolved this session and should be removed.
6. **Notes for next session** — anything the GM wants to remember to bring
   up next time (NPC voices to prep, plot hooks to reintroduce, etc).
   Replace this section's content each time since it's forward-looking,
   not cumulative.
7. **Session date** — when this session happened (default to today if the
   user doesn't say otherwise).

Don't force every question if the user has already volunteered the
answer earlier in the conversation — skip ahead.

## Step 3: Write the file

Update `Ember/Campaign Status.md` with Edit, preserving its existing
structure/headings:

```markdown
---
title: "Campaign Status"
tags: [ember, gm-only]
---

# Campaign Status

> [!info] For the GM
> Update this after every session. This is the only place that records where the party actually is — the rest of the vault is static reference lore. The `/prep-session` skill reads this file to figure out what's next.

## Current position

- **Chapter:** <N>
- **Active quest:** [[Quest Name]]
- **Party location:** <where they are / what they're about to do>
- **Last session date:** <date>

## Recently completed

- <most recent first, ~5 max>

## Open threads

- <unresolved items, or "Nothing at the moment">

## Notes for next session

- <GM prep notes for next time>
```

Use `[[Wikilink]]` syntax for quest names, NPCs, and locations so they
resolve in Obsidian/Quartz, matching how the rest of the vault links.

## Step 4: Confirm

Show the user a brief summary of what changed (old → new for chapter/quest/
location) so they can catch a mis-transcription before it's the source of
truth for the next `/prep-session` run.
