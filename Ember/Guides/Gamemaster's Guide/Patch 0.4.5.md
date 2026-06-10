---
title: "Patch 0.4.5"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.4.5

Welcome to an Ember update and content release, version `0.4.5`. This is a major content update that adds some significant new content and features to the game as part of our ongoing **Ember Beta Two** process.

#### Compatibility

Ember patch `0.4.5` requires core Foundry VTT version `13.351` or higher and:

- D&D5E system version `5.2.5` or higher.
- Crucible system version `0.8.8` or higher.

Testing Ember with the ongoing prototype build of Foundry VTT version 14 is **not recommended**.

## Highlights

The most significant highlights of this new release are the following:

- Add the "Unfinished Business" quest in Chapter 3, around which much of this updates content revolves.
- Add long-awaited support for hand-held items in Ember's dynamic token maker, allowing your character to carry weapons, hold spells, or brandish your trusty … shovel?
- Deliver Crucible conversion for Chapter 2 quests "Ancient Paths" and "A Brush With Death".
- Two beautiful new area maps plus two splendid vista compositions.
- Several new music soundscapes ranging from haunting melodies to fantasy dance music.
- Significant investment into Setting Compendium lore topics in the Deities and History sections.
- A ton of additional features, fixes, and improvements!

More details on each of these highlights appear in the full notes, below.

## Unfinished Business

The central focus of this content release is the new Unfinished Business side quest in Chapter 3. An overview description of that follows. Be warned, this description contains **SPOILERS** about the premise of the quest, skip ahead if you do not wish to be sullied.

### Quest Summary [SPOILERS]

The famed raconteur Agraband Swift approaches the party in Ordain, but this timely reunion is regrettably an unpleasant one. During Agraband's time away from Ordain, his estranged nephew Jorey — the old caravaner's only surviving relative — is rumored to have fallen in with a bad crowd, and he needs the party's help for a wellness check on the younger Swift. The task at hand is a relatively easy one: the characters will serve as a security detail for Agraband during a brief visit to Ordain's Smokerie district, where a warehouse nightclub known as "The Pit Trap" is rumored to host exclusive events. And Jorey's new gang, a competitive team of Solar Games players culled from the ranks of a neighborhood orphanage, are said to be the club's VIPs on a regular basis. Known as "The Undaunted", this team of roguish athletes are local heroes, and access to their inner circle won't be easy.

But what begins as a simple escort mission descends into tragedy when Agraband is mortally-wounded on the dance floor by an assailant. Despite the chaos of the moment, all signs point to The Undaunted's leader Zira Hestidero as the perpetrator of this heinous crime. Yet, as the smoke clears and the venue is evacuated, Agraband's death is not entirely what it seems … he lives! Driven by some unknown source, his wounds seep lambent energy. In the days that follow, the party must help Agraband come to understand the reality of his new "Soulbound" condition, which will inevitably lead them on a local hunt for Jorey and The Undaunted.

Along the way, the party will uncover sordid truths about The Undaunted and their leader Zira Hestidero — namely, that Zira is a powerful warlock of the shard god Ku'arta, and The Undaunted serve as acolytes for the God of Torment's deranged religion of violent brinksmanship. However, once they reach Zira's inner sanctum, the our heroes will discover one final and terrible secret: the intrepid warlock has turned her back on Ku'arta to serve a new otherworldly master. But the cost of this power is steep, and The Undaunted (including young Jorey Swift) are unwitting participants in Zira's horrible ascension. With any luck, the characters will help Agraband settle his unfinished business and put and end to his nephew's time with The Undaunted, sparing Jorey from the servitude of Zira's baleful pact.

## Features and Fixes

All the new features included in this update are detailed in the sections below.

### Actors

