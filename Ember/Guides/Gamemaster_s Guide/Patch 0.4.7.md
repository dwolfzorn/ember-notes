---
title: "Patch 0.4.7"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.7

Welcome to a major Ember update and content release, version `0.4.7` which is expected to be our **final Beta release** before the beginning of Early Access.

This is a major content update that adds significant new gameplay and features to Ember Beta, but most importantly establishes it as designed exclusively for **Foundry VTT Version 14**. It's unconventional for us to make a major version jump like this with a minor update number (i.e. `0.4.6 -> 0.4.7`), but this update is special because it is a final pre-flight check before we move to version `0.5.0`.

> [!danger] Hazard
> #### Version 14
>
> Foundry Virtual Tabletop version 14 is **not yet stable**, although it is close. It is in the final stages of "User Testing" with the most recent release [https://foundryvtt.com/releases/14.358](https://foundryvtt.com/releases/14.358) being similar to this one as potentially a final pre-stable test.
>
> You should **absolutely not** immediately update your main Foundry VTT environment to version 14. Instead, testing version 14 and this version of Ember should happen in a separate test environment.
>
> #### Version 13
>
> It is not possible to test Ember version `0.4.7` with Version 13. If you want to remain testing in Version 13, you should stay on Ember version `0.4.6` or earlier.

#### Compatibility

Ember patch `0.4.7` requires core Foundry VTT version `14.358` or higher and:

- D&D5E system pre-release version `5.3.0` or higher. Currently at the time of this release, there is no public installation option for this D&D system pre-release, but it can be manually installed from manifest URL [https://github.com/foundryvtt/dnd5e/releases/download/release-5.3.0/system.json](https://github.com/foundryvtt/dnd5e/releases/download/release-5.3.0/system.json)
- Crucible system version `0.9.0` or higher which already implements support for Version 14.

## Team News

Before getting into all the great content in this update, we have exciting team news to share. As many of you know, we conducted a hiring process earlier in the year to recruit a new full-time writer and designer for Ember. I am thrilled to announce the outcome of that search and welcome **Jess Levine**.

[Jess Levine](https://jessfrom.online/about) is an author, TTRPG designer, kindergarten teacher, and communist organizer. Her diverse creative interests are united by one theme: lesbians. She resides in Pittsburgh, on the occupied land of the Shawandasse Tula, Osage, and Monongahela peoples. She publishes TTRPGs as [Jumpgate Games](https://jumpgate.games/), including the CRIT Awards 2023 Best GMless Game of the Year [going rogue 2e](https://jessfromonline.itch.io/going-rogue), a game of war, rebellion, and sacrifice. [I Have the High Ground](https://jessfromonline.itch.io/ihthg)—her tabletop roleplaying game of banter, posturing, and capes—and her satirical scifi skirmish storytelling game [PLANET FIST](https://jumpgategames.itch.io/planetfist) have been met with industry praise and player acclaim. You can find her on Bluesky as [@jessfrom.online](https://bsky.app/profile/jessfrom.online).

Jess joined up with our team this month and has already been hard at work improving the structure, presentation, and completeness of our Ember Player's Guide.

## Highlights

Ember has been comprehensively overhauled to feature compatibility with Foundry VTT version 14. Some of the most notable changes that are part of this include:

- Support for V14 Scene Levels. Not all scenes are converted yet. We are prioritizing new scenes, and conversions for old scenes as we revisit them for other gameplay reasons. Notes on which scenes have been converted are reported in the full patch notes below.
- Region map Fog of War now uses shared fog that allows all players to share the same region exploration progress, even if someone misses a game session.
- Ember has a new Adventure Quickstart option that makes it easy to create and jump straight into a new Ember game using either D&D or Crucible.
- Ember is now integrated with both the D&D and Crucible game systems, especially noteworthy is that Crucible is fully V14 compatible, with a large number of new V14 features already integrated into its gameplay and automation.

Other major highlights in this update version include:

- Complete a massive overhaul of the Ember Dynamic Token infrastructure to switch from individual ancestry-specific spritesheets to a single "mega-spritesheet" which includes all equipment and anatomy parts across all ancestries. For simple scenes, this creates a small additional performance overhead, but for complex scenes with many tokens it is a *huge* performance improvement.

More details on each of these highlights appear in the full notes, below.

> [!warning] Gamemaster
> #### Thank You!
>
> Before getting into the full patch note details, I'd like to conclude by expressing a very sincere thanks to everyone who participated in our Alpha and Beta test phases. Your engagement, feedback, and encouragement have made it possible for Ember to be where it is now and will be fueling our team to keep going as we strive to complete this unprecedented game.

## Features and Fixes

All the new features included in this update are detailed in the sections below.

### Actors

- Introduce several new adversaries including the Paint Globlin and the Chiaroscuran Beast.
- Introduce several new notable characters including Mistress Caberi, Falar, and Cherish Ellerie.
- Update language identifiers used in Ember to feature new lore-appropriate language identifiers and names. An automatic migration is in place that should auto-correct your existing playtest characters, but just in case be sure to double check your known languages. You can find updated information on the Languages page in the Players' Guide.

### Area Maps

- Introduce an expansive multi-level area map named Flotsam Canal Market. This is the first scene we worked on specifically with Version 14 levels, it features 3 levels of gameplay: Dockside, Stoneside, and Promenade. This area is beautifully animated with flowing water, bobbling boats, and all of the advantages that are unlocked by having multiple vertical slices separated as different gameplay Levels. If you are new to Version 14 this is an excellent scene to explore and discover how Scene Levels work in practice.
- Introduce a large new area map for Redwalk Ramble which depicts a beautiful outdoor park space in Ordain's eponymous district. The map is beautifully animated with swaying trees, blustering leaves which respond to global wind conditions, flowing water, fountains, and more.
- Create an expansive area walkthrough for Flotsam Market which is largely experienced during the *Local Color* quest but can be explored independently.
- Add a water bobble sprite mesh that can be used to depict a sprite with a continuous animated bobble effect, typically used for boats or other floating objects.
- The Verdant Paths biome area map is converted to Version 14 Scene Levels.
- The Ordain Flats biome area map is converted to Version 14 Scene Levels.

### Audio

- Fix a bug which could cause multiple music or environment arrangements to play overtop of each other at the same time, resulting from a workflow problem during scene changes.

### Crucible

- Implement compatibility with Crucible version 0.9.0 focusing on Foundry VTT version 14.

### D&D5E

- Display pronouns configured via Ember Actor Flags on the D&D NPC sheet in the header.
- Implement a (previously missing) bidirectional sync between D&D group actor sheet and token HUD for movement actions.

### Guides

- Accomplish a significant revision and restructuring of the Players' Guide to reorganize the way that it presents information. The new guide structure separates the presentation of information into logically separate categories for "Character Creation", "Playing the Game", and "Exploring the Setting". We have also revised the introduction and added a new "How to Use This Guide" page that should make it easier for new players to orient themselves. We aren't quite yet ready to distribute the Players' Guide in PDF format, but this is a big step on the path towards that goal.

### Quests and Events

- Introduce an entire new quest named *Local Color* that takes place in Chapter 3 in the city of Ordain. See the highlights section above for more detail about this quest and its narrative.
- The *Glitter in the Dark* quest in Chapter 2 has been fully converted to Crucible and is ready for playtesting in the Crucible system.
- Implemented significant refinement and rewrites to the Chapter 2 main quest *An Old Friend* to improve the quality and consistency of its gameplay.
- Add 9 new standalone events ranging from Chapter 1 to Chapter 3 that provide bite-sized elements of gameplay to better populate areas of the world and reinforce gameplay themes. These events are specifically: *Pollen Storm*, *In the Behemoth's Wake*, *Arcane Maelstrom, Sanguinary Salutations, Dangerous Descent, Flash Flood, The Giants' Span, Shent Observatory*, and *Voices in the Square*.
- Fix a bug which silently prevented adding tracked outcomes to standalone events.
- Allow encounter configurations attached to quest and standalone events to spawn actors across multiple levels of a scene to fully populate multi-level environments where we previously had to rely on special case logic.

### Region Map

- The Ember Region Map has been converted to Version 14 Scene Levels! Instead of having a bespoke system for "slices" — vertical layers for the Surface and the Pathways — we now use native Levels for this. This changes the UI/UX for how the Gamemaster and Players can navigate levels. You can now easily swap your viewed level using the Scene Navigation element. Players can see which level others are viewing. The Gamemaster can move a token between levels using the Token HUD.
- Scene Regions and Notes are now associated with the specific level they pertain to. This has the advantage of showing — in the Pathways — which points of interest allow an opportunity to return to the Surface.
- Fix a bug with double shadows created by dynamic party tokens on the Region Map, groups using a dynamic token for their party banner will now properly produce only a single shadow.

### Tokens

- Complete a massive overhaul of the Ember Dynamic Token infrastructure to switch from individual ancestry-specific spritesheets to a single "mega-spritesheet" which includes all equipment and anatomy parts across all ancestries. For simple scenes, this creates a small additional performance overhead, but for complex scenes with many tokens it is a *huge* performance improvement. Our new mega-spritesheet textures are optimized in GPU-friendly UASTC format and scenes which a large number of dynamic tokens will experience both improved rendering performance AND increased visual quality. A significant consequence of this is that part names used in the token maker have changed their naming conventions somewhat. We apply automatic migrations to convert old token data into the new specification, but its definitely a good idea to check your own characters' dynamic token configurations to make sure they are still rendered properly.
- Complete the process of re-assigning held token equipment to all characters and humanoid creatures. The characters you encounter and adversaries you face should now be holding sensible items.
- Dynamic party banner tokens now support different "stances" for land and water movement, and will perform an automatic base swap between a land base and a water base depending on the terrain of the hex they move through.
- Fix a bug which caused customization of the Party banner token to be incorrectly saved to the Ember module directory instead of to the user's custom World asset path.

### Vistas

- Implement a spectacular new vista for Cindarin Temple, a cornerstone landmark in Ordain and an essential location for one of our main quest arcs (Sin Marmot).
- Add a new Golden Flats vista composition for "Nain Outskirts".
- Add a new Ordain Streets vista composition for "Dockside Street".
- Add a new Ordain Streets vista composition for "Huge Mural".
- Add a new Ordain Interiors vista composition for "Cherish's Office".
- Redesign the way that Vista Compositions work to instead become Version 14 Scene Levels. Each composition is a different level of the vista scene (parallel slices of the world, rather than vertically stacked ones), and custom vista compositions can be created and customized as custom levels.
- Convert the Verdant Paths vista to use Version 14 levels instead of bespoke compositions.
- Convert the Dripstones vista to use Version 14 levels instead of bespoke compositions.
- Refactor and redesign the custom Vista Configuration tool to work with the Version 14 levels-based approach to vista compositions.

### Other

- Perform a thorough HTML cleaning pass to strip inline style tags, naked span elements, non-breaking spaces, and more.

## Setting Compendium

- Updated the Cultures -> Languages page with new language names.
