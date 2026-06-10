---
title: "Event Characteristics"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Event Characteristics

As the Gamemaster, you have access to a number of details about Events which are not available to players.

## Event Characteristics

Each event has a number of properties and characteristics that determine its behavior:

**Event ID**

Each event has a specific identifier which is globally unique. This identifier is displayed in a tag at the top of each Event page.

**Event Type**

Each event is listed as **Exploration**, **Combat**, or **Social**, which describes the *primary* gameplay pillar presented in the event, though it is expected that most events involve multiple solution paths or modes of gameplay. The defined type of event affects its probability of occurring and the way that event is visually presented in the flowchart.

**Milestone**

Some events are special, awarding a [[Milestone Progression]] upon their completion. Events which award milestones are annotated with a ​​ icon in the Quest Flowchart. Milestones may be awarded by the Gamemaster using a button at the top and bottom of the Event page.

**Unique**

Some events are unique, only occurring once. Events that are not unique are repeating and may reoccur under certain circumstances.

**Location, Biome, or Hexes**

Events can be configured so that they only occur in a specific set of **Locations, Biomes**, or **Hexes**. If an event is configured in this way, it will not occur in any location outside of the defined set. An event may also be defined as a **Global** event, which can occur anywhere in the world.

**Prerequisite**

For **Quest Events**, the prerequisite condition for the event occurring is either:

- **None**, meaning that it can occur independent of other events in the quest.
- **All**, meaning that all prior events in the quest must be complete.
- **Any**, meaning that at least one prior event in the quest must be complete.

**Coefficients**

Each event has configured probability coefficients, which use a specialized language of parameters and weights to affect the likelihood of the event occurring in response to different circumstances.

#### Coefficient Documentation

In the future, we will document how Event coefficients are specified in order to empower Gamemasters and content creators to design their own events or quests.

**Active Scene**

Each event can configure what Scene and Composition (if applicable) should automatically become active when the Event begins.

**Encounter Configuration**

Each event can specify the precise configuration of Actors which should spawn in the Scene when the Event begins. This allows the Scenes in Ember to be reusable across events, and for the areas of the world you explore to be dynamically populated upon the initiation of the narrative events which occur within them.

#### Encounter Configuration

In the future, we will document how a configured encounter can be captured and persisted as part of Event configuration. For the time being this is an internal process involving specialized tools.

## Event Content

Each event has content divided into several different sections:

**Content**

The primary gameplay content of the event.

**At a Glance**

A short summary of the event. When the event is proposed to the Gamemaster, this summary is presented along with the event's introductory readaloud from the event's Setting the Scene section.

**Setting the Scene**

An introductory readaloud, which is intended for Gamemasters to narrate aloud to introduce the event and establish its opening premise.

**Journal Summary**

Text which is recorded in the [[The Codex]] upon completion of the event.

**Outcomes**

A set of tracked outcomes for the Event that allow the Gamemaster to record choices made by the players at certain key decision points. These outcomes are also recorded in the Codex and can be used as prerequisite conditions for downstream Events.

## Custom Events

It is possible to add custom Events which augment and extend the Ember game experience!

> [!warning] Gamemaster
> #### Adding Custom Standalone Events
>
> You can add a custom standalone event by creating a new Journal Entry and creating Events using the **Ember Standalone Event** page type.
>
> To register the set of custom events, add your created Journal Entry as a source of events under the **Game Settings > Ember > Standalone Event Journal Entries** configurable setting.

#### Custom Quests and Quest Events

It is not currently possible to define custom Quests or Quest Events, but this functionality will be added in a forthcoming Ember update to empower Gamemasters and content creators. This quest creation will use the same tooling that we use internally to create Ember and its main story!
