---
title: "Patch 0.4.3"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.3

Welcome to an Ember update and content release, version `0.4.3`. This is a minor update that addresses bugs and content gaps in our existing quests as part of our ongoing **Ember Beta Two** process.

#### Compatibility

Ember patch `0.4.3` requires core Foundry VTT version `13.351` or higher and:

- D&D5E system version `5.2.4` or higher.
- Crucible system version `0.8.5` or higher.

Testing Ember with the ongoing prototype build of Foundry VTT version 14 is **not recommended**.

> [!warning] Gamemaster
> #### Important Playtest Changes
>
> We have expanded the number of milestones granted by Chapter 2 quests. For those of you currently playing Ember in Chapters 2 or 3, you should carefully compare the number of milestones which have been awarded against the new number of milestone-granting events which the party has completed.

## Highlights

The most significant highlights of this new release are the following:

- Rebalanced D&D character features.
- Enable custom gazetteer locations.
- A brand new vista for the settlement of Brevin.
- Expand the number of milestones awarded by lengthy Chapter 2 quests.
- Crucible conversion for the Chapter 2 main quest, "An Old Friend".

More details on each of these highlights appear in the full notes, below.

## Features and Fixes

All the new features included in this update are detailed in the sections below.

### Actors

- Add the adult Suarrok actor and reference it in the Collapsed Cairn. Thanks to community member Raxray for contributing portions of this statblock.
- Correct illustration attribution for creatures in the Codex Bestiary which have portrait artwork instead of just token artwork.
- Fix broken image issue on Toron actor in the sidebar.
- Add Yeela Drevin's biography and updated her appearance to match new artwork.
- Fixed some typos and issues with the Wandren Tracer and related actors.
- Fixed several small text, formula, and enricher issues in all Drake actors.

### Crucible

- Add complete Crucible conversion for the Chapter 2 main quest, "An Old Friend" including a number of its related actors, items, and more.
- Implement automatic scaling of companion NPC actors in Crucible as part of chapter 3 quests.
- Significantly expand the "Magic and Spellcraft" page of the Player's Guide to provide Crucible-specific information on how each of the 12 spellcraft runes relates to cosmological or metaphysical forces in Ember.
- Revisit the defenses of creatures with the Amorphous trait to ensure their dodge is not unreasonably high.
- Fix a bug which caused Cor'ak Crystalize Wounds to not provide the correct resistances that it should.
- Correctly add the heroism cost component for Signborn Glyphspeak spells.
- Correct the rolled damage dice for the Drakonfire feature.
- Drakon Lineage's Drakonfire now correctly ensures at least "trained"
- Fej Lineage's Extreme Metabolism now correctly increases maximum actions
- Hulg'run Lineage's Living Stone now properly prevents prone
- Kivahr Lineage's Regulated Rhythm now properly increases focus & transfers resources on turn start
- Wirrun Lineage's Implacable Hunter now properly grants boons
- First Soulmark now properly inflicts a bane on skill actions targeting Beasts
- Aedir Sentinel-type adversaries' Alchemical Recharge now properly grants focus recovery over time
- Construct Carver now properly grants boons when attacking Constructs.
- Tyraphic transformation Buff now properly applies to the character which used it.
- Exclude unused D&D progression actors from Crucible adventure build.

### D&D5e

