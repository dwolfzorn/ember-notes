---
title: "Patch 0.3.2"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.3.2

Welcome to an Ember content release as part of our ongoing **Alpha Two** test process.

Our team is working hard to get Ember ready for **Beta One** which we expect will begin with the *next* major patch, version `0.4.0`. Much of our work in this update `0.3.2` involves getting the game ready for beta testing by adding missing features, material, and game systems that are needed for Beta.

#### Compatibility

Ember patch `0.3.2` requires core Foundry VTT version `13.348` or higher (version `13.350` is recommended) and:

- D&D5E system version `5.1.9` or higher.
- Crucible system version `0.7.9` or higher.

## Highlights

The most significant highlights of this new release are the following:

- The region map of **Ordain** is brought to life in beautiful high-resolution detail.
- Implement a brand new **Dynamic Weather Engine** for Ember which simulates the evolution of local weather effects that vary across the mega-region.
- Overhaul the Ember-specific **Calendar UI** element at the top of the screen with a new beautiful aesthetic which is also more functional.
- Significant expansions and refinements of our **Setting Compendium** with a focus on Ancestries, Organizations, and Cultures.

## New Features

All the new features included in this update are detailed in the sections below.

### Area Maps

- Add a new area map called "The Bronze Rask", which depicts a theater in the Ordain district of Fallbrook. This area is used in the final segment of Ankarist's Chapter 3 main quest.
- Added a full area walkthrough for all rooms and sections of "The Bronze Rask" area map.

### Audio

- Add a beautiful new musical theme for Sin Marmot, one of the game's main quest companion characters, which is used during events where interaction with Sin is the central focus.
- Implement a framework for region map caravan movement sound effects which help annotate the environmental sound composition while the party is moving. Currently there is only one experimental sound effect used here, but eventually the audio side of this system will evolve to provide different sound effects according to the party's method of travel and the terrain over which they are traveling.

### Characters and Creatures

- Update the character portrait for Sigil with a new version which better reflects the unique attributes of "The Elder Scholar".
- Add background character artwork for Gabi and Brandt Hargrove, the Arcturian farmers encountered during "The Boy Who Played With Boats" event of the "Book of Tales" quest. Further work on this event is anticipated in the subsequent patch to implement a vista configuration which showcases these portraits effectively.

### Quests

- Expanded the dialog and Q&A sections of the first few events of "The Winding Trail" to add more characterization to our main quest companion NPCs.

### Region Map

- The region map of **Ordain** is brought to life in beautiful high-resolution detail with customized illustrated detail for every district.
- The lighting of Ordain has been updated to reflect the new artwork and utilize new beautiful and vibrant light source coloration techniques.
- Implement a brand new "Dynamic Weather Engine" for Ember which simulates the evolution of local weather effects that vary across the mega-region.
- Regional weather effects can be visualized and controlled (to a degree) by the Gamemaster using the new "Toggle Weather Overlay" control in the Scene Controls palette on the left side of the screen.
- Add attenuated coloration techniques to region map optimized light sources.
- Improve the technical framework used to evolve the global light angle according to the time of day, enabling us to deploy this same system for vistas and area maps in addition to the region map.

### Players/Gamemasters Guide

- Write the "Main Quest Overview" page of the Gamemaster's Guide to improve existing structure, add section for Chapter 3, and "Chapter 4 and Beyond" section.
- Update the Player's Guide writing for the Ember Region map with expansions and corrections to existing material as well as new written rules explaining how travel pace selection works.

### Setting Compendium

- Add a beautiful new banner for Luxarum that depicts the "Realm of Endless War".
- Add support for Ember Lore pages to define secondary titles used for monikers or epithets which are displayed as subtitles underneath their page title.
- Updates to the Organization: Ordinate article with new material about the composition of the Ordinate and its functions.
- Ongoing work to overhaul and expand the "Character Classes" entry of the Setting Compendium with more information that pertains to how D&D system classes would manifest within the Ember setting.

### Tokens

- Prototype a new "Undead Monster" token maker template with parts that consolidate Horrendor, Sodden Corpse, Skallith, and Corpuleth parts into a single shared structure.
- Add new splint mail armor pieces to the Token Maker.

### UI and UX

- Overhaul the Ember-specific Calendar UI element at the top of the screen with a new beautiful aesthetic which is also more functional. The calendar now reports individual local weather events and your current location.
- Prompt the Gamemaster and require reimport the Ember Adventure when migrating from a prior Ember world version.
- Prompt the Gamemaster to conclude or cancel an in-progress Ember gameplay event before re-importing the Ember adventure.
- Add support for flag-based development status tags for page types that are not owned by Ember.
- Allow using the Hex HUD to target a hex as the target for a Teleport Destination or Weather Creation dialog.

### Vistas

- Support skewing vista assets with an alternative skew model (shear) better suited for this 2d use case.
- Asset improvements for the Verdant Paths vista with new improved terrain, ground cover, and some prefab assets.
- Implement the "Dry Outpost" and "Dry Outpost Camp" vista compositions in the "Verdant Paths" vista which are used in the "Skies Above" event of "The Winding Trail".

### Crucible System

- Ongoing conversion efforts to refine and polish Chapter 1 gameplay content for Crucible. Most game events are now fully converted, although need final review and balancing passes.
- Design integration between Ember's envisioned **Gathering and Crafting** system with the new Schematic item type introduced in the Crucible system with update version 0.7.9.

### D&D System

- Upgrade the way that Knowledge areas are provided via D&D background components with a new bespoke advancement type that more seamlessly integrates that feature with the game system.
- Extend the D&D character sheet to report Knowledge areas that the character possesses alongside other traits like Languages.

## Bug Fixes

- The Ordani Skywalk artwork needs to be always visible or revealed from one hex away so that players know there is a crossing point over the canyons.
- Completion of "Amazing Brambles" should unlock the ability to travel to/from the pathways in that particular hex.
- Fix an issue which caused the underground lake section of the Mycelian Expanse is incorrectly closed in by walls and impassable hexes such that the party cannot enter or exit it.
