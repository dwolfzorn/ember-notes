---
title: "Patch 0.6.0"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.6.0

**Welcome to Ember Early Access!** This update (version `0.6.0`) is a major content update that begins a series of Ember releases focused on **Chapter 4** of our game story. Along with some brand new game content in this update there are a host of bugfixes and quality-of-life improvements that should benefit your ongoing Early Access playtests!

#### Compatibility

Ember patch `0.6.0` requires core Foundry VTT version `14.364` or higher, and one of:

- D&D5E system pre-release version `5.3.3` or higher.
- Crucible system version `0.10.1` or higher.

## Actors

- Add several new memorable characters: Rala Ushna, Krafton Lilifeld, and Terrane.
- Add several new challenging adversaries: Earth Mote, Dirt Globlin, Mud Globlin, Clodmarl, Crystallath, Towering Obsidian Vine, Obsidian Vine Outgrowth, Stalagmaw, and Slaith. All added creatures support both D&D5e and Crucible.
- Add a beautiful character portrait for Terrane, the Korvathi elemental sage.
- Add six new Arcturian worker background portraits for use in decorating Vista scenes.

## Audio

- Improve the mechanics of combat section transition to reduce undesired overlap.
- Improve the mechanics of crossfade when scheduling an arrangement change.

## Area Maps

- Expand upon Area Map: Redrak Fields with several new levels and full V14 support for regions and levels.
- Add interactivity to several arrangements in the Redrak Fields biome map.
- Expand upon the Ushna Dredging Docks area map with visual improvements and added interactivity for the dredging crane and silt storage tanks.
- Only disable the appearance of parallax for GMs on non-Token layers. Players using Drawing Tools or Map Notes should not have parallax disabled.
- Fix some misconfiguration of Scene Regions in the Kaleidoscope Caverns area map.
- Correct a flaw with the override to the basic sight vision mode in Lightless Halls which prevented rendering the Token Config sheet for tokens in that scene.

## Crucible

- Some balance updates to the various Oozes encountered in the Forest of Stone in response to playtest feedback.
- Treat Afflicted Drakes as Diseased for narrative and mechanical flavor.
- Kaleidoscope Crystal effects for Shimmering Dark and elsewhere recreated to be based on compendium managed Active Effect documents with automation applied.
- Fix broken Crucible action links in Afflicted Pallid Drakeling Tactics block in the "Sickly Drakelings" event of Winding Trail.
- Fix leftover D&D enricher typos in several Crucible character biographies.
- Adjust the range and damage profile of Hydroxol natural weapons.

## D&D5e

- Kaleidoscope Crystal effects for Shimmering Dark and elsewhere recreated to be based on compendium managed Active Effect documents with automation applied.
- Correct the bug that certain oozes' Self-Soothing ability damaged instead of healed.
- Address design parity gaps between the Crucible and D&D character creation applications to standardize behavior for Token Maker reset and teardown.

## Players' and Gamemasters' Guides

- Address some editorial errors in the Gamemaster's Guide.

## Quests and Events

- Implement an entirely new quest called "Disturbed Earth", the first added side quest in Ember Chapter 4 which takes place in the Redrak Fields biome east of Ordain. This new quest is added with simultaneous support for both D&D5E and Crucible gameplay.
- Clarify in "Good Ooze, Bad Ooze" the circumstances in which the players are (or are not) unaware at the start of combat.
- Enable capturing stateful encounter configuration for defining Event encounter spawn config, allowing for events to control the initial state of doors, lights, sounds, region behaviors, and interactables.
- Fixed encounter spawn configuration for the "Mixed Media" event.
- Fix bugs with attunement awards dispatched via the event UI.
- Correctly defer "Skies Above" world time advancement until after the region map reloads.
- Improve the event cooldown mechanics for the "Color Commentary" event in the "Local Color" quest.
- Improve the written clarity of the crevasse encountered in "The Tower Revealed" event.
- Fix continuity issues between the area map and the event writing in the "Cost of Living" event.
- Address continuity errors in the description of the flying creature in the "Flying Predator" event.
- Correct encounter spawning issue in the "Ravine Outlet" event using the Dripstones area map.

## Region Map

- Fully illustrate the Redrak Fields biome to the east of Ordain, including points of interest for Rortwark, Lilifeld Vineyard, Earthen Henge, and Ushna Dredging.
- Expand the region map for the Golden Flats, relocating the city of Arcturel several miles further to the southwest.
- Add several new points of interest to the western Golden Flats: Boiling Basin, Carena Tree, Orthinal Bridge, and Harren Enclave.
- Add a small new section of Sinkhole Depths to the region map underneath the Boiling Basin location.
- Improve the readability of Kaleidoscope Caverns hex entrances by placing some visual signposting outside the cave entrances.
- Reclassify the Concourse as an Ordain Waterfront hex instead of an Ordain Flats hex.
- Fix a bug that prevented the region map weather shader from properly appearing when first loading the region map in some circumstances.

## Setting Compendium

- Suggest some Thornling naming conventions that may cut across various cultures.
- Address certain Hulg'run lore discrepancies.

## Tokens

- Improvements to Human token maker pieces.
- Improvements to Human Undead token maker pieces with reworked heads, eyes, hair, and mouth layers.
- Redesign of the "Construct" token maker template with improved parts and common structure.
- Enable certain equipment items that can completely cover other layers underneath.
- Address a bug that could cause dynamic tokens to be rendered as black squares in certain circumstances.
- Create an internal debugging tool that lists what actors or randomization rules use a specific part or part identifier.
- Fix a bug which caused setting the character name in the character creation flow causes anatomy changes to the dynamic token to be lost.
- Fully teardown and stop the EmberDynamicTokenConfig canvas when it is formally closed.
- Fix file path bug with Regus Halamatrix' token artwork.
- Fix the file path assignment of Bassa's prototype token.

## User Interface

- Attunement blessing active effects should set their status icon visibility to NEVER.

## Vistas

- Add a new Vista for Redrak Fields with several beautiful Level compositions that depict that biome.
- Allow long vista part names to wrap in their placement legend.

## Other

- Create a vignette shader meant to be used in textureless sprite with use cases for vistas or area maps.
- Improve the behavior of shaders that use sceneClip in how that clipping interacts with anchored textures.
