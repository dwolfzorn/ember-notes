---
title: "Patch 0.2.2"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.2.2

Welcome to an Ember content release as part of our ongoing **Alpha One** test process. This update focuses on the city of Ordain and support for the Crucible game system.

#### Compatibility

Ember patch `0.2.2` requires core Foundry VTT version `13.346` or higher and either:

- D&D5E system version `5.0.4` or higher.
- Crucible system version `0.7.5` or higher.

#### Important Playtest Instructions

The major focus of this release is the addition of **preliminary Crucible support** to Ember's Chapter 1 gameplay experience!

Read the Crucible Playtest information for some context and recommendations about the current focus of Crucible system testing!

This update is a little light on additions of major new game content because:

1. The core focus for this update was on Crucible Chapter 1 compatibility and Crucible system improvement.
2. The creative team has been very hard at work creating Chapter 3 main quests which are well underway. Stay tuned near the end of July or early August for a big Chapter 3 content drop!

## Crucible support

Gameplay support for playing portions of Chapter 1 using Crucible has been added to the Ember experience! Each of the three Chapter 1 quests has certain events that are designated as "Phase 2+ Crucible" with a `P2C` development tag. These events are ones that are intentionally converted and designed to be experienced using the Crucible system. We hope that by the end of July the entirety of Chapter 1 will be Crucible-enabled.

### Crucible Specific Changes

- Convert a significant number of events from the [[The Winding Trail]], [[Ooze Control]], and [[Over The Moon]] quests to be designed specifically for Crucible play.
- Convert a large number of Actors that appear in Chapter 1 to be designed specifically for Crucible.
- Extensive additions to the Crucible **Adversary Options** compendium pack for building Ember creatures in Crucible. (this pack is only visible if you are using the Crucible system).
- Improve the actor spawn algorithm used to place tokens into area maps to account for creature size (required for Crucible) and obtain better results.

## Content Improvements

- Clarify the identity of the Adult Suarrok and the Adult Pallid Drake in the Collapsed Cairn event.
- Add interactivity to Corpin Sanctuary for destroying the Profane Altar and for interacting with the Pathways Elevator.
- Improve the rune-lock puzzle in the Lightless Halls to properly shuffle the runes on the floor.
- Correct naming of "Kelmezian" culture throughout.
- Correct the sizing of the Aedir Signalpost maps to include the extra 200px of map background that was incorrectly omitted.
- Automatically start "Dusktide Rising" upon the completion of "Dusktide Revelry".
- Automatically discover Helkas upon the completion of "Arrival at Helkas".
- Three new background character portraits for Burnished Hand members.

## Technical Improvements

- Implement extensible framework for one-time world data migrations.
- Downsize assets in the Golden Flats spritesheet which are unnecessarily large.
- When character creation is completed for a new character, prompt online GM users whether they want to add that new PC to the Party.
- Migrate dnd5e attunement identifiers to conform with crucible ones, i.e. `emberMayis` rather than `emberAttunementMayis`.
- Continued functionality and performance improvements for region map batched light sources.
- Fix a bug with D&D background feature creation which prevented them from being correctly associated with background advancement
