---
title: "Patch 0.1.1"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.1.1

Ember Alpha patch `0.1.1` requires core Foundry VTT version `13.337` or higher and D&D5E system version `4.3.5` or higher.

## New Features

- Implement basic framework allowing for custom Standalone Events to be added to the game
- Implement an `EmberVistaToken` subclass of the Token placeable which improves the code quality for special Vista-specific Token workflows
- Re-enable click+drag Token movement in Vista scenes in a way that integrates the dragged Token position with the Vista environment.
- Changing region map elevation should advance time and trigger events or discoveries in the destination hex
- Improve presentation of event outcomes UI and/or make an outcome embeddable lower in the quest where narratively that outcome is likely to occur
- Add control buttons to the header of each event allowing you to manually initiate or reset an event. Prompt the user with warnings if initiating or resetting an event could be inconsistent with Ember game state and event prerequisites.
- Saving changes to the dynamic token for a player character should replace the static file stored in World data.
- Add guidance to the GM Guide suggesting the nature of the player character's relationship to each other at the start of the game
- Impose restrictions that only allow setting specific valid elevations and transitioning to a different elevation at specific valid hexes on the Region Map
- Use location overview text as part of the "Involved Locations" block of the Quest Overview page.
- Add support for hierrarchical categories in the `VistaConfig` sidebar instead of just used vs. unused assets
- Add a keyboard modifier H which flips vista assets horizontally during placement or editing
- Holding SHIFT during vista asset placement will lock elevation so you can move an asset vertically at a given elevation
- When selecting a placement of an asset in the vista, highlight and pan to its location so it is clearly visible
- Add custom Ember cursors using the new V13 cursors API with a client setting to optionally disable them
- Use biome overview HTML as auto-generated biomes section in Location pages
- The Fulgurite Blades caravan should be auto-added to the region map after Untouched Wilds.
- Add ability to save a custom vista composition to Scene flags which are preserved upon adventure import

## Content Improvements

- Numerous typography updates and improvements for Ember Journal Entries.
- Clarify exact timing and arrival time expectations in The Winding Trail
- Revisit the Helkas area map to add support for parallax layers that weren't possible when it was first created
- Revisit Roll Tables and move HTML descriptions back into tables and out of events
- Skallith actors in the Bestiary are not correctly using TokenMaker static exports
- Fixing general typos in the Setting Compendium
- New Setting Setting Compendium Content
- Add more water to Mycelian Expanse environment
- Improved the rendering quality of a number of vista assets across multiple vistas
- Add 3 "Background NPC" portraits of Cindaric Sages
- Add support for the Wirrun ancestry into the Ember Token Maker for player characters and NPCs
- Add new Mycelian Expanse vista compositions "Overgrowth" and "Scout Camp"
- Add Rask and Rask Juvenile creatures to the world and Codex
- Add audio environment layers for Arcturel
- Add vista asset categorization for all existing vistas
- Configure the Strayhearth Caravan character sheets to display properties such as languages, walking speed, etc, on the left sidebar.

## Bug Fixes

- Improve the final steps of character creation with a more integrated advancement flow and an approach to saving dynamic token portraits that does not require the `FILES_UPLOAD` permission
- Correct issue with duplicating geometryMeshes and particleEmitters when redrawing a vista (like in the vista-config)
- Address bugs in the adventure export process which failed to properly cull data like emptying the party or removing tokens from scenes.
- Convert all maps that use legacy Ember doors to use new core V13 doors and delete Ember doors code
- Fix an issue which caused the region map pathfinder to prefer impossible routes to possible ones
- Prevent the page links in the Events Control UI from being draggable
- Ensure that Ember scene environment and lighting effects are re-applied whenever changes to the Scene cause the canvas to be updated.
- Resolve bugs and improve user experience of the Vista Config tool to be more accurate and easier to use.
- Ensure that scene regions which automated changes in elevation (Mythspire, Yakoshta) correctly only handle your own token movements and not all tokens
- Ensure the Yakoshta Mine track graph is properly cleaned up when that scene is deconstructed
- Switch to using `dnd5e.registry.classes` for detection of available character creation classes
- Fix the water layer animation shader in the Arctus Plateau Mega Region.
