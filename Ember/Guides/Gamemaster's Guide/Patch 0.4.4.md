---
title: "Patch 0.4.4"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.4

Welcome to an Ember update and content release, version `0.4.4`. This is a minor update that addresses bugs and content gaps in our existing quests as part of our ongoing **Ember Beta Two** process.

#### Compatibility

Ember patch `0.4.4` requires core Foundry VTT version `13.351` or higher and:

- D&D5E system version `5.2.5` or higher.
- Crucible system version `0.8.7` or higher.

Testing Ember with the ongoing prototype build of Foundry VTT version 14 is **not recommended**.

## Highlights

The most significant highlights of this new release are the following:

- Redesign and rebalance of the major "Lunar Awakenings" event in the Over the Moon quest.
- A new vista composition in support of the Signal of Intent quest.
- Adventure import workflow and reliability improvements.

More details on each of these highlights appear in the full notes, below.

## Features and Fixes

All the new features included in this update are detailed in the sections below.

### Area Maps

- Add particles for fountains in the inner ring, for the Ember Shent Moon Temple.
- Added new SFX types for prison doors and improve the sound effects used for prison doors in Spellbreaker Prison and the Arcturian Jail maps.

### Crucible

- Resolve an issue that blocked initiation of the character creation workflow in Crucible.
- Resolve issue that blocked rendering of character creation and codex pages in Crucible.
- Expand upon the rules text that explains what happens when a character dies and obtains a Soulmark.
- Revise all Water Elemental stat blocks for consistency with event changes in Lunar Awakenings.

### D&D5e

- Abyssal Echo - increased Wisdom score to 14.

- Abyssal Eel - Adjusted the description in the Abyssal Remains trait for clarity.
- Clipper - Converted the Aedir Spellband to be an equipment item that is available as a general Item in addition to one owned specifically by Clipper.
- Giant Luminous Ooze - Updated the Electrified Pseudopod feature.
- Oozeling - Added advantage Active Effect for Perception checks through the Alert trait.
- Tauric - Increased Strength score to 10.

- Miscellaneous and minor updates to around 30 individual creatures to standardize style guide and presentation for 2024 rules.
- Expand upon the rules text that explains what happens when a character dies and obtains a Soulmark.
- Fix a bug where a shapechanged Actor in D&D5E with an Ember Dynamic Token does not properly switch to the token artwork for their shapechanged form.
- Revise all Water Elemental stat blocks for consistency with event changes in Lunar Awakenings.

### Quests

- Comprehensively revise the "Lunar Awakenings" event of the Over the Moon quest with an updated and simplified design that is intended to be slightly less punishing and simpler for GMs to run.
- Restructure and revise the "Ancient Battle" quest event and corresponding "Writhing Grave" area walkthrough to better present their collective gameplay.
- Add standardized Quest Overview blocks which establish GM-facing fundamentals of the quest's requirements, difficulty, and milestone progression.
- Correct invalid syntax in the Smoke Clears end-event hook which prevented the party from being placed correctly.

### User Interface

- Improve Biome and Location journal embeds to include readaloud and overview paragraphs.
- Add an @Advantage enricher for simplifying cross-system advantage/boons/banes.

### Vistas

- Add a new Vista configuration in the Verdant Paths, the "Ancient Wayshrine" that is used during the "The Tower Revealed" event of the Signal of Intent quest.
- Calibrate lighting effect for Luxarum in the Cosmos Map to avoid it being so washed out and blinding yellow.
- Refine the technology that allows a sprite to create illumination and generalize it to be available to all Ember map types including Vistas.
- Add support in the Vista Config tool to assign illumination behavior to individual sprite placements.
- Fix bug with the leaf particle emitter in Verdant Paths - Cliff Arch Clearing goes underneath ground objects.

### Other

- Restructure the follow-up workflows for Ember adventure import to incorporate a forced hard-reload after import with deferred initialization workflows handled by the GM user post-reload.
- When importing the adventure, reorder actors so that groups are imported after their members.

## Setting Compendium

This update includes a lot of impactful updates to the Setting Compendium and the various journal entries contained within with a general focus on the Deities section.

### Bestiary

- Revise and improve the Dragons article with more information on their origins.

### History

- Creation, renamed The First Dawn, text revised and ready for proofreading.
- The Unveiling, written and ready for proofreading.
- Abyssal Shear, written and ready for proofreading.
