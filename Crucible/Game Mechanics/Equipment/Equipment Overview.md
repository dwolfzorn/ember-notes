---
title: "Equipment Overview"
journal: "Game Mechanics / Equipment"
source_uuid: "JournalEntry.J9uGSwf6JIRsnDx3"
type: ember.lore
tags: [ember, game-mechanics]
---

# Equipment Overview

**Equipment** refers to the belongings, weaponry, armor, potions, adventuring equipment, and other types of items which could be carried by a character or found somewhere within the world. Equipment of all types is provided and can be browsed in the **Crucible > Items > Equipment** compendium pack.

## Equipment Properties

Equipment items share a few properties in common across all types:

#### Weight

Each item has a per-unit weight, expressed in pounds.

#### Base Cost

The base cost of an item establishes the basis for any cost scaling which later applies. For some items the base cost and scaled cost are always the same, but some items can have a true value many times greater than the item's base cost.

#### Physical Quality

Many items may be assigned a quality tier which reflects the manufacturing quality or natural rarity of a certain commodity.

#### Enchantment Tier

Weapons, armor, and accessories can be augmented with magic through [[Affixes]]. The enchantment tier of an item reflects the potency of its magical imbuement and is derived automatically from the affixes applied to it. Consumable items do not have an enchantment tier and scale based on quality alone.

#### Rarity

Item rarity quantifies the uniqueness of the item relative to its most common form. Items with higher manufactured quality, stronger magical enchantment, or special properties will have a higher rarity value and therefore a greater value.

#### Investment

Some items, particularly accessories, require the bearer to **invest** in them before their magical effects become active. An invested item must be both equipped and invested to function. A character may invest in any number of equipped items.

#### Unique Items

Some items are designated as **Unique**, representing one-of-a-kind artifacts or items of singular craftsmanship. Unique items cannot be enchanted with affixes and instead retain a manually assigned enchantment tier.

#### Stackable

Some items - typically consumables, tools, and loot - are **Stackable**, allowing multiple identical units to be carried as a single inventory entry with a quantity.

## Investment

Some items require **Investment** in order to fully benefit from their properties. Items which require Investment may be Equipped and used to perform Actions as normal, however their owner does not benefit the effects of that item's Affixes unless the item is first **Invested**.

This is done through the **Investiture** action which may only be performed during a Recovery or Rest. Once an Item is Invested, all of its magical affixes provide their full benefit including any special Actions which they permit the Actor to perform.

When performing the **Recover** or **Rest** Actions, any Item that was previously Invested but is now unequipped will no longer be invested.

## Item Stacking

Items with the **Stackable** property can be combined into a single inventory stack with a quantity, so long as the items are truly identical. Items which differ in quality, enchantment, or any other property do not stack, and enchanted items never stack.

Equipped items never stack. A stack represents identical items stowed together in a character's backpack; when an item is equipped, it becomes an individual item distinct from any remaining stacked quantity.

#### Automation

When you equip an item from a stack, one unit is automatically split off the stack and equipped individually. When you un-equip that item and return it to your backpack, it automatically recombines with an identical stack if one exists. Dragging one stackable item onto an identical item in your inventory combines them into a single stack.

## Item Value Scaling

The base cost of an item is defined by its Standard quality, Mundane enchantment variety. The currency cost of the item scales with its Rarity score according to the following formula:

Item Value

=

((1 + Rarity)^3) x Base Cost

Suppose a **Standard** quality and unenchanted **Mundane** Longsword has a base cost of 50. The same type of weapon crafted at **Masterwork** quality would cost 3200. If a **Legendary** enchantment were added to the weapon through affixes, it would then cost 25,650. A true fortune!
