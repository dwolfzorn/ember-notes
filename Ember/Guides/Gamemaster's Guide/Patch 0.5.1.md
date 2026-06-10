---
title: "Patch 0.5.1"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.5.1

**Welcome to Ember Early Access!** This update (version `0.5.1`) is a minor patch that adds some bugfixes, feature improvements, Scene conversions, and more onto our prior Early Access release.

#### Compatibility

Ember patch `0.5.1` requires core Foundry VTT version `14.360` or higher, and one of:

- D&D5E system pre-release version `5.3.2` or higher.
- Crucible system version `0.9.1` or higher.

#### Version 14

Foundry Virtual Tabletop version 14 is now Stable, and Ember version `0.5.1` requires Foundry VTT version 14.

#### Version 13

It is not possible to test Ember version `0.5.1` with Version 13. If you want to remain testing in Version 13, you should stay on Ember version `0.4.6` or earlier.

## Highlights

The major highlights in this update version include:

- Significant progress on a comprehensive quest editing pass to improve the consistency of our stylistic conventions and address copy-editing issues.
- Conversion of all Vista scenes to Version 14 Levels.
- Conversion of all Chapter 1 Area Map scenes to architecture for Version 14 Levels, with added support for multi-level gameplay in several key scenes.
- An exciting new menu of Dynamic Token options for anatomy, helms, and hand-held equipment.
- Various bugfixes to resolve key friction points for Early Access testers.

More details on each of these highlights appear in the full notes below.

## Features and Fixes

All the new features included in this update are detailed in their various sections below.

### Actors

- Add three new background character portraits for Veiled Chain Agents.

### Audio

- When switching from one Ember scene to another, or between Levels of an Ember-managed scene, don't stop audio container playback and instead smoothly crossfade every audio transition. This allows the Ember audio engine to keep playing seamlessly across Scene changes to maintain immersion and narrative continuity!

### Area Maps

- Invest heavily into the software architecture of the `EmberPlatform` and `EmberElevator` abstraction layers to improve our ability to implement elevators, vehicles, or other moving platforms which bear token passengers.
- Develop a new "Parallax V2" algorithm for area map parallax animation — which accounts for zoom level as well as camera proximity to the scene boundary — to provide a parallax experience that is more perceptible and satisfying across a range of zoom levels and camera positions. Area Map "Parallax V2" is deployed for all scenes that have been converted to V14 Levels. Scenes that have not yet been converted to V14 Levels remain using "Parallax V1" until their turn for conversion.
- Convert Kaleidoscope Caverns area map to V14 Levels. Now every different composition of the Kaleidoscope Caverns has its own correct wall structure, with improvements to other placeable objects, including new Ambient Sound placements and added Scene Regions for terrain and surfaces.
- Convert the Yakoshta Mine area map to V14 levels with Scene Regions support, improved wall structure, and level-specific placeable objects. Yakoshta Mine has been dramatically improved with refined parallax, new "Chasm" Layers to add greater sense of vertical depth, refined crystal lighting, and overhauled interactivity (see next note).
- Redesign and overhaul the Yakoshta Mine Cart interactable to be far more reliable and easy to use. Instead of requiring real-time left and right clicks to alter the cart's velocity, clicking on the cart now allows you to choose from a simple menu of available destinations on the cart path. Beginning movement will transfer the cart (and optionally a passenger) to that chosen destination. Movement of the cart can be interrupted by the Gamemaster at any time by pausing the game.
- Added a new interactive Mine Elevator to Yakoshta Mine which must be unlocked to open the blue cart track, and can visually be animated up and down for some stylistic flair.
- Improved interactivity in Yakoshta Mine of the Junction Wheel, which now requires being replaced before it can be fully operational.
- Added interactivity for the Excavation Pit barricade in Yakoshta Mine, allowing it to prevent movement of the mine cart while constructed, and supporting its destruction or careful disassembly.
- Convert the Aedir Signalpost area map to V14 levels with Scene Regions support. This is a major change, collapsing four separate Scenes down to a single Scene ("Aedir Signalpost"). This new single scene has 4 levels: "Entry", "Basement", "Lookout", and "Underforge." Tokens can move seamlessly across all four levels using automated level transition points.
- Redesign the Aedir Signalpost Elevator to be more reliable, have more smooth visual animation, and to visually depict moving up and down before transitioning passengers to another level. When the elevator is absent from a floor, depict the empty elevator shaft instead of incorrectly showing the elevator as present.
- Convert the Shent Moon Temple area map to V14 Levels with improvements to Scene Regions for better surface and terrain automation.
- Convert the Helkas area map to V14 Levels. Helkas becomes a three-level Scene with separate Levels for "Mine", "Green", and "Boneway" layers of vertical play. Make extensive improvements to Walls, Lights, and Scene Regions to support modern features and improve gameplay.
- Add a functional elevator to the updated Helkas scene that will bear passengers back and forth between the Green Level and the Mine Level.
- Convert the Writhing Grave area map to V14 Levels with improved Wall structure and added Scene Region support for surfaces and terrain areas.
- Convert the Dripstones area map to V14 Levels, becoming a two-level Scene with separate levels for the "Lower Pools" and the "Upper Paths." Improved wall structure for both levels and added Regions to reflect surfaces and terrain.
- Improve the logic that selects the initially viewed level of an Area Map to prefer viewing whichever level contains your own player character (if applicable) or the most members of the primary adventuring party.
- Allow the `AreaEffectRegionBehavior` to be non-destructive when encountered in Crucible (for example the Bleak Archive trap behaviors). This region behavior still needs to be overhauled to support multi-system play, but at least for the time being it will no longer cause a crash!

