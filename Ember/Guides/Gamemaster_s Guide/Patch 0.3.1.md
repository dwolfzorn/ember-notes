---
title: "Patch 0.3.1"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.3.1

Welcome to an Ember content release as part of our ongoing **Alpha Two** test process. This update focuses on adding some missing features and bug fixes from our prior `0.3.0` update. We are focused on stability and polish as we work towards the start of Beta testing later in the year.

#### Compatibility

Ember patch `0.3.1` requires core Foundry VTT version `13.348` or higher and either:

- D&D5E system version `5.1.8` or higher.
- Crucible system version `0.7.8` or higher.

## New Features

The 0.3.1 update has a bunch of new features to note:

### Actors

Several new or updated Actors which are ready to use including:

- Anachraenum Adventurer (CR4)
- Burnished Hand Protector (CR3)
- Cindaric Sage (CR6)
- Flameguard Crusader (CR3)
- Flameguard Firebrand (CR1)
- Trickadee (CR0)
- Vampyre Spawn (CR5)

Additionally, some new character portrait artwork is available in the game for the following characters:

- Eveis Brightstone
- Mug & Cap - Named variants of the Anachraenum Adventurer
- Sin Marmot - Alternate outfit wearing Cindaric Initiate regalia
- Luna Kerrowrath - Updated portrait to reflect new Lumek styles
- Fernis Ossa - Updated portrait to reflect a less youthful appearance

### Area Maps

- A brand new two-level area map: **Traveler's Rest Healing House** and the corresponding **Traveler's Rest Basement**. This map depicts a notable landmark in the Westgate district of Ordain which appears specifically in the gameplay of "The Secret Autopsy" event in the "Smoldering Cinders" quest line.
- The framework used to automatically adjust the appearance of placed light sources according to the time of day has been ported from Vistas to be generally usable in Area Maps also. This allows us to finely tune the lighting palette for exterior maps depending on the darkness level with smooth interpolation of light source animation instead of relying on abrupt on/off thresholds.
- Added water flow and foam particles to the Water Rising and Flood composition variants of the Splinter Canyons area map.
- Prototype two new light source coloration techniques: "Adaptive Attenuation" and "Natural Attenuation" which can produce more realistic (subjectively) looking light sources. We will be refining and perfecting these new coloration techniques to become core Foundry VTT options in Version 14.

### Audio

- Added "Ankarist's Theme", our first specialized Character Theme to Ember's soundtrack! This musical theme will be used in events and moments where the party is specifically interacting with Ankarist during social moments. Similar character themes for Lyla and Sin are coming soon!
- Add some new and improved sound effects to The Lightless Halls for use when exploring that area map or interacting with objects within it.

### Crucible

- Add new Crucible conversion support to a number of additional events in Chapter 1, largely focused on the beginning events of "The Winding Trail" and "Over the Moon" quest lines.
- Add forward-compatible configuration of crucible languages and configure Cultures to grant languages as part of Crucible character creation. This feature will require Crucible version `0.8.0` (not yet released) to fully function.

### Codex

- Improve the sizing rules used for portraits in the codex to better accommodate character portraits that are especially wide.

### Dynamic Tokens

- We now automatically associate the randomized appearance of a dynamic token with the image presented on the character sheet for that unlinked synthetic actor, ensuring that when you open the character sheet for a token placed on the map, its appearance matches what is depicted in the Scene.
- Add support for part rarities and exclusivity in Dynamic Token configuration which controls the visibility and adjusts the randomization weight of specific part options. For example, without this feature it would be the case that randomized characters would almost always be wearing some form of eyewear. Now, with this change, eyewear is relatively more rare such that "None" is now more likely to be chosen.

### Event System

- Redesign the way that all `EmberSceneManager` subclasses declare biome and location information to ensure that the correct location audio is playing for all scenes. Currently some vistas are bugged and don't play the right audio.
- Improve the rendering of the Flowchart page of every quest to differentiate certain connections depending on the prerequisite mode of the target event using solid (prerequisite ALL), dashed (prerequisite ANY), or dotted lines (prerequisite NONE).

### Quests and Events

- Substantial cleaning up of loose ends in the newly released Chapter 3 main quests including: "Disgraced House", "Smoldering Cinders", "Spreading Sickness", and "The Expedition Challenge".
- "Clearing the Rubble" and "Lending A Hand" now automatically prompt the GM offering a choice to automatically re-combine the party with the Strayhearth Caravan upon event completion.
- "The Smoke Clears" event now should ensures that the Party token is placed on the region map in Helkas if it was not previously present.
- In the "Ancient Door" event of "The Winding Trail", automatically switch the vista composition to the open doorway once the relevant event outcome has been marked as complete.
- Ensure that the "Sealed Passage" event in "Over the Moon" can no longer happen if the party has already completed "A Promised Exit" in "The Winding Trail".
- Add a Macro that can be used to destroy and remove certain pieces of Corpuleth equipment (Helm or Chestplate) during combat. This macro is especially useful during the "Grave Assignments" event of the "Smoldering Cinders" quest.
- Ensure that the newly placed Party token at the end of "The Collapsed Cairn" also becomes automatically controlled.

### Region Map

- Convert rendering of the region map from using WEBP tiles to instead using ultra-optimized KTX2 tiles using high quality UASTC format. This change results in the region map files being larger and therefore requiring more loading time over network, but we feel strongly that the visual improvement of fidelity on the region map is absolutely worth it as the rendered quality of the megaregion is now sharper and more beautiful than ever!
- Convert the dashed lines visualized in the `EmberEventsLayer` to use the built-in PIXI dashed line shader instead of manually managed dashed graphics.
- Add animation to the dashed lines that connect quest events in the `EmberEventsLayer` to more elegantly visualize the directional flow of quest content.

### Vistas

- Added a beautiful new location vista for "Caste". This is a remote settlement in the northeast of the Arctus Plateau which you cannot visit during this phase of Alpha testing yet, but you can enjoy the moody visuals of the vista as something to look forward to as our gameplay content progresses.
- Added day/night cycle appearance rules for the Ordain Streets vista as well as light sources to various vista compositions which adapt to the time of day.

## Bug Fixes

This update also fixes a number of bugs:

- Corrected the color alignment of the visible ooze in Yakoshta Mine to shift from green to orange to match the contamination in the Aedir Signalpost.

- D&D5E: Wirrun characters now properly obtain Cold resistance from their ancestry progression.
- Crucible: Correct bug with Crucible implementation of Kivahr Regulated Rhythm which caused it to apply every turn regardless of whether the effect was active or not.
- Crucible: Add automation for the Vrjnhar ancestral passive that properly allows them to ignore glancing blows.
- Crucible: Fix a lingering bug that prevented rendering of the Codex.
