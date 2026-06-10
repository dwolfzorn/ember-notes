---
title: "Attack Rolls"
journal: "Game Mechanics / Combat"
source_uuid: "JournalEntry.zlYGu6T8PqUvd7UQ"
type: ember.lore
tags: [ember, game-mechanics]
---

# Attack Rolls

An **Attack Roll** is performed by making a **Standard Check** tested against a certain **Defense Score** of the target creature. Attack Rolls are made when the effectiveness of an ability is evaluated in opposition to an opponent. Attack Rolls apply to weapon attacks, spell casts, healing abilities, and even some skill checks which are performed in combat.

The player whose character is performing the Attack is always the one to make the roll, while the effectiveness of the defending character or creature is based on their defense scores. The Attack Roll uses the same modified dice pool as a Standard Check, expressed as:

Attack Roll

=

3d8[+Boons, -Banes] + Ability Modifier + Skill Bonus + Enchantment Bonus

The 3d8 dice pool is modified by **Boons** and **Banes**. The ability modifier for the attack roll is determined by the scaling formula of the weapon type being used. The Skill Bonus for the attack roll is determined by the character's training in that particular weapon type. The Enchantment Bonus for the roll is determined by the magical properties (if any) of the weapon being used.

## Determining Attack Outcomes

The attack is a hit if the result of the Attack Roll exceeds the Defense score of the target. If the result of the attack roll is less than the Defense score, the attack is ineffective. For attacks which target Physical Defense the nature of the miss (a Glance, Blocked, Dodged, or Parried) is further determined by the component Physical Defense scores of the target creature.

## Overflow and Damage

The amount by which the Attack Roll exceeded the Defense score is called **Overflow**. This Overflow amount is multiplied by a **Damage Multiplier** which is usually 1, but occasionally higher or lower. Then any additive **Damage Bonus** is applied, and lastly any **Resistance** possessed by the target creature is subtracted from the result.

Overflow

=

Attack Roll - Defense Score

Damage

=

(Overflow × Damage Multiplier) + Damage Bonus - Target Resistance

While Damage Resistance is a powerful way for creatures to reduce incoming damage, such damage cannot be mitigated entirely. Abilities which deal direct (immediate) damage that surpass the target's Defense Score always deal at least 1 point of damage to their target Resource.

Abilities which deal indirect damage-over-time, however, can have the effects of that indirect damage reduced to zero by Resistance.

## Critical Hits and Misses

If the Attack Roll exceeds the Defense Score by an amount greater than the attacker's Critical Hit Threshold (6 in most cases) it becomes a **Critical Hit**. Similarly if the Attack Roll is lower than the Defense Score by an amount greater than the attacker's Critical Miss Threshold (6 in most cases) it becomes a **Critical Miss**.

A Critical Hit does not directly increase the damage of an attack - although because of the way that Overflow contributes to total damage, Critical Hits always deal more damage than normal hits.

Critical Hits and Critical Misses present opportunities for other things to occur. Many talents allow your character to cause special effects when achieving a Critical Hit, or to react to an enemy if an incoming attack is a Critical Miss.

#### Critical Hit Effects

Zenith the Monk has both the **Concussive Blows** and **Battle Focus** talents. Zenith rolls a **29** on a Strike attack against a terrible Swamp Troll with a **19 Physical Defense**. This attack results in a **Critical Hit** and as a result the Swamp Troll is **Staggered** because of the Concussive Blows talent and Zenith recovers **+1 Focus** because of the Battle Focus talent.
