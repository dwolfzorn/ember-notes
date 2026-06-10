---
title: "Engagement and Flanking"
journal: "Game Mechanics / Combat"
source_uuid: "JournalEntry.zlYGu6T8PqUvd7UQ"
type: ember.lore
tags: [ember, game-mechanics]
---

# Engagement and Flanking

**Engagement** describes the total number of opposing Combatants that you can simultaneously battle against without becoming more vulnerable. The base Engagement for **Hero** characters is **1**, while the base Engagement for **Adversary** characters is equal to their **Size - 2** with a minimum of **1**.

When a character is adjacent to multiple enemies where the number of engaged enemies equals or exceeds their Engagement score, that character is said to be **Fully Engaged**. Some conditions or action prerequisites may only occur when a creature is Fully Engaged.

To help visualize how Engagement and Flanking mechanics works, there is a special toggle that can be used in the **Tokens Layer** of the **Scene Controls** UI on the left side of the screen. While enabled, the Engagement rectangles and flanked status of a creature will be visualized to help understand its current status.

## Flanking

Flanking occurs when you and your allies team up to combat an opponent. When a creature is **Engaged** with a number of creatures greater than its **Engagement** score it has the **Flanked** condition. The Flanked condition has multiple stages, and each stage of Flanked contributes +1 Boon to melee attack rolls made against that creature.

Flanked Stage

=

Number of Engaged Enemies
- Engagement Score
- Engagement Bonus from Adjacent Allies

Krag, a heavily armored fighter, has an **Engagement** score of **3**, with bonuses from his **True Grit** talent and from his Heater Shield with the **Engaging** property. Krag can engage with three opposing combatants simultaneously without them acquiring any Flanking bonus against him. However if Krag is surrounded by five Goblins, he would have the **Flanked 2** condition and each Goblin's attacks would benefit from **+2 Boons (5 engaged enemies - 3 Engagement)**.

While having more Engaged enemies increases your Flanked condition, having adjacent allies who are supporting you can nullify flanking. Allies contribute their own **Engagement** as a bonus to yours if you share enemies in common that you are both Engaged with.

Krag, from our previous example, is still surrounded by 5 Goblins and is **Flanked 2**. His ally Jinora comes to join the fray. Jinora has an **Engagement** score of **2**. When Jinora moves next to Krag, and into a position where Jinora can engage at least 2 of the Goblins, Krag's Flanked condition is removed because Jinora's 2 Engagement adds to Krag's own Engagement score, allowing Krag to engage up to 5 enemies.

A status effect condition when a creature is **Flanked** is automatically computed and added whenever a character moves into or out of **Engagement** with other adversaries. The Flanked effect automatically applies the correct number of boons to melee attack rolls against the Flanked creature.

## Disengagement

When an opponent attempts to disengage from you in melee combat it becomes temporarily vulnerable, allowing you to perform a **Reactive Strike**, a weapon attack as a Reaction. You may not make a Reactive Strike if you are @Condition[Unaware] or @Condition[Flanked] by other remaining opponents.

The Goblins in our previous example have decided that Krag is too tough and it is advisable to disengage in search of more vulnerable prey. Two of the four goblins may move away from Krag without reciprocity, because Krag is otherwise **Fully Engaged** and therefore cannot retaliate. When the third goblin moves away, however, Krag performs a **Reactive Strike**, burying his battle axe in the back of the retreating evildoer!
