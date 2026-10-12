---
title: "Patch 0.6.3"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.6.3

Welcome to Ember Early Access! Version 0.6.3 is a major content update focused on Chapter 4 of the story. It adds a large new quest, makes extensive improvements to earlier content, and introduces significant new gameplay features!

#### Compatibility

Ember patch `0.6.3` requires core Foundry VTT version `14.369` or higher, and one of:

- D&D5E system pre-release version `6.0.6` or higher.
- Crucible system version `0.11.1` or higher.

## Actors

- Add exciting new characters to meet as part of "The Flood and the Flame": Kess the Firemage, Flamewarden Tiga, Sorak the Stormheart, Fesira Inari, and Vekaris Ossa.
- Add thrilling new adversaries to face as part of "The Flood and the Flame": Flame Cinder, Ignarch, Phoenixar, Pyreling, Sirohawk, Droplet, Benthweaver, Hydrotherm, Riptongue, Spawn of Bwagaw, Dreadmaw, Lithovore, Vexan, Voidfire Cinder, Voima, Fiyaran Cultist.
- Add the V'mar Ravager, a winged predator that dives on its prey from above, encountered in Mythspire Observatory as part of "Ancient Paths".

## Area Maps

- Add a massive new multi-level dungeon map for "Temple of the Tides", a signature underwater location involved in "The Flood and the Flame" quest, which is an ancient site of the Sedyri culture.
- Implement a thrilling multi-level dungeon, the "Citadel of Fire", which challenges players to brave an active volcano which has been shaped by otherworldly powers into a fortress.
- Add a brand new Area Map for the Caryx Savanna Biome with several different composition levels.
- Implement a new Mycelian Expanse biome map Level for "Scout Encampment", the scouts' campsite among rocks and fungus used for the optional combat encounter in Ancient Paths. Attacking the scouts moves the fight there, with the scouts in place and combat started.
- Add interactivity and visual improvements to the Repurposed Quarry area map. A trapdoor in the Gravel Chute drops anyone standing on it to the level below, and two laboratories can explode with a blast heard across the quarry, then keep burning with flames, embers, and an active fire hazard.
- Rebuild the Mythspire Observatory area map as a single scene with two levels, the Upper Halls and the Lower Chamber. The chamber and its lift can be seen from the halls above, the Mythspire Elevator rides smoothly in both directions, seven crystals light up as the party works through the lift puzzle, the Pathways Elevator carries the party down into the Pathways, and a tripwire in the Crumbling Walkway releases a billowing cloud of poison gas.
- Add a new visual effect for active fire that produces a shimmering haze of intense heat.

## Audio

- Add a new Environment Ambience soundscape for the Caryx Savanna biome.
- Add a new Music soundscape for the Caryx Savanna with day, night, and tension themes.
- Add new Environment Ambience for underwater exploration areas.
- Add a new Music soundscape for exploration of the Citadel of Fire.
- Update the Sedyri music theme with more layers and a revised composition featured in Tomb of the Unifiers and Temple of the Tides.
- Add new sound effects for a variety of interactable moments in Mythspire Observatory or the Repurposed Quarry.

## Crucible

- Add optional Origin Stories to each Path: short backstory seeds that suggest why your character set out on their heroic journey. In character creation you may choose one, and it is added to your character's Background.
- Redesign Crucible Drakon, Kiska, Zeph, and Nirae ancestries to formally grant the full talents for spellcraft runes as part of their ancestry lineage benefits.
- Playtest and polish the Crucible conversion of Ancient Paths, which previously had some issues that needed improvement.
- Revise Ember ancestry talents to use @Rule enrichers for more informative tooltips.
- Uniquely identify Ember spellcraft inflections with an "ember" prefix.

## D&D5e

- Add optional Origin Stories to each Path: short backstory seeds that suggest why your character set out on their heroic journey. In character creation you may choose one, and it is added to your character's Background.

## Quests and Events

