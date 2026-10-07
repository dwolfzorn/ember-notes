---
title: "Region Exploration"
journal: "Guides / Players' Guide"
source_uuid: "JournalEntry.emberPlayerGuide"
type: ember.lore
tags: [ember, guides]
---

# Region Exploration

Exploration of the Region Map — which can be accessed via the ​​ icon at the top of the screen — forms the backbone of Ember gameplay. It is how new Locations to explore are discovered, and how [[Quests and Events]] are encountered. When making decisions about when and how to move on the Region Map, keep the following in mind.

## Hex-Based Exploration

The Region Map is divided into hexes. Individual hexes can be inspected using the ​​ tool found in the Scene Controls interface element on the left side of the screen. Clicking on a hex while this tool is active will display the Hex HUD interface element for that hex.​ You may only inspect details of hexes that you've already explored.

Each hex has several important features:

**Hex Key**

The hex key uniquely identifies the specific hex, such as `s.3209.2871`. The letter prefix of the key describes the vertical slice the hex belongs to: `s` for Surface or `p` for Pathways — these are further explained in Region Levels below. The subsequent numbers of the key represent the hexagonal offset column and row of the hex, respectively.

**Terrain Type**

A hex's [[Terrain]] type can be viewed by hovering over the ​​ icon in the Hex HUD. The details of Ember's various Terrain types are described below.

**Biome**

A hex's Biome can be viewed by hovering over the ​​ icon in the Hex HUD. Each hex belongs to one (and only one) biome.

**Location**