- Implement balance adjustments for the Writhing Whisperer encounter to modestly increase the difficulty in both D&D5E and Crucible game systems. The Whisperer now can summon tendril minions and is moderately more threatening at range.
- Rebalance Drakeling, Drake, and Ultra-Drake enemies for more mechanical consistency across creature lifecycle stages and mutagen alterations. Pallid Drakes are now lightning-focused while Drakes affected by the "Quarry Mutagen" are now known as "Afflicted Pallid Drakes" and their bites/spit are poisonous rather than acidic. Enact these changes across both D&D5E and Crucible game systems.
- Add numerous new NPC actors that appear in the Unfinished Business quest including: Zira Hestidero, Jorey Swift, Brackus von Tet, Helice Korsos, and Regus Halamattrix.
- Add numerous new NPC antagonists that appear in the Unfinished Business quest including: Undaunted Adept, Undaunted Trainee, Flesh-Warped Cultist, The Grim Assembly, and Thayloc Courser.
- Streamlined the Abyssal Remains feature for all creatures that possess it.
- Rebalanced Gastern Faviyos to resolve several balance and playability issues.
- All NPCs received general updates and streamlining with no rules-level mechanical changes with a select few exceptions that remain under ongoing review.
- Items with names starting A-D received received general updates and streamlining with no rules-level mechanical changes.

### Area Maps

- A brand new large dungeon environment, the "Kalion Stadium Underworks", depicts the area beneath the grand stadium at Arena Ridge, including an abandoned temple to a Shard God.
- A brand new area map called "The Pit Trap" that depicts a warehouse dance club in Ordain's Smokerie district popular with locals.
- Refinement to the Aedir Signalpost map to redesign the roof to better match region map and vista appearances, this also provides a more expansive and dramatic arena for the battle with the Suarrok that occurs there.
- Add fountain particle emitters to Spellbreaker Tower levels.

### Audio

- Add a new music soundscape for "The Pit Trap" which delivers a fun towards experiencing the Ember version of fantasy club music in Ordain.
- Add a new environment soundscape composition for the Kalion Stadium Underworks.
- Add a new music soundscape composition for "Generic Dungeon" which can be used for underground or dungeon environments that lack a more specific theme.
- Add a new music soundscape called "Solemn Folk" with a specialized composition music composition used for "The Ballad of Dereth Erekos".

### Crucible

- Convert and overhaul the "Ancient Paths" main quest for Crucible support and gameplay.
- Convert and overhaul the "A Brush With Death" side quest for Crucible support and gameplay.
- Support Crucible conversion for a large number of actors which are now playable characters or adversaries including: Vanexis, Baradom, Mythspire Guardian, Jurtak Warrior, Jurtak Hunter, Mutagist Scout, Mutagist Bombardier, Mutagist Vivisector, Afflicted Ultra Drake, Horrendor, Corrupted Cadrithor, Tethra Shul, Arcturian, Ordani, Liestra Grann, Kern.
- Extend the new Crucible character creation step for Starting Equipment to also work in Ember. This step happens after Attunement but before Token configuration, allowing the future possibility for selected initial equipment to automatically configure or suggest certain token maker parts that align with those items.
- Revisit all instances of written "Advantage/Disadvantage" and replace them with a new dual-system compatible @Advantage enricher.
- Revisit Crucible hazards to make sure they use new hazard specifications and tagging conventions.
- Fix the assignment of Crucible's more granular elemental types to Ember combat music soundscapes, fixing a bug which prevented Water Elemental combat music from playing in the Moon Temple.

### D&D5E

- Remove ancestry-granted languages in favor of adding paths with a language choice.
- Fix a bug in D&D Character Creation that incorrectly showed trait sections for capstone Level 20 features.

### Gazetteer

- Apply some new gazetteer page content standards to Chapter 1 gazetteer locations with new templates for locations and settlements.
- Begin rolling out new gazetteer page standards to the Arctus Plateau Gazetteer (ongoing).
- Add a bit more historical lore about the origins of Helkas and the leviathan around which it is built.

### Quests and Events

