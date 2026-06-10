---
title: "Movement"
journal: "Game Mechanics / Combat"
source_uuid: "JournalEntry.zlYGu6T8PqUvd7UQ"
type: ember.lore
tags: [ember, game-mechanics]
---

# Movement

**Movement** is one of the most important actions that characters in Crucible will perform in combat.

Movement and positioning in Crucible uses a fine-grained 1 foot grid which provides excellent features like tactically significant movement and positioning, meaningful differences in creature sizes and weapon ranges, and intuitive areas of effect.

Distances in the Crucible system are defined in feet. The grid size of Scenes in Foundry Virtual Tabletop will be automatically adjusted to have a subgrid with distance units of **1 foot**. Scenes must use a **5 foot** grid size for the subgrid to display correctly.

Measurement distance is computed using the **Exact √2** diagonal measurement mode.

Many combat actions a character can perform involve the **Movement** tag. Such actions allow you to move a certain number of feet up to or equal to your character's **Stride** attribute. The distance allowed by a **Movement** action cannot be broken up or interrupted. There is no leftover movement saved across actions if you move less than your Stride.

There are no facing mechanics in Crucible, meaning that it does not matter which direction your Token is facing on the map, your character is able to perceive and act in a full 360 degree radius unless otherwise limited by some special effect or condition.

## Movement Cost Calculation

The **Action** cost of a given Movement is computed as follows:

1. **Distance** is computed center-point to center-point, where the distance of diagonal movement is computed using the **Exact √2** diagonal measurement mode.
2. **Effective Distance** is computed by applying the following modifiers in order:
  1. **Status Conditions** are applied first, as described below.
  2. The effects of **Terrain** are applied second.
  3. Modifiers resulting from the **Movement Type** are applied.
3. The **Action** cost of the movement is computed as:

Action Cost

=

ceil(Effective Distance / Stride)

1. If a **Free Move** is available, the final Action Cost of the movement is reduced by 1.

### Movement Conditions

The following **Status Conditions** affect the measurement and cost of movement.

#### Slowed

The **Effective Distance** traveled by any movement is doubled.

#### Hastened

The **Effective Distance** traveled by any movement is halved.

#### Restrained

Movement is impossible.

### Movement Types

The following **Movement Types** are supported:

#### Walk

No change to Effective Distance.

#### Step

You move carefully, but your **Effective Distance** traveled is doubled.

#### Crawl

You move while **Prone** and your **Effective Distance** traveled is doubled.

#### Jump

Your **Effective Distance** traveled is doubled, but required by certain actions or to surmount certain obstacles.

#### Climb

Used while scaling vertical surfaces, your **Effective Distance** traveled is doubled.

#### Swim

Used while moving in waist-deep or deeper water, your **Effective Distance** traveled is doubled.

#### Fly

Used by creatures which can fly or hover. Movement while flying is faster than walking. A creature which ends its movement while flying gains the **Flying** condition.

#### Blink

Magical teleportation that ignores terrain and movement cost entirely.

#### Burrow

Used by creatures capable of tunneling through the earth. Your **Effective Distance** traveled is doubled. Burrowing movement passes beneath walls, obstacles, and other creatures on the surface above. A creature which ends its movement while burrowing gains the **Burrowing** condition.

## Free Movement

Each creature has the opportunity to perform one free **Movement** action per round of Combat. This means that the first Action performed each round which involves the Movement tag is discounted at -1 Action cost. This will typically make the action free to perform, but in some cases may simply reduce its overall cost.

Free Movement is not available to creatures that are **Weakened**, **Prone**, or **Slowed**. Creatures wearing **Heavy** armor also lose access to free Movement unless they have the [[Armored Efficiency]] talent.

## Terrain

Difficult terrain increases the cost of movement while traversing it. Difficult terrain can be defined using Foundry VTT Scene Regions with the **Modify Movement Cost** behavior, which is fully integrated with Crucible movement cost computation.

## Creature Collision

While in Combat, creatures treat other creatures as obstacles which block movement. A creature may not move through the space occupied by another creature, whether that creature is an ally or an enemy. Dead creatures do not block movement, nor do creatures at a different elevation, such as a flying creature above the battlefield or a burrowing creature beneath it.

Blocked movement does not mean that creatures must keep a respectful distance - a creature can press into and partially overlap the edge of another creature's space, but cannot push fully through it.

#### Automation

Token collision happens automatically whenever the moving Token belongs to an active Combat encounter. Outside of Combat, Tokens move freely through one another. When a moving Token bumps into another, its movement simply stops at the point of contact, just as if it had hit a wall.

Certain movement actions are exempt from this restriction. **Jump** movement vaults over obstructing creatures, **Burrow** movement tunnels beneath them, and **Blink** movement teleports past them entirely. Certain Actions also allow movement through otherwise obstructing creatures as part of their effect, for example [[Tumble Through]] or [[Shield Charge]].

**Forced Movement** respects creature obstacles in the same way: a creature which is pushed, pulled, or knocked back stops its involuntary movement when it collides with another creature.

#### Under Construction

Token Collision mechanics and the rules for handling collision and overlap between creatures are still being developed and are not yet final. Expect these rules to evolve in future releases.

## Forced Movement

Sometimes, an Action produces a side effect that requires a creature to move involuntarily. This is referred to as **Forced Movement**, and represents situations like being knocked aside by a powerful blow, falling off a ledge, or being dragged along by captors. This type of movement does not incur any Action cost, nor does it consume Free Movement.

Forced Movement is usually produced automatically by the Action which causes it. Effects which push, pull, or knock a target back - such as the **Push** and **Pull** spell Inflections - plan and execute this secondary movement as part of resolving the Action, timed to coincide with the moment of impact in the Action's animation. Forced Movement cannot push a creature through walls or through other creatures, and a creature carried over an edge will [[Environmental Hazards]].

#### Forced Movement Toggle

For situations which are not automated by a specific Action - like being dragged along by captors - the Gamemaster can move a Token manually as Forced Movement by enabling the Forced Movement toggle in the Scene Controls menu using the  icon.

Movement made while this toggle is enabled incurs no cost and is annotated as "Forced" in its Ruler measurement tooltip.

## Cover

Certain terrain or obstacles can be counted as Cover - providing additional protection from incoming Spell or Weapon attacks. When a direct single-target attack passes through such an obstacle, the target of the attack is in Cover. Cover is classified according to the following types:

| Cover Type | Banes to Attacks |
| --- | --- |
| Complete Cover | Direct attacks not possible |
| Hard Cover | +4 Banes |
| Partial Hard Cover | +2 Banes |
| Soft Cover | +1 Banes |

Area of effect attacks from abilities with target types like Cone, Blast, or Pulse ignore the effects of Cover.

Automation of cover detection and the resulting Banes is planned for a future update. For the time being, Banes added due to Cover should be applied manually when attack rolls are made.
