---
title: "Initiative and Turn Order"
journal: "Game Mechanics / Combat"
source_uuid: "JournalEntry.zlYGu6T8PqUvd7UQ"
type: ember.lore
tags: [ember, game-mechanics]
---

# Initiative and Turn Order

**Initiative** reflects your character's swiftness of mind and body - corresponding to how quickly you are able to act in a situation where time is of the essence. Your character's initiative during combat is determined by your Dexterity and Intellect attributes, any passive Initiative Bonus you may have, any situational bonus which allows you to react faster than usual, and an element of random chance.

## Rounds and Turns

Each combat encounter is divided into **Rounds** and **Turns**. A **Round** refers to a single set of choices made by the characters in the encounter, where each character gets to act in an order defined by their **Initiative**. Each round loosely represents 10 seconds of real time, where 6 rounds of combat occur each minute of the encounter's duration. A **Turn** represents the actions taken by the one character whose turn it is to act in the initiative order.

## Initiative Calculation

Your initiative is determined by:

Initiative

=

3d8[Boons,Banes] + ((Dexterity + Intellect) / 4)

A situational bonus to initiative could result from you getting the drop on an enemy, or benefiting from a magical spell which hastens your reactions, alternatively you could face a situational penalty to initiative if your reactions are dulled or slowed by alchemical or magical effects.

Each round of combat you have a pool of Action Points which you may elect to spend in various ways. If you are not immobilized or incapacitated, any unspent Action Points at the end of each round are defined as action reserves which each add a **Boon** to your Initiative roll for the following round.

> Re-rolling initiative every round introduces greater tactical challenge for players who cannot rely completely upon always acting before or after the same foes each round of combat. Being able to convert unspent action points into an initiative bonus in the subsequent round can also promote creative tactical solutions to a variety of combat challenges.

#### Automatic Initiative

Since **Initiative** automatically updates every **Round** of combat, players do not roll for Initiative themselves. Instead this process is automated that every character's initiative roll is automatically performed in order to maintain a satisfying pace to combat encounters.

#### Incapacitated Combatants

Combatants who are **Incapacitated** or **Dead** are automatically placed at Initiative 0 and their turns come last in each Round.

#### Unaware Combatants

Combatants who are @Condition[Unaware] act at Initiative 1, last aside from Incapacitated creatures. Once a creature is no longer Unaware, it rolls Initiative and acts as normal for subsequent rounds.

#### Tiebreaking Procedures

Ties in initiative are resolved by applying the following tiebreaking criteria in order:

1. A combatant who used the **Delay** action this round to act at this Initiative acts before any combatant who did not delay to this Initiative.
2. Among combatants who delayed to this Initiative, the one whose original **Initiative** was higher acts first.
3. Combatants with a higher passive **Initiative** bonus.
4. Combatants with more maximum **Action**.
5. **Adversaries** act before **Heroes**.
6. Any remaining ties are placed in alphabetical order.

## Escalation and Morale

As the tension of combat escalates - so too do the consequences on **Morale** for combatants. After 6 Rounds of Combat at the start of each subsequent round, the combatant with the highest **Initiative** result gains additional Morale equal to the numbered **Round** of combat. The combatant with the lowest Initiative result (excluding Incapacitated and Dead combatants) loses Morale equal to the numbered Round of combat.
