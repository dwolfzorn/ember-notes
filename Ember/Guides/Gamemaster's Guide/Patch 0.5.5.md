---
title: "Patch 0.5.5"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.5.5

**Welcome to Ember Early Access!** This update (version `0.5.5`) is a minor content update and bugfix patch which adds numerous improvements to our ongoing Early Access playtest!

#### Compatibility

Ember patch `0.5.5` requires core Foundry VTT version `14.364` or higher, and one of:

- D&D5E system pre-release version `5.3.3` or higher.
- Crucible system version `0.10.0` or higher.

## Audio

- Add a new Combat music soundscape for "Earth Elemental Combat".
- Split "Elemental Combat" with themed arrangements into separate soundscapes so they can be more reliably associated with different creature types for automatic Combat theme identification.
- Fix a long-standing bug which caused old soundscape layers to keep playing indefinitely after soundscape switches.

## Area Maps

- Convert the area map for Arcturel Lower to Version 14 levels.
- Convert the area map for Arcturel Upper to Version 14 levels, combining what was previously 2 separate scenes into a new single combined scene.
- Add significant new interactivity and animation features to Arcturel Upper to support the "Storming the Consortium" gameplay sequence.
- Convert the area map for Vortest Tower to Version 14 levels, including a newly available level for the Golden Flats exterior of the tower and new interactivity automation for the transportation between levels.
- Reset area map doors to a closed state unless explicitly recorded otherwise in encounter spawn configuration.
- Add necessary Surface regions for multi-level maps to support Crucible falling mechanics.
- Return to the exterior Verdant Paths environment soundscape when viewing the Lookout level of the Aedir Signalpost.
- Fix incorrect elevation of some festival stalls in Helkas.
- Improve multi-level interactivity issues in Yakoshta Mine.
- Exclude token-borne light sources from parallax.
- Add explicit surfaces to the Verdant Paths biome map to prevent falling while traversing the upper levels.

## Crucible

- Add an Ember-specific "Lunar Shield" prefix and update the Moon Ring using this new affix.
- Update Ashka ancestry thermal vision wording to align with newer and more generalized Thermal Vision adversary talent.
- Add Crucible automation for Arcturian and Kithil culture talents.
- Add crucible automation for Cascilian Mistrust of Magic feature.
- Add a new Crucible compendium pack for Ember-specific affixes that can be enchanted.
- Add a set of attunement blessing active effects which temporarily increase your rank in a given attunement.

## D&D5e

- Add setting-specific guidance for each of the new D&D subclasses published in "Ravenloft: The Horrors Within".
- Rework the way that D&D classes are identified so that 3p classes work without requiring an Ember page.
- Add a set of attunement blessing active effects which temporarily increase your rank in a given attunement.

## Quests and Events

- Add Ember quest content configuration framework for individually enabling and disabling specific quests in order to play a subset of Ember content.
- Persist event outcome timestamps so that the time of an outcome can be separate from that of its parent event.
- Expand the EmberEventEncounter type to support more than just Tokens as spawnable configuration changes.
- Implement the standardized feature for the Blessing of Mayis in the "Giant's Moonstone" event in "The Winding Trail" main quest.
- Implement the standardized feature for The Bewilderment curse in the "A Brush with Death" side quest.
- Copy/Line Edit improvements for the Lantern Roads area walkthrough.
- Update the "Giant Moonstone" and "Collapsed Cairn" events of "The Winding Trail" with minor edits.
- Copy/Line Edit improvements for the Jekaroka Villa area walkthrough.
- Clarify the reward from Mioroth during the "Lunar Awakenings", "An Ancient Battle", and "Glint of Gossamer" events of "Over the Moon".
- Fix "Troubled Tradeway" encounter spawn for multiple levels.
- Fix "Storming the Consortium" spawn configuration for multiple levels.
- Improve the way the Fulgurite Blades are split from the party at the end of Into the Wilds using the standard splitGroups API.
- Fix "Scene of the Crime" incorrect hex configuration.

## Region Map

- Fix bug with region map initialization of hex edges which was no longer compatible with upstream V14 hook signature.

## Tokens

- Add Dynamic Token Config buttons to clear and randomize a specific layer.
- Dynamic Tokens with the SECRET disposition are no longer animated and will become animated when they move out of the SECRET disposition to some other disposition.
- Add Dynamic Token randomization config buttons to import part IDs from the companion token config app and to sync parts with those of a sibling layer.
- Switch dynamic token randomization configuration to a multi-tab UI/UX.
- Skallith token randomization updated to allow unused weapons.

## User Interface

- Allow the text content of event summary and readaloud material that is presented via the Calendar HUD to be selectable so it can be read by screen readers or copied to clipboard.
- Add a button attached automatically to readaloud blocks that allow them to be sent to the chat log for all players to read.
- Display event times in either 12 or 24 hour display format in the Codex for records of events and outcomes that occurred.

## Vistas

- Add a brand new vista for The Ordinate, the seat of government in Ordain.
- Configure the Ordinate vista to be used at the conclusion of Lyla's Chapter 2 quest.

## Other

- Resolve numerous TODO items in the Ember code that were contingent on upgrades to either Foundry VTT core, the D&D system, or the Crucible system.
- Add an Ember Items compendium pack for both D&D and Crucible systems (empty for now) which we can populate with items that do not need to be permanently loaded in the game world.
- Address an off-by-one error with Ember's calendar season cycle.
- Avoid accidentally persisting a granted attunement bonus to flag data.
