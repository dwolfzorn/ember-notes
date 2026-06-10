---
title: "Audio Engine"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Audio Engine

Instead of managing multiple playlists and sounds of audio, there is only one playlist, the [[Ember Soundscape]], which is always playing. There are four different sound channels inside this playlist:

1. **Music** — which conveys the musical feeling and mood of the world. Music volume can be controlled by each player individually using the Music Volume Control.
2. **Environment** — which conveys the soundscape of the world and the places that you visit. Environment volume can be controlled by each player individually using the Environment Volume Control.
3. **Weather** — which adds certain weather effects or other intermittent environmental cues and is also played in the Environment volume control layer.
4. **Effects** — which include interaction sounds like dice rolls, clicks, or notifications which are not in-world audio. The volume of these Effects can be controlled by each player using the Interface Volume Control.

Ember's dynamic audio engine is designed to adapt to gameplay without requiring direct input from the Gamemaster. The following sections detail the primary ways in which the engine adapts.

## Region Map Location

Each biome in Ember is configured with a specific music and environment arrangement. Moving the party token from a hex with one biome to a hex with another will trigger this change automatically.

Specific locations on the region map have their own designated music or environment arrangements that supersede the default audio of the biome within which they are located. For example, the town of Helkas has its own distinct music and environment arrangements which override the default arrangements of its biome, the Verdant Paths, when the party token is located within Helkas.

## Time of Day

Where appropriate for the location or biome, the music and environment arrangements will change depending on whether it is currently day or night according to Ember’s world time.

## Mood

Music arrangements change depending on the currently selected mood, “calm” or “tension”. This can be controlled manually by the gamemaster from the Playlists tab, but is dynamically controlled by the audio engine during some events.

## Events

Some events are configured to automatically change the music and/or environment arrangements at the start of an event, or when a particular outcome is selected by the gamemaster within that event. With some exceptions, events configured in this way reset to the default arrangements for the location or biome and reset the mood to “calm” upon ending the event.

## Scenes

Some scenes are configured to automatically change the music and/or environment arrangements whilst active. For example, the Helkas Festival vista uses its own music and environmental arrangements which are distinct from the default Helkas arrangements.

## Combat Encounters

Music in Ember automatically changes to appropriate combat music during encounters. The specific music is dictated by the composition of foes the party is facing. Each round of combat, the chosen theme may change as the composition of the surviving enemies in the combat encounter evolves.

Only visible tokens with the "Hostile" disposition which are not already defeated are considered. The determination of which combat theme is made using the following criteria in order, resolving ties with the next criteria:

1. Cumulative challenge rating.
2. Number of creatures.
3. Largest sized creature.

The audio arrangement which was previously playing before combat began automatically resumes once the combat encounter is ended.