### Crucible

- Fix some bugs with actors converted for Glitter in the Dark which were missing expected functionality.
- Convert several assorted items that previously eluded conversion within previously converted quests.

### Quests and Events

- Undertake a comprehensive copy-editing pass across all quests (Chapters 1 through 3) to apply standardized style guide conventions, address select playtest feedback, and align process across our recently expanded writing team. This effort is in-progress, but several quests and area walkthroughs (noted below) have already benefitted from these refinements.
- Introduce a new specialized style block to our event writing that we call a "Complex Check". This standardized stylistic convention is one we will use for all skill checks that feature multiple situational success, advantage, or critical outcome conditions. The visual presentation of this stylized block makes reading such checks consistent to parse and easy to visually identify the criteria that apply to a given roll. We are applying this new stylistic convention as part of our overarching copy-editing pass and will continue rolling it out to all quests over time.
- Quest copy and line edit of "A Brush With Death".
- Quest copy and line edit of "Local Color".
- Quest copy and line edit of "Ooze Control".
- Quest copy and line edit of "Over the Moon".
- Quest copy and line edit of "The Book of Tales".
- Quest copy and line edit of "Thorny Predicaments".
- Area Walkthrough copy and line edit for Vortest Tower.
- Area Walkthrough copy and line edit for Lake Jinro Lunar Shrine.
- Area Walkthrough copy and line edit for Steed's Point.
- Area Walkthrough copy and line edit for The Bleak Archive.
- Area Walkthrough copy and line edit for Redwalk Ramble.
- Area Walkthrough copy and line edit for Flotsam Canal Market.
- Area Walkthrough copy and line edit for Yakoshta Mine.
- Fix a bug with the Attunement Award dialog which incorrectly disabled the checkbox options to select specific party members to receive the attunement benefit.
- Add some tutorial instructions for Gamemasters during the first events of The Winding Trail that explain how to interpret different stylized gameplay blocks when they are presented for the first time.
- Entirely eliminate database-persisted Event hooks in favor of module-defined hooks. This technical architecture change mirrors the recent change in Crucible and is necessary for security and maintainability of the Ember codebase.
- Redesign the Event Config sheet to display module-defined event hooks in a readonly codemirror editor view.

### Region Map

- Prevent players from being able to hover-fade Kaleidoscope Cavern canopy tiles on the region map, instead only occluding those tiles as a result of physical token occlusion when the party token enters the caves.
- Improve the occlusion behavior of the Shard of Akon overhang at the very start of the game.

### Tokens

- Introduce a new suite of Drakon horns and tail parts to the Dynamic Token.
- Add an assortment of spectacular new helm items that reflect various cultural styles, including: Cascillian, Bejak, Tayan, Lumek, Waerd, Kithil, and Strider.
- Add an assortment of superior-quality held items to provide more exciting and memorable looking weaponry.
- Audit the appearance of all Drakon characters to ensure their usage of new parts looks appropriate.
- Formalize the dynamic token appearance of Serethus, matching his character portrait.
- Fix a bug which caused stale textures that had been expired from the texture cache from causing dynamic token rendering to fail after a client was idle in the game world for a while.
- Fix a bug with the coloration used in rendering Keth hairstyles now to be much more smooth.

### Vistas

- Every vista in the game has been converted to Version 14 and Levels! For some vistas this has no effect as the vista only previously had a single composition, but for most vistas this means that different views of the scene (previously called "Compositions") are now managed as Levels. The gamemaster can switch between Levels of a vista using the Scene Navigation UI or in Scene Configuration.
- Allow the Vista Config application to be used for every vista regardless of whether the`spriteOptions` registry was defined for the Scene or not.
- Ensure that the automatically created V14 default scene Level for a Vista is automatically skipped during adventure pre-import, and never preserved as a user-defined Vista composition.
- Restrict player visibility of Levels within a Vista, preventing them from seeing composition options other than the one they are currently viewing for a certain ongoing Event.

### Other

- Improve the way that Ember world state is initialized (now synchronous) to ensure that initial canvas load can have the correct context to determine the initially viewed level for the first viewed Scene.
