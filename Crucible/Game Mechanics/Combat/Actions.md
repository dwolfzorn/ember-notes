---
title: "Actions"
journal: "Game Mechanics / Combat"
source_uuid: "JournalEntry.zlYGu6T8PqUvd7UQ"
type: ember.lore
tags: [ember, game-mechanics]
---

# Actions

**Actions** encompass the activities, techniques, spellcraft, and attacks which are performed during a combat encounter. Actions modify, either positively or negatively, the resource pools of combatants until the encounter is resolved.

## Action Attributes

Actions have the following properties which explain how they are used.

#### Action Cost

Most actions incur a cost in **Action Points**. Action Points signify and represent the time and physical exertion required in order to perform an action in the midst of combat.

#### Focus Cost

Some actions may incur a cost in **Focus Points**. Focus Points signify and represent the mental energy and concentration needed to perform exceptional feats of heroism, spellcraft, or martial prowess.

#### Heroism Cost

Certain powerful actions require spending **Heroism** to activate, representing the extraordinary effort needed to perform them.

#### Weapon Cost

Some actions add the equipped weapon's Action Point cost to their own cost. Heavier or more complex weapons carry a higher action cost, making them slower to use but often more powerful.

#### Action Tags

The functionality of Actions relies on a large set of tags which describe how that action behaves. Each tag can change certain aspects of the Action like it's prerequisites, it's target, the type of damage it deals, what type of dice roll is applied, whether Boons or Banes are added to the roll, and more. A table of Action Tags is listed at the bottom of this page.

#### Target Type

Each action defines a specific target type which describes the affected creatures or area-of-effect of the action. A list of possible target types is provided in the following section.

#### Target Scope

In addition to the range and area of effect of the Action described by the target type, each Action defines a target scope which defines which creature dispositions it can affect. Action scopes include "All Creatures", "Allies Only", "Enemies Only", "Self Only", and "None" for actions that have no specific target disposition.

#### Activation Condition

Certain actions may require a specific triggering condition to be met in order for the action to be eligible for use. If present, this prerequisite condition will be listed on the action, for example, the **Defensive Roll** action has an activation condition *You Dodge an incoming melee Strike*.

#### Applied Effects

Certain Actions may apply Active Effects to creatures they affect. Any effects applied by the Action will be listed on its card with a stated duration in combat Rounds. Some effects last until otherwise removed, having unlimited duration.

## Target Types

#### Blast

This action affects creatures within a circular area of effect centered on a grid space chosen by the character performing the action. The Blast action also specifies a **Size** which describes the radius of effect and a **Distance** which describes the maximum range between the originating character and the chosen center-point of the blast.

#### Cone

This action affects creatures within a narrow cone of effect. The Cone originates at the center of the grid space of the character performing the action. The Cone has an angle of 60 degrees and a specified **Distance** which describes the range of the ability in grid spaces. Cone templates may be rotated in 15-degree increments.

#### Fan

This action affects creatures within a broad cone of effect. The Fan originates at the center of the grid space of the character performing the action. The Fan has an angle of 210 degrees and a specified **Distance** which describes the range of the ability in grid spaces. Fan templates may be rotated in 15-degree increments.

#### Pulse

This action affects creatures in a circular area of effect centered on the character performing the action. The Pulse has a specified **Distance** which describes the radius of the ability in grid spaces.

#### Ray

This action affects creatures in a straight line originating from the character performing the action. The Ray has a specified **Distance** which describes the length of its effect in grid spaces.

#### Self

This action only involves or affects the character or creature which performs it. Self-target abilities affect no other creatures and have no range requirement.

#### Single

This action targets some number of individual creatures other than the creature which performs it. Single target actions also specify a **Number** which describes the number of creatures targeted and a **Distance** which describes the range of the ability in grid spaces.

#### Wall

This action targets creatures in a straight line perpendicular to the character performing the action. Actions of the Wall type also specify a **Size** which describes the breadth of the wall and a **Distance** which describes the maximum range at which the center of the wall may be placed.

#### Summon

This action summons one or more creatures to the battlefield. The summoned creatures are placed within a rectangular area near the character performing the action.

#### Movement

This action involves movement across the battlefield. The character plans a movement path and the action resolves based on the distance traveled.

#### None

This action has no specific target. It may cause certain effects to occur but those effects are not specific to any particular creature.

## Action Tags

The functionality of Actions relies on a set of tags organized into the following categories.

### Equipment Requirements

| Tag | Rules Effect |
| --- | --- |
| Dual Wield | Requires one-handed or unarmed weapons equipped in both hands. |
| One Handed | Requires use of a one-handed weapon. |
| Finesse | Requires use of a weapon that scales using Dexterity. |
| Brute | Requires use of a weapon that scales using Strength. |
| Projectile | Requires use of a projectile ranged weapon. |
| Mechanical | Requires use of a mechanical ranged weapon. |
| Shield | Requires a shield equipped. |
| Unarmed | Requires both hands to be empty. |
| Unarmored | Requires no armor to be equipped. |

### Context Requirements

| Tag | Rules Effect |
| --- | --- |
| Vocal | Requires the ability to speak. Cannot be used while Silenced. |
| Auditory | Requires targets to hear. Deafened targets are excluded from the action. |
| Reaction | Can only be performed on another creature's turn as a reaction. |
| Non-Combat | Can only be used outside of combat. |
| Flanking | Requires the target to be Flanked. |

### Attack Tags

| Tag | Rules Effect |
| --- | --- |
| Melee | Requires use of a melee weapon or being unarmed. |
| Ranged | Requires use of a ranged weapon. |
| Main-Hand | Attacks with the main-hand-equipped weapon. |
| Two-Handed | Attacks with a two-handed equipped weapon. |
| Off-Hand | Attacks with the off-hand-equipped weapon. |
| Thrown | Throws the equipped melee weapon as a ranged attack. |
| Natural | Attacks with the creature's natural weapon. |

### Attack Modifiers

| Tag | Rules Effect |
| --- | --- |
| Deadly | Gains a +1 damage multiplier. |
| Difficult | Incurs +1 Bane to the attack roll. |
| Empowered | Increases base damage by +6. |
| Accurate | Adds +2 Boons to the attack roll. |
| Harmless | Always deals zero damage. |
| Weakened | Reduces base damage by 6. |
| Severe | Converts Health damage to Wounds and Morale damage to Madness. |

### Defense Tags

| Tag | Rules Effect |
| --- | --- |
| Fortitude | Targets Fortitude defense. |
| Reflex | Targets Reflex defense. |
| Willpower | Targets Willpower defense. |

### Damage and Resource Tags

| Tag | Rules Effect |
| --- | --- |
| Healing | Restores Health, targeting the Wounds threshold. |
| Rallying | Restores Morale, targeting the Madness threshold. |
| <Damage Type> | Deals damage of the specified type (e.g. Fire, Cold, Psychic). |
| <Resource> | Applies damage or healing to the specified resource (Health or Morale). |

### Other Tags

| Tag | Rules Effect |
| --- | --- |
| Spell | Involves casting a spell. |
| Movement | Involves movement across the battlefield. The first Movement action each turn benefits from a reduced cost. |
| Reload | Reloads a ranged weapon that requires reloading. |
| Disarm | On a successful hit, drops and unequips the target's mainhand weapon. |
| Maintained | Requires sustained Focus expenditure each turn to maintain the effect. |
| <Skill> | Performs a skill attack using the specified Skill. |
