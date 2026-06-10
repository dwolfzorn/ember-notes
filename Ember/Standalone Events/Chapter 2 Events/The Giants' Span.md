---
title: "The Giants' Span"
journal: "Standalone Events / Chapter 2 Events"
source_uuid: "JournalEntry.emberEventsCh200"
type: ember.lore
tags: [ember, standalone-events]
---

# The Giants' Span

> [!warning] Gamemaster
> #### Gamemaster's Summary
>
> This Exploration Event can occur while traveling recklessly through the [[Wedgelands]]. In this Event, the party can:
>
> - Investigate a crumbling remnant of the [[Shent]] empire: an ancient shelf road, cut into the mountainside above a ravine.
> - Inspect the ruin for a safer path, attempt to cross it, or lose time by turning back and going around.

### Circumventing the Span

The characters may circumvent the giants' span by retreating into an adjacent hex in the opposite direction of their destination and moving around the hex in which this Event triggered. Make a note of where this Event triggered as the location of the giants' span; the characters face the same decision upon entering this hex in the future.

### Inspecting the Span

Before the party attempts to cross the giants' span, they may inspect its construction for a safer path.

> [!tip] Exploration
> #### Inspecting the Span
>
> Any character who makes a successful **Awareness (DC 20)** or **Awareness (DC 20)** check while examining the giants' span identifies a prevailing architectural pattern evident in the stone: the wider outer shelf is badly degraded, but a staggered inner line of intact flagstones suggests a loadbearing path.
>
> - Characters with **Knowledge: Shent**, **Knowledge: Subterranea**, or the [[Stonecunning]] feature have **+2 Boons** on this roll.
>
> #### Identify the Origin
>
> Characters with **Knowledge: Shent**, **Knowledge: Ancients**, or Proficiency in **Society (DC undefined)** identify the shelf road as a deliberate feat of Shent engineering; they recognize the visage as a Shent giant, and can estimate its age and that of the shelf road as approximately 3,000 years old.
>
> #### Eye of Black Pearl
>
> Any character with a `[[/skill perception 14 passive format=long]]`, or who makes a successful **Awareness (DC 12)** check while examining the carved visage from afar, discovers that some kind of jewel gleams within one of its eye sockets. The gleaming jewel is a large black pearl worth **`[[/award party 200gp]]`**.
>
> To recover the black pearl, a character must:
>
> - Reach the base of the visage (60 feet along the shelf road).
> - Climb 30 feet by making a successful **Athletics (DC 16)** check — on a failure, roll on the [[The Giants' Span]] table, and apply the result to the climbing character only (not the entire party).
> - Make a successful **`[[/skill strength 12]]`** check to dislodge it from its stone setting. If the character fails this check by 10 or more, the black pearl pops out, falls, skips off the shelf road, and vanishes into the ravine below.

`[[/outcome identifiedOrigin]]`

> [!danger] Hazard
> #### Falling
>
> A character that falls from the effects of a [[The Giants' Span]] while attempting to retrieve the black pearl falls 30 feet onto the shelf road, taking (`[[/damage 3d6 Bludgeoning]]` damage) and landing &reference[Prone]. This immediately triggers the [[The Giants' Span]] hazard for `[[/gmroll 1d4]]` randomly selected characters as described below.

### Crossing the Span

> [!tip] Exploration
> #### Crossing the Span
>
> The shelf road is 120-feet-long, 5-feet-wide, and lies 120 feet over the ravine below. At intervals of 30 feet, the party must make a **`[[/skill dexterity 14]]`** group check: if at least half of the characters succeed, they proceed without incident. If over half of the character fail, however, `[[/gmroll 1d4]]` randomly selected characters are subjected to the [[The Giants' Span]] hazard.
>
> - Characters that identified the architectural pattern while [[The Giants' Span]] have **+2 Boons** on this check.

> [!danger] Hazard
> #### Crumbling Shelf
>
> **Description:** The shelf road suddenly crumbles under the character's feet, leaving them grasping at the side of the cliff face for support.
>
> **Effect:** The character must make a successful `[[/save strength 16]]` save or take `[[/damage 1d6 Piercing]]` damage from sharp rocks and suffer one level of &Reference[exhaustion]. Any character that fails by 10 or more must also make a successful `[[/check athletics 12]]` check or fall 120 feet into the ravine below, taking (`[[/damage 12d6 Bludgeoning]]` damage) and landing &reference[Prone]. Any character who succeeded on the initial save (or was not subjected to the hazard at all) may take the Help action to grant **+2 Boons** to one character making this check.
>
> If this hazard occurs three or more times, the entire shelf road crumbles into the ravine after `[[/gmroll 1d4]]` days, and the hex becomes impassible.

`[[/outcome acrossTheShelfRoad]]`

#### Ragen Attunement: Across the Shelf Road

If the party cross the shelf road, they advance their **Attunement: Ragen (+1)** at the conclusion of the event.

### Climbing Hazards

|  | #### Climbing Hazards |
| --- | --- |
| 1 | #### Tumbling Rocks  *A flurry of loose rocks careen down the cliff face onto the party.*  Each character must make a successful **Athletics (DC 16)** to avoid the tumbling rocks, if they fail they suffer **Falling Rocks (Hazard 4, Fortitude, Health, Bludgeoning)** and are **Exhausted**.  Any character that critically fails must also make a successful **Athletics (DC 12)** check or fall. Any character who succeeded on the initial check may choose to grab someone who fails to this degree, granting **+2 Boons** to one character making this check. |
| 2 | #### Unstable Footing  *A foothold or ledge suddenly crumbles under the party's feet, leaving them grasping at the side of the canyon wall for support.*  Each character must make a successful **Athletics (DC 16)** or suffer **Rocky Abrasions (Hazard 4, Fortitude, Health, Piercing)** damage from sharp rocks and are **Exhausted**. Any character that Critically Fails must also make a successful **Athletics (DC 12)** check or fall. Any character who succeededs on the initial check may grab someone who has critically failed to grant **+2 Boons** to one character making this check. |
| 3 | #### Gore Bird Swarm  *A* [[Gore Bird Ravage]]*, sensing vulnerability, descends on the party.*  If the characters are occupied by climbing (making combat impractical), the gore bird swarm harries them for 10 minutes, pecking and tearing at exposed flesh;  Each character must make an **Athletics (DC 16)** check to avoid the avian assault, otherwise they suffer **Merciless Pecking (Hazard 6, Fortitude, Health, Piercing)** and are **Exhausted**. Any character that critically fails must also make a successful `[[/check athletics 12]]` check or fall. Any character who succeeded on the initial check may take grab someone who has critically failed to help them, granting **+2 Boons** to one character making this check. |
| 4 | #### Slippery Surfaces  *Moisture and moss have slicked the rock to a treacherous sheen, and the party's footholds suddenly slide out from under them.*  Each character must make a successful **Athletics (DC 16)** check or suffer a [[/hazard 4 fortitude health bludgeoning]{Slip and Fall} damage and are **Exhausted**. Any character that critically fails must also make a successful **Athletics (DC 12)** check or fall. Any character who succeeded on the initial save may grab someone who has critically failed, granting **+2 Boons** to one character making this check. |

### Concluding the Event

Once the party has crossed the giants' span or decided to circumnavigate it, they're free to continue on their journey.