- **Arcane Countenance (Zeph)** - Added advantage Active Effects to the feature.
- **Drakonfire (Drakon)** - Updated Drakonfire so you choose Intelligence, Wisdom, or Charisma as the spellcasting ability when each Drakonfire spell is granted during advancement at its requisite level.
- **Extreme Metabolism (Fej)** - Added an Active Effect to increase the actor’s speed for the duration indicated in the feature.
- **Fireborn (Fej)** - Replaced the water-triggered Exhaustion penalty with a temporary Poisoned condition on a failed DC 14 Con save (until the end of your next turn), eliminating long-rest recovery bookkeeping while preserving water aversion flavor.
- **Implacable Hunter (Wirrun)** - Added an Active Effect that applies the Marked condition to the target.
- **Muscle Machinery (Kivahr)** - Clarified that carrying capacity is calculated as if you were one size larger. Added an Active Effect to increase the actor’s carrying capacity accordingly.
- **Nimble Leap (Kiska)** - Align the mechanics of this ability with that of the Jump spell, capping the distance of the leap at 30 feet.
- **Regulated Rhythm (Kivahr)** - Added an Active Effect granting advantage on the feature’s skill checks and Concentration saves, plus Healing activities for in-combat and out-of-combat use.
- **Ritual Cooking (Kithil)** - Clarified that allies who consume the meal regain hit points equal to their proficiency bonus and increase their hit point maximum by the same amount for 8 hours.
- **Thornbark (Thornling)** - Rework Thornbark to work more consistently against melee attacks or grapples.
- **Tyraphic Transformation (Altyra)** - Added Active Effects to apply damage resistance and Intimidation advantage to the target’s actor sheet. Clarified how the extra damage applies to the target.
- Fix a failure to identify Actors with non-customized prototype token images now fails in the D&D system.
- Correct issues with speed definition for NPC actors (Ankarist) and party caravans.
- Add missing hit point values and formulae for Loris Tezran and Harrower actors.
- The Monster Hunter background path was only providing a single proficiency instead of two.
- Ember game state reset needs to also revert D&D actors who have progression paths back to their lowest level version.

### Quests

- Expand the number of milestones awarded by lengthy Chapter 2 quests in order to provide a somewhat faster rate of milestone progression. Chapter 2 main quests now award 3 milestones each. Chapter 2 side quests now award 2 milestones each.
- Extensive editing improvements for the new "Signal of Intent" quest.
- Extensive editing improvements for the "Over the Moon" quest.
- Fix dead courier appearance in Diplomatic Impunity's One Dead Courier event.
- Delete some outdated or moved quest events that were incorrectly left inside appendix sections.
- Revised the narrative text in Diplomatic Impunity to improve the flow of various scenes.
- Corrected missing and misconfigured map notes in Spellbreaker Prison.
- Updated Lower Arcturel encounter with "The Device" with new actor, features, and clarified walkthrough text.
- Fixed typos, formatting issues, and skill enricher issues in Diplomatic Impunity.
- Corrected various instances of Brynna Verocorrt's name being misspelled in the journals where she appears.

### Region Map

- Enable custom configured gazetteer location sources via the configurable "Gazetteer Location Journal Entries" game setting.

### Tokens

- Incorporate new "Vertical Hand" pose that will be important for certain types of weapon grips and some related anatomy improvements to hands and forearms.
- Fix an issue with incorrect positioning of Nir'ae forearms.
- Fix issue with Ashka token maker hands color assignment.

### User Interface

- Display Event Outcomes at the bottom of the page instead of at the top to allow Gamemasters to get to the Event Details and GM Summary sections more promptly without missing context.
- When clicking an Event name in the prompt to begin an event, jump directly to the Event Details section of the page instead of the top which repeats the same At a Glance information.

### Vistas

- Add a brand new Vista for the settlement of Brevin that appears prominently in the Thorny Predicaments quest.
- Vista initial view defaulting to centered rather than defined "initial" parameters.
- Remove incorrect token vision requirement from the Yakoshta vista.

### Other

- Add a formal ember.api.actors.combineGroups helper that is used to combine multiple caravans into a single party in a reliable and bug-free way.
- Improve preservation of the Party Group when re-importing the Ember adventure with "Preserve World State" enabled.

## Setting Compendium

This update includes a lot of impactful updates to the Setting Compendium and the various journal entries contained within with a general focus on the Deities section.

### Cosmos

- Mayis has been expanded and revised, fully written and ready for playtesting.

### Deities

- Deity Overview rewritten and the four deity types explained.
- Alar writing significantly revised and now in line with the other Elder Gods.
- Elder Gods refined. Added Lore Summary section
- Outer Gods refined. Added Lore Summary section
- Wild Gods written and ready for playtesting
- Shard Gods refined. Added Lore Summary section
- Spectra written and ready for playtesting.
- Ven'avé written and ready for playtesting.
- Lantyr written and ready for playtesting.
- Sockets written and ready for playtesting.
- Pathwalker written and ready for playtesting.
- Finor written and ready for playtesting.
- Vhismara written and ready for playtesting.
- Kyasifer written and ready for playtesting.
- Kinalathi written and ready for playtesting.
- Areyter written and ready for playtesting.
- Slinerak written and ready for playtesting.
- Fiyara written and ready for playtesting.
- Lorgi written and ready for playtesting.
