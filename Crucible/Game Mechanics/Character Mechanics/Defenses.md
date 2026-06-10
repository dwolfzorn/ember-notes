---
title: "Defenses"
journal: "Game Mechanics / Character Mechanics"
source_uuid: "JournalEntry.32WRGVSqCAFveEzA"
type: ember.lore
tags: [ember, game-mechanics]
---

# Defenses

**Defenses** are a set of attributes for each character which define how difficult certain actions are to take against that character. The higher a defense value, the harder it is to perform an action which targets that defense. Success on a test against a defense target requires the roll to exceed the defense value, the defender is successful on a tie.

The defense types in the Crucible system are:

## Physical Defense

**Physical Defense** describes how difficult the creature is to hit with physical attacks, typically melee or ranged weapon strikes. Physical Defense is composed of four components. Total Physical Defense is equal to:

Physical Defense

=

Armor + Dodge + Parry + Block

When an attack misses because it is less than or equal to the Physical Defense total, it is assigned a type of miss based on the proportional mixture of Physical Defense components.

**Armor**

Protection offered by worn equipment or organic attributes like scales or chitin. When a strike fails to hit and is not Dodged, Parried, or Blocked, the Armor defense determines the final outcome. If the attack was not a Critical Failure, it results in a **Glance** - a grazing hit that still deals reduced damage based on the Overflow below the Defense target. If the attack was a Critical Failure, it is fully absorbed by the **Armor** and deals no damage.

**Dodge**

Protection offered by physical quickness and agility. Strikes which fail to hit and are defended by the Dodge defense assume the **Dodged** outcome. Dodged attacks deal no damage and provide opportunity for dodge-based reactions.

**Parry**

Protection offered by guarding against an attack using an equipped weapon. Strikes which fail to hit and are defended by the Parry defense assume the **Parried** outcome. Parried attacks deal no damage and provide opportunity for parry-based reactions.

**Block**

Protection offered by guarding against an attack using an equipped shield or blocking weapon. Strikes which fail to hit and are defended by the Block defense assume the **Blocked** outcome. Blocked attacks deal no damage and provide opportunity for block-based reactions.

## Non-Physical Defenses

The three non-physical defenses are used to protect against actions which do not involve a targeted kinetic strike and instead are withstood or avoided through some other means. Bonuses to these non-physical defenses may be obtained through Talents or magical Equipment.

### Fortitude

**Fortitude Defense** describes a character's ability to withstand bodily harm. Fortitude is modified by **Strength** and **Wisdom** which represent physical resistance and mental resilience respectively. Fortitude defense is calculated as:

Fortitude Defense

=

12 + ((Strength + Wisdom) / 4) + Fortitude Bonus

### Willpower

**Willpower Defense** describes a character's ability to withstand mental or emotional attacks. Willpower is modified by **Toughness** and **Presence** which represent physical grit and mental determination respectively. Willpower defense is calculated as:

Willpower Defense

=

12 + ((Toughness + Presence) / 4) + Willpower Bonus

### Reflex

**Reflex Defense** describes a character's ability to avoid harm that would otherwise occur in a specific area. Reflex is modified by **Dexterity** and **Intellect** which represent quickness of body and rapidity of thought respectively. Reflex defense is calculated as:

Reflex Defense

=

12 + ((Dexterity + Intellect) / 4) + Reflex Bonus

Note that Reflex is typically used as the defense type for intangible - but otherwise physical - sources of harm, while Physical Defense is used to defend against tangible attacks.

## Restoration Thresholds

**Restoration Thresholds** describe a pair of defenses which dictate how challenging it is to restore a creature's resources through healing or rallying actions. Bonuses to these Restoration Threshold defenses may be obtained through Talents or magical Equipment. Since higher thresholds make a character more difficult to heal, bonuses to these defenses lower the threshold instead of increasing it.

### Healing Threshold

**Healing Threshold** describes how difficult it is to restore the Health of a creature. As creatures become more severely wounded, they grow more difficult to heal. This provides a measure of attrition which requires adventurers to carefully manage their accumulation of **Wounds** over time. Healing threshold is calculated as:

Healing Threshold

=

12 + (Wounds / 10) - Bonus

### Rallying Threshold

**Rallying Threshold** describes how difficult it is to restore the Morale of a creature. As creatures become more psychologically damaged they become more difficult to rally. This provides a measure of attrition which requires adventurers to carefully manage their accumulation of **Madness** over time. Rallying threshold is calculated as:

Rallying Threshold

=

12 + (Madness / 10) - Bonus
