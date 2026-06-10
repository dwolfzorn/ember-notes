---
title: "Overview"
journal: "Game Mechanics / Adversaries"
source_uuid: "JournalEntry.PcohneXqJUiaWlLq"
type: ember.lore
tags: [ember, game-mechanics]
---

# Overview

**Adversaries** in Crucible are the non-player characters which populate and inhabit the world. Despite the name, not all adversaries are antagonistic in nature, we simply use the term "Adversary" to refer to non-player actors in the system.

Adversaries share most mechanical concepts in common with [[Overview]] (player characters) including Ability Scores, Resources, Defenses, Skills, Resistances, and Talents, but adversaries progress somewhat differently than player characters.

**Threat Level** describes the degree of mechanical challenge posed by a certain Adversary and is defined by the product of **Level** and **Threat Category**. An adversaries attributes and difficulty scale with higher level and higher Threat Category.

Threat Level

=

Level × Threat Multiplier

## Threat Categories

Each Threat Category contributes a multiplier to the effective **Threat Level** of the Adversary and also determines the number of [[Actions]] that the Adversary has in combat. The Threat Categories in the Crucible system are:

| Threat Category | Threat Multiplier | Action Points | Description |
| --- | --- | --- | --- |
| Minion | × 0.5 | 2 | Weaker than average foes at a given level, minions are less dangerous and more easily dispatched - but may be numerous in quantity. |
| Normal | × 1 | 3 | The standard level of difficulty and challenge for a certain level. |
| Elite | × 1.5 | 4 | Stronger than average foes at a given level, elites are more dangerous and more difficult to dispatch. Elites are more rarely encountered. |
| Boss | × 2 | 5 | Especially dangerous enemies which represent the ultimate degree of challenge at a certain level. Most encounters do not contain a boss. |

## Defeating Adversaries

Most Adversaries do not have **Wounds** or **Madness** pools like Protagonist characters; their ability to withstand harm is determined entirely by **Health** and **Morale**.

When an Adversary **Health** pool reaches zero it becomes **Dead** or, if preferred by the Gamemaster for narrative reasons, **Incapacitated**, and takes no further action during the encounter.

When Adversary **Morale** reaches zero it becomes **Broken**. A Broken Adversary will attempt to flee the battlefield unless they lack instincts of self-preservation or the possibility of escape seems impossible - in which case they will continue to fight to the death.

## Important Adversaries

Some Adversaries are recurring antagonists, named villains, or other narratively significant figures who must withstand damage sustained over the course of many encounters. The Gamemaster may designate such an Adversary as **Important**.

An Important Adversary tracks **Wounds** and **Madness** meters in the same fashion as a Protagonist. Health damage that would reduce the Adversary below zero Health overflows into Wounds, and Morale damage that would reduce them below zero Morale overflows into Madness. The Adversary becomes **Dead** when their Wounds meter reaches its maximum, and **Insane** when their Madness meter reaches its maximum.

The size of an Important Adversary's Wounds and Madness reservoirs scales with their Level and Size, but is independent of **Threat Category**. An Important Elite or Boss therefore shares the same reservoir size as an Important Normal Adversary of the same Level and Size, while an Important Minion has correspondingly smaller reservoirs. Threat Category dictates how dangerous the Adversary is in combat; their Important designation dictates how much sustained harm they may endure outside it.

## Attribute Scaling

Where Protagonists feature an **Ancestry** and **Background**, instead Adversaries use the concepts of [[Taxonomy]] and [[Archetype]], both of which define how the attributes of the Adversary progress as it increases in Threat Level.

## Talent Progression

An Adversary's [[Taxonomy]] and [[Archetype]] each provide a set of Talents, and each granted Talent is assigned a Level at which it is attained. As the Adversary increases in Level it automatically acquires the Talents its progression has unlocked, modeling how more dangerous foes exhibit more formidable abilities.

#### Automation

Granted Talents are added automatically when the Adversary reaches the Level at which each is attained, and are removed automatically if its Level is later reduced below that threshold.

Adversaries may also be assigned additional bespoke Talents beyond those provided by their Taxonomy and Archetype at the Gamemaster's discretion.

## Skill Progression

An Adversary's [[Archetype]] designates the skills favored by its combat style. The Adversary's training rank in each designated skill advances automatically as it increases in Level, one rank every 6 levels:

| Training Rank | Level |
| --- | --- |
| Trained | 5 or lower |
| Proficient | 6 to 11 |
| Expert | 12 to 17 |
| Master | 18+ |

Automatic skill progression establishes a minimum training rank; it never reduces a higher rank which has been manually assigned. This same progression advances the **Natural** weapon training of Adversaries whose Taxonomy cannot use equipment.

## Equipment Progression

An Adversary may be granted equipment by its [[Taxonomy]] or [[Archetype]], each item with a configured quantity and equipped state. If the Taxonomy cannot use typical humanoid equipment, granted equipment is limited to **Natural Weapons** and **Natural Armor** - claws, fangs, hides, chitin, and similar anatomical armaments. A selection of prefabricated natural weapon and armor options is provided in the **Adversary Equipment** compendium pack.

Granted equipment may optionally scale automatically in **Quality** as the Adversary increases in Level, representing the growing potency of a more dangerous creature's armaments. Automatically scaled equipment steps up one Quality tier every 6 levels:

| Quality | Weapons | Armor |
| --- | --- | --- |
| Shoddy | Level ½ or lower | Level ⅓ or lower |
| Standard | Level 1 to 4 | Level ½ to 3 |
| Fine | Level 5 to 10 | Level 4 to 9 |
| Superior | Level 11 to 16 | Level 10 to 15 |
| Masterwork | Level 17+ | Level 16+ |

#### Automation

Equipment granted by a Taxonomy or Archetype is created automatically when that item is applied to an Adversary. Automatically scaled equipment updates its Quality whenever the Adversary's Level changes. Manually changing the Quality of an automatically scaled item releases it from automatic scaling, leaving it under your control thereafter.
