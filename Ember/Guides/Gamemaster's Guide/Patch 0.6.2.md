---
title: "Patch 0.6.2"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Patch 0.6.2

**Welcome to Ember Early Access!** This update (version `0.6.2`) is a minor patch and bugfix update in our series of Ember releases focused on **Chapter 4** of our game story. This patch primarily adds compatibility for Crucible system version 0.11.0, but also adds some new content and bugfixes to improve playtesting!

#### Compatibility

Ember patch `0.6.2` requires core Foundry VTT version `14.368` or higher, and one of:

- D&D5E system pre-release version `6.0.2` or higher.
- Crucible system version `0.11.0` or higher.

The highlight of this release is the new Vista for All Fable Keep, which is a beautiful depiction of one of Ordain's most prominent landmarks.

## Actors

- Fix Ruby Grove actor portraits have broken world links: Doomsayers, Sanguinaries, Maevryn, and Kyrban.
- Adjust the hit points formula of the Shadebranch actor.

## Area Maps

- Enable the Suppress Weather region effect to suppress or muffle Ember audio on the weather soundscape channel.
- Add missing parallax overdraw to Rustvar Valleys river water.
- Fix mechanics and visibility of exterior basement ledge transition in the Aedir Signalpost.
- Empty Laboratory has no map note and the nearby note is labelled Entry Tunnels.
- Create a distinct journal entry for Zor-Thal's statue in the Kadra Zann walkthrough.
- Add a new software framework for creating tree canopy sprites in a simplified and consistent way that handles their lighting, shadow, and falling leaf particles.

## Crucible

- Implement an automatic migration that updates Ember Crucible characters to rebuild their dynamic background items for the Crucible 0.11.0 release.
- Rebalance Crucible Archetypes to have new Proficiency training progression weights.
- Correct Cor'ak ancestry talent to provide armor bonus based on half-Toughness rather than full-Toughness.

## D&D5e

- Implement automation for D&D travel exertion rules using new D&D5e system 6.0 group saves and Ember tracked travel duration.
- Improve the D&D5e short rest and long rest UX with an improved dialog prompt using D&D system 6.0 features.
- Improve clarity of Akon 4 and Akon 5 attunement regarding their extra damage dealt.
- Add Setting Compendium lore suggestions for using new Arcana Unleashed subclasses.
- Update the Skull of Merliota item.
- Fix a bug which caused character portraits to scale incorrectly in vistas under the D&D 6.x system update.

## Quests and Events

- Add a small Foundry VTT tutorial block to the "Sickly Drakelings" event that explains how elevation and levels are used in this encounter and future encounters in Ember.
- Implement a vista level change when the "Ill Met in Talei" barge explodes.
- Automate transition up the Arbore Sanctorus in the "Local Experts" event and activate its vista on event outcome.
- Ensure that the Winding Trail "Leavetakings" event displays in the Events HUD in the hex where it is expected to appear, even though it may appear in any hex globally upon a long rest.
- Imporove Splinter Canyons "Dangerous Descent" such that it only occurs during a Golden Flats -> Splinter Canyons move.
- Fix a bug which caused Nain to not be revealed after checking the "Nain Discovered" outcome.
- Fix invalid event coefficients in Pollen Storm, Behemoth's Wake, and Shine On.
- Double the likelihood of "The Troubled Caravaneer" event happening.
- Remove empty and unintended Event outcomes recorded in Ruby Grove "Capricious Concerns".
- Include missing rollable tables which were omitted from the Ember build and is part of the Ruby Grove quest.
- Address some miscellaneous feedback on the "To Fall and Fall Again" quest.
- Add gameplay for conversation with Maevren throughout Ruby Grove events.
- Address assorted "Crumbling Sanctuary" event feedback.
- Improve the presentation of Avwynn in the Crumbling Sanctuary quest.

## Region Map

- Track party travel accumulation and present party travel stats on hover in the calendar.
- Store current and prior hex coordinates in party token flags so we can recover movement direction vector. Fixes Ordani Skywalk state uncertainty.
- Restore the missing POI icon for Dradley Grange.

## Tokens

- Assign themed token parts to appropriate actor randomization rules.

## Vistas

- Add a brand new vista for All-Fable Keep, used prominently during "The Expedition Challenge" quest.
- Remove Del Kalais from the vista composition used during the "Grim Findings" event.

## Other

- Add coefficient key validation into the HTMLCoefficientTagsElement.
- Ensure that Ember migrations wait for upstream D&D5E or Crucible system migrations to complete before beginning.
- Fix a bug in the Codex which prevented the selection of discovered entries.
