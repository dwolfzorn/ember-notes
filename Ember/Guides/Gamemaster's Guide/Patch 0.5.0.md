---
title: "Patch 0.5.0"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.5.0

**Welcome to Ember Early Access!** This update, version `0.5.0`, is a minor patch that adds some final bugfixes and features added to our initial early access release.

Beginning Early Access is a huge milestone for our team and the culmination of many years of work creating Ember. We are far from done, but we can see clearly how to get from here to the final product we all dreamed of when beginning this endeavor.

For those of you who participated in our Alpha and Beta test phases, **thank you** so much for your feedback and encouragement. For those of you who are just beginning your Ember journey now with Early Access, **welcome** and we are thrilled to have you here.

#### Compatibility

Ember patch `0.5.0` requires core Foundry VTT version `14.359` or higher and one of:

- D&D5E system pre-release version `5.3.0` or higher.
- Crucible system version `0.9.0` or higher.

#### Version 14

Foundry Virtual Tabletop version 14 is now Stable and Ember version `0.5.0` requires Foundry VTT version 14.

#### Version 13

It is not possible to test Ember version `0.5.0` with Version 13. If you want to remain testing in Version 13, you should stay on Ember version `0.4.6` or earlier.

## Highlights

The major highlights in this update version include:

- 70 beautiful new illustrated token maker part options.
- A more polished Ember import experience that integrates seamlessly with Version 14 quickstart.
- Setting Compendium expansions with major updates to Culture pages.

More details on each of these highlights appear in the full notes, below.

## Features and Fixes

All the new features included in this update are detailed in the sections below.

### Actors

- Begin loading the token maker mega spritesheet in the background when beginning character creation so that by the time you get to the Token Maker step it is available instantaneously.
- Update Vartholomew Chess to have a more complete biography and backstory.

### Area Maps

- Provide a way in Ember to configure both default and wall-specific animation elevations for DoorMesh instances on a per-level basis.
- Improve computation of token move speed animation in area maps, customizing the movement speed based on dominant movement action and system action economy.
- For scenes configured with `lunarAmbience: false`, only reject lunar hue changes while still keeping darkness level changes (unless darkness is locked).

### Crucible

- Fix a bug with door meshes in Crucible being unreasonably oversized due to a miscalculation with the microgrid.

### Quests and Events

- Improve the reliability of the "Shadowed Depths" Event triggering after taking the Corpin Sanctuary elevator.
- Update several encounter configurations to have better starting conditions: Sickly Drakelings, Saving Jasper, Poolside Predicaments.

### Region Map

- Restore the specialized Note visibility control that was responsible for restricting Region Map note visibility to locations that have been discovered.
- Preserve, or re-acquire correct Token levels when re-importing the Region Map scene.
- Harden an edge case around canvas notification for discoveries or Events that did not have a designated hex.

### Tokens

- Add 70 new dynamic token part options for equipment.
- Improve the illustration of Keth hairstyles and collars to be more whimsical.
- Fix scaling issues with Keth hand-held equipment.
- Fix hair placement for Hulg'run tokens.
- Assign better randomization probabilities to hand-held equipment so that tokens will more often have empty hands.

### User Interface

- Convert the Calendar UI to report times with "am" and "pm" designations instead of 24h time.
- Swap the order of Calendar scene buttons to be Cosmos -> World -> Region.

### Vistas

- Improve the Dripstones Vista compositions with rebalanced lighting and more placed assets to give them a more vibrant and living feel.
- Improve the Helkas and Yakoshta Vistas with improved lighting and corrections for certain layers that did not interact well with token movement.
- Implement mechanics-accurate token movement speeds in Vista scenes based on the physicalVvista dimensions and perspective.
- Convert the Helkas Vista to V14 levels.
- Convert the Yakoshta Vista to V14 levels.
- Improve behavior for importing and exporting custom Vista configurations.

### Other

- Implement the new V14 core feature that allows the Ember adventure importer to be eagerly rendered while the (large) adventure data is lazily loaded. This creates a much more responsive experience that is clear to the user that the importer is loading.
- When creating an Ember quickstart world, display the "Welcome to Ember" page rather than the current version of patch notes.
- Improve the framework for initial Ember migration on world launch to have better prevention of edge cases that could cause migration to fail.
- Integrate Ember with a new V14 change that will allow the Ember module to remain active in the world when upgrading from V13 to V14 instead of being automatically deactivated.

## Setting Compendium

### General

Most culture pages have been finished, except for some of the Ancient cultures! Culture details have all been updated.

### Cosmos

- Akon, added additional information.
- Aura, added additional information.
- Cora, added additional information.
- Ragen, added additional information.
- Orbis, added additional information.

### Deities

- Themis, written and ready for playtesting.

### Culture

- Culture Overview rewritten, included a lore summary.
- Languages revised with several changes based on cultures.
  - Kithil now speak Mithia
  - Cascilian now speak Cascal
  - Kessian now speak Solical
  - Morian now speak Moiré
  - Maziran now speak Kaziric
  - NEW Jarn speak Veax
  - NEW Theroch speak Judega
  - Daemos and Fiends now speak Eonic
  - Tyraphem and Celestials now speak Harmos
  - Casia and Fae now speak Caligon
  - NEW Carrow speak Ocana
  - NEW Xaxin speak Xaxin
- Cascilian, written and ready for playtesting.
- Waerd, written and ready for playtesting.
- Tayan, written and ready for playtesting.
- Strider, written and ready for playtesting.
- Bejak, written and ready for playtesting.
- Oaken, written and ready for playtesting.
- Rhivan, written and ready for playtesting.
- Kelmezian, written and ready for playtesting.
- Kessian, written and ready for playtesting.
- Varún, written and ready for playtesting.
- Kithil, reworked.
