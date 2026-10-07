---
title: "Patch 0.5.2"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.5.2

**Welcome to Ember Early Access!** This update (version `0.5.2`) is a content and functionality update that focuses heavily on the **Attunement System**, adding significant features for attunements and their progression to Ember!

#### Compatibility

Ember patch `0.5.2` requires core Foundry VTT version `14.361` or higher, and one of:

- D&D5E system pre-release version `5.3.3` or higher.
- Crucible system version `0.9.4` or higher.

## Highlights

The major highlights in this update version include:

- The full Ember **Attunement System** has arrived! There are now five full Ranks of attunement progression for each of Ember's 11 attunements. These attunements provide secondary parallel character progression in both D&D5E and in Crucible. Both systems have their own specially chosen system-specific mechanics for attunement which share the same common themes across both systems, but work differently under different rulesets.
- Extensive editorial passes for a large number of quests and area walkthroughs to improve writing quality, formatting, and other stylistic conventions.
- Add a significant number of new Dynamic Token parts as well as re-rendered improvements to existing parts.
- A host of high-value bugfixes to improve the playtesting experience.

More details on each of these highlights appear in the full notes below.

## Features and Fixes

All the new features included in this update are detailed in their various sections below.

### Actors

- Add support to configure an Attunement and progression rank to non-player characters via the Ember Actor Flags configuration sheet.
- Improve Ankarist's biography to avoid revealing some spoilers about his background too early during gameplay.

### Audio

- Flip the exclusion restriction for how the active combat theme is determined to only explicitly exclude FRIENDLY disposition tokens, instead of only including HOSTILE tokens.

### Area Maps

- Convert the Steed's Point area map to Version 14 scene levels.
- Convert the Ordain Spires area map to Version 14 scene levels with two new beautiful levels added for the Markets and Library compositions.
- Fix a bug with the Dripstones scene which was accidentally missing mutual visibility between its V14 levels.
- Fix a bug that Yakoshta Mine Cart passengers are displayed *under* the mine-cart instead of riding atop it.

### Crucible

- Deliver all 11 expanded attunement progression tracks for Crucible with support for progression across Ranks 1 through 5. Each attunement provides an assortment of passive, active, and spellcraft bonuses.
- Move Attunement out of dynamic background which should become only be Culture + Path. Attunement can simply set your initial attunement progression and initially active attunement feature.
- Convert the "Book of Tales" Chapter 2 side quest to provide full gameplay support for Crucible.
- Include Ember-specific Ancestry lifespan and rarity information as part of Crucible character creation.
- Add support in Crucible for rest interruption such that Ember narrative events can break the progress of a group Rest.
- Improve the Attunement step of Crucible character creation to present information on each attunement's ideal as well as their forward-looking feature or talent progression.
- Remove the narrow range on the number of attunement points that can be awarded in a single award to be any positive integer.
- Support switching your active attunement, losing the prior talent and gaining a new talent. In Crucible this is governed by a Rest-time action.
- Improve some playability issues with the Shent Moon Temple Invader in Crucible.
- Fix Crucible bugs with Swallowed Screams (Abyssal Echo) and Horrific Critical (Horrendor) that failed to produce attack rolls due to lack of skill assignment.

### D&D5E

- Deliver all 11 expanded attunement progression tracks for D&D5E with support for progression across Ranks 1 through 5. Each attunement provides an assortment of passive, active, and innate spellcasting bonuses.
- Move Attunement out of dynamic background which should become only be Culture + Path. Attunement can simply set your initial attunement progression and initially active attunement feature.
- Improve the Attunement step of D&D5E character creation to present information on each attunement's ideal as well as their forward-looking feature or talent progression.
- Remove the narrow range on the number of attunement points that can be awarded in a single award to be any positive integer.
- Support switching your active attunement, losing the prior featureand gaining a new feature.
- Remove duplicate versions of scrolls that were included in the Shent Scroll Case.
- Ensure that moving into a different hex clears the prior flag for a rest in progress. Long rests can only be continued if you remain in your current hex.

