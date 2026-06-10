---
title: "Patch 0.5.3"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.5.3

**Welcome to Ember Early Access!** This update (version `0.5.3`) is a minor bugfix patch to address some urgent issues with the previous 0.5.2 release.

#### Compatibility

Ember patch `0.5.3` requires core Foundry VTT version `14.362` or higher, and one of:

- D&D5E system pre-release version `5.3.3` or higher.
- Crucible system version `0.9.4` or higher.

## Bug Fixes

- Fix a bug with initial Adventure quick-start that fails to set up the world properly without re-import.
- Fix a bug which prevented Ember from returning the Region Map to the active state upon event completion.
- Fix a bug which caused Adventure updates from an older version can fail because of changing document type.
- Remove the "Pull to Scene" hook that was added now that this its in core 14.362.
- Harden the logic for how a D&D attunement feature is replaced upon rank up to more reliably replace prior attunement features with the correct new one.
- Correct typos in D&D attunement spell progression which state the wrong spells are awarded.
- Add missing Gamemaster's Guide and Player's Guide documentation on how the expanded Attunement system works.
