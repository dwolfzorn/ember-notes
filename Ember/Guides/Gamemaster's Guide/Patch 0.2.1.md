---
title: "Patch 0.2.1"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.2.1

Welcome to an Ember content release as part of our ongoing **Alpha One** test process. This update focuses on the city of Ordain and support for the Crucible game system.

#### Compatibility

Ember patch `0.2.0` requires core Foundry VTT version `13.344` or higher and either:

- D&D5E system version `5.0.3` or higher.
- Crucible system version `0.7.0` or higher.

#### Re-Import Required

It is essential to re-import the Ember adventure after installing this update. If you are actively playtesting Ember, be sure to use the **Preserve World State** option when you re-import.

#### Important Playtest Instructions

If you are actively playtesting Ember it may be necessary for you to manually trigger the newly added [[Leavetakings]] event and select the correct event outcome in this event. If you do not do this, certain Chapter 2 content will not function correctly!

## Ordain

The focus of our team's work from May through the end of September is the metropolis of Ordain and our Chapter 3 game content which takes place there. This first release in that sequence adds major improvements to Ordain as the first step in that process.

- Introduce a major update to the artwork for Ordain on the region map. There is still a ton more work to do here, but this update redesigns the linework and begins to add color to the city, making it feel much more vibrant and alive.
- Write [[Ordain Gazetteer]] pages for each of Ordain's 3 biomes and 51 distinct locations ("districts"). Every single hex of Ordain is it's own district with it's own unique history, culture, lore, landmarks, locals, and more.
- Add new setting compendium articles for significant topics related to Ordain, including:
  - Geography: [[Arctus Plateau]]
  - Geography: [[Ordain]]
  - History: [[Ordain]]
  - Organizations: [[Burnished Hand]]
  - Organizations: [[Cindaric Sages]]
  - Organizations: [[House Cevher]]
  - Organizations: [[House Salva]]
  - Organizations: [[House Wandren]]
  - Organizations: [[Veiled Chain]]

Much more Ordain content is on the way as we continue to work on Chapter 3!

## Crucible Character Creation

This release is the first on the long journey towards comprehensive Crucible game system support for Ember! Ember can now be installed, activated, and imported (with limited content) into a World that is running the Crucible system.

Crucible is *not yet playable*, BUT this release does add support for testing Ember's wonderful character creation process in the Crucible game system. We are closing in on Alpha Two, which will enable Crucible to be playable for Chapter 1.

- Enable Ember to be used in a Crucible world.
- Integrate Crucible and Ember character creation using a beautiful guided creation interface featureing all of the Ember setting-specific Ancestries, Attunements, Cultures, and Paths.

## Other Content

- Added water particle spray and foam to the [[Splinter Canyons]] vista in the "Water Surge" composition.
- Completed the Area Walkthrough for [[Mythspire Observatory]] upper level.
- Add a new deity portrait for [[Katu]].
- Add a new Culture banner illustration for the [[Aedir]].
- Add a brand new music orchestration for "Celestial Combat" which is used when fighting adversaries of the celestial type.
- Created new biome-specific asset variants for the Mycelian Expanse and Sinkhole Depths biome vistas.

## Software Features

- Introduce a super-optimization for light source rendering on maps where light sources are unimpeded by Walls. Most notably in the Arctus Plateau mega-region map, light sources are now rendered using a fully batched shader that should provide a noticeable performance improvement while viewing this scene and will be able to accomodate the thousands of tiny light sources that the mega-region will eventually contain.
- Refactor and rename all journal entry page sheets for better standardized design. **A consequence of this change is that you MUST re-import the Ember adventure.**

## Bug Fixes

- Fixed a bug with the interactive light bridges in Vortest Tower.
- Correct an issue with the directional water flow in the Shent Moon Temple.
- Added Issa Sunsword who was missing from the prior build as well as her missing equipment.
