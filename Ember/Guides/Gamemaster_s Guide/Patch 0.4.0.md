---
title: "Patch 0.4.0"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.0

Welcome to an Ember update and content release, version `0.4.0`. This is a landmark release marking the beginning of our **Beta One** test phase!

> [!quote] Read Aloud
> On behalf of our entire Ember team, we would like to say a massive ***thank you*** to our alpha testers who have helped us with so much valuable feedback during the Alpha test phase, and ***welcome*** to our new Beta testers who are now joining us on this adventure!

#### Compatibility

Ember patch `0.4.0` requires core Foundry VTT version `13.350` or higher and:

- D&D5E system version `5.1.10` or higher.
- Crucible system version `0.8.1` or higher.

For groups which have been previously playing Ember as part of our Alpha test, there are some special notes to pay attention to regarding continuity of play and compatibility.

> [!warning] Gamemaster
> #### Compatibility - Attunement Progression
>
> Due to the significant changes introduced by the new [[Attunement]] system, there is some work required for groups who have been previously playing Ember in the absence of this system to properly utilize this new feature:
>
> 1. Verify on the new Attunements tab of each character sheet that player characters received an automatic migration that assigned them 3 Attunement Points into the specific Attunement that they selected upon character creation.
> 2. Allow characters who would have preferred to choose one of the new Attunement options (Luxarum, Primordis, Signara) to switch to that attunement as their starting option. This would involve manually removing their prior attunement feature, adding the new one, and switching their initial +3 attunement points from their old attunement to their new one.
> 3. Revisit each Quest Event that the party has completed. If an event has a button at the top which reads No Awarded Attunements, consult the content of the event to take note of Attunement Progression moments throughout the event.
> 4. Click on these attunement moments to open a dialog window and assign which player characters, if any, should have qualified for them. After assigning milestone awards, click the Award Attunements button at the top or bottom of the Event page to finalize those awards.
>
> #### Compatibility - Milestone Tracking
>
> This release also adds a new integrated system for tracking [[Milestone Progression]]. For groups which have been previously playing Ember, you may wish to take the following steps to utilize this new feature:
>
> 1. Go through each Quest that the party has experienced and review each Event which offers a Milestone award (marked with a star on the quest flowchart).
> 2. If these events were completed, utilize the Award Milestone button to record that this event's milestone was allocated to the [[Party]].
> 3. Audit that the level of player characters is correct given the total number of milestones awarded and the [[Milestone Progression]] table.

## Highlights

The most significant highlights of this new release are the following:

- Region map weather visualization
- The Cosmological Attunement system
- Complete Crucible Chapter 1 conversion
- Milestone tracking system

## New Features

All the new features included in this update are detailed in the sections below.

### Attunement System

- Implement and introduce the new Cosmological Attunement system and corresponding attunement progression for characters across 11 different attunements with point-based progression, enrichers, and event awards.

### Game Systems

- Complete Crucible conversion of all Chapter 1 content.
- D&D Ancestry Balance Adjustments to Ashka, Human, Hulg'run, and Kiska features. Humans received the largest change with one of their ancestry features entirely replaced.
- Add a built-in system for milestone tracking which records which milestones the party has earned and automatically determines when the members of the party are eligible for level-up.

### Codex

- Add Codex Discovery screenshots for ordain locations and new Arctus Plateau discoveries.
- Only rotate the codex images for a creature or character if it is a token (rather than a portrait).
- Mark some creatures (Yarnac, Rask, etc...) as initially discovered in the Codex at the start of the game.

### Music and audio

- Add a new music soundscape theme for Lyla Cevher used during character development moments with that companion character.

### Region Map

- Implement an exceptional weather shader that visualizes weather events and ambient weather patterns across the entire Arctus Plateau mega-region.
- Migrate the previously used Fog of War blur filter to hex borders technology to significantly improve performance while also improving visual quality.
- Improve pathfinding result to avoid leaking information to players about potential routes. Display a meaningful difference between `Impossible` and `Unknown` paths.

### Setting Compendium

- Significant improvements in the Setting Compendium, particularly in areas of Deities, Organizations, Cosmology, and more.
- Significant writing improvements in the Gamemaster's Guide and Player's Guide to document and explain more systems.
- Add a new artwork banner for Signara.

### Token Maker

- Token Maker updates: updated mechanical hand, corrected boots, new masculine hairstyles.

### Vistas

- Add a new Vista for **Ordain Interiors** which will be expanded to cover an immense range of interior environments within the metropolis of Ordain.
- Add a new vista composition for the "Hargrove Farmstead" which is used during "The Boy who Played with Boats" event in the "Book of Tales" quest.

## Bug Fixes

- Correctly configure Ooze Control Yakoshta event vista asset spawns.
- Attempting to make an Impossible move on the region map incorrectly attempts the move and starts playing caravan movement sounds.
- Improve the usability of the Aedir Signalpost elevator, eliminating some glitchy behaviors and situations where its passenger tokens would get stuck.
- Region map pathfinding actively tries to avoid Keeper's Crossing because it is difficult terrain and other river-adjacent hexes are not.
- Fix designation of CSS portrait or token size in the Crucible version of the Codex.
