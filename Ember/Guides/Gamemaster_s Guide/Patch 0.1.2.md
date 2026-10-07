---
title: "Patch 0.1.2"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.1.2

Ember Alpha patch `0.1.2` requires core Foundry VTT version `13.339` or higher and D&D5E system version `4.3.7` or higher.

## New Features

- Add the **Ashka** ancestry template to the **Ember Dynamic Token** framework. This means that now all 16 of Ember's playable ancestries are supported! We still have big plans for the token maker, more parts, more variety, and more features - but this is a big milestone in terms of completing the foundation.
- Begin converting Ember scenes to use `KTX2` textures for superior GPU performance, memory management, and minor improvements in visual fidelity.
- Updated the Ember Region Map ruler to use new v13 `TokenRuler` labels API.
- Add Scene and Composition tags to the header of each Event, and include select tags in the Event Overview section of the Quest Overview page.
- Refactor timekeeping framework to use new core v13 CalendarData API
- Refactor `dnd5e` system-specific code into the `ember.dnd5e` submodule so it can be compartmentalized when using Ember with Crucible.
- Add support for Location discoverability restrictions which allows certain gazetteer POI locations to be only conditionally discoverable.
- Add configuration to each Location for `discoveryHexes` which define other hexes in the world from which this location may be discovered.
- Add software integration support for the forthcoming `ember-lunar-dice` module which causes those dice to interact with the current in-world lunar phase.
- Add support to attach programmatic light sources to region map locations so that those light sources are automatically disabled or enabled based on the location discovery state.
- Suppress presentation of the Token elevation tooltip if the token is at the default "land elevation" for the region map slice, for example -1 in the Pathways.
- Add a confirmation prompt when selecting an Event Outcome which confirms it is an intentional selection to avoid mis-clicks.
- Add custom `EmberDynamicTokenConfig` header option to reset all custom offsets and angles.

## Content Improvements

- Added artwork for several new locations of interest to the mega-region map including: Arcturel, Inkaro Pools, Scrapyard, Construct Camp, Primordial Bastion, Shrouded Borehole, Storsa's Strand, and the Smouldering Tent.
- Added a new Area Map for the **Fogbound Caverns** biome with several different compositions to explore.
- Added a new Area map for the **Bastion Apex**, part of the Primordial Bastion dungeon that will feature prominently in a forthcoming quest.
- Added a new musical soundscape for the **City of Arcturel**.
- Added new combat music for **Construct Combat**.
- Added new **Golden Flats** vista composition: **Camped Merchants**.
- Added a new **Sinkhole Depths** vista composition: **Fortified Camp**.
- Add waterfall flow shaders to vista compositions which feature a waterfall asset.
- Add Verdant Paths and Dripstones leaf particle emitters.
- Added many new vista assets in the Golden Flats, Rustvar Valleys, Wedgelands, and Sinkhole Depths biomes.

## Bug Fixes

- Correct some errors with the initial orientation of moons after the world time changes made in 0.1.1.
- Fix a bug which prevented the surface of Ember in the Cosmos Map from being properly illuminated by the sun and affected by lunar phases.
- Fixed a bug which caused caravan tokens to have a vision distance different than their `EmberHexSightPolygon` result.
- Fix a bug which incorrectly required Location pages to explicitly declare a Terrain type. The default behavior for Locations is to inherit their terrain type from the Biome within which they exist.
- Correct rendering size for the `EmberDynamicToken` for tokens which have width and height other than 1
- Resolve some issues that prevented the Yakoshta Mine scene from tearing down properly.
- Fix the coordinates of the Voidspan Bridge POI in the Pathways.