Optionally, a hex may also contain a special Location, the name of which can be viewed by hovering over the ​​ icon in the Hex HUD. Locations are places with specific prewritten lore and gameplay — you can learn more about them in the [[Players' Guide]] section below.

Hexes can have one of eight different Terrain types, the basic four of which simply modify the Land movement speed of your party when moving through that hex — an explanation party movement speeds can be found in the Party Movement section below.

| **Basic Terrain Types** | **Land Movement Speed Per Hour** |
| --- | --- |
| Extreme | One-quarter |
| Difficult | Half |
| Normal | Unchanged |
| Road | Double |

Additionally, there are four special Terrain types with more specific mechanics:

**Impassable**

Impassable Terrain is used to exclude hexes which cannot be occupied by a caravan. You may not move into an Impassable hex.

**Water**

Water Terrain is used to represent oceans, lakes, or other hexes which are mostly aqueous in nature. In water Terrain, a caravan travels using its full Water movement speed per hour.

**Bluffs**

Bluffs Terrain is used to classify special hexes that feature sheer cliffs adjacent to some other lower Terrain. Bluffs hexes count as Difficult for the purposes of movement, with the added rule that you cannot move from a Water hex into a Bluffs hex.

**Canyons**

Canyons Terrain is used to classify special hexes that feature deep elevation relative to their neighbors. Canyons hexes count as Extreme for the purposes of movement. Additionally, any movement into a Canyons hex also counts as Extreme, regardless of the Terrain of the origin hex.

You can also view the Terrain of the Region Map by toggling on the Terrain Overlay by clicking the ​​ icon in the Scene Controls interface element found on the left side of the screen.

When this overlay is active, it displays a legend of Biomes and Terrain types in the world, each with an associated are coded by color or texture displayed on the Region Map. Impassable edges between hexes are also depicted with solid black lines.

## Locations

**Locations** are places with specific prewritten lore and gameplay, and may feature their own unique [[Events]], [[Vistas]], or [[Area Maps]].

Most Locations are initially undiscovered — meaning that they do not appear in the Hex HUD, nor is the artwork that represents them visible on the Region Map. Locations can be discovered in one of two ways:

1. You can encounter the Location directly by traveling to a hex where that location exists. When you enter a hex with a location, it is discovered automatically before any additional narrative events occur.
2. The Gamemaster can individually mark locations as discovered using a button found at the top of each Gazetteer page or on the location view in [[The Codex]].

## Region Levels

The Region Map contains two vertical slices, the Surface and the [[Pathways]]. The party begins play on the Surface, but can move between these two elevation levels by visiting predefined transition points in specific hexes (after first discovering these transition points via exploration).

Each vertical slice has its own unique properties:

**Surface**

The Surface of the [[Arctus Plateau]] is the entire overland region, which includes oceans, mountains, canyons, plains, and the city of Ordain. Your party must have its elevation set to `0` to travel on the Surface.

**Pathways**

The Pathways comprise the vast subterranean realms far below the Surface of Ember, which include unique underground Biomes and Locations to discover. Not all hexes on the Surface are explorable in the Pathways. A caravan must have its elevation set to `-1` to travel throughout the Pathways.

To temporarily view a different slice of the Region Map without moving a caravan there, you can use the ​​ tool in the Scene Controls interface element found on the left side of the screen. This will change your own view of the Region Map without changing the position of your party or what other players see.

## Party Movement

Moving through the Region Map takes an amount of time based on your party's Travel Pace, Land or Water movement speed, and the Terrain type of the tile your party is moving out of. For these purposes, a hex is always considered 1 mile wide.

| **Tile Category** | **Base Party Movement Speed** |
| --- | --- |
| Land | 2 miles per hour |
| Water | ½ mile per hour |

Parties possessing specialized vehicles may travel at different speeds over certain Terrain types. Additionally, exiting a Tile with a given Terrain type may modify your party's movement speed, as explained in Hex-Based Exploration above.

The party also sets a Travel Pace, which may be changed in the Party Sheet (which can be found via the ​ icon at the top of the screen). You may not change a party's Travel Pace while an Event is in progress. Your party's Travel Pace must be set before any Event resulting from travel occurs.

The following Travel Pace options are available, along with their respective advantages and consequences:

**Normal**

You move at your party's normal speed based on the Terrain type. Traveling at this pace has a neutral effect on the probability of Events occurring. This is the standard pace at which non-player caravans will travel.

**Hidden**

You move extremely slowly at ¼ of your party's normal speed. While moving this way, you are much less likely to trigger Combat or Social Events, but much more likely to trigger Exploration Events. If an encounter does occur, each party member is permitted to make a **Stealth (DC undefined)** check at the beginning of the Event to avoid initial detection. Unless otherwise stated, the difficulty of this check will be determined by the **Awareness (DC passive)** Skill of other creatures that are simultaneously present in the area.

**Slow**

You move slowly at ½ of your party's normal speed. While moving this way, you are more likely to trigger Exploration and Social events. If an encounter does occur, each party member is permitted to make a **Stealth (DC undefined)** check with **-2 Banes** at the beginning of the Event to avoid initial detection. Unless otherwise stated, the difficulty of this check will be determined by the **Awareness (DC passive)** Skill of other creatures that are simultaneously present in the area.

**Fast**

You move quickly at 1.5× your party's normal speed. While moving this way, you are more likely to trigger Combat events and less likely to trigger Exploration events. Each hour of travel at this pace counts as 90 minutes of travel for the purposes of determining **Exhausted**.

**Reckless**

You move extremely quickly at 2× your party's normal speed. While moving this way, you are far more likely to trigger Combat events and far less likely to trigger Exploration or Social events. Each hour of travel at this pace counts as 2 hours of travel for the purposes of determining **Exhausted**.

## Time Progression

Actions you take in Ember cause time to progress in the game world. The passage of time can have a number of important consequences:

- **Triggered Events:** Whenever time passes, there is a probabilistic chance of triggering an Event. The ensuing Event could be beneficial, harmful, or both, and will typically involve social interaction, combat encounters, and/or exploration challenges.
- **Branching Quests:** Some Quests in Ember depend on how quickly you reach a specific Event along that Quest. The clock is always ticking; how you choose to spend your time may effect the outcome or availability of Events within current and future Quests.
- **Miscellaneous:** Time passing can also have other minor effects, such as the movement and evolution of [[Weather]] on the Region Map.

For this reason, it's important to understand what exactly causes time to pass:

| **Action** | **Time Passed** |
| --- | --- |
| **Horizontal Movement:** Moving between two hexes on the same vertical slice of the Region Map. | Dependent on your party's movement speed, Travel Pace, and the Terrain of the hex you're moving out of — see Party Movement above.  In Normal Terrain at a Normal Travel Pace and without a vehicle, moving one hex takes 30 minutes. |
| **Vertical Movement:** Moving between two vertical slices of the Region Map at a predefined transition point. | 1 hour. |
| **Resting:** Taking a Rest or Recovery via the Party Sheet ​ . | 10 hours for a Rest, and 10 minutes for a Recovery. |
| **Gamemaster's Choice:** Whenever you take actions in the game world, the Gamemaster may choose to progress the current time. | Up to the Gamemaster's judgement. |

## Visibility and Fog

An essential component of region map exploration is the party's interaction with the Fog of War, which obscures the content of a hex until your party moves close enough to see it.

Every hex on the map has a certain visibility distance, which defines the number of adjacent hexes that can be seen from that location. A hex's Biome and Terrain type can affect the party's visibility distance. There are also barriers between hexes in certain locations which prevent visibility due to a natural or man-made obstacle.

These restricted movement and visibility edges between hexes are visualized in the Terrain Overlay, which can be toggled on via the ​​ icon in the Scene Controls interface element found on the left side of the screen.

**Vantage Points**

A Vantage Point is a special and rarely-encountered location or interactable object within the game world which has the effect of revealing a large area of Fog of War on the Region Map. Vantage Point reveals might happen as a result of certain Event outcomes, or as a byproduct of interacting with certain [[Interactable Object]] during exploration of an Area Map.

#### Shared Fog of War (Work In Progress)

For the time being, all players (and the Gamemaster) have their own independent copies of Fog of War exploration, meaning that the duly revealed areas are not guaranteed to be synchronized across all players.

The Fog of War exploration will be appropriately synchronized when all players are actively connected to the game server; but if a player is either absent for a session or disconnects during a session, they can miss moments of exploration — which will result in the fog of those areas not being revealed for them. This is a temporary limitation, and one objective for us during our continued development of Ember is to eventually feature a fully-synchronized Fog of War system for all players.
