---
title: "Area Maps"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Area Maps

Area Maps are explorable scenes viewed from a top-down perspective, incorporating player character Token Actors, Creature Actors, and NPC Actors, all within a preconfigured scene that typically includes walls, lights, sounds, and Interactable Objects.

Area Maps represent explorable areas within a [[Region Exploration]] on the Region Map, and allow players to move the Token representing their character around the scene by selecting their Token and using the WASD keys on their keyboard.

Player Character Tokens automatically incorporate the sight ranges from their character sheet. Sight is blocked by walls, but not by windows — map features like walls and windows come preconfigured in all Ember Area Maps.

## Scene Levels

Scene Levels represent significant elevation within an Area Map, such as floors of a building or cliffs in a wilderness area. Scene Levels allow a Token to change elevation smoothly, such as traversing up and down a set of stairs without changing to a new scene.

## Scene Regions

Area Maps in Ember are often configured with several Scene Regions, which are used to create interesting and dynamic effects. For example, an Scene Region might be designated as wood, such that when a Token moves across it, the sound of wooden footsteps is heard.

Scene Regions are also used for game elements like traps, so that when a character moves over a trap with their Token, they automatically trigger an effect. Typically, these effects include sounds and animations, such as the trap springing out from a wall. The exact nature of the trap or effect is described in the Chat Log.

## Interactable Objects

Interactable Objects are elements of an Area Map that can be clicked on to change something on that map. Often, this includes an animation or sound.

Doors are common Interactable Objects, visible on Area Maps as small door icons. Clicking a door icon will cause that door to open, a small sound to play, and allow the vision of nearby Character Tokens to extend through the area behind that door.

Some Interactable Objects may be visible to players but not interactable until the Gamemaster engages with them on their end. For example, a locked door might require a check specified by the currently ongoing Event. After a successful check, the Gamemaster unlocks the door, allowing players to open it normally by clicking on the icon.

## Dynamic Tokens

Many Tokens on Area Maps are dynamic, meaning they animate with moving arms and legs.

## Gamemaster Information

Traps which use **Scene Regions** will depict the area of effect of the trap as a red rectangle that is visible to the Gamemaster. Configuration of the Scene Region controls whether the trap is armed, disarmed, or active. As the Gamemaster you can configure the trap state by editing the Scene Region. Certain behaviors control the **Trap Trigger** while other behaviors control the **Trap Effects**.

Sometimes the trigger and the effects are not part of the same region — a remote trigger can control an effect that occurs elsewhere!

Other traps are controlled by ​​ **Interactable Objects** which may either trigger or disarm their effects. As the Gamemaster, press the **ALT** key to highlight all Interactable Objects which are present in the Scene. Some of these objects can be manipulated by players directly, while others require a Gamemaster to control them.

To interact with objects, you must activate the interaction tool in the Scene Controls interface on the left side of the screen.
