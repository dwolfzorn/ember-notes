---
title: "Patch 0.4.1"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.1

Welcome to an Ember update and content release, version `0.4.1`. This is a minor update that adds some new features while fixing a number of bugs with our Beta One test build.

#### Compatibility

Ember patch `0.4.1` requires core Foundry VTT version `13.350` or higher and:

- D&D5E system version `5.1.10` or higher.
- Crucible system version `0.8.1` or higher.

## Highlights

The most significant highlights of this new release are the following:

- Some beautiful new styling of Ember-specific UI elements including Journals, Calendar, Codex, and Character Creation.
- Revised character creation mechanics to ensure D&D 2024 rules alignment.

## New Features

All the new features included in this update are detailed in the sections below.

### Actors

- Add illustrations of 5 background characters representative of each Trading House for use within Vistas.

### Crucible

- Convert Chapter 1 Standalone Events which had previously not received Crucible-specific rules.
- Add creature conversion for the Crevvet.
- Add creature conversion for the Sitherian.

### D&D5e

- Revise D&D Ancestry and Culture features to ensure that they are providing 2024 versions of spells or other features. Use nested advancement flows where possible to take advantage of more elegant trait definitions.

### Region Map

- Update the region map with new detailed land areas and POI corrections.
- Implement working party travel pace modifiers which alter event probability as described in the Player's Guide page on region movement.

### Setting Compendium

- Related characters or creatures section on a Lore page should be withheld from players unless they have been discovered in the Codex.

### User Interface

- Update the Ember Journal, Codex, Calendar, and Character Creation UI elements with new stylized blocks and other stylistic flourishes that beautify the appearance of the journal.
- Add calendar time advancement options for +8H and -8H to more conveniently skip to a different portion of the in-world day.

## Bug Fixes

- Ember Crucible was incorrectly configuring the Compendium Sources setting.
- Fix Ancestry or Culture pages which failed to render their summary features.
- Fix issue with knowledge checks in the D&D5E system not displaying the correct party members in passive tooltip.
- Oaken culture advancement did not correctly provide (forced) Survival expertise.
- Undoing movement on the region map incorrectly advanced time instead of rewinding it.
- Ensure that Crucible backgrounds that emerge from character creation properly track known languages.
- Improve the logic with which classes are selected at character creation to more reliably prefer SRD5.2 over SRD5.1 if the Player's Handbook module is not active.
- Resolve visibility issue with ember calendar control buttons when the Foundry VTT interface color theme is set to "light".
- Update the Golden Flats vista with some corrected assets, resolving transparency issues.
