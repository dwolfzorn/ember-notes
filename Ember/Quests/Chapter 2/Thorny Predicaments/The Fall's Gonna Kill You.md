---
title: "The Fall's Gonna Kill You"
journal: "Quests / Chapter 2 / Thorny Predicaments"
source_uuid: "JournalEntry.jcQpIeQ0gpD4UsHM"
type: ember.lore
tags: [ember, quests]
---

# The Fall's Gonna Kill You

> [!warning] Gamemaster
> #### Gamemaster's Summary
>
> In this SocialEvent, the party encounters [[Edivel Sprout]] at the edge of the [[Splinter Canyons]]. While approaching them, characters will see him fall into the canyon, and then can:
>
> - Figure out where Edivel landed in the canyon, and if they are okay.
> - Descend into the canyons to rescue the young wizard.

### Talking to Edivel

> [!abstract] Edivel Sprout
> **[[Edivel Sprout]]**
>
> Level 1 · Unknown Unknown
>
> ![Edivel Sprout](../../../assets/image153.webp)

If the party completed [[Planting a Seed]] and has met Edivel, they recognize him immediately, and he recognizes them, saying:

> [!quote] Read Aloud
> Edivel offers an energetic wave of his hand.
>
> > Hi friends! I hope your travels have been going well! Did you know there used to be a climbable path over to the Bramble Gully down there? Recent shakes have caused a bunch of the rock to fall away down there. I bet you could do it with the right climbing gear or spell, though…

Otherwise, the young Thornling enthusiastically introduces himself:

> [!quote] Read Aloud
> The figure at the edge of the cliffs waves as you come near.
>
> > Hello! I'm Edivel Sprout, Agrimage Wizard! Who are you?

The party can speak to Edivel here, covering the topics below, as well as any found in [[Planting a Seed]].

