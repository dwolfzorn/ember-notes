---
title: "Attunement Mechanics"
journal: "Guides / Gamemaster's Guide"
source_uuid: "JournalEntry.emberGameGuide00"
type: ember.lore
tags: [ember, guides]
---

# Attunement Mechanics

This section provides Gamemaster-specific information on [[Attunement]], including how to award Attunement for character progression, how to read Attunement enrichers and write your own, and how to assign Attunement progression to special NPCs.

 ## Awarding Attunement

 > [!warning] Gamemaster
> #### Active Events
>
>  Attunement progression is commonly earned during an active Event, but the award for the progression is typically assigned to the character after an Event has concluded. Attunement Progression can also be earned in Area Walkthroughs.
>
>  Each instance of potential Attunement progression for the party will feature its own color-coded Attunement Block.

  #### Attunement Progression Title Example

 Text explaining attunement progression and points awarded. For example: If the party manages to successfully rid Steed's Point of the invasive Jurtak, each character advances their **Attunement: Heart of Ember (+1)** at the conclusion of the Event.

  Along with the specific conditions required to earn the Attunement reward. Events and Area Walkthroughs that feature Attunement progression moments will always display a button at the top and bottom of the journal page labeled No Awarded Attunements until the Begin Event button is activated. The steps for awarding Attunement to player characters are as follows:

 1. Click the appropriate Attunement enricher in the color-coded Attunement Block on the journal page at hand, which will trigger an Award Attunement pop-up window.
2. Check the box for each character that is currently eligible for the Attunement award, and click the Confirm button.
3. The chosen Attunement awards will be cached for later, and will only be awarded to the party when the Award Attunements button at the top or bottom of the corresponding journal page is activated.

 As the Gamemaster, you choose when to award the Attunement progression, but we recommend the following:

 - If possible, award Attunement progression upon immediate completion of the Event, alongside other rewards like Milestone Points, currency, or treasure.
- Alternately, you can award Attunement progression during the first Rest the party takes after concluding the associated Event.
- Occasionally, you may want to award Attunement progression during the precise moment the advancement takes place, but this should be done very sparingly to avoid meta-gaming and compromised player choices.

 > [!danger] Hazard
> #### Manually Adding or Removing Attunement
>
>  It is entirely possible for you to award (and revoke) Attunement progression via any given PC's character sheet, by using the up or down arrows located to the right of the Attunement Progression bar. The "Award Attunement" pop-up will allow you to specify the Attunement Type, the Amount rewarded (or revoked), and a unique Award Identifier.
>
>  While revocation of Attunement progression is likely to be a rare circumstance, the tool is available for your needs, and can help mitigate erroneous awards or mechanically affect the narrative as you see fit.

 ## Attunement Enrichers

 Writing your own custom Attunement awards in Ember is a rather simple task, and is accomplished by using the ``[[/attunement {attunementID} {amount} {identifier}]]`` enricher, which clearly indicates the Cosmological Force, the number of Attunement points awarded (an integer), and a unique Award Identifier (a string with no spaces) derived from the name of the Event or Area Walkthrough.

 Utilizing the appropriate section of the [[Sheltered Campsite]] Event in [[The Winding Trail]] Main Quest, we can examine what a typical Attunement Block might look like inside an Event or Area Walkthrough.

  You can inspect the source text or HTML of this page to see how the following attunement enricher example is written.

   #### Akon Attunement: Shard of Akon

 Each character who successfully investigates the Fragment of Akon by touching the ruin and succeeding on one or more of the checks listed above advances their **Attunement: Akon (+1)** at the conclusion of the Event.

  ## NPC Attunement

 Although it is a rare circumstance, NPCs in Ember can also have Ranks of Attunement that can inform or enhance their abilities and features (in addition to their narrative). NPC Attunement differs from normal player character Attunement in terms of how it is gained and tracked, but the results are essentially the same.

 Instead of an Attunement tab on their character sheet, NPCs with Attunement Ranks can be identified using the "Attunement" dropdown under the "Character" section of the NPC's Ember Actor Flags. Simply select the appropriate Attunement and Rank, and the corresponding feature will automatically populate the "Features" section of the character sheet.

 > [!warning] Gamemaster
> #### Limits on NPC Attunement
>
>  Non-player characters with Attunement Ranks should be used sparingly throughout the campaign.
>
>  We ultimately want to maintain an ethos that Cosmological Attunement is something very special, and — while the player characters of "A Shard of Fear" are perhaps the most heroically capable folks around — they aren't the only people of Ember to have established a special connection with some cosmological force or entity. As such, some of the most important characters in the game will feature their own ranks of Attunement.
