---
title: "Patch 0.4.2"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.2

Welcome to an Ember update and content release, version `0.4.2`. This is a significant update that adds two new quests, a number of significant new features, and a host of helpful bug fixes to Ember!

This is also the first version of Ember which will be available for Kickstarter backers and pre-order purchasers to purchase an upgrade and unlock access to join the ongoing beta test as part of **Ember Beta Two**!

#### Compatibility

Ember patch `0.4.2` requires core Foundry VTT version `13.351` or higher and:

- D&D5E system version `5.2.3` or higher.
- Crucible system version `0.8.2` or higher.

## Highlights

The most significant highlights of this new release are the following:

- The Chapter 3 side quest [[Diplomatic Impunity]] that embroils the party in a political maneuver between conniving players.
- The Chapter 1 side quest [[Signal of Intent]] which improves upon and streamlines the Aedir Signalpost gameplay experience as its own separate quest.
- Conversion of the Chapter 2 quest [[Crumbling Sanctuary]] for play in Crucible.
- Significant improvement to the Region Map Terrain layer allowing it to be used by Players.
- Eight beautiful new area maps.

## Quest - Diplomatic Impunity

While traveling through Ordain, the party see a brazen assault unfold in the middle of a busy plaza. Before they can even act a stranger is cut down by a group of violent criminals. Now witnesses to murder, and realizing that the victim is a courier of the Tayan Empire, they are stuck with the dead man's last charge: a satchel full of valuable diplomatic missives.

With no one else willing or able to finish the courier's last task, the work falls to the party to deliver the sensitive documents to the Tayan Embassy that rests in the shadow of the Ordinate. However, no good deed goes unpunished, and the party quickly finds itself being strong-armed into helping the Tayan Ambassador with a series of tasks under threat of being charged with murder and espionage against the Tayan Empire!

In "Diplomatic Impunity." the party is drawn into a sprawling plot of dubious legality, forced to carry out errands under threat of punishment at the hands of the imperious Tayan Ambassador, all while working toward some greater end that they might not ever fully understand. As the events unfold, will they follow the orders given, or find ways to turn this plot against their blackmailer?

## Quest - Signal of Intent

High above the Forest of Stone, an ancient tower stands shrouded in invisibility and long-abandoned by the ancient Aedir architects who built it to survey the outer boundary of their expanding empire. After silent millennia, the tower's power source has failed, allowing the structure to become periodically visible and for containment mechanisms within its Underforge to fail. From the bowels of this tower leak a contamination that has transformed the behavior and capability of local metallic oozes that dwell within the prismatic strata of the Kaleidoscope Caverns below.

In "Signal of Intent" you will learn about the complex history between the Aedir and Shent, two ancient cultures whose territorial boundaries overlapped in the Forest of Stone. Discovering remembrances of the Shent will provide the key to breaching the Aedir fortification. Within this tower, a multi-level explorable dungeon, you will learn more about the history of the world-spanning Aedir and identify the root cause of problems afflicting the settlement of Yakoshta in the valleys below.

## Gameplay Features

All the new features included in this update are detailed in the sections below.

### Actors

- Add 16 new NPC actors with full statblocks: Loris Tezran, Katerin Bastilla, Jonico Daridane, Toron, Gastern Faviyos, Yeela Drevvin, Cascillian Marine Officer, Cascillian Marine, Anydrath, Spellbreaker Guard, Spellbreaker Riot Guard, Surge Walker, Spellbreaker Inmate, Gastern Faviyos, Wind Raider Boarder, Ancara.
- Add new character portrait artwork for Mistress Caberi.
- Add updated character portrait artwork for Laeora.
- Add new character portrait artwork for Katerin Bastilla.
- Add new background character portraits for Tayan Elites.
- Eliminate the mostly redundant Yakoshta Miner actor in favor of the generalized Arcturian Miner stat block.

### Area Maps

- The location of Spellbreaker Tower brought to life as an inter-linked set of seven (!) area maps encompassing the upper levels of the tower where magically adept prisoners are held within a perpetual field that nullifies all use of magic.
- Add a beautiful new area map for the Ember's Bounty, an enormous House Bastilla ship upon which almost anything can be found!
- Comprehensively update the Ordain Docks area map with improved compositions and assets.
- Add a missing roof to the Lantern Roads area map.

### Audio

- Add a new musical orchestration for "Arcane Music" used in specific locations where magic flows freely forth.
- Added a new musical orchestration for House Bastilla with a jaunty nautical soundscape that captures the identity of that organization.
- Added environmental ambience for the Ember's Bounty area map.
- Improve the dynamic volume scaling of the cosmos map music soundscape.
- Rebalance the audio levels of several soundscapes which were either too loud or too quiet.

### Crucible

- Complete implementation of the "Crumbling Sanctuary" quest, the associated "Corpin Sanctuary" area walkthrough, and all Actors and Items which appear in this quest to have full Crucible support.
- Apply updated Crucible ancestries to all Chapter 1 NPCs and main quest characters.
- Ensure that all Chapter 1 NPCs have adequate training in their own preferred weapon types.

### D&D5e

