---
title: "Patch 0.4.6"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.6

Welcome to an Ember update and content release, version `0.4.6`. This is a minor content and bugfix update that improves upon the stability and completeness of the game during the **Ember Beta Two** playtest period.

#### Compatibility

Ember patch `0.4.6` requires core Foundry VTT version `13.351` or higher and:

- D&D5E system version `5.2.5` or higher.
- Crucible system version `0.8.9` or higher.

Testing Ember with the ongoing prototype build of Foundry VTT version 14 is **not recommended**.

## Highlights

The most significant highlights of this new release are the following:

- Introduce a major upgrade to the Ember world map which illustrates the western half of the world in considerably higher detail and more beautiful color. Caeora's work on the World Map is not done yet, but this is a very exciting and major upgrade!
- Switch to a dynamic in-engine approach for rendering icons and labels on the World Map that allows the annotations on the World Map to be interactive, linked to Setting Compendium content, and eventually more easily discoverable with searching and filtering (yet to come).

More details on each of these highlights appear in the full notes, below.

## Features and Fixes

All the new features included in this update are detailed in the sections below.

### Actors

- Only display actor sheet header control options for Ember Dynamic Token and Ember Actor Flags for actor types that are relevant.
- Add an alternate stat-block for Agraband that automatically progresses following the Status Effects event of Unfinished Business.

### Area Maps

- Clean up and finish some additional compositions for the Redrak Fields biome map.
- Broaden and enrich the Area Walkthrough for the Traveler's Rest area map.
- Broaden and enrich the Area Walkthrough for the Kalion Stadium Underworks area map.

### Audio

- Disable and hide the mood selector if the specific arrangement playing was a manually selected override.
- Allow configuring a special override `combatTheme` for creatures or characters as part of `EmberActorFlagData` that takes precedence over the combat theme for their normal creature type.
- Fix an audio bug that occurred when ending combat changing music to Day instead of keeping Tension when tension is toggled on.
- Guard against actors that were previously granted attunement points being deleted later.

### Crucible

- Implement automation for revised Soulbound talent and progression mechanics in Crucible including a Gamemaster convenience macro to automate applying Soulbound progression.
- Carefully review "A Brush With Death" quest items for ones that were not previously converted.

### D&D5E

- Redesign the mechanics of Soulbound progression with three new Soulmark ranks that can be added to actors upon death or chosen upon character creation.

### Gazetteer

- Continue refurbishment of the Arctus Plateau gazetteer using new style guides for Biomes, Locations, and Settlements.
- Location discovery for "The Scrapyard" should be prevented until the Junkyard Cogs event of the "Glitter in the Dark" quest is open.

### Guides

- Add a "Death and Soulbound" page to the Gamemaster's Guide offering GM-specific advice on how to handle character death, the implications of the Soulbound mechanic, and some rules for how to manage non-player Soulbound characters.
- Improve the "Death and Soulbound" page of the Player's Guide to present information about Soulbound in a better structured and more easily readable format.

### Quests and Events

- Make abundantly clear where the points of no return are in the Chapter 3 quests and what happens when one is reached. This information is added to the Gamemaster's Guide as well as to the individual Chapter 3 main quests.
- Expand the "Spreading Sickness" main quest from 2 milestone to the same 3 milestone structure used by other Chapter 3 main quests.

### Region Map

- Add pop-out Event probability palette to the hex HUD as a replacement for the prior (and now removed) Events HUD element.
- Fix a bug which occurred when the party token is deleted (for example when being recombined with the Strayhearth Caravan) - that caravan does not become the active `ember.partyToken` which prevents it from advancing world time or triggering events.
- Add atmospheric blur to the region map when zooming out to better give the sense of viewing the region from a great altitude.

### Tokens

- Enable support for group actors to configure their party appearance on the region map using a new Party Banner dynamic token template. This template includes a limited variety of initial parts. We expect the set of options to expand significantly in coming releases.
- Condition the set of Ember Dynamic Token templates which are available for actors to configure based on their actor type.
- Begin the process of converting existing characters and humanoid creatures who use Ember Dynamic Tokens to feature intentionally chosen hand-held items. (Work in progress)
- Renovate Jurtak hands to have all of the various hand poses necessary to accommodate held items. Add a selection of hand-held weapons or items intentionally suited to Jurtak creatures. (Configuration still to-do).
- Renovate Skallith hands in the Undead Monster template to have all the hand poses necessary to accommodate held items. Add a selection of hand-held weapons intentionally suited to Skallith or other undead. (Configuration still to-do).
- Rename all hand-held weaponry parts to follow a more consistent and structured naming convention.

### Vistas

- Resolve pixelated artifacts with colorized parts in vista spritesheets.

### World Map

- Introduce a major upgrade to the Ember world map which illustrates the western half of the world in considerably higher detail and more beautiful color.
- Design a custom Note subclass which provides an Ember-specific approach for visuals and interactivity of world map labels and locations.
- Add animated clouds and atmospheric blur to the World Map when zooming out.

## Setting Compendium

- Illustrated a "character" portrait for the Elder God Ven'avé.
- Fixed the older term "Hellas" in the Forsaken War page; this has been changed in all places to Jekaros.