- Add the new Chapter 3 side quest "Unfinished Business" which delivers a gripping examination into the nature of Soulbound in Ember. See the quest overview section earlier in these notes for a summary introduction to the quest.
- Allow completing "Ooze Control" to provide the crate of Blast Flasks that can be used to clear the blocked caravan route as part of "The Winding Trail".
- Allow the Fulgurite Blades in "Over the Moon" to be persuaded to assist the party with clearing the Strayhearth Caravan blockage in "The Winding Trail".
- Revise and Redesign the combo of "Lunar Awakenings", the "Temple Interior" area walkthrough, and area map interactivity and automation in the Shent Moon Temple area map.
- Revise and improve the Ancient Paths quest with a comprehensive round of review and feedback incorporation.
- Move the "Wayward Sampler" event such that you encounter Tauric prior to the encounter with the Suarrok in "Ravine Outlet" if coming from Helkas.

### Region Map

- Enable the region map Events Overlay to support interaction with event pips that display the event name and its current probability of occurring, allow clicking to open that particular event page.
- Improve the visual aesthetic of cloud cover rendering when fully zoomed out on the region map. Add some atmospheric haze that better provides the illusion of altitude when fully zoomed out.
- Allow GMs to see undiscovered point-of-interest assets on the region map while they remain invisible to players. This allows Gamemasters to see a more visually complete Arctus Plateau. In our subsequent update, we'll be working to improve the UI/UX of location information on the region map to restore understanding to Gamemasters of which locations have been discovered and which not.
- Incorporate mote particles into region weather shader instead of as separate geometry meshes. This improves the visual quality of lunar motes as well as improves the performance cost of rendering them.

### Tokens

- Long-awaited support for hand-held Token items has now arrived! We have already added 50 hand-held item options with many more yet to come. Preexisting tokens will not be holding any items and must be specifically configured to do so.
- Over the coming weeks between now and the start of Early Access we will be systematically going through our NPCs and adversaries to add held items to their configured token appearances. This work has not begun yet, but will soon!
- Improvements to Token Maker ancestry parts: hand corrections, Keth hair sparkles, Kiska torso fur, zeph hand patterns, etc...
- Add a new Human (Abyssal) token maker template that allows depicting horrifying fleshwarped humanoids that have been corrupted and tainted by abyssal powers.
- Add a range of new Token Maker equipment for Undaunted Warlock characters.

### Vistas

- Add a brand new vista, the "Temple of Sockets" that depicts a significant Ordani landmark within the Temple Ward of the city.
- Add a new composition "Blacksmith's Workshop" to the Ortdain Interiors vista useful for shopping or interacting with local artisans.
- Add a new composition "Mystic's Apartment" to the Ordain Interiors vista useful for shopping or social encounters with arcanists.
- Add the new "Cozy Lounge" composition to the Ordain Interiors vista which can be useful whenever the party partakes of a moment of rest in the city.

### Software Design

- Add a V14 Adventure Quickstart configuration for Ember. Note that Ember is not yet recommended for use in V14, but this is just planning ahead.
- Improve asset paths to better support servers running using a routePrefix option.
- Reduce code duplication for the Hex framework.
- Create a light source animation or coloration technique that adapts its color based on the phases of current moons.
- Fix a bug which caused scenes fail to load on Linux due to some strange interaction with dynamic token ring spritesheet preparation.

## Setting Compendium

Significant investment into the Setting Compendium to enact comprehensive improvements with a key focus on Deities and History.

### Deities

- Many deity pages fully written and ready for review and playtesting including: Ravela, Nymbohr, Ku'arta, Lumé, Raineka, Vekalla, Sokali, Lanespear, Steelsong, Malae, Janar, and Thayloc.
- Details about deific pantheons written and ready for review and playtesting including: Auris Bor, The Tanir, Sunalin, Sentina, and Solaru.
- Relationship blocks added to several Deities, more coming for older articles soon!

### History

- Details written about many significant eras or periods of Ember's history including: Troll Invasions, Forsaken War, The Young Kingdoms, the Virulent Plague, The Evernight, and the Night of Swords.
- Details written about Ember's approach to Timekeeping and calendar seasons including: Seeding, Blooming, Steading, Gleaning, Withering, and Stilling.
- Lore Summaries added to all History articles.
