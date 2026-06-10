---
title: "Schematics"
journal: "Game Mechanics / Crafting"
source_uuid: "JournalEntry.Lw1A2bPjS3qo0IYE"
type: ember.lore
tags: [ember, game-mechanics]
---

# Schematics

**Schematics** are items in Crucible which define the rules by which input items (often called "ingredients") are transformed into output items (often called "products") using the crafting system and its set of Trades[[Tradeskills]].

## Schematic Definition

Schematics have the following components:

**Category**

The category of a schematic defines which Tradeskill is required to manufacture it.

**Inputs**

Schematic inputs define a set of ingredients which are required in order to manufacture it. Ingredients can be specified in groups, with each group having a specific mode that customizes whether all ingredients in that group are required or only one of several options.

Additionally, each input group can require a certain amount of currency which represents minor ingredients or supplies inherent in the crafting attempt which are not individually enumerated as ingredient items.

Lastly, each input group specifies whether the ingredients in that group are consumed in the process of crafting or not. Note that even ingredients which are not ordinarily consumed during the process of crafting can become broken if the attempt results in a critical failure.

**Outputs**

Schematic outputs define the products which result from successful manufacturing of the schematic. A schematic can produce one or multiple outputs. In the event that multiple outputs are produced, the schematic can configure whether all of the outputs are obtained or only one of them.

If only one output is obtained, the schematic must define a number of alternative input groups which maps to the number of potential products. The input group used during crafting determines which product is obtained.

**Quality**

Schematics have a quality which defines the initial quality of outputs resulting from manufacture of the schematic. The final quality of outputs is also determined by the quality of ingredients used as well as the success tier on the corresponding crafting check.

**Difficulty**

Schematics define a difficulty threshold (DC) which specifies the value that a crafting check must exceed in order to result in a successful outcome.

**Hours**

Schematics specify the number of hours required to complete manufacture. These hours must be performed consecutively without interruption. For especially long-duration crafting endeavors any amount of required resting time should be included in this number.

## Obtaining Schematics

Schematics are generally obtained during the course of adventure by finding them within the world or obtaining them from other characters. Each schematic, like all physical items, has a base price which is further scaled according to its quality level. This price is used when purchasing or selling schematics in trade with non-player characters.

A compendium pack of system-provided schematics is planned for a future update. In the meantime, Gamemasters can define their own schematics which can be awarded to characters directly or placed into an ancillary compendium pack which makes them available for use in crafting.

## Learning Schematics

Schematics provide detailed instructions for the creation process of their outputs. Manufacturing an item requires the crafter to either physically possess the schematic, have mastered it, or for the schematic to be classified as "common knowledge".

Schematics are mastered by completing their crafting process with a result of a critical success. Once a schematic has been mastered it is no longer physically required in order to repeat its process.