If the party previously completed [[/eventState canyonsSideBrevin] then this is the thornling that [[Triss Carpel]] sent them to find.

> [!question] Q&A
> **Q:** Triss is looking for you in Brevin.
>
> **A:**
>
> > Oh, yeah, I should probably check in with her and make sure everything's okay. They have a whole big event they are preparing for. But I do want to see if I can get to the bramble gulley first…
> >
> > If you go back to Brevin, let Triss know I'm fine and will head back soon.

If the party attempts to persuade Edivel to return early, or attempts to subdue him, proceed immediately to [[The Fall's Gonna Kill You]] below.

### Cliffside Collapse

> [!warning] Gamemaster
> #### Triggering the Tremor
>
> While you are reading or preparing to read the narrative of the next section, mark the **Earthquake Tremor** event outcome as completed which will cause an earthquake animation to occur!
>
> During that earthquake animation, delete or hide Edivel, which will make it appear as if he fell over the cliff during the tremor.

`[[/outcome tremor]]`

As the party heads towards Edivel, the ground shakes again.

> [!quote] Read Aloud
> Suddenly the ground shudders, a rolling sensation passing through the earth underfoot. The ground shudders and sways so strongly that you have to plant your feet to avoid falling over. At the same time you hear a loud crack and see Edivel suddenly lurch backward, crying out in surprise, before vanishing over the side of the cliff. Before you can intervene, a broad section of the cliff gives way and falls into the canyon after the thornling.
>
> After a moment the shaking stops and it is silent.
>
> You hear Edivel's voice, softly groan.
>
> > Ow.
>
> There's a pause then he calls up at you:
>
> > Don't worry! I'm okay!

If characters head to the edge of the Splinter Canyons, they see Edivel below.

> [!quote] Read Aloud
> As you peer down into the steep canyons, Edivel's voice comes echoing out of it, from a place you can't quite make out.
>
> > Hello!? The rocks broke my fall, and nothing else! I am stuck down here though… If you could lend a hand that would be really great! If you have a moment!

### Reaching Edivel

If characters wish to follow Edivel directly into the canyons, they must climb down.

> [!tip] Exploration
> #### Finding Edivel
>
> A character with **Awareness (DC 16, Passive)** or making a successful **Awareness (DC 14)** notices that Edivel has landed on a rocky outcropping a hundred feet down. Luckily, there are ample grip points that would make climbing down possible, if risky.
>
> #### Descending Into the Canyons
>
> To descend the cliffs, characters must make a **Athletics (DC 15)** check. On success they are able to descend up to half their movement speed toward Edivel before repeating the skill check. On a failure, they encounter a hazard from the Canyon Catastrophes table below.
>
> - Climb Speed: Characters with a climbing speed automatically succeed and can descend at their full climbing speed.
> - **Equipment**: Characters with [[Climber's Kit]] automatically succeed.
> - **Wilderness (DC 16)**: A competent survivalist notices roots jutting out from the freshly exposed canyon wall and gains **+2 Boons** on this check until their descent is complete.
> - **Critical Success**: The character can descend at their full movement speed until the next time they make this check.
>
> #### The Easy Way
>
> If characters previously completed `[[/eventState sideCanyonsBrevin]]` then they know of a route given to them by Triss Carpel that will let them head into the canyon safely. This bypasses the need for the above climbing checks, and allows them to reach Edivel in 30 minutes, and without incident.

|  | #### Climbing Hazards |
| --- | --- |
| 1 | #### Tumbling Rocks  *A flurry of loose rocks careen down the cliff face onto the party.*  Each character must make a successful **Athletics (DC 16)** to avoid the tumbling rocks, if they fail they suffer **Falling Rocks (Hazard 4, Fortitude, Health, Bludgeoning)** and are **Exhausted**.  Any character that critically fails must also make a successful **Athletics (DC 12)** check or fall. Any character who succeeded on the initial check may choose to grab someone who fails to this degree, granting **+2 Boons** to one character making this check. |
| 2 | #### Unstable Footing  *A foothold or ledge suddenly crumbles under the party's feet, leaving them grasping at the side of the canyon wall for support.*  Each character must make a successful **Athletics (DC 16)** or suffer **Rocky Abrasions (Hazard 4, Fortitude, Health, Piercing)** damage from sharp rocks and are **Exhausted**. Any character that Critically Fails must also make a successful **Athletics (DC 12)** check or fall. Any character who succeededs on the initial check may grab someone who has critically failed to grant **+2 Boons** to one character making this check. |
| 3 | #### Gore Bird Swarm  *A* [[Gore Bird Ravage]]*, sensing vulnerability, descends on the party.*  If the characters are occupied by climbing (making combat impractical), the gore bird swarm harries them for 10 minutes, pecking and tearing at exposed flesh;  Each character must make an **Athletics (DC 16)** check to avoid the avian assault, otherwise they suffer **Merciless Pecking (Hazard 6, Fortitude, Health, Piercing)** and are **Exhausted**. Any character that critically fails must also make a successful `[[/check athletics 12]]` check or fall. Any character who succeeded on the initial check may take grab someone who has critically failed to help them, granting **+2 Boons** to one character making this check. |
| 4 | #### Slippery Surfaces  *Moisture and moss have slicked the rock to a treacherous sheen, and the party's footholds suddenly slide out from under them.*  Each character must make a successful **Athletics (DC 16)** check or suffer a [[/hazard 4 fortitude health bludgeoning]{Slip and Fall} damage and are **Exhausted**. Any character that critically fails must also make a successful **Athletics (DC 12)** check or fall. Any character who succeeded on the initial save may grab someone who has critically failed, granting **+2 Boons** to one character making this check. |

#### Orbis Attunement: Hazardous Descent

Any character who first reaches the canyons by surviving a hazardous descent advances their **Attunement: Orbis (+1)** at the conclusion of the event.

#### Cora Attunement: Hazard-Free Descent

Any character who first reaches the canyons while bypassing any and all hazards they encounter advances their **Attunement: Cora (+1)** at the conclusion of the event.

#### Mayis Attunement: The Easier Path

Any character who first reaches the canyons via Triss Carpel's directions or the House Cevher mines advances their **Attunement: Mayis (+1)** at the conclusion of the event.

### Concluding the Event

> [!warning] Gamemaster
> #### Next Steps
>
> Once the characters make their way into the canyons they must free Edivel from the threat of rising water in [[A Rising Tide]].
>
> Note: To move the token into the canyons, the GM must make the movement using the Unconstrained Movement tool — the party will not be able to move themselves there.
