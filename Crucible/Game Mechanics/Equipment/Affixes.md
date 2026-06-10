---
title: "Affixes"
journal: "Game Mechanics / Equipment"
source_uuid: "JournalEntry.J9uGSwf6JIRsnDx3"
type: ember.lore
tags: [ember, game-mechanics]
---

# Affixes

**Affixes** are magical effects that can be applied to [[Weapons]], [[Armor]], or [[Accessories]] to augment them with enchantments. A browsable compendium of available affixes is provided in the **Crucible > Items > Affixes** compendium pack.

Items discovered in the world may already contain affixes, or you can customize items by applying new affixes through crafting using the [[Glyphweaving]] and [[Enchanting]] tradeskills.

## Prefix and Suffix

Every affix is categorized as either a **Prefix** or a **Suffix**. This categorization determines how the affix contributes to the item's enchantment budget and how it modifies the item's name.

Crafted items can (optionally) be automatically named based on their affixes. A **Prefix** affix contributes an adjective that is prepended to the item name (e.g., a *Keen* Longsword). A **Suffix** affix contributes a noun that is appended with "of" (e.g., a Longsword of *Potency*). An item with both might be named a *Keen* Longsword of *Potency*.

## Affix Properties

Each affix has the following properties:

**Affix Type**

Specifies whether the affix is a **Prefix** or a **Suffix**.

**Tier**

The power level of the affix, ranging from 1 to 3. Higher tiers produce stronger effects but consume more of the item's enchantment budget. Many affixes scale their mechanical effect linearly with tier.

**Item Types**

Which equipment types the affix can be applied to. Some affixes work on any affixable item, while others are restricted to specific types such as weapons only or armor and accessories.

**Adjective**

The word used when composing the enchanted item name. For prefixes this is prepended as an adjective; for suffixes it is appended as a noun with "of".

**Actions**

Some affixes grant usable actions to the bearer. These actions appear on the item alongside any actions the item natively provides and can be activated during combat or exploration.

## Enchantment Budget

The total affix capacity of an item is determined by its **Quality** tier. This capacity is split equally between prefixes and suffixes. Each affix's tier value counts against the budget for its category.

| Quality | Total Capacity | Prefix Budget | Suffix Budget |
| --- | --- | --- | --- |
| Shoddy | 0 | 0 | 0 |
| Standard | 0 | 0 | 0 |
| Fine | 2 | 1 | 1 |
| Superior | 4 | 2 | 2 |
| Masterwork | 6 | 3 | 3 |

An item cannot have duplicate affixes. You can mix and match affixes freely within the budget. For example, a **Fine** item could have one Tier 1 prefix and one Tier 1 suffix. A **Masterwork** item could have one Tier 3 prefix and three Tier 1 suffixes, or one Tier 2 prefix, one Tier 1 prefix, and a Tier 3 suffix, among many other combinations.

The item's **Enchantment Tier** is derived automatically from the total tier value of its affixes. Items with no affixes are considered **Mundane**.

## Unique Items

Items designated as [[Unique]] cannot be enchanted with affixes. These are one-of-a-kind artifacts with manually assigned enchantment tiers that exist outside the standard affix system.