- Teach the Ember character creation sheet to prefer the Forge of the Artificer version of the Artificer class over Tasha's Cauldron of Everything if both modules are installed and active.
- Apply updated D&D ancestries to all Chapter 1 NPCs and main quest characters.
- Update (to be honest, "nerf") Kiska Nimble Leap to align with the 2024 mechanics of the Jump spell.

### Region Map

- Optimize the performance of the evolution of weather to be significantly faster and non-blocking when advancing time in the world.
- Migrate the Terrain Layer and overlay to use a new shader-based approach and allow it to be visible to players now, previously it was GM only, allowing players to better understand the biomes and terrain types of nearby hexes.
- Add a new custom set of icons for the region map terrain layer that more prominently displays the terrain type of every hex for better understanding of region structure.
- Allow programmatic light sources in the Ember megaregion map to have their visibility conditioned on a particular event or event outcome state.
- Once Keeper's Crossing has been discovered, treat it as difficult terrain.
- Redesign a section of the region map south of Helkas where a wilderness trail leads up the ridgeline towards the Aedir Signalpost.
- Introduce a new region map POI for the Overgrown Sunwell just south of Helkas.
- Update the region map hexes at the boundary of the forest of stone and the Golden Flats to rework the trail leading from Helkas to the Aedir Signalpost.
- Optimize (reduce) memory usage by improving the cleanup of region map light sources.

### Tokens

- Overhaul forearms, hands, and wrist equipment for humanoid dynamic tokens across all ancestries as well as ancestry-adjacent templates for Human (Undead) and Construct. These new forearm poses allow arms to be somewhat more naturally down towards your side instead of rigidly outwards in front of your body.
- Add new creature token artwork for a number of new Actors including Anydrath, Ancara, Surge Walker, Ortarec Cube, and more.
- Added a large number of new token maker parts for Cascillian Marines, Bastilla sailors, Tayan dignitaries, and more!

### User Interface

- Switch Event header buttons at the top of every event page from "Initiate Event"+"Reset Event" to "Start Event"+"Complete Event".
- Improve layout of flowchart connection lines and have them re-render when the application changes size.

### Vistas

- Add a new vista composition for the Veiled Chain Headquarters in the Ordain Interiors vista.
- Add a new vista composition for the House Bastilla Parlor in the Ordain Interiors vista.
- Add a new vista composition for the Tayan Embassy Garden in the Ordain Streets vista.
- Implement a large number of new vista assets, largely focused on props that can be used in the Ordain Interiors vista.
- Revise several vista compositions in the Verdant Paths to improve upon their lighting profile.

### Other

- Add support for game state migrations that allows us to redefine event IDs or move them to different quests.

## Setting Compendium

This update includes a lot of impactful updates to the Setting Compendium and the various journal entries contained within.

- The Introduction now contains an additional note about the in-universe author Laeora, on how the Setting Compendium is written.

### Cosmos

- Removed the entry titled **Magical Forces**, this now exists under the [[Cosmos]] entry as a category called Forces.
- Reorganized certain pages within different categories to present content in a more navigable format.
- The Weave page has been moved to Cosmos Overview.
- The Abyss page has been moved to Cosmos Overview.
- Attunement has been moved to Forces.
- Heart Crystals page has been moved to Forces and renamed to Ascendancy.
- Sea of Stars page has been moved to the Cosmos Overview.
- Soul Cycle page, written and ready for playtesting.
- Biology page has been refined, and an additional Meta Knowledge Block called The Adaptation of Life has been added.
- Wildsong page, written and ready for playtesting.
- Time page, written and ready for playtesting.
- Metaphysics, written and ready for playtesting.

### Deities

- Laeora, written and ready for playtesting.
- Sitheera (Great Old One Patron), written and ready for playtesting.
- Taryakel (Celestial Patron), written and ready for playtesting.
- Vesper (Archfey Patron), written and ready for playtesting.

### Ancestries

- Added a Mixed Ancestries section to the Overview page.

### Cultures

- Tayan, written in part and ready for further playtesting.
- Created a new name for the "Blood Barons". The term Blood Barons still exists but undead culture is now called the Ossarchate, written and ready for playtesting.
- Wardcall, written and ready for playtesting.
- Fikost, written and ready for playtesting.
- Maziran, written and ready for playtesting.
- Lorai, written and ready for playtesting.
- Nalvani, written and ready for playtesting.

### Character Classes

- Added the Cartographer subclass under Artificer.

### Geography

- Updated information in the Ordain article about the currencies used within the city.

### Myths & Legends

- The High King continued! Fully written and ready for playtesting.

## Bug Fixes

- Fix a problem with Fog of War exploration not working properly in the Pathways slice of the Megaregion.
- Harden Vista teardown and cleaning methods and restore properly CONFIG.Token.objectClass. Log errors in manager teardown workflow.
- Fix an issue that caused distant culture pages fail to render due to item identifiers which are unmatched in the compendium pack (Crucible).
- Fix an issue that caused the automatic time advancement at the end of Sheltered Campsite gets interrupted by changing the active Scene.
- Correct a bug which caused embedded outcome checkboxes within the body of an event to sometimes display the wrong checked state.
