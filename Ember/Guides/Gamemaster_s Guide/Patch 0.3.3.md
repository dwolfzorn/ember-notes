---
title: "Patch 0.3.3"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.3.3

Welcome to an Ember update and content release, version `0.3.3`, which is the **final** release in our **Alpha Two** test process. Following this release, we will be thrilled to move into the first stage of **Beta One** starting with our next planned release, version `0.4.0`.

#### Compatibility

Ember patch `0.3.3` requires core Foundry VTT version `13.348` or higher (version `13.350` is recommended) and:

- D&D5E system version `5.1.9` or higher.
- Crucible system version `0.8.0` or higher.

> [!warning] Gamemaster
> #### Compatibility Warning
>
> Unfortunately the change to Dynamic Token legs included in this update was not able to be done in a backwards compatible way. If you are currently playing Ember Alpha, you will want to reconfigure the legs and pants of custom characters you have created.

## Highlights

The most significant highlights of this new release are the following:

- Chapter 1 is now fully Crucible converted and ready for Crucible testing.
- Added a visualization framework for dynamic weather on the region map.
- Overhauled dynamic token legs for better aesthetics, flexibility, and animation.
- Added a new custom Fog of War layer to the region map.

## New Features

All the new features included in this update are detailed in the sections below.

### Region Map

- Add a custom tiled Fog of War layer for the megaregion along with modular fog exploration tiles that will allow us to reveal portions of information about where places are in the game world that you have not yet personally visited. The visual design of this FOW layer will evolve substantially, as this is just a first pass to accomplish a technical proof-of-concept.
- Redesign the visual weather framework for the region map, creating a rendering framework that will allow us to scale to render many weather events as well as passive ambient weather throughout the region. Currently we support visualization of Rain and Fog weather event types, but more visualization and improvements to visualization will be coming soon!
- Improve the way that tiles are initially loaded for the megaregion to be smarter about exactly which tiles are required for the initial scene load, avoiding unnecessary loading of tiles that will not be used.
- Properly link the required tile loading to render the region map as part of the Scene loading bar to avoid prematurely rendering the scene before necessary tiles were loaded.
- Implement a brief but noticeable fade-in animation when the region map is first loaded to give a more graceful introduction to the scene.
- Remove the limitation that visualization of the weather overlay is only available to Gamemaster users, now allowing players to also see this visualization, but masking it by their explored Fog of War to avoid revealing parts of the region they have not yet explored.
- Implement support of the "Vantage Points" system which can remotely reveal part of the fog of war in the region map in response to an event or interactable moment. An example of a functional Vantage Point is implemented with the telescope at the top of the Aedir Signalpost in the chapter 1 quest "Ooze Control".
- Expand the availability of region map caravan travel sounds to accommodate a variety of travel modes and biome surfaces. This adds support for "cart", "on foot", or "boat" modes of travel with terrain surfaces for "rock", "grass", "city", or "water".

### Actors

- Added a new Actor stat block and portrait for Triss Carpel, steward of Brevin.
- Add three new background character portraits for traveling characters of the Kithil culture.
- Add three new background character portraits for Hulg'run miners in Yakoshta.
- Update Lyla Cevher's portrait and add a new alternate portrait version for Lyla's elegant appearance at the Marlstone Gala.
- Remove old and outdated background character artwork, replacing existing usages of that artwork in vistas or elsewhere. About 10 of these old reference characters were re-rendered with new and improved versions, the others were removed without replacement.
- Revise the Anachraenum Adventurer stat block.
- Add a new Crevvet (CR0) actor with corresponding token options.
- Add a new Oozeling (CR0) actor.

### Audio

- Add a new combat audio soundscape for "Elemental Combat" with existing arrangement variations for Water and Fire elemental types. We'll add arrangements for other elemental types in the future!

### Character Features

- Add Active Effect automation of Thornling Fibrous Resilience when using the D&D5E system.
- Add support to select the **Aster** or **Soulbound** meta features as part of the character creation workflow.
- Add preliminary mechanics and automation support for **Soulbound** (rank 1 only) in both the D&D5E and Crucible game systems.
- Standardize character creation UI differences between D&D5E and Crucible character creation interfaces.

### Gazetteer

- New gazetteer location entries for several districts of Ordain which were not previously populated: **The Trawl**, **The Ordinate**, **The Burns**, and **The Harborage**.

### Dynamic Tokens

- Overhaul the legs of Ember Dynamic Tokens to use a new granular approach with separate leg assets in multiple different leg poses, allowing us to create a wider range of stances and animations.
- Implement a brand new walking animation for Ember Dynamic Tokens which looks more organic and believable.
- Include Signborn ethereal limbs in their walking animation.
- Improve the way that tails (for ancestries that have them) are animated when walking.
- When changing the Template being configured in the Dynamic Token Maker, preserve any parts that were intentionally blank instead of re-randomizing them.
- Fix animation jerkiness in the monster template idle animation.
- Add mechanical legs, arms and forearm parts that can be used as prosthesis or artificer augmentations for playable ancestries.
- Explicitly specify colors for all Token Maker parts so that the configuration UX only presents the color choices which are actually used by the current token.

### Quests

- Implement Crucible gameplay support for the remaining quest events and area walkthroughs that are encountered as part of Chapter 1. There are still a few miscellaneous odds-and-ends we want to improve upon for Crucible chapter 1, but at this point we can consider all of Chapter 1 to be "Crucible converted" and ready to play!
- Enact a number of assorted alpha tester feedback modifications to the three chapter 1 quests.
- Implement some timing restriction that ensures that the Dusktide Festival is not able to start prematurely.
- Revise the "Skies Above" event in "The Winding Trail" quest to lean into the presence of the Vista composition and restructure it's gameplay to involve the vista first before providing a tutorial of the Cosmos map.

### Setting Compendium

- Revise and improve all Ancestry pages in the setting compendium.
- Add a page in the Ancestries journal about Aster.
- Add a page in the Ancestries journal about Soulbound, although the amount of content on this page will evolve and grow as we add more details on the lore regarding this topic.
- Implement ancestry, culture, and attunement mechanical summaries in the Setting Compendium journal entry pages when using the Crucible game system.
- Revise and expand the Character Classes journal in the Setting Compendium with more information and expanded subclass support covering forthcoming subclasses.
- Add links to attunement mechanical features on Cosmos pages which have a related attunement.
- General updates made to all of the Nineteen (the pantheon of deities), including updated domains, lists of followers, and symbols, along with in-depth updates to the following specific deities - Katu, Nite, Sigil, Sionia
- Updates to the Arcturian culture page to provide a more comprehensive culture overview for this primary culture in our setting.

### Vistas

- Added a new vista for Yakoshta that depicts the small mining settlement encountered during the Chapter 1 quest, "Ooze Control".
- Add support for vista assets to be skewed using a shear transform which is ideally suitable for shifting 2d perspective in vista scenes.
- Redesign the EmberVistaConfiguration application to use a two-tab structure to make more efficient use of space.
