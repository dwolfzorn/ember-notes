---
title: "Vistas for Gamemasters"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Vistas for Gamemasters

A **Vista** is a special environment used for storytelling in Ember. Vistas present an in-character view of the world where you can look around and interact with other characters or aspects of the environment.

#### Work In Progress

The Vista System is actively evolving as part of Ember's development. This page is not yet complete, but will be updated accordingly as the Vista System and its features are further developed.

Most importantly, Vistas are used for conversation with non-player characters (NPCs). Events which transpire inside a Vista are often designed for dialog and conversation between player characters and the various NPCs which inhabit the vista.

Player characters can ask NPCs any number of questions and receive answers. Ember typically provides prewritten responses to overarching questions that the Gamemaster can read aloud, however, these prewritten responses are not exhaustive and the party should feel comfortable asking questions and receiving answers given directly by the Gamemaster as well. If a player's questions align with one of the overarching questions the Gamemaster can also choose to display the answer via the Vista which will be displayed as subtitles or a chat bubble within the Vista itself and saved in the Chat Log.

Each Vista scene depicts an in-world Biome or broad Location area, such as the grassy moors of the Golden Flats or the bustling city of Ordain. Within each Vista scene, there are multiple available **Compositions** that represent locations within that region. Compositions range from specific places, such as a notable point of interest, to more generic locales that could exist anywhere within the Vista's range.

Many Quest Events are set up to use particular Compositions that have been crafted specifically for the moment at hand. However, all Compositions within a Vista can be visited freely should the party find themselves in an impromptu social situation. And for moments that don't quite match the currently available Compositions, it is possible to construct new custom Compositions from premade templates or from scratch.

## Overview

Vistas are located in the Scenes tab within a "Vistas" folder. There are two subfolders that further categorize the available vistas:

- **Locations:** These Vistas use specialized art to represent specific points of interest and typically include only one or two compositions.
- **Biomes:** These vistas use modular assets to represent broader areas or regions and typically contain multiple compositions as well as templates for creating custom compositions.

Quest Events with preconfigured Vista usage will load the specified Composition upon activating the event, but to view or activate a Vista outside of a quest, simply choose the desired Vista from either subfolder. Upon viewing or activating a vista outside of a Quest, it will display the first available Composition *or* the most recently viewed Composition if the Vista has already been visited.

To change the active Composition, view the basic layer controls and select the button with the repeating arrows icon — this button is located second from the bottom. Hovering above this button displays a "Change Composition" tooltip. Clicking this button will open a dialog box with a dropdown menu. Within this menu there are three categories:

- **Core Compositions:** Premade, complete Compositions crafted by the Ember team.
- **Custom Compositions:** An initially empty folder, where Compositions created by users are listed.
- **Template Compositions:** Premade "blank" templates created by the Ember team for users who wish to create their own Compositions.

Select the desired composition and press "Change" to update the Composition that is displayed. Since only one Composition can be viewed at a time, all users viewing the Vista will be affected by this change.

### Custom Compositions

For Gamemasters who wish to create their own custom Compositions, the Vista Configuration Tool will allow them to do so. Before accessing the tool, it is strongly suggested you first change the active Composition to a template.

#### Work In Progress

While creating custom Vista Compositions via the Vista Configuration Tool is possible, users should keep in mind that this feature is in active development. The UI/UX are actively evolving, and bugs are expected.

Please also be aware that future updates that improve functionality may have limited compatibility with Compositions created using the current framework.

To access the Vista Configuration Tool, view the basic layer controls and select the button with the dual cogwheels icon. This button is at the bottom of the basic controls and hovering this button displays a "Configure Vista" tooltip. Clicking this button will place the Vista into "debug view" and open a new menu. There are two tabs within the tool's menu: **Assets** and **Scene**.

**Assets**

This is the primary tab you will use to build Compositions. Toggle lists on the left contain categorized Assets that can be placed by clicking the crosshairs to the right of each asset name. Once an Asset has been placed and selected, the parameters of that Asset can be edited using the fields located on the right.

**Scenes**

This tab can be used to define your custom Compositions, edit advanced scene information, and toggle the visibility of shader effects. Entering data into the fields under "Composition" will allow the current configuration to be saved as a custom Composition. It is not advised for users to change the Token Scaling data.

At the bottom of the menu are additional controls:

- **Clear:** Resets the active composition. For Core and Template Compositions, this means reverting to the preconfigured settings. For Custom Compositions, this means reverting to the most recent save point.
- **Import:** Opens a dialog allowing the manual input or pasting of configuration data.
- **Export:** Copies the current configuration data to your clipboard.
- **Save:** Saves the current configuration as a Custom Composition. The "Identifier" and "Label" fields of the **Scene** tab must be filled out for this to work. A popup will inform you if saving the Composition has been successful.
- **Delete:** Only visible on Custom Compositions. Clicking this will delete the active Custom Composition and remove it from the list.

> [!warning] Gamemaster
> #### Configuration Tips
>
> - When creating Custom Compositions, it is best to start with the desired template, save a Custom Composition, then change to the newly created Custom Composition and complete further edits there.
> - Saving frequently is recommended to help prevent the loss of progress.
> - Periodically exporting snapshots can also be useful, as those can be imported to revert to a version of the Composition that has been saved over.
> - If something seems amiss with asset placement or layering, try saving your progress before pressing "Clear," which should resolve a variety of minor placement issues.