### Quests and Events

- Add icon styles & enhancers for Critical Failures and Banes to Complex Skill insert.
- Enable attunement awards to be written outside of Events exclusively, allowing attunements to be gained within Area Walkthroughs or elsewhere.
- If an event interrupts a party rest, but the Gamemaster declines that event, automatically continue the rest.
- Implement a new Quest Event prerequisite mode of SOME that allows some of the prior events (but not necessarily all) to be required in order to advance the quest.
- Improve flowchart rendering to depict fully optional events with a dotted line instead of a dashed line. Dashed lines are used for events that might be required (for example in prerequisite=ANY).
- Improve flowchart rendering to route connecting lines in a somewhat more refined way that reduces overlaps and makes it a little easier to follow what is connecting to what.
- Complete a copy and line-editing pass through "The Expedition Challenge" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Crumbling Sanctuary" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Smoldering Cinders" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "To Fall and Fall Again" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "The Winding Trail" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Unfinished Business" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Signal of Intent" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "An Old Friend" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Disgraced House" quest, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Corpin Sanctuary" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Burial Grounds" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Lightless Halls" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Bastion Apex" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Lower Arcturel" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Writhing Grave" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Shent Moon Temple" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Traveler's Rest Healing House" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Pit Trap" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Kalion Stadium Underworks" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Oldcraft Lodge" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Lantern Roads" area walkthrough, making various improvements and stylistic standardizations.
- Complete a copy and line-editing pass through the "Marlstone Manor" area walkthrough, making various improvements and stylistic standardizations.

### Region Map

- Use CalendarData.format to present partial-hour travel times on the region map in hours and minutes.

### Tokens

- Add a wide range of beautifully illustrated new helm parts, some of which replace prior options while others are brand new equipment options.
- Avoid re-randomizing empty token maker equipment slots on template change.
- Add several new horns and color masks for the Drakon ancestry.
- Update the default scale colors for Drakon colors when using randomization.
- Fix an issue with forearm connection points to upper arms.
- Fix a visual bug with the placement of Wirrun hair.
- Fix a visual bug with the placement of Keth heads and their torso connection point.
- Improve the default colors used for Keth hair.
- Add an Ember Actor Flags option to forcibly disable the Ember Dynamic Token for a specific Actor so that gamemasters can require that actor to use a traditional static token or core Foundry VTT dynamic token ring instead.
- Fix a visual rendering glitch with party banner tokens on the Region Map.
- Fix a bug which prevented automatic assignment of a configured Dynamic Token from being persisted as the actor portrait when a player (non-GM) completes the Character Creation process.

### Vistas

- Further improve the visibility of Vista levels for players to have better control over which levels can be viewed outside of an active event.
- Provide some means to switch to a vista scene and level other than the one that was initially configured for an event. For example, switch Helkas to "under attack" mid-event - in a way that works with initial level determination.
- Fix issues with per-placement day/night cycle overrides in vista sprite configuration.

### User Interface

- Provide chat card notification of character attunement progression to keep players informed about their characters' development.
- Allow preloading the Scene that a proposed event will require as part of the Calendar event prompt.

## Bug Fixes

- Fix issue with migration of Aedir Signalpost location configuration data resulting from the consolidation of scenes in V14 levels. Fix some errors on due to removed Aedir Signalpost scene upon adventure import process - can render the Aedir Signalpost gazetteer page invalid.
- Fix incorrect prerequisite configuration for "Breaking the Tower" in Diplomatic Impunity.
- Fix an issue with Codex responsive layout that incorrectly caused the sidebar to wrap below other elements.
- Fix a bug which stopped the current Location shown in Calendar does not update if Calendar is collapsed.
- Swap outdated ancestry concept sheets with updated ones.
- Fix bug which caused Quest Flowcharts to break when updating individual events.
