---
title: "Patch 0.1.3"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.1.3

Ember Alpha patch `0.1.3` requires core Foundry VTT version `13.339` or higher and D&D5E system version `4.3.8` or higher.

This is a minor patch which adds bug fixes for blocking or problematic issues in the `0.1.2` update.

## New Features

- Only display the "Change Composition" scene controls button for Vistas which have multiple compositions to choose between.
- Refine the logic used to detect patch notes for the current Ember version in the appropriate journal so the `CONST` doesn't need to be manually updated every release.
- Suppress the "Configure Vista" button if the vista is not manually configurable.

## Content Improvements

- Refine and re-balance the lighting in the starting Shard of Akon Campsite vista composition to be more dramatic and warm.
- Remove the **Impassable Ground** page from the Pathways gazetteer and handle this biome purely programmatically.

## Bug Fixes

- Correct failure to load Character Creation due to typo in ember.character pack document retrieval.
- Audio soundscape shuffling applied during Character Creation sometimes continues after character creation has concluded.
  Correct the font size of discovery scrolling text which is now oversized due to new v13 canvas UI scaling rules.
- Fix bug with programmatic creation of region map light sources.
- The Arctus Plateau region map was incorrectly configured with Global Illumination off.
- Fix the rendering of Ember passive check tooltips which changed due to v13 core tooltip changes.
- Improve the reliability with which activating the Arctus Plateau region map will begin the first game event.
- Fix a bug which prevented audio from playing in the Pathways in 0.1.2.
- Correct some issues with identification of the region map slice and current hex due to manual slice cycling.
