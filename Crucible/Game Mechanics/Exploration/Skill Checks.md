---
title: "Skill Checks"
journal: "Game Mechanics / Exploration"
source_uuid: "JournalEntry.YiJVTs79H8jKJDtZ"
type: ember.lore
tags: [ember, game-mechanics]
---

# Skill Checks

There are often situations that require a character to confirm their capabilities. At any time the GM may call for a **Skill Check**— a simple roll to test whether you have sufficient skill to perform an action or recall some piece of information. Each skill is associated with two [[Ability Scores]].

A character's skill rank is determined by their degree of training, adding a bonus to checks made for that skill. Each skill has 4 ranks as well as an 'untrained' rank.

| Bonus | Rank | Scale |
| --- | --- | --- |
| -4 | Untrained | You are decidedly as good at this skill as the average person who has absolutely no education or professional training related to it. |
| 0 | Novice | You have received training in the basic practices common across all parts of that skill. |
| +1 | Journeyman | You've reached some degree of advanced training and know some of the less common principles of that particular skill. |
| +2 | Adept | You have exceeded all the bounds of professional training. There is nothing more about your skills that you can learn from others. All that is left is to perfect your understanding. |
| +3 | Master | You have mastered this skill. There is nothing more to learn about it. |

## Individual Skill Checks

Skill checks use the same equation for calculation that a [[Dice Mechanics]] does. Like all Standard Checks, skill checks can result in a **Critical Success** if the total exceeds the DC by more than 6, or a **Critical Failure** if the total falls below the DC by more than 6. The GM may choose to apply additional consequences or benefits based on these critical outcomes.

Skill Check

=

3d8[Boons,Banes] + (Sum of Scaling Abilities / 4) (Round Up) + Skill Bonus + Enchantment Bonus

#### Player's Guidance

You can roll a skill check at any time from the skill tab of your character sheet, simply by clicking on the skill name.

#### Example: Rolling a Skill Check

Albert, a seasoned naval captain, is faced with a dilemma. His ship is about to be imperiled by a storm, and his crew is looking to him to safely navigate out of the harbor. As a Master of the Wilderness skill, Albert taps into his extensive knowledge of seafaring. This will be a Difficult (DC 24) roll; Albert rolls his Skill check. Unluckily, Albert's dice total turn up **6**, **4**, and **7** for a total of **17** and a far cry from the needed 24. However, Albert's Toughness is quite high at **8**, and his Wisdom is **6**, so the composite Ability Bonus for a dual-scaling skill adds **+4**. Albert's Master rank in Wilderness adds a Skill bonus of **+3**, and he also happens to have a magical set of nautical charts which grant a +2 enchantment bonus, pushing the result of the roll to **26**, a narrow success.

## Passive Skill Checks

Crucible allows any skill check to be considered passive at the discretion of the gamemaster. In a case where a character's trained skill rank is sufficient to exceed the DC of a roll by adding 12 to it, the check is considered successful without a need to roll. Whenever a Skill check can be attempted passively, it may also be attempted through an active roll if a Player suggests their wish to do so.

#### Gamemaster Guidance

In Journal content, passive check opportunities are provided to the Gamemaster using an enricher syntax presented as **Awareness (DC 14, Passive)**.

Generally, players should not be aware that a passive check occurred unless it results in a Success, in which case it is appropriate for players to know that they succeeded on a certain passive check.

If multiple player characters all succeed on a check, the Gamemaster should choose whether to attribute the success to all characters, or choose one specific character as the narrative focus for the moment. If choosing a single character, prefer whichever character has the highest Passive score in the Skill unless there is a stronger narrative reason to choose another protagonist.

## Group Skill Checks

Sometimes a situation or challenge may call for a group skill check in which the entire party attempts a task together. The narrative consequences of their efforts are determined based on their collective success or collective failure. In a Group Skill Check, every participant chooses from one or more eligible skills, rolling against a DC configured by the Gamemaster.

#### Gamemaster Guidance

The Gamemaster can initiate a Group Skill Check in a few different ways: at any point using the [[Configure Group Check]] macro provided in the **System Macros** compendium pack, or by clicking on a group check enricher presented like **Stealth (DC 13, Group)**.

Both methods present a Group Check Dialog that allows the Gamemaster to configure details of the check, select which Skills participants are eligible to use, assign DCs to each individual skill, specify collective Boons or Banes that apply to all participants, and configure which Actors must participate in the check.

Clicking **Request** will prompt other players to perform rolls on behalf of Actors they control. Clicking **Roll** will perform the group check on all players' behalf. The GM may skip or re-request rolls for individual participants, and may roll on behalf of actors whose owners are not online. As participants submit their rolls, the chat card updates in real time.

The collective result of a group skill check is determined by tallying the results of each participant's individual roll. Skipped participants are excluded from both the score and the effective participant count.

- **Individual Failure**: 0
- **Individual Success**: +1
- **Individual Critical Success**: +2
- **Individual Critical Failure**: -1

The total score is then compared against the number of counted participants to determine the aggregate result:

- **Critical Success**: The total group score is equal to or greater than the number of participants.
- **Success**: The total group score is greater than half the number of participants, rounding down.
- **Failure**: The total group score is positive but below the success threshold.
- **Critical Failure**: The total group score is zero or less.

#### Example: Group Stealth Check Failure

Four heroes attempt to silently slip past a sleeping ogre, calling for a Stealth check at DC 18. Two heroes pass and two fail, giving the party a total score of **2**. Because a score of **3** was required for the group to succeed, the party narrowly fails the check and rouses the ogre. Had a third hero rolled successfully, the group would have crossed the success threshold; had all four rolled successfully, the group would have achieved a Critical Success and slipped past completely undetected.

#### Example: Group Athletics Check Critical Success

The same four heroes attempt to climb a treacherous cliff face, calling for an Athletics check at DC 20. Two heroes succeed normally and a third fails outright, but Belladonna - an experienced climber - rolls a Critical Success. The party's score is **1 + 1 + 0 + 2 = 4**, which equals the number of participants in the check. Belladonna's exceptional ascent compensates for her companion's slip, and the group achieves a Critical Success, reaching the cliff top with surprising ease and securing a tactical advantage at the summit.