- Add a feature to exclude an event from contributing involved locations to its presentation of locations on the "Quest Overview" page.
- Rewrite the "Guarded Neighbors" event for more nuanced gameplay and foreshadowing of later quest events.
- Fix an issue with encounter spawn configuration in "Reclaiming the Concourse" in Crucible where the spawn configuration contained D&D5e-specific data that was incompatible cross-system.
- Fix an issue where the companion chosen to travel with the party at the end of "The Winding Trail" was not added to the party, which could cause the wrong Chapter 2 events to appear.
- Fix an issue where event encounters on vistas and the region map failed to spawn any group that depends on an event outcome.

### The Flood and the Flame

- Implement a large new Chapter 4 quest, "The Flood and the Flame", which introduces fascinating history of the Sedyri culture, the Flamewardens, the ecological cycle of fire and flood in the Caryx Savanna, and the rise of a maddened pyromancer who threatens that delicate balance.
- Add exciting new gazetteer locations in the Caryx Savanna to discover, including Tajar, the Tomb of the Unifiers, Kitara Shrine, the Temple of the Tides, and the Citadel of Fire.

### Ancient Paths

- Complete a comprehensive copy and line-editing pass of the "Ancient Paths" quest and its "Mythspire Observatory" and "Repurposed Quarry" area walkthroughs, with clearer read-alouds, revised encounter tactics, and checks that work in both systems.
- Rework the quest's flow so it can be completed reliably. Ankarist's path to Mythspire Observatory works whether the party travels with him or reunites with him in Skybrush, and events that could stall or skip are fixed, including the transition into "A Strange New World" and the prerequisites for "Emergence".
- Rewrite "Missing Scouts" around a social challenge, with an optional ambush at the scouts' camp, and revise the other Pathways events for clarity and system parity.
- Rebuild Mythspire Observatory as a single multi-level scene, with a new crystal puzzle that unlocks the lift into the Pathways, a new V'mar encounter, and an automated tripwire trap.
- Rebuild the Repurposed Quarry as a single multi-level scene, with a springable trapdoor, explosive laboratories, and a new Evidence page for capturing and interrogating Mutagists.
- Improve the flow of the debrief in Ancient Paths "Grim Findings" to be more straightforward to play, with Shaar leading the debrief and asking questions to the party to answer.

## Region Map

- Add Map Fragments to the region map: hand-drawn maps of its many areas, which appear within the Fog of War to show the lay of the land before the party has explored it. A fragment is revealed when the party explores any hex it covers, or when a story Event describes that area. Revealed fragments sketch the terrain ahead, while the true Terrain, Locations, and dangers of each hex remain hidden until the party explores them in person.
- Add Direction Markers to the region map: labeled icons that appear when a story Event tells the party where to find something, such as a village to visit, a ruin to investigate, or an ally to meet. Markers are drawn above the Fog of War, so they point the way through unexplored territory, and some can also be spotted by traveling nearby. Each marker disappears once it has served its purpose, such as when the party discovers the Location it points to. Dozens of markers now guide quests across the Surface and the Pathways, from "The Winding Trail" to "The Flood and the Flame".
- Re-enable small wildfires to happen in the Caryx Savanna automatically without being manually triggered.
- Implement lunar influences on the probability of weather events.
- Add some improved parameters for power users who are spawning or configuring weather events: control the waypoint granularity, specific string identifiers, override hexFilter.

## Tokens

- Ensure that new or modified humanoid character or creature tokens have captured WEBP snapshots.
- Rework the visual style of Signborn ancestry parts so that their ethereal limbs look more majestic.

## Vistas

- Implement a beautiful new biome vista that depicts the Caryx Savanna, featuring a number of different composition Levels used for specific narrative moments or general purposes.
- Add a gorgeous new vista for the settlement of Tajar in the Caryx Savanna, a town built using architectural touchstones of the ancient Sedyri culture.
- Design a framework that allows a specific Vista Level to belong to a gazetteer location even if the broad scene does not. For example, the storm shrine should get a location-specific soundscape and location-specific weather.

## Other

- Add new location discovery screenshots to the Codex for a wide range of biomes or locations which did not previously provide one.
- Migrate all PIXI.Particles effects to use the core VFX and ParticleGenerator frameworks.
