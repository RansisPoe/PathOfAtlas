export interface PassiveMod {
  modType: string
  amount: number | null
}

export interface SkillNode {
  x: number
  y: number
  name: string
  stats: PassiveMod[]
  neighbors: number[]
}

export const skillList: SkillNode[] = [
  {
    x: 882.4214897322131,
    y: -508.7649999999999,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [440, 437]
  },
  {
    x: 422.62499999999994,
    y: -732.4324916016351,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [408, 371]
  },
  {
    x: -0.375,
    y: -845.775,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [370, 291, 301]
  },
  {
    x: -423.3750000000004,
    y: -732.4324916016349,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [292, 248]
  },
  {
    x: -885.451489732213,
    y: -498.3950000000001,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [229, 232]
  },
  {
    x: -4694.17,
    y: -4564.21,
    name: 'Ritual Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Ritual Altars', amount: 1 }],
    neighbors: [6, 34, 9]
  },
  {
    x: -4856.17,
    y: -4402.21,
    name: 'Ritual Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Ritual Altars', amount: 1 }],
    neighbors: [7, 5]
  },
  {
    x: -5018.17,
    y: -4564.21,
    name: 'Sacrificial Due',
    stats: [{ modType: 'Completing the final Ritual Altar in Areas has 1$AMOUNT chance to drop a Blood-filled Vessel', amount: 0 }],
    neighbors: [8, 6]
  },
  {
    x: -4937.17,
    y: -4704.506115413079,
    name: 'Ritual Tribute Quantity',
    stats: [{ modType: 'Monsters Sacrificed at Ritual Altars in Areas grant $AMOUNT increased Tribute', amount: 4 }],
    neighbors: [9, 7]
  },
  {
    x: -4775.17,
    y: -4704.506115413079,
    name: 'Ritual Tribute Quantity',
    stats: [{ modType: 'Monsters Sacrificed at Ritual Altars in Areas grant $AMOUNT increased Tribute', amount: 4 }],
    neighbors: [5, 8]
  },
  {
    x: -4691.42,
    y: -5743.46,
    name: 'Tormented Monster Item Quantity',
    stats: [{ modType: '2$AMOUNT increased Quantity of Items dropped by Possessed or Touched Monsters in Areas', amount: 0 }],
    neighbors: [39, 11]
  },
  {
    x: -4934.42,
    y: -5603.163884586921,
    name: 'Tormented Monster Item Quantity',
    stats: [{ modType: '2$AMOUNT increased Quantity of Items dropped by Possessed or Touched Monsters in Areas', amount: 0 }],
    neighbors: [10, 13]
  },
  {
    x: -4934.42,
    y: -5883.756115413079,
    name: 'Seance',
    stats: [{ modType: 'Up to 5 Rare Monsters in Areas are Possessed and their Minions are Touched', amount: null }],
    neighbors: [13]
  },
  {
    x: -5015.42,
    y: -5743.46,
    name: 'Tormented Monster Item Quantity',
    stats: [{ modType: '2$AMOUNT increased Quantity of Items dropped by Possessed or Touched Monsters in Areas', amount: 0 }],
    neighbors: [12, 11]
  },
  {
    x: -5015.38,
    y: -6587.96,
    name: 'Bestiary Red Beast Chance',
    stats: [{ modType: 'Areas that contain capturable Beasts have $AMOUNT chance to contain an additional Red Beast', amount: 5 }],
    neighbors: [15, 19, 17]
  },
  {
    x: -5188.38,
    y: -6587.96,
    name: 'Natural Selection',
    stats: [{ modType: 'Beasts in Areas are more likely to be less common varieties', amount: null }],
    neighbors: [14]
  },
  {
    x: -4772.38,
    y: -6728.256115413079,
    name: 'Bestiary Red Beast Chance',
    stats: [{ modType: 'Areas that contain capturable Beasts have $AMOUNT chance to contain an additional Red Beast', amount: 5 }],
    neighbors: [22, 19, 18]
  },
  {
    x: -4934.38,
    y: -6447.663884586921,
    name: 'Bestiary Red Beast Chance',
    stats: [{ modType: 'Areas that contain capturable Beasts have $AMOUNT chance to contain an additional Red Beast', amount: 5 }],
    neighbors: [14, 20, 23]
  },
  {
    x: -4691.38,
    y: -6587.96,
    name: 'Bestiary Red Beast Chance',
    stats: [{ modType: 'Areas that contain capturable Beasts have $AMOUNT chance to contain an additional Red Beast', amount: 5 }],
    neighbors: [16, 20, 38]
  },
  {
    x: -4934.38,
    y: -6728.256115413079,
    name: 'Bestiary Red Beast Chance',
    stats: [{ modType: 'Areas that contain capturable Beasts have $AMOUNT chance to contain an additional Red Beast', amount: 5 }],
    neighbors: [16, 14, 21]
  },
  {
    x: -4772.38,
    y: -6447.663884586921,
    name: 'Bestiary Red Beast Chance',
    stats: [{ modType: 'Areas that contain capturable Beasts have $AMOUNT chance to contain an additional Red Beast', amount: 5 }],
    neighbors: [18, 24, 17]
  },
  {
    x: -5020.88,
    y: -6878.078510267787,
    name: 'The Hunt for Craiceann',
    stats: [{ modType: 'Red Beasts in Areas have 10$AMOUNT increased chance to be from The Deep', amount: 0 }],
    neighbors: [19]
  },
  {
    x: -4685.88,
    y: -6878.078510267787,
    name: 'The Hunt for Farrul',
    stats: [{ modType: 'Red Beasts in Areas have 10$AMOUNT increased chance to be from The Wilds', amount: 0 }],
    neighbors: [16]
  },
  {
    x: -5020.88,
    y: -6297.841489732213,
    name: 'The Hunt for Fenumus',
    stats: [{ modType: 'Red Beasts in Areas have 10$AMOUNT increased chance to be from The Caverns', amount: 0 }],
    neighbors: [17]
  },
  {
    x: -4685.88,
    y: -6297.841489732213,
    name: 'The Hunt for Saqawal',
    stats: [{ modType: 'Red Beasts in Areas have 10$AMOUNT increased chance to be from The Sands', amount: 0 }],
    neighbors: [20]
  },
  {
    x: -4061.7299999999996,
    y: -3718.2,
    name: 'Blight Encounter Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Blight Encounter', amount: 1 }],
    neighbors: [33, 30, 32]
  },
  {
    x: -4396.73,
    y: -3383.2,
    name: 'Blight Encounter Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Blight Encounter', amount: 1 }],
    neighbors: [32, 27]
  },
  {
    x: -4564.23,
    y: -3428.081489732213,
    name: 'Blight Encounter Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Blight Encounter', amount: 1 }],
    neighbors: [26, 28]
  },
  {
    x: -4686.848510267786,
    y: -3550.7,
    name: 'Mycelial Swarm',
    stats: [{ modType: 'Areas with Blight Encounters have 2$AMOUNT chance to contain an additional Blight Encounter', amount: 0 }],
    neighbors: [27]
  },
  {
    x: -4396.73,
    y: -4053.2,
    name: 'Blighted Map and Oil Chance',
    stats: [{ modType: 'Blight Chests in Areas have 1$AMOUNT increased chance to contain Blighted Maps or Oils', amount: 0 }],
    neighbors: [30, 31]
  },
  {
    x: -4229.23,
    y: -4008.3185102677867,
    name: 'Blighted Map and Oil Chance',
    stats: [{ modType: 'Blight Chests in Areas have 1$AMOUNT increased chance to contain Blighted Maps or Oils', amount: 0 }],
    neighbors: [25, 29]
  },
  {
    x: -4564.23,
    y: -4008.3185102677867,
    name: 'Epidemiology',
    stats: [{ modType: 'Blight Chests in Areas have 8$AMOUNT more chance to contain Blighted Maps', amount: 0 }],
    neighbors: [29]
  },
  {
    x: -4229.23,
    y: -3428.081489732213,
    name: 'Blight Encounter Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Blight Encounter', amount: 1 }],
    neighbors: [25, 26]
  },
  {
    x: -3550.7299999999996,
    y: -3718.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [93, 95, 25, 37, 35, 86]
  },
  {
    x: -4396.73,
    y: -4564.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [5, 37, 48, 40]
  },
  {
    x: -3664.0725083983643,
    y: -3295.2,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [33, 36]
  },
  {
    x: -3973.7299999999996,
    y: -2985.5425083983646,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [35, 58, 41]
  },
  {
    x: -3798.5176631161803,
    y: -4316.412336883819,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [33, 34]
  },
  {
    x: -4396.36,
    y: -6587.96,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [18, 39, 51, 78, 62]
  },
  {
    x: -4396.36,
    y: -5743.46,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [40, 38, 64, 10]
  },
  {
    x: -4396.36,
    y: -5149.71,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [34, 39]
  },
  {
    x: -4229.21,
    y: -2838.04,
    name: 'Beyond Demon Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped by Beyond Demons in Areas', amount: 8 }],
    neighbors: [36, 43]
  },
  {
    x: -4472.21,
    y: -2697.743884586921,
    name: 'Beyond Demon Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped by Beyond Demons in Areas', amount: 8 }],
    neighbors: [43, 44]
  },
  {
    x: -4310.21,
    y: -2697.743884586921,
    name: 'Beyond Demon Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped by Beyond Demons in Areas', amount: 8 }],
    neighbors: [41, 42]
  },
  {
    x: -4472.21,
    y: -2978.336115413079,
    name: 'Fiendish Opulence',
    stats: [{ modType: 'Rare Beyond Demons in Areas have 2$AMOUNT chance to drop an additional Basic Currency Item', amount: 5 }],
    neighbors: [42]
  },
  {
    x: -4206.88,
    y: -7615.25,
    name: 'Baptised by Fire',
    stats: [{ modType: 'Maps have 1$AMOUNT chance to award double progress towards encountering The Searing Exarch', amount: 0 }],
    neighbors: [70, 73]
  },
  {
    x: -3823.8087014477796,
    y: -4991.801298552221,
    name: 'Beyond Demon Experience',
    stats: [{ modType: 'Beyond Demons in Areas grant 1$AMOUNT increased Experience', amount: 0 }],
    neighbors: [49, 47]
  },
  {
    x: -3823.8087014477796,
    y: -4762.698701447779,
    name: 'Scent of Blood',
    stats: [{ modType: 'Slaying Enemies close together in Areas has a $AMOUNT chance to attract monsters from Beyond', amount: 3 }],
    neighbors: [46]
  },
  {
    x: -4052.9112985522206,
    y: -4762.698701447779,
    name: 'Beyond Demon Experience',
    stats: [{ modType: 'Beyond Demons in Areas grant 1$AMOUNT increased Experience', amount: 0 }],
    neighbors: [49, 34]
  },
  {
    x: -4052.911298552221,
    y: -4991.801298552221,
    name: 'Beyond Demon Experience',
    stats: [{ modType: 'Beyond Demons in Areas grant 1$AMOUNT increased Experience', amount: 0 }],
    neighbors: [48, 46]
  },
  {
    x: -3822.06,
    y: -6749.96,
    name: 'Beyond Demon Chance',
    stats: [{ modType: 'Beyond Portals in Areas have $AMOUNT chance to spawn an additional Beyond Demon', amount: 5 }],
    neighbors: [51, 54]
  },
  {
    x: -3984.06,
    y: -6587.96,
    name: 'Beyond Demon Chance',
    stats: [{ modType: 'Beyond Portals in Areas have $AMOUNT chance to spawn an additional Beyond Demon', amount: 5 }],
    neighbors: [53, 50, 38]
  },
  {
    x: -3741.06,
    y: -6447.663884586921,
    name: 'Beyond Portal Merging Radius',
    stats: [{ modType: 'Beyond Portals in Areas have 1$AMOUNT increased Merging Radius', amount: 0 }],
    neighbors: [54, 53]
  },
  {
    x: -3903.06,
    y: -6447.663884586921,
    name: 'Beyond Portal Merging Radius',
    stats: [{ modType: 'Beyond Portals in Areas have 1$AMOUNT increased Merging Radius', amount: 0 }],
    neighbors: [52, 51]
  },
  {
    x: -3660.06,
    y: -6587.96,
    name: 'Torn Veil',
    stats: [
      { modType: 'Powerful Beyond Demons require 1 fewer Portal to summon in Areas', amount: null },
      { modType: 'Beyond Portals in Areas have 3$AMOUNT increased Merging Radius', amount: 0 }
    ],
    neighbors: [50, 52]
  },
  {
    x: -4018.25,
    y: -2125.89,
    name: 'Bestiary Yellow Beast Amount',
    stats: [{ modType: 'Areas that contain capturable Beasts have 1 additional Yellow Beast', amount: null }],
    neighbors: [58, 56]
  },
  {
    x: -3973.368510267787,
    y: -1958.3899999999996,
    name: 'Bestiary Yellow Beast Amount',
    stats: [{ modType: 'Areas that contain capturable Beasts have 1 additional Yellow Beast', amount: null }],
    neighbors: [55, 61]
  },
  {
    x: -3393.131489732213,
    y: -1958.3899999999999,
    name: 'Bestiary Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Einhar Mission on Completion', amount: 1 }],
    neighbors: [59, 133, 60]
  },
  {
    x: -3973.368510267787,
    y: -2293.39,
    name: 'Bestiary Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Einhar Mission on Completion', amount: 1 }],
    neighbors: [59, 36, 55]
  },
  {
    x: -3515.75,
    y: -2416.0085102677867,
    name: 'Bestiary Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Einhar Mission on Completion', amount: 1 }],
    neighbors: [57, 58]
  },
  {
    x: -3515.75,
    y: -1835.771489732213,
    name: 'Mighty Hunter',
    stats: [
      { modType: 'Einhar has 10$AMOUNT increased Cooldown Recovery Rate in Areas', amount: 0 },
      { modType: 'Einhar deals 100$AMOUNT more Damage to Unique Monsters in Areas', amount: 0 },
      { modType: 'Einhar remains in Areas after his Mission is Complete', amount: null }
    ],
    neighbors: [57]
  },
  {
    x: -3850.75,
    y: -1835.771489732213,
    name: 'Big Game',
    stats: [{ modType: 'Yellow Beasts in Areas have 1$AMOUNT chance to be replaced with Red Beasts', amount: 5 }],
    neighbors: [56]
  },
  {
    x: -3660.74,
    y: -7013.25,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [38, 107, 71]
  },
  {
    x: -3741.74,
    y: -5743.446115413079,
    name: 'Searing Exarch Influence Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [67, 64]
  },
  {
    x: -3822.74,
    y: -5603.15,
    name: 'Searing Exarch Influence Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [39, 63]
  },
  {
    x: -3579.74,
    y: -5743.446115413079,
    name: 'Searing Exarch Influence Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [67, 66]
  },
  {
    x: -3498.74,
    y: -5603.15,
    name: 'Searing Exarch Influence Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [65, 122]
  },
  {
    x: -3660.74,
    y: -5938.15,
    name: 'Word of the Exarch',
    stats: [
      {
        modType:
          'Monster Packs Influenced by The Searing Exarch in Areas have 1$AMOUNT chance to contain an additional Possessing Flame Wraith',
        amount: 0
      },
      {
        modType: 'Eldritch Currency Items found in Areas influenced by The Eater of Worlds have 1$AMOUNT chance to be Duplicated',
        amount: 0
      }
    ],
    neighbors: [65, 63]
  },
  {
    x: -3887.0973348815924,
    y: -7308.173485039729,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [70, 71]
  },
  {
    x: -3434.262665118407,
    y: -7308.173485039729,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [72, 71]
  },
  {
    x: -4086.205397612489,
    y: -7423.128578655236,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [45, 68]
  },
  {
    x: -3660.68,
    y: -7268.25,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [62, 68, 69]
  },
  {
    x: -3235.1546023875107,
    y: -7423.128578655236,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [83, 69]
  },
  {
    x: -4086.205397612489,
    y: -7795.391421344763,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [45, 74]
  },
  {
    x: -3887.097334881593,
    y: -7910.346514960272,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [77, 73]
  },
  {
    x: -3434.2626651184073,
    y: -7910.346514960272,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [77, 76]
  },
  {
    x: -3235.1546023875107,
    y: -7795.391421344764,
    name: 'Searing Exarch Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Searing Exarch in Areas have 0.$AMOUNT chance to drop an item with a Searing Exarch Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [75, 83]
  },
  {
    x: -3660.68,
    y: -7950.27,
    name: 'Liberated Knowledge',
    stats: [
      { modType: 'The Searing Exarch has 1$AMOUNT chance to drop an additional Exceptional Eldritch Ember', amount: 0 },
      { modType: 'The Searing Exarch has 2$AMOUNT increased chance to drop Forbidden Flame', amount: 5 },
      { modType: 'The Black Star has 1$AMOUNT chance to drop an additional Grand Eldritch Ember', amount: 0 }
    ],
    neighbors: [74, 75]
  },
  {
    x: -3660.15,
    y: -6164.44,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [122, 38]
  },
  {
    x: -3185.613884586921,
    y: -1544.93,
    name: 'Kirac Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 1 }],
    neighbors: [133, 80]
  },
  {
    x: -3185.613884586921,
    y: -1382.93,
    name: 'Kirac Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 1 }],
    neighbors: [79, 81]
  },
  {
    x: -3325.91,
    y: -1301.93,
    name: 'Kirac Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 1 }],
    neighbors: [80, 82]
  },
  {
    x: -3466.206115413079,
    y: -1382.93,
    name: 'Planar Tactician',
    stats: [
      { modType: '2$AMOUNT increased Atlas Scouting Reports found in Areas', amount: 0 },
      { modType: '2$AMOUNT chance for Scouting Reports in Areas to drop as Comprehensive Scouting Reports instead', amount: 0 }
    ],
    neighbors: [81]
  },
  {
    x: -3104.59,
    y: -7615.25,
    name: 'The Light of Dawn',
    stats: [
      {
        modType: 'Eldritch Currency Items found have 1$AMOUNT chance to be Duplicated for each Searing Exarch Altar used in the Area',
        amount: 0
      },
      { modType: 'Players take 1$AMOUNT increased Damage for each Searing Exarch Altar used in the Area', amount: 0 },
      { modType: '2$AMOUNT increased chance to find Eater of Worlds Altars in Areas', amount: 0 }
    ],
    neighbors: [72, 76]
  },
  {
    x: -3099.11,
    y: -4598.828510267787,
    name: 'Delirium Fog Dissipation Speed',
    stats: [{ modType: 'Delirium Fog in Areas dissipates $AMOUNT slower', amount: 5 }],
    neighbors: [85, 88]
  },
  {
    x: -2764.11,
    y: -4598.828510267787,
    name: 'Delirium Fog Dissipation Speed',
    stats: [{ modType: 'Delirium Fog in Areas dissipates $AMOUNT slower', amount: 5 }],
    neighbors: [87, 84]
  },
  {
    x: -3221.728510267787,
    y: -4141.21,
    name: 'Delirium Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a mirror of Delirium', amount: 1 }],
    neighbors: [33, 91, 92]
  },
  {
    x: -2641.4914897322133,
    y: -4476.21,
    name: 'Descent Into Madness',
    stats: [{ modType: 'Delirium in Areas increases 5$AMOUNT faster with distance from the mirror', amount: 0 }],
    neighbors: [90, 85]
  },
  {
    x: -3221.728510267787,
    y: -4476.21,
    name: 'The Singular Eternity',
    stats: [
      { modType: 'Delirium Fog in Areas dissipates 2$AMOUNT slower', amount: 5 },
      { modType: 'Delirium Fog in Areas lasts 10 additional seconds before dissipating', amount: null }
    ],
    neighbors: [84, 91]
  },
  {
    x: -2641.4914897322133,
    y: -4141.21,
    name: 'Delirium Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a mirror of Delirium', amount: 1 }],
    neighbors: [90, 217, 92]
  },
  {
    x: -2596.61,
    y: -4308.71,
    name: 'Delirium Simulacrum Splinters',
    stats: [{ modType: '$AMOUNT increased Stack size of Simulacrum Splinters found in Areas', amount: 4 }],
    neighbors: [89, 87]
  },
  {
    x: -3266.61,
    y: -4308.71,
    name: 'Delirium Simulacrum Splinters',
    stats: [{ modType: '$AMOUNT increased Stack size of Simulacrum Splinters found in Areas', amount: 4 }],
    neighbors: [86, 88]
  },
  {
    x: -2931.61,
    y: -3973.71,
    name: 'Delirium Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a mirror of Delirium', amount: 1 }],
    neighbors: [89, 86]
  },
  {
    x: -2931.6,
    y: -3718.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [216, 33]
  },
  {
    x: -2641.481489732213,
    y: -3295.2,
    name: 'Incursion Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped in Incursions in Areas', amount: 5 }],
    neighbors: [100, 227, 98]
  },
  {
    x: -3221.7185102677868,
    y: -3295.2,
    name: 'Incursion Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped in Incursions in Areas', amount: 5 }],
    neighbors: [33, 97, 100]
  },
  {
    x: -3221.7185102677868,
    y: -2960.2,
    name: 'Incursion Rare Chance',
    stats: [{ modType: 'Incursion Architects in Areas have a 2$AMOUNT chance to drop an additional Rare Incursion Item', amount: 0 }],
    neighbors: [97, 99]
  },
  {
    x: -3266.6,
    y: -3127.7,
    name: 'Incursion Rare Chance',
    stats: [{ modType: 'Incursion Architects in Areas have a 2$AMOUNT chance to drop an additional Rare Incursion Item', amount: 0 }],
    neighbors: [95, 96]
  },
  {
    x: -2596.6,
    y: -3127.7,
    name: 'Vaal Oligarchs',
    stats: [{ modType: 'Incursions in Areas contain a Vaal Flesh Merchant', amount: null }],
    neighbors: [94]
  },
  {
    x: -3099.1,
    y: -2837.581489732213,
    name: 'Artefacts of the Vaal',
    stats: [
      { modType: 'Areas have $AMOUNT chance to grant an additional Alva Mission on Completion', amount: 3 },
      { modType: 'Incursion Architects in Areas have a 6$AMOUNT chance to drop an additional Rare Incursion Item', amount: 0 }
    ],
    neighbors: [96]
  },
  {
    x: -2931.6,
    y: -3462.7,
    name: 'Incursion Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped in Incursions in Areas', amount: 5 }],
    neighbors: [95, 94]
  },
  {
    x: -3071.296115413079,
    y: -7980.55,
    name: 'Bestiary Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Einhar Mission on Completion', amount: 1 }],
    neighbors: [102, 104]
  },
  {
    x: -2931.0,
    y: -7899.55,
    name: 'Bestiary Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Einhar Mission on Completion', amount: 1 }],
    neighbors: [107, 101, 105]
  },
  {
    x: -2931.0,
    y: -8223.55,
    name: 'Great Migration',
    stats: [
      {
        modType: 'Areas with Einhar Missions have $AMOUNT chance to contain additional Packs of Beasts instead of other Monsters',
        amount: 8
      }
    ],
    neighbors: [106, 104]
  },
  {
    x: -3071.296115413079,
    y: -8142.55,
    name: 'Bestiary Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Einhar Mission on Completion', amount: 1 }],
    neighbors: [103, 101]
  },
  {
    x: -2790.703884586921,
    y: -7980.55,
    name: 'Bestiary Red Beast Pair Chance',
    stats: [{ modType: 'Red Beasts in Areas have $AMOUNT chance to appear in Pairs', amount: 4 }],
    neighbors: [102, 106]
  },
  {
    x: -2790.703884586921,
    y: -8142.55,
    name: 'Bestiary Red Beast Pair Chance',
    stats: [{ modType: 'Red Beasts in Areas have $AMOUNT chance to appear in Pairs', amount: 4 }],
    neighbors: [105, 103]
  },
  {
    x: -2931.0,
    y: -7434.55,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [62, 111, 102, 147]
  },
  {
    x: -3308.659910457656,
    y: -6448.755708424535,
    name: 'Additional Delirium Reward Chance',
    stats: [{ modType: 'Delirium Encounters in Areas have $AMOUNT chance to generate an additional Reward type', amount: 4 }],
    neighbors: []
  },
  {
    x: -2553.340089542344,
    y: -6448.755708424535,
    name: 'Delirium Simulacrum Splinters',
    stats: [{ modType: '$AMOUNT increased Stack size of Simulacrum Splinters found in Areas', amount: 4 }],
    neighbors: []
  },
  {
    x: -2790.703884586921,
    y: -6684.65,
    name: 'Cluster Jewel Chance',
    stats: [{ modType: 'Delirium Monsters in Areas have $AMOUNT increased chance to drop Cluster Jewels', amount: 5 }],
    neighbors: [112, 111]
  },
  {
    x: -2931.0,
    y: -6927.65,
    name: 'Cluster Jewel Chance',
    stats: [{ modType: 'Delirium Monsters in Areas have $AMOUNT increased chance to drop Cluster Jewels', amount: 5 }],
    neighbors: [110, 107]
  },
  {
    x: -2931.0,
    y: -6603.65,
    name: 'Cluster Jewel Chance',
    stats: [{ modType: 'Delirium Monsters in Areas have $AMOUNT increased chance to drop Cluster Jewels', amount: 5 }],
    neighbors: [113, 110]
  },
  {
    x: -3093.0,
    y: -6765.65,
    name: 'Pathological',
    stats: [{ modType: 'Maps found in Areas have $AMOUNT chance to have layers of Delirium', amount: 3 }],
    neighbors: [112]
  },
  {
    x: -2931.0,
    y: -6430.65,
    name: 'Cluster Jewel Chance',
    stats: [{ modType: 'Delirium Monsters in Areas have $AMOUNT increased chance to drop Cluster Jewels', amount: 5 }],
    neighbors: [122, 120, 116]
  },
  {
    x: -2790.703884586921,
    y: -6846.65,
    name: 'Cluster Jewel Chance',
    stats: [{ modType: 'Delirium Monsters in Areas have $AMOUNT increased chance to drop Cluster Jewels', amount: 5 }],
    neighbors: []
  },
  {
    x: -3177.5,
    y: -6338.6994759342715,
    name: 'Additional Delirium Reward Chance',
    stats: [{ modType: 'Delirium Encounters in Areas have $AMOUNT chance to generate an additional Reward type', amount: 4 }],
    neighbors: [114, 117]
  },
  {
    x: -3394.268462047453,
    y: -6597.034069340445,
    name: 'Additional Delirium Reward Chance',
    stats: [{ modType: 'Delirium Encounters in Areas have $AMOUNT chance to generate an additional Reward type', amount: 4 }],
    neighbors: [116, 118]
  },
  {
    x: -3424.0,
    y: -6765.65,
    name: 'Compulsive Hoarder',
    stats: [{ modType: 'Delirium Encounters in Areas have $AMOUNT chance to generate three additional Reward types', amount: 8 }],
    neighbors: [117]
  },
  {
    x: -2467.731537952547,
    y: -6597.034069340445,
    name: 'Delirium Simulacrum Splinters',
    stats: [{ modType: '$AMOUNT increased Stack size of Simulacrum Splinters found in Areas', amount: 4 }],
    neighbors: [120, 121]
  },
  {
    x: -2684.5,
    y: -6338.6994759342715,
    name: 'Delirium Simulacrum Splinters',
    stats: [{ modType: '$AMOUNT increased Stack size of Simulacrum Splinters found in Areas', amount: 4 }],
    neighbors: [114, 119]
  },
  {
    x: -2438.0,
    y: -6765.65,
    name: 'Delusions of Persecution',
    stats: [
      { modType: 'Delirium Encounters in Areas are 10$AMOUNT more likely to spawn Unique Bosses', amount: 0 },
      { modType: 'Delirium Bosses in Areas drop 5$AMOUNT increased Simulacrum Splinters', amount: 0 },
      { modType: 'Delirium Bosses in Areas have 5$AMOUNT increased chance to drop Unique Cluster Jewels', amount: 0 }
    ],
    neighbors: [119]
  },
  {
    x: -2931.0,
    y: -5743.46,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [66, 114, 141, 123, 78, 160]
  },
  {
    x: -2931.0,
    y: -5448.46,
    name: 'Ritual Special Reward Chance',
    stats: [{ modType: '2$AMOUNT increased chance of Ritual Altars with Special Rewards', amount: 5 }],
    neighbors: [122, 125, 124]
  },
  {
    x: -3071.296115413079,
    y: -5367.46,
    name: 'Ritual Special Reward Chance',
    stats: [{ modType: '2$AMOUNT increased chance of Ritual Altars with Special Rewards', amount: 5 }],
    neighbors: [123, 127]
  },
  {
    x: -2790.703884586921,
    y: -5367.46,
    name: 'Ritual Reroll Cost',
    stats: [{ modType: 'Rerolling Favours at Ritual Altars in Areas costs 1$AMOUNT less Tribute', amount: 5 }],
    neighbors: [128, 123]
  },
  {
    x: -2931.0,
    y: -5124.46,
    name: 'Profitable Prayers',
    stats: [{ modType: 'Ritual Altars in Areas allow rerolling Favours 2 additional times', amount: null }],
    neighbors: [128, 127]
  },
  {
    x: -3071.296115413079,
    y: -5205.46,
    name: 'Ritual Special Reward Chance',
    stats: [{ modType: '2$AMOUNT increased chance of Ritual Altars with Special Rewards', amount: 5 }],
    neighbors: [126, 124]
  },
  {
    x: -2790.703884586921,
    y: -5205.46,
    name: 'Ritual Reroll Cost',
    stats: [{ modType: 'Rerolling Favours at Ritual Altars in Areas costs 1$AMOUNT less Tribute', amount: 5 }],
    neighbors: [125, 126]
  },
  {
    x: -2931.0,
    y: -1985.48,
    name: 'Ritual Tribute Quantity',
    stats: [{ modType: 'Monsters Sacrificed at Ritual Altars in Areas grant $AMOUNT increased Tribute', amount: 4 }],
    neighbors: [133, 130]
  },
  {
    x: -3071.296115413079,
    y: -2228.48,
    name: 'Ritual Tribute Quantity',
    stats: [{ modType: 'Monsters Sacrificed at Ritual Altars in Areas grant $AMOUNT increased Tribute', amount: 4 }],
    neighbors: [129, 131]
  },
  {
    x: -2931.0,
    y: -2309.48,
    name: 'Ritual Tribute Quantity',
    stats: [{ modType: 'Monsters Sacrificed at Ritual Altars in Areas grant $AMOUNT increased Tribute', amount: 4 }],
    neighbors: [130, 132]
  },
  {
    x: -2790.703884586921,
    y: -2228.48,
    name: 'Sacred Lands',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Ritual Altars', amount: 4 }],
    neighbors: [131]
  },
  {
    x: -2931.0,
    y: -1691.93,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [57, 79, 135, 153, 129]
  },
  {
    x: -2083.31,
    y: -1189.98,
    name: 'Blight Encounter Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Blight Encounter', amount: 1 }],
    neighbors: [139, 231, 136]
  },
  {
    x: -2585.81,
    y: -1480.0985102677869,
    name: 'Blight Encounter Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Blight Encounter', amount: 1 }],
    neighbors: [139, 133, 137]
  },
  {
    x: -2128.191489732213,
    y: -1022.4800000000001,
    name: 'Blighted Map and Oil Chance',
    stats: [{ modType: 'Blight Chests in Areas have 1$AMOUNT increased chance to contain Blighted Maps or Oils', amount: 0 }],
    neighbors: [134, 138]
  },
  {
    x: -2708.428510267787,
    y: -1357.48,
    name: 'Blighted Map and Oil Chance',
    stats: [{ modType: 'Blight Chests in Areas have 1$AMOUNT increased chance to contain Blighted Maps or Oils', amount: 0 }],
    neighbors: [135, 140]
  },
  {
    x: -2250.81,
    y: -899.861489732213,
    name: 'Distilled Fungus',
    stats: [
      { modType: 'Blight Bosses in Areas drop an additional Anointed Jewellery Item', amount: null },
      { modType: 'Blight Chests in Areas have 1$AMOUNT chance to contain an Oil Extractor', amount: 0 }
    ],
    neighbors: [136]
  },
  {
    x: -2250.81,
    y: -1480.0985102677869,
    name: 'Blight Encounter Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Blight Encounter', amount: 1 }],
    neighbors: [134, 135]
  },
  {
    x: -2753.31,
    y: -1189.98,
    name: 'Immune Response',
    stats: [
      { modType: 'Blight Encounters in Areas spawn 10$AMOUNT more non-Unique Monsters', amount: 0 },
      { modType: 'Blight Monsters in Areas spawn 15$AMOUNT faster', amount: 0 }
    ],
    neighbors: [137]
  },
  {
    x: -2197.57,
    y: -5320.0,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [192, 122]
  },
  {
    x: -2196.5,
    y: -8477.62,
    name: 'Atlas Scarab Chance',
    stats: [{ modType: 'Unique Bosses have $AMOUNT chance to drop an additional Scarab', amount: 1 }],
    neighbors: [143, 145]
  },
  {
    x: -2336.796115413079,
    y: -8396.62,
    name: 'Atlas Scarab Chance',
    stats: [{ modType: 'Unique Bosses have $AMOUNT chance to drop an additional Scarab', amount: 1 }],
    neighbors: [142, 146]
  },
  {
    x: -2196.5,
    y: -8153.620000000001,
    name: 'Atlas Scarab Chance',
    stats: [{ modType: 'Unique Bosses have $AMOUNT chance to drop an additional Scarab', amount: 1 }],
    neighbors: [146, 147]
  },
  {
    x: -2056.203884586921,
    y: -8396.62,
    name: 'Subtle Manipulations',
    stats: [{ modType: 'Map Device has 1$AMOUNT chance not to consume Scarabs', amount: 0 }],
    neighbors: [142]
  },
  {
    x: -2336.796115413079,
    y: -8234.62,
    name: 'Atlas Scarab Chance',
    stats: [{ modType: 'Unique Bosses have $AMOUNT chance to drop an additional Scarab', amount: 1 }],
    neighbors: [143, 144]
  },
  {
    x: -2196.5,
    y: -7858.61,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [107, 144, 149, 204]
  },
  {
    x: -2056.203884586921,
    y: -7320.61,
    name: 'Lucky Blight Chests',
    stats: [{ modType: 'Varieties of Items contained in 1 Blight Chest in Areas are Lucky', amount: null }],
    neighbors: [151, 152]
  },
  {
    x: -2196.5,
    y: -7563.61,
    name: 'Lucky Blight Chests',
    stats: [{ modType: 'Varieties of Items contained in 1 Blight Chest in Areas are Lucky', amount: null }],
    neighbors: [147, 151]
  },
  {
    x: -2336.796115413079,
    y: -7320.61,
    name: 'Spores on the Wind',
    stats: [
      { modType: "Maps found in Areas have $AMOUNT chance to have an 'Area contains a Blight Encounter'\nEnchantment Modifier", amount: 3 }
    ],
    neighbors: [152]
  },
  {
    x: -2056.203884586921,
    y: -7482.61,
    name: 'Lucky Blight Chests',
    stats: [{ modType: 'Varieties of Items contained in 1 Blight Chest in Areas are Lucky', amount: null }],
    neighbors: [149, 148]
  },
  {
    x: -2196.5,
    y: -7239.61,
    name: 'Lucky Blight Chests',
    stats: [{ modType: 'Varieties of Items contained in 1 Blight Chest in Areas are Lucky', amount: null }],
    neighbors: [148, 150]
  },
  {
    x: -2196.35,
    y: -2115.35,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [169, 201, 133]
  },
  {
    x: -1989.15,
    y: -4900.09,
    name: 'Exile Currency Chance',
    stats: [{ modType: 'Rogue Exiles in Areas have $AMOUNT chance to drop an additional Currency Item', amount: 5 }],
    neighbors: [157, 192]
  },
  {
    x: -2313.15,
    y: -4900.09,
    name: 'Exile Currency Chance',
    stats: [{ modType: 'Rogue Exiles in Areas have $AMOUNT chance to drop an additional Currency Item', amount: 5 }],
    neighbors: [158, 156]
  },
  {
    x: -2232.15,
    y: -4759.793884586921,
    name: 'Exile Currency Chance',
    stats: [{ modType: 'Rogue Exiles in Areas have $AMOUNT chance to drop an additional Currency Item', amount: 5 }],
    neighbors: [155, 157]
  },
  {
    x: -2070.15,
    y: -4759.793884586921,
    name: 'Exile Currency Chance',
    stats: [{ modType: 'Rogue Exiles in Areas have $AMOUNT chance to drop an additional Currency Item', amount: 5 }],
    neighbors: [156, 154]
  },
  {
    x: -2151.15,
    y: -5062.09,
    name: 'Royal Guard',
    stats: [{ modType: 'Unique Bosses have 2$AMOUNT chance to be accompanied by two Rogue Exile Bodyguards', amount: 0 }],
    neighbors: [155]
  },
  {
    x: -1907.6238845869211,
    y: -6164.76,
    name: 'Rogue Metamorph Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain a rogue Metamorph', amount: 4 }],
    neighbors: [162, 214]
  },
  {
    x: -2188.216115413079,
    y: -6164.76,
    name: 'Rogue Metamorph Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain a rogue Metamorph', amount: 4 }],
    neighbors: [122, 162, 163]
  },
  {
    x: -2047.92,
    y: -5921.76,
    name: 'Escaped Experiment',
    stats: [{ modType: 'Areas have 2$AMOUNT chance to contain a rogue Metamorph', amount: 0 }],
    neighbors: [163]
  },
  {
    x: -2047.92,
    y: -6245.76,
    name: 'Rogue Metamorph Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain a rogue Metamorph', amount: 4 }],
    neighbors: [160, 159]
  },
  {
    x: -2188.216115413079,
    y: -6002.76,
    name: 'Rogue Metamorph Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain a rogue Metamorph', amount: 4 }],
    neighbors: [160, 161]
  },
  {
    x: -1829.723884586921,
    y: -2537.9,
    name: 'Additional Delirium Reward Chance',
    stats: [{ modType: 'Delirium Encounters in Areas have $AMOUNT chance to generate an additional Reward type', amount: 4 }],
    neighbors: [201, 165]
  },
  {
    x: -1829.723884586921,
    y: -2699.9,
    name: 'Additional Delirium Reward Chance',
    stats: [{ modType: 'Delirium Encounters in Areas have $AMOUNT chance to generate an additional Reward type', amount: 4 }],
    neighbors: [164, 166]
  },
  {
    x: -2110.316115413079,
    y: -2699.9,
    name: 'Additional Delirium Reward Chance',
    stats: [{ modType: 'Delirium Encounters in Areas have $AMOUNT chance to generate an additional Reward type', amount: 4 }],
    neighbors: [165, 167]
  },
  {
    x: -2110.316115413079,
    y: -2537.9,
    name: 'That Which You Seek',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a mirror of Delirium', amount: 4 }],
    neighbors: [166]
  },
  {
    x: -1768.763884586921,
    y: -1860.74,
    name: 'Additional Metamorph Sample Reward',
    stats: [{ modType: '+1 Metamorph Monster Samples in Areas have Rewards', amount: null }],
    neighbors: [170, 171]
  },
  {
    x: -2049.356115413079,
    y: -1860.74,
    name: 'Additional Metamorph Sample Reward',
    stats: [{ modType: '+1 Metamorph Monster Samples in Areas have Rewards', amount: null }],
    neighbors: [153, 171]
  },
  {
    x: -1909.06,
    y: -1617.74,
    name: 'Intrinsic Darkness',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Metamorph Encounter', amount: 4 }],
    neighbors: [168]
  },
  {
    x: -1909.06,
    y: -1941.74,
    name: 'Additional Metamorph Sample Reward',
    stats: [{ modType: '+1 Metamorph Monster Samples in Areas have Rewards', amount: null }],
    neighbors: [169, 168]
  },
  {
    x: -1720.2938845869207,
    y: -686.395,
    name: 'Additional Exile Spawn Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Rogue Exile', amount: 0 }],
    neighbors: [231, 174]
  },
  {
    x: -1860.59,
    y: -443.395,
    name: 'Additional Exile Spawn Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Rogue Exile', amount: 0 }],
    neighbors: [174, 175]
  },
  {
    x: -1720.2938845869207,
    y: -524.395,
    name: 'Additional Exile Spawn Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Rogue Exile', amount: 0 }],
    neighbors: [172, 173]
  },
  {
    x: -2000.8861154130789,
    y: -524.3949999999999,
    name: 'Rogue Trader',
    stats: [
      { modType: 'Wild Rogue Exiles in Areas have 5$AMOUNT chance to have additional Rewards', amount: 0 },
      { modType: 'Rogue Exiles have 10$AMOUNT more Maximum Life', amount: 0 }
    ],
    neighbors: [173]
  },
  {
    x: -2349.95,
    y: -8960.54,
    name: 'Neural Pathways',
    stats: [
      { modType: '+0.$AMOUNT chance for a Synthesis Map to drop from Unique Bosses (Tier 11+)', amount: 5 },
      { modType: 'Monsters in Synthesis Maps have $AMOUNT chance to drop Synthesised Items', amount: 2 }
    ],
    neighbors: [182]
  },
  {
    x: -2147.068510267787,
    y: -9128.04,
    name: 'Synthesis Monster Pack Size',
    stats: [{ modType: '$AMOUNT increased Synthesised Monster Pack size', amount: 4 }],
    neighbors: [178, 182]
  },
  {
    x: -2024.4500000000003,
    y: -9250.658510267787,
    name: 'Vivid Memories',
    stats: [
      { modType: '+0.$AMOUNT chance for a Synthesis Map to drop from Unique Bosses (Tier 11+)', amount: 5 },
      { modType: '10$AMOUNT increased effect of Additional Modifiers on Unique Synthesis Maps', amount: 0 }
    ],
    neighbors: [177, 184]
  },
  {
    x: -1610.45,
    y: -9387.49052406573,
    name: 'Synaptic Impulses',
    stats: [
      { modType: '+0.$AMOUNT chance for a Synthesis Map to drop from Unique Bosses (Tier 11+)', amount: 5 },
      { modType: 'Synthesised Unique Items dropped in Areas have 3 Synthesised Implicit Modifiers', amount: null }
    ],
    neighbors: [185]
  },
  {
    x: -1689.45,
    y: -8670.421489732214,
    name: 'Synthesis Monster Pack Size',
    stats: [{ modType: '$AMOUNT increased Synthesised Monster Pack size', amount: 4 }],
    neighbors: [181, 183, 204]
  },
  {
    x: -1566.831489732213,
    y: -8793.04,
    name: 'Synthesis Monster Pack Size',
    stats: [{ modType: '$AMOUNT increased Synthesised Monster Pack size', amount: 4 }],
    neighbors: [185, 180]
  },
  {
    x: -2191.95,
    y: -8960.54,
    name: 'Synthesis Monster Pack Size',
    stats: [{ modType: '$AMOUNT increased Synthesised Monster Pack size', amount: 4 }],
    neighbors: [177, 183, 176]
  },
  {
    x: -1856.95,
    y: -8625.54,
    name: 'Synthesis Monster Pack Size',
    stats: [{ modType: '$AMOUNT increased Synthesised Monster Pack size', amount: 4 }],
    neighbors: [180, 182]
  },
  {
    x: -1856.95,
    y: -9295.54,
    name: 'Synthesis Monster Pack Size',
    stats: [{ modType: '$AMOUNT increased Synthesised Monster Pack size', amount: 4 }],
    neighbors: [178, 185]
  },
  {
    x: -1689.45,
    y: -9250.658510267787,
    name: 'Synthesis Monster Pack Size',
    stats: [{ modType: '$AMOUNT increased Synthesised Monster Pack size', amount: 4 }],
    neighbors: [184, 179, 181]
  },
  {
    x: -1467.24,
    y: -5188.25,
    name: 'Essence Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain an additional Essence', amount: 5 }],
    neighbors: [189, 192, 187]
  },
  {
    x: -1607.536115413079,
    y: -5269.25,
    name: 'Imprisoned Monster Additional Essence Chance',
    stats: [{ modType: 'Imprisoned Monsters in Areas have $AMOUNT chance to have an additional Essence', amount: 5 }],
    neighbors: [186, 188]
  },
  {
    x: -1607.5361154130792,
    y: -5431.25,
    name: 'Imprisoned Monster Additional Essence Chance',
    stats: [{ modType: 'Imprisoned Monsters in Areas have $AMOUNT chance to have an additional Essence', amount: 5 }],
    neighbors: [187, 190]
  },
  {
    x: -1326.9438845869208,
    y: -5269.25,
    name: 'Remnant of Corruption Essence Chance',
    stats: [{ modType: 'Monsters Imprisoned by Essences have a 1$AMOUNT chance to contain a Remnant of Corruption', amount: 0 }],
    neighbors: [186, 191]
  },
  {
    x: -1467.24,
    y: -5512.25,
    name: 'Crystal Resonance',
    stats: [
      { modType: 'Monsters Imprisoned by a Shrieking Essence in Areas will be Duplicated when released', amount: null },
      { modType: 'Corrupting Imprisoned Monsters in Areas cannot release them', amount: null }
    ],
    neighbors: [188, 191]
  },
  {
    x: -1326.9438845869208,
    y: -5431.25,
    name: 'Remnant of Corruption Essence Chance',
    stats: [{ modType: 'Monsters Imprisoned by Essences have a 1$AMOUNT chance to contain a Remnant of Corruption', amount: 0 }],
    neighbors: [189, 190]
  },
  {
    x: -1467.23,
    y: -4900.09,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [154, 186, 217, 258, 264, 141]
  },
  {
    x: -1465.71,
    y: -4141.21,
    name: 'Vaal Side Area Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Vaal Side Area', amount: 2 }],
    neighbors: [194, 217]
  },
  {
    x: -1325.413884586921,
    y: -4222.21,
    name: 'Vaal Side Area Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Vaal Side Area', amount: 2 }],
    neighbors: [193, 264, 196]
  },
  {
    x: -1465.71,
    y: -4465.21,
    name: 'For Love of the Queen',
    stats: [
      { modType: 'Vaal Side Areas in Areas have 2$AMOUNT chance to be an Alluring Vaal Side Area', amount: 0 },
      { modType: 'Areas have +$AMOUNT chance to contain a Vaal Side Area', amount: 4 }
    ],
    neighbors: [196]
  },
  {
    x: -1325.413884586921,
    y: -4384.21,
    name: 'Vaal Side Area Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Vaal Side Area', amount: 2 }],
    neighbors: [194, 195]
  },
  {
    x: -1325.413884586921,
    y: -3210.75,
    name: 'Imprisoned Monster Additional Essence Chance',
    stats: [{ modType: 'Imprisoned Monsters in Areas have $AMOUNT chance to have an additional Essence', amount: 5 }],
    neighbors: [199, 263, 198]
  },
  {
    x: -1325.413884586921,
    y: -3048.75,
    name: 'Imprisoned Monster Additional Essence Chance',
    stats: [{ modType: 'Imprisoned Monsters in Areas have $AMOUNT chance to have an additional Essence', amount: 5 }],
    neighbors: [197, 200]
  },
  {
    x: -1465.71,
    y: -3291.75,
    name: 'Imprisoned Monster Additional Essence Chance',
    stats: [{ modType: 'Imprisoned Monsters in Areas have $AMOUNT chance to have an additional Essence', amount: 5 }],
    neighbors: [227, 197]
  },
  {
    x: -1465.71,
    y: -2967.75,
    name: 'Crystal Lattice',
    stats: [{ modType: 'Imprisoned Monsters in Areas have 1$AMOUNT chance to have 3 additional Essences', amount: 5 }],
    neighbors: [198]
  },
  {
    x: -1465.71,
    y: -2537.9,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [164, 202, 233, 245, 263, 227, 153]
  },
  {
    x: -1465.71,
    y: -1937.01,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [203, 201]
  },
  {
    x: -1465.71,
    y: -1444.01,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [202, 231]
  },
  {
    x: -1464.45,
    y: -8280.71,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [147, 180, 215, 256, 234]
  },
  {
    x: -1526.29,
    y: -7314.293884586921,
    name: 'Fine Specimens',
    stats: [
      { modType: 'Metamorphs in Areas deal 1$AMOUNT more Damage', amount: 5 },
      { modType: 'Metamorphs in Areas have 15$AMOUNT more Life', amount: 0 },
      { modType: '3$AMOUNT chance for Rewards from Metamorphs in Areas to be Doubled', amount: 0 }
    ],
    neighbors: [208]
  },
  {
    x: -1526.29,
    y: -7594.886115413079,
    name: 'Metamorph Double Reward Chance',
    stats: [{ modType: '$AMOUNT chance for Rewards from Metamorphs in Areas to be Doubled', amount: 3 }],
    neighbors: [209, 208]
  },
  {
    x: -1283.29,
    y: -7454.59,
    name: 'Metamorph Double Reward Chance',
    stats: [{ modType: '$AMOUNT chance for Rewards from Metamorphs in Areas to be Doubled', amount: 3 }],
    neighbors: [243, 209]
  },
  {
    x: -1607.29,
    y: -7454.59,
    name: 'Metamorph Double Reward Chance',
    stats: [{ modType: '$AMOUNT chance for Rewards from Metamorphs in Areas to be Doubled', amount: 3 }],
    neighbors: [205, 206]
  },
  {
    x: -1364.29,
    y: -7594.886115413079,
    name: 'Metamorph Double Reward Chance',
    stats: [{ modType: '$AMOUNT chance for Rewards from Metamorphs in Areas to be Doubled', amount: 3 }],
    neighbors: [207, 206]
  },
  {
    x: -1333.04,
    y: -6749.9,
    name: 'Incursion Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Alva Mission on Completion', amount: 1 }],
    neighbors: [211, 213]
  },
  {
    x: -1171.04,
    y: -6587.9,
    name: 'Incursion Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Alva Mission on Completion', amount: 1 }],
    neighbors: [316, 210]
  },
  {
    x: -1473.336115413079,
    y: -6506.9,
    name: 'Time Dilation',
    stats: [
      { modType: 'Incursions in Areas have 3$AMOUNT chance for all Monsters to be at least Magic', amount: 3 },
      { modType: 'Time gained from kills is Doubled for Incursions in Areas', amount: null }
    ],
    neighbors: [213]
  },
  {
    x: -1473.336115413079,
    y: -6668.9,
    name: 'Incursion Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Alva Mission on Completion', amount: 1 }],
    neighbors: [212, 210]
  },
  {
    x: -1333.04,
    y: -6164.76,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [310, 159]
  },
  {
    x: -1215.57,
    y: -7846.53,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [243, 204]
  },
  {
    x: -2039.39,
    y: -3718.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [221, 227, 217, 93]
  },
  {
    x: -1926.047491601635,
    y: -4141.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [193, 216, 192, 89]
  },
  {
    x: -1025.89,
    y: -3428.081489732213,
    name: 'Metamorph Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Metamorph Encounter', amount: 1 }],
    neighbors: [222, 263, 225]
  },
  {
    x: -1483.508510267787,
    y: -3550.7,
    name: 'Metamorph Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Metamorph Encounter', amount: 1 }],
    neighbors: [225, 221]
  },
  {
    x: -1483.508510267787,
    y: -3885.7,
    name: 'Additional Metamorph Sample Reward',
    stats: [{ modType: '+1 Metamorph Monster Samples in Areas have Rewards', amount: null }],
    neighbors: [221, 226]
  },
  {
    x: -1528.39,
    y: -3718.2,
    name: 'Metamorph Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Metamorph Encounter', amount: 1 }],
    neighbors: [219, 220, 216]
  },
  {
    x: -903.2714897322131,
    y: -3550.7,
    name: 'Additional Metamorph Sample Reward',
    stats: [{ modType: '+1 Metamorph Monster Samples in Areas have Rewards', amount: null }],
    neighbors: [223, 218]
  },
  {
    x: -858.3900000000001,
    y: -3718.2,
    name: 'Additional Metamorph Sample Reward',
    stats: [{ modType: '+1 Metamorph Monster Samples in Areas have Rewards', amount: null }],
    neighbors: [224, 222]
  },
  {
    x: -903.2714897322132,
    y: -3885.7,
    name: 'Replicated Results',
    stats: [{ modType: 'You can assemble an additional Metamorph in Areas after the first is Dead', amount: null }],
    neighbors: [223]
  },
  {
    x: -1360.89,
    y: -3428.081489732213,
    name: 'Metamorph Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Metamorph Encounter', amount: 1 }],
    neighbors: [218, 219]
  },
  {
    x: -1193.39,
    y: -4053.2,
    name: 'Organ Donor',
    stats: [
      { modType: 'Metamorph Bosses which drop an Itemised Sample drop an additional Itemised Sample', amount: null },
      { modType: 'Metamorph Vat Meters in Areas require 2$AMOUNT less Power to fill', amount: 5 }
    ],
    neighbors: [220]
  },
  {
    x: -1926.047491601635,
    y: -3295.1999999999994,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [199, 201, 216, 94]
  },
  {
    x: -1256.57,
    y: -525.5988845869209,
    name: 'Animal Companion',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Einhar Mission on Completion', amount: 4 }],
    neighbors: [229, 230]
  },
  {
    x: -1035.2738845869208,
    y: -584.895,
    name: 'Bestiary Beast Duplication Chance',
    stats: [{ modType: '$AMOUNT chance create a copy of Beasts Captured in Areas', amount: 3 }],
    neighbors: [4, 228]
  },
  {
    x: -1315.8661154130791,
    y: -746.895,
    name: 'Bestiary Beast Duplication Chance',
    stats: [{ modType: '$AMOUNT chance create a copy of Beasts Captured in Areas', amount: 3 }],
    neighbors: [231, 228]
  },
  {
    x: -1465.6885102677868,
    y: -833.395,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [172, 203, 232, 134, 230]
  },
  {
    x: -1008.0699999999999,
    y: -956.013510267787,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [4, 231]
  },
  {
    x: -1165.71,
    y: -2018.29,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [247, 201]
  },
  {
    x: -1169.4561154130793,
    y: -8280.71,
    name: 'Heist Marker Stack Size',
    stats: [{ modType: "$AMOUNT increased Stack size of Rogue's Markers found in Areas", amount: 8 }],
    neighbors: [204, 237]
  },
  {
    x: -888.863884586921,
    y: -8280.71,
    name: 'Heist Marker Stack Size',
    stats: [{ modType: "$AMOUNT increased Stack size of Rogue's Markers found in Areas", amount: 8 }],
    neighbors: [236, 237]
  },
  {
    x: -1029.16,
    y: -8037.709999999999,
    name: 'Smuggling Routes',
    stats: [{ modType: 'Areas have 1$AMOUNT chance to contain a Bounty Target Pack', amount: 0 }],
    neighbors: [235]
  },
  {
    x: -1029.16,
    y: -8361.71,
    name: 'Heist Marker Stack Size',
    stats: [{ modType: "$AMOUNT increased Stack size of Rogue's Markers found in Areas", amount: 8 }],
    neighbors: [235, 234]
  },
  {
    x: -1180.3400000000001,
    y: -5815.23,
    name: "Heist Smuggler's Cache Chance",
    stats: [{ modType: "Areas have +$AMOUNT chance to contain a Smuggler's Cache", amount: 1 }],
    neighbors: [242, 239]
  },
  {
    x: -1099.3400000000001,
    y: -5955.5261154130785,
    name: "Heist Smuggler's Cache Chance",
    stats: [{ modType: "Areas have +$AMOUNT chance to contain a Smuggler's Cache", amount: 1 }],
    neighbors: [238, 240]
  },
  {
    x: -937.34,
    y: -5955.5261154130785,
    name: "Heist Smuggler's Cache Chance",
    stats: [{ modType: "Areas have +$AMOUNT chance to contain a Smuggler's Cache", amount: 1 }],
    neighbors: [239, 310]
  },
  {
    x: -937.34,
    y: -5674.933884586921,
    name: 'Casing the Joint',
    stats: [
      { modType: "Smuggler's Caches in Areas have 10$AMOUNT increased chance to drop Blueprints", amount: 0 },
      { modType: 'Blueprints that drop in Areas have 1$AMOUNT chance to be fully Revealed', amount: 0 }
    ],
    neighbors: [242]
  },
  {
    x: -1099.3400000000001,
    y: -5674.933884586921,
    name: "Heist Smuggler's Cache Chance",
    stats: [{ modType: "Areas have +$AMOUNT chance to contain a Smuggler's Cache", amount: 1 }],
    neighbors: [241, 238]
  },
  {
    x: -989.285,
    y: -7454.59,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [207, 311, 215, 268]
  },
  {
    x: -821.1188845869209,
    y: -2537.9,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 5 }],
    neighbors: [245, 246]
  },
  {
    x: -1101.711115413079,
    y: -2537.9,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 5 }],
    neighbors: [244, 201]
  },
  {
    x: -961.415,
    y: -2294.9,
    name: 'Shaping the Mountains',
    stats: [
      { modType: 'Unique Map Bosses have 1$AMOUNT chance to add a free random craft to your Map device', amount: 0 },
      { modType: 'Maps dropped in Areas have 1$AMOUNT chance to be 1 tier higher', amount: 5 }
    ],
    neighbors: [244]
  },
  {
    x: -928.855,
    y: -1606.01,
    name: 'Incursion Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped in Incursions in Areas', amount: 5 }],
    neighbors: [249, 233]
  },
  {
    x: -788.558884586921,
    y: -1363.01,
    name: 'Incursion Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items dropped in Incursions in Areas', amount: 5 }],
    neighbors: [3, 249]
  },
  {
    x: -1069.151115413079,
    y: -1363.01,
    name: 'The Perpetual Search',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Alva Mission on Completion', amount: 4 }],
    neighbors: [247, 248]
  },
  {
    x: -1020.9911154130791,
    y: -9212.16,
    name: 'Ritual Tribute Quantity',
    stats: [{ modType: 'Monsters Sacrificed at Ritual Altars in Areas grant $AMOUNT increased Tribute', amount: 4 }],
    neighbors: [251, 254]
  },
  {
    x: -1020.9911154130791,
    y: -9050.16,
    name: 'Ritual Tribute Quantity',
    stats: [{ modType: 'Monsters Sacrificed at Ritual Altars in Areas grant $AMOUNT increased Tribute', amount: 4 }],
    neighbors: [255, 250]
  },
  {
    x: -740.398884586921,
    y: -9050.16,
    name: 'Ritual Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Ritual Altars', amount: 1 }],
    neighbors: [253, 255]
  },
  {
    x: -740.398884586921,
    y: -9212.16,
    name: 'Ritual Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Ritual Altars', amount: 1 }],
    neighbors: [252, 254]
  },
  {
    x: -880.695,
    y: -9293.16,
    name: 'Occult Devotion',
    stats: [{ modType: 'Areas with Ritual Altars always have four Ritual Altars', amount: null }],
    neighbors: [253, 250]
  },
  {
    x: -880.695,
    y: -8969.16,
    name: 'Ritual Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Ritual Altars', amount: 1 }],
    neighbors: [252, 251, 256]
  },
  {
    x: -880.535,
    y: -8617.46,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [255, 204, 279]
  },
  {
    x: -733.045,
    y: -5314.066115413079,
    name: 'Incursion Pack Size',
    stats: [{ modType: 'Incursions in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [310, 261, 262]
  },
  {
    x: -976.045,
    y: -5173.77,
    name: 'Incursion Pack Size',
    stats: [{ modType: 'Incursions in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [259, 262, 192]
  },
  {
    x: -814.045,
    y: -5011.77,
    name: 'Incursion Upgrade Chance',
    stats: [
      {
        modType:
          "Killing non-resident Architects in Areas has 1$AMOUNT chance to add\nan additional Upgrade Tier to the surviving Architect's Room",
        amount: 0
      }
    ],
    neighbors: [260, 258]
  },
  {
    x: -814.045,
    y: -4838.77,
    name: 'Resource Reallocation',
    stats: [
      {
        modType:
          "Killing non-resident Architects in Areas has 4$AMOUNT chance to add\nan additional Upgrade Tier to the surviving Architect's Room",
        amount: 0
      }
    ],
    neighbors: [259]
  },
  {
    x: -652.045,
    y: -5173.77,
    name: 'Contested Development',
    stats: [{ modType: "Killing resident Architects in Areas adds their Upgrade Tier to the surviving Architect's Room", amount: null }],
    neighbors: [257]
  },
  {
    x: -895.0450000000001,
    y: -5314.066115413079,
    name: 'Incursion Pack Size',
    stats: [{ modType: 'Incursions in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [257, 258]
  },
  {
    x: -785.255,
    y: -2930.05,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [201, 284, 287, 197, 218]
  },
  {
    x: -734.225,
    y: -4476.9,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [194, 285, 286, 192]
  },
  {
    x: -784.0362985522207,
    y: -7802.201298552221,
    name: 'Blightspawn',
    stats: [
      { modType: 'Oils found in Areas have 2$AMOUNT chance to be 1 tier higher', amount: 5 },
      { modType: 'Blight Encounters in Areas contain up to 1 additional Blight Boss', amount: null }
    ],
    neighbors: [266]
  },
  {
    x: -588.485,
    y: -7827.946115413079,
    name: 'Additional Blight Chest Chance',
    stats: [{ modType: 'Lanes of Blight Encounters in Areas have $AMOUNT chance for an additional Reward Chest', amount: 5 }],
    neighbors: [265, 269]
  },
  {
    x: -588.485,
    y: -7547.353884586921,
    name: 'Additional Blight Chest Chance',
    stats: [{ modType: 'Lanes of Blight Encounters in Areas have $AMOUNT chance for an additional Reward Chest', amount: 5 }],
    neighbors: [268, 269]
  },
  {
    x: -784.0362985522207,
    y: -7573.098701447779,
    name: 'Additional Blight Chest Chance',
    stats: [{ modType: 'Lanes of Blight Encounters in Areas have $AMOUNT chance for an additional Reward Chest', amount: 5 }],
    neighbors: [243, 267]
  },
  {
    x: -507.485,
    y: -7687.65,
    name: 'Additional Blight Chest Chance',
    stats: [{ modType: 'Lanes of Blight Encounters in Areas have $AMOUNT chance for an additional Reward Chest', amount: 5 }],
    neighbors: [266, 267]
  },
  {
    x: -323.515,
    y: -6307.67,
    name: 'Essence Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain an additional Essence', amount: 5 }],
    neighbors: [308, 273, 272]
  },
  {
    x: -566.515,
    y: -6167.373884586921,
    name: 'Essence Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain an additional Essence', amount: 5 }],
    neighbors: [273, 310]
  },
  {
    x: -566.5150000000001,
    y: -6447.966115413079,
    name: 'Amplified Energies',
    stats: [{ modType: 'Essences found in Areas are a tier higher', amount: null }],
    neighbors: [270]
  },
  {
    x: -404.515,
    y: -6167.373884586921,
    name: 'Essence Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to contain an additional Essence', amount: 5 }],
    neighbors: [270, 271]
  },
  {
    x: -366.245,
    y: -6986.056115413079,
    name: 'Tormented Spirit Duration',
    stats: [{ modType: 'Tormented Spirits in Areas have 5$AMOUNT increased Duration', amount: 0 }],
    neighbors: [277, 275]
  },
  {
    x: -587.5411154130791,
    y: -6926.76,
    name: 'Tormented Spirit Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Tormented Spirit', amount: 0 }],
    neighbors: [274, 278, 311]
  },
  {
    x: -447.245,
    y: -6683.76,
    name: 'Tormented Spirit Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Tormented Spirit', amount: 0 }],
    neighbors: [277, 278]
  },
  {
    x: -306.94888458692094,
    y: -6764.76,
    name: 'Unrelenting Torment',
    stats: [
      { modType: 'Map Boss has 1$AMOUNT chance to be surrounded by Tormented Spirits', amount: 0 },
      { modType: '3$AMOUNT more Quantity of Items dropped by Possessed Monsters in Areas', amount: 0 }
    ],
    neighbors: [276, 274]
  },
  {
    x: -587.5411154130791,
    y: -6764.76,
    name: 'Tormented Spirit Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Tormented Spirit', amount: 0 }],
    neighbors: [276, 275]
  },
  {
    x: -436.045,
    y: -8874.09,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [256, 357]
  },
  {
    x: -267.32888458692094,
    y: -2394.41,
    name: 'Map Boss Rarity',
    stats: [{ modType: '2$AMOUNT increased Rarity of Items dropped by Unique Bosses', amount: 5 }],
    neighbors: [281, 347]
  },
  {
    x: -326.625,
    y: -2173.113884586921,
    name: 'Map Boss Rarity',
    stats: [{ modType: '2$AMOUNT increased Rarity of Items dropped by Unique Bosses', amount: 5 }],
    neighbors: [280, 283]
  },
  {
    x: -547.9211154130791,
    y: -2394.41,
    name: 'Fated Conflict',
    stats: [
      { modType: 'Unique Map Bosses have $AMOUNT chance to drop an additional Unique Item', amount: 3 },
      { modType: 'Unique Bosses have 8$AMOUNT increased chance to drop a Fated Unique Item', amount: 0 }
    ],
    neighbors: [283]
  },
  {
    x: -488.625,
    y: -2173.113884586921,
    name: 'Map Boss Rarity',
    stats: [{ modType: '2$AMOUNT increased Rarity of Items dropped by Unique Bosses', amount: 5 }],
    neighbors: [282, 281]
  },
  {
    x: -390.675,
    y: -3163.63,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [334, 263]
  },
  {
    x: -390.275,
    y: -4278.31,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [339, 264]
  },
  {
    x: -373.815,
    y: -5101.15,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [297, 321, 264]
  },
  {
    x: -510.325,
    y: -2785.73,
    name: 'Heist Marker Stack Size',
    stats: [{ modType: "$AMOUNT increased Stack size of Rogue's Markers found in Areas", amount: 8 }],
    neighbors: [290, 263, 288]
  },
  {
    x: -429.32500000000005,
    y: -2926.026115413079,
    name: 'Heist Blueprint Chance',
    stats: [{ modType: '$AMOUNT more Blueprints found in Areas', amount: 8 }],
    neighbors: [287, 289]
  },
  {
    x: -267.325,
    y: -2926.026115413079,
    name: 'Secret Stash',
    stats: [{ modType: "Areas have +$AMOUNT chance to contain a Smuggler's Cache", amount: 4 }],
    neighbors: [288]
  },
  {
    x: -267.325,
    y: -2645.433884586921,
    name: 'Heist Marker Stack Size',
    stats: [{ modType: "$AMOUNT increased Stack size of Rogue's Markers found in Areas", amount: 8 }],
    neighbors: [287, 347]
  },
  {
    x: -142.77888458692092,
    y: -1027.6,
    name: 'Essence Rare Chance',
    stats: [
      { modType: 'Imprisoned Monsters in Areas have 2$AMOUNT chance to drop an additional Rare Item with an Essence Modifier', amount: 5 }
    ],
    neighbors: [292, 295, 2]
  },
  {
    x: -423.371115413079,
    y: -1027.6,
    name: 'Essence Rare Chance',
    stats: [
      { modType: 'Imprisoned Monsters in Areas have 2$AMOUNT chance to drop an additional Rare Item with an Essence Modifier', amount: 5 }
    ],
    neighbors: [294, 291, 3]
  },
  {
    x: -283.075,
    y: -1270.6,
    name: 'Prolific Essence',
    stats: [{ modType: 'Areas contain an additional Essence', amount: null }],
    neighbors: [294, 295]
  },
  {
    x: -423.37111541307905,
    y: -1189.6,
    name: 'Essence Rare Chance',
    stats: [
      { modType: 'Imprisoned Monsters in Areas have 2$AMOUNT chance to drop an additional Rare Item with an Essence Modifier', amount: 5 }
    ],
    neighbors: [293, 292]
  },
  {
    x: -142.77888458692092,
    y: -1189.6,
    name: 'Essence Rare Chance',
    stats: [
      { modType: 'Imprisoned Monsters in Areas have 2$AMOUNT chance to drop an additional Rare Item with an Essence Modifier', amount: 5 }
    ],
    neighbors: [293, 291]
  },
  {
    x: -142.10111541307907,
    y: -5263.15,
    name: 'Tamper-Proof',
    stats: [
      { modType: 'Strongboxes in Areas are Corrupted', amount: null },
      { modType: 'Strongboxes in Areas are at least Rare', amount: null }
    ],
    neighbors: [297]
  },
  {
    x: -142.10111541307901,
    y: -5101.15,
    name: 'Strongbox Chance to be Reopenable ',
    stats: [{ modType: 'Strongboxes opened in Areas have $AMOUNT chance to be openable again', amount: 2 }],
    neighbors: [298, 296, 286]
  },
  {
    x: -1.8049999999999802,
    y: -5020.15,
    name: 'Strongbox Chance to be Reopenable ',
    stats: [{ modType: 'Strongboxes opened in Areas have $AMOUNT chance to be openable again', amount: 2 }],
    neighbors: [299, 297]
  },
  {
    x: 138.49111541307906,
    y: -5101.15,
    name: 'Strongbox Chance to be Reopenable ',
    stats: [{ modType: 'Strongboxes opened in Areas have $AMOUNT chance to be openable again', amount: 2 }],
    neighbors: [300, 298, 378]
  },
  {
    x: 138.49111541307906,
    y: -5263.15,
    name: 'Secret Operations',
    stats: [{ modType: "Strongboxes in Areas have $AMOUNT chance to be an Operative's Strongbox", amount: 6 }],
    neighbors: [299]
  },
  {
    x: -0.575,
    y: -1444.01,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [302, 2]
  },
  {
    x: -0.575,
    y: -1937.01,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [347, 301]
  },
  {
    x: 161.625,
    y: -7147.96,
    name: 'Heart of the Grove',
    stats: [
      { modType: 'Harvest Bosses in Areas always drop a Sacred Blossom', amount: null },
      { modType: 'Harvests in Areas have 1$AMOUNT chance for the unchosen Crop to not wilt', amount: 0 }
    ],
    neighbors: [305]
  },
  {
    x: -162.375,
    y: -7147.96,
    name: 'Harvest Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain The Sacred Grove', amount: 1 }],
    neighbors: [306, 305]
  },
  {
    x: -81.37500000000001,
    y: -7007.663884586921,
    name: 'Harvest Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain The Sacred Grove', amount: 1 }],
    neighbors: [304, 309, 303]
  },
  {
    x: -81.37500000000007,
    y: -7288.256115413079,
    name: 'Harvest Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain The Sacred Grove', amount: 1 }],
    neighbors: [314, 304]
  },
  {
    x: 70.63908311032398,
    y: -6546.76,
    name: 'Item Quantity and Rarity',
    stats: [
      { modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 },
      { modType: '$AMOUNT increased Rarity of Items found in Areas', amount: 5 }
    ],
    neighbors: [308, 391, 309]
  },
  {
    x: -71.38908311032395,
    y: -6546.76,
    name: 'Item Quantity and Rarity',
    stats: [
      { modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 },
      { modType: '$AMOUNT increased Rarity of Items found in Areas', amount: 5 }
    ],
    neighbors: [270, 309, 307]
  },
  {
    x: -0.375,
    y: -6669.76,
    name: 'Item Quantity and Rarity',
    stats: [
      { modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 },
      { modType: '$AMOUNT increased Rarity of Items found in Areas', amount: 5 }
    ],
    neighbors: [305, 307, 308]
  },
  {
    x: -733.0324916016349,
    y: -6164.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [214, 240, 257, 271, 319, 316]
  },
  {
    x: -733.032491601635,
    y: -7010.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [275, 316, 317, 243]
  },
  {
    x: 732.282491601635,
    y: -7010.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [315, 318, 414, 388]
  },
  {
    x: 732.2824916016351,
    y: -6164.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [315, 320, 392, 403, 416, 447]
  },
  {
    x: -0.375,
    y: -7433.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [306, 317, 318]
  },
  {
    x: 845.625,
    y: -6587.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [312, 313, 444]
  },
  {
    x: -846.375,
    y: -6587.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [211, 310, 311]
  },
  {
    x: -423.3750000000004,
    y: -7320.417491601635,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [311, 314]
  },
  {
    x: 422.62499999999994,
    y: -7320.417491601635,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [314, 312]
  },
  {
    x: -423.3750000000001,
    y: -5855.102508398365,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [321, 310]
  },
  {
    x: 422.62499999999994,
    y: -5855.102508398365,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [321, 313]
  },
  {
    x: -0.3749999999998964,
    y: -5741.76,
    name: 'Item Quantity',
    stats: [{ modType: '$AMOUNT increased Quantity of Items found in Areas', amount: 1 }],
    neighbors: [286, 322, 378, 320, 319]
  },
  {
    x: -0.3749999999999802,
    y: -5910.48,
    name: 'Exile Pair Chance',
    stats: [{ modType: '1$AMOUNT chance for Rogue Exiles in Areas to appear in Pairs', amount: 0 }],
    neighbors: [321, 324, 323]
  },
  {
    x: -140.671115413079,
    y: -5991.48,
    name: 'Exile Pair Chance',
    stats: [{ modType: '1$AMOUNT chance for Rogue Exiles in Areas to appear in Pairs', amount: 0 }],
    neighbors: [322, 326]
  },
  {
    x: 139.92111541307906,
    y: -5991.48,
    name: 'Exile Pair Chance',
    stats: [{ modType: '1$AMOUNT chance for Rogue Exiles in Areas to appear in Pairs', amount: 0 }],
    neighbors: [322, 325]
  },
  {
    x: 139.92111541307906,
    y: -6153.48,
    name: 'Ruckus',
    stats: [{ modType: 'Areas have a $AMOUNT chance to contain 20 additional Rogue Exiles', amount: 8 }],
    neighbors: [324]
  },
  {
    x: -140.67111541307906,
    y: -6153.48,
    name: 'Exiled Will',
    stats: [{ modType: 'Rogue Exiles in Areas have 10$AMOUNT chance to be Possessed by a Tormented Spirit', amount: 0 }],
    neighbors: [323]
  },
  {
    x: 289.743510267787,
    y: -4442.71,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 4 }],
    neighbors: [331, 328]
  },
  {
    x: 334.625,
    y: -4610.21,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 4 }],
    neighbors: [327, 329]
  },
  {
    x: 289.7435102677869,
    y: -4777.71,
    name: 'Shaping the Seas',
    stats: [
      { modType: 'Maps found in Areas have 2$AMOUNT increased chance to be Favoured Maps', amount: 5 },
      { modType: 'Maps dropped in Areas have 1$AMOUNT chance to be 1 tier higher', amount: 5 }
    ],
    neighbors: [328]
  },
  {
    x: -335.375,
    y: -4610.21,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 4 }],
    neighbors: [333, 332]
  },
  {
    x: -0.374999999999959,
    y: -4275.21,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 4 }],
    neighbors: [339, 332, 327]
  },
  {
    x: -290.49351026778686,
    y: -4442.71,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 4 }],
    neighbors: [330, 331]
  },
  {
    x: -290.4935102677869,
    y: -4777.71,
    name: 'Shaping the Valleys',
    stats: [
      { modType: '1$AMOUNT increased Quantity of Items found in Areas affected by Fortune Favours the Brave', amount: 0 },
      { modType: '1$AMOUNT increased Rarity of Items found in Areas affected by Fortune Favours the Brave', amount: 0 },
      { modType: '1$AMOUNT increased Pack Size of Areas affected by Fortune Favours the Brave', amount: 0 },
      { modType: 'Maps dropped in Areas have 1$AMOUNT chance to be 1 tier higher', amount: 5 }
    ],
    neighbors: [330]
  },
  {
    x: -0.374999999999959,
    y: -3383.2,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [335, 341, 347, 380, 284]
  },
  {
    x: -167.87500000000003,
    y: -3428.081489732213,
    name: 'Kirac Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 1 }],
    neighbors: [338, 334]
  },
  {
    x: -167.87500000000014,
    y: -4008.3185102677867,
    name: 'Kirac Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 1 }],
    neighbors: [337, 339]
  },
  {
    x: -290.4935102677869,
    y: -3885.7,
    name: 'Kirac Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 1 }],
    neighbors: [346, 336]
  },
  {
    x: -290.49351026778686,
    y: -3550.7,
    name: 'Kirac Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 1 }],
    neighbors: [346, 335]
  },
  {
    x: -0.375,
    y: -4053.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [336, 342, 344, 331, 285, 379]
  },
  {
    x: 289.7435102677869,
    y: -3885.7,
    name: 'Kirac Map Quality',
    stats: [{ modType: '+$AMOUNT to Quality of Maps offered by Kirac Missions in Areas', amount: 5 }],
    neighbors: [342, 345]
  },
  {
    x: 167.12499999999997,
    y: -3428.081489732213,
    name: 'Kirac Map Quality',
    stats: [{ modType: '+$AMOUNT to Quality of Maps offered by Kirac Missions in Areas', amount: 5 }],
    neighbors: [343, 334]
  },
  {
    x: 167.12499999999997,
    y: -4008.3185102677867,
    name: 'Kirac Map Quality',
    stats: [{ modType: '+$AMOUNT to Quality of Maps offered by Kirac Missions in Areas', amount: 5 }],
    neighbors: [339, 340]
  },
  {
    x: 289.743510267787,
    y: -3550.7,
    name: 'Kirac Map Quality',
    stats: [{ modType: '+$AMOUNT to Quality of Maps offered by Kirac Missions in Areas', amount: 5 }],
    neighbors: [345, 341]
  },
  {
    x: -0.375,
    y: -3880.2,
    name: 'Commissioned Officer',
    stats: [
      { modType: 'Gain 1 additional Kirac Mission each day', amount: null },
      { modType: 'Areas have $AMOUNT chance to grant an additional Kirac Mission on Completion', amount: 3 }
    ],
    neighbors: [339]
  },
  {
    x: 334.625,
    y: -3718.2,
    name: 'Expect the Unexpected',
    stats: [
      { modType: '$AMOUNT chance for Scouting Reports in Areas to drop as Blighted Scouting Reports instead', amount: 5 },
      { modType: '$AMOUNT chance for Scouting Reports in Areas to drop as Delirious Scouting Reports instead', amount: 5 },
      { modType: '$AMOUNT chance for Scouting Reports in Areas to drop as Otherworldly Scouting Reports instead', amount: 5 }
    ],
    neighbors: [340, 343]
  },
  {
    x: -335.375,
    y: -3718.2,
    name: 'Expert Reconnaissance',
    stats: [{ modType: '6$AMOUNT increased Atlas Scouting Reports found in Areas', amount: 0 }],
    neighbors: [338, 337]
  },
  {
    x: -0.375,
    y: -2519.89,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [280, 290, 375, 334, 382, 302]
  },
  {
    x: 1.5250000000000603,
    y: -9531.0,
    name: 'Shaper, Elder and Guardian Influenced Item Chance',
    stats: [{ modType: 'The Shaper, The Elder and their Guardians have a 2$AMOUNT chance to drop an Influenced Item', amount: 0 }],
    neighbors: [350, 356, 353]
  },
  {
    x: 1.525,
    y: -10517.0,
    name: 'Remnants of the Past',
    stats: [
      { modType: 'Unique Bosses have +$AMOUNT chance to drop an Elder Guardian Map (Tier 14+)', amount: 2 },
      { modType: 'Unique Bosses have +$AMOUNT chance to drop a Shaper Guardian Map (Tier 14+)', amount: 2 }
    ],
    neighbors: [352, 351]
  },
  {
    x: 116.0762985522207,
    y: -9909.44870144778,
    name: 'Shaper, Elder and Guardian Influenced Item Chance',
    stats: [{ modType: 'The Shaper, The Elder and their Guardians have a 1$AMOUNT chance to drop an Influenced Item', amount: 5 }],
    neighbors: [351, 353, 355, 348]
  },
  {
    x: 116.07629855222069,
    y: -10138.55129855222,
    name: 'Shaper, Elder and Guardian Influenced Item Chance',
    stats: [{ modType: 'The Shaper, The Elder and their Guardians have a 1$AMOUNT chance to drop an Influenced Item', amount: 5 }],
    neighbors: [349, 355, 350, 352]
  },
  {
    x: -113.02629855222072,
    y: -10138.55129855222,
    name: 'Shaper, Elder and Guardian Influenced Item Chance',
    stats: [{ modType: 'The Shaper, The Elder and their Guardians have a 1$AMOUNT chance to drop an Influenced Item', amount: 5 }],
    neighbors: [351, 354, 349, 353]
  },
  {
    x: -113.02629855222068,
    y: -9909.44870144778,
    name: 'Shaper, Elder and Guardian Influenced Item Chance',
    stats: [{ modType: 'The Shaper, The Elder and their Guardians have a 1$AMOUNT chance to drop an Influenced Item', amount: 5 }],
    neighbors: [348, 352, 354, 350]
  },
  {
    x: -491.475,
    y: -10024.0,
    name: 'Gaze into the Abyss',
    stats: [
      { modType: 'Unique Bosses have +$AMOUNT chance to drop an Elder Guardian Map (Tier 14+)', amount: 2 },
      { modType: "The Elder has +1$AMOUNT chance to drop a Watcher's Eye", amount: 0 },
      { modType: 'The Shaper drops 3 additional Shaper Items', amount: null }
    ],
    neighbors: [353, 352]
  },
  {
    x: 494.525,
    y: -10024.0,
    name: "Guardian's Aid",
    stats: [
      { modType: 'Unique Bosses have +$AMOUNT chance to drop a Shaper Guardian Map (Tier 14+)', amount: 2 },
      {
        modType:
          'Shaper and Elder Guardians are healed and joined by an ally on first reaching 3$AMOUNT Life\nAllies have a chance to drop their Fragments',
        amount: 3
      }
    ],
    neighbors: [351, 350]
  },
  {
    x: 1.525000000000081,
    y: -9362.0,
    name: 'Shaper, Elder and Guardian Influenced Item Chance',
    stats: [{ modType: 'The Shaper, The Elder and their Guardians have a 1$AMOUNT chance to drop an Influenced Item', amount: 5 }],
    neighbors: [357, 348]
  },
  {
    x: 1.525,
    y: -9125.96,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [363, 279, 385, 356]
  },
  {
    x: -333.475,
    y: -8248.96,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [365, 364]
  },
  {
    x: 1.525,
    y: -8330.96,
    name: 'The Most Toys',
    stats: [
      {
        modType:
          'Defeating a Map Boss while Witnessed by The Maven has 1$AMOUNT chance to count as also Witnessing an additional random Map Boss',
        amount: 0
      }
    ],
    neighbors: [364]
  },
  {
    x: 623.6015149602713,
    y: -8475.377334881592,
    name: 'Pay for Play',
    stats: [
      { modType: '2$AMOUNT chance for Orbs of Conflict found in Areas to be duplicated', amount: 5 },
      { modType: "2$AMOUNT increased chance to drop an Awakened Support Gem on completing The Maven's Crucible", amount: 5 }
    ],
    neighbors: [368]
  },
  {
    x: -620.5515149602713,
    y: -8475.377334881592,
    name: 'Captivated Interest',
    stats: [
      { modType: "2$AMOUNT more Crescent Splinters found in The Maven's Crucible", amount: 0 },
      { modType: "The Maven's Crucible has +2 to Monster Level", amount: null }
    ],
    neighbors: [366]
  },
  {
    x: 336.525,
    y: -8248.96,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [364, 367]
  },
  {
    x: 1.525,
    y: -8741.96,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [364, 357]
  },
  {
    x: 1.525,
    y: -8583.96,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [358, 359, 362, 363]
  },
  {
    x: -288.5935102677869,
    y: -8081.459999999999,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [366, 358]
  },
  {
    x: -660.475,
    y: -8248.96,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [365, 361]
  },
  {
    x: 291.64351026778695,
    y: -8081.459999999999,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [362, 368]
  },
  {
    x: 663.525,
    y: -8248.96,
    name: 'Maven Invitation Item Quantity',
    stats: [{ modType: "$AMOUNT increased Quantity of Items found in The Maven's Crucible", amount: 3 }],
    neighbors: [367, 360]
  },
  {
    x: 282.325,
    y: -1270.48,
    name: 'Twice Tempted',
    stats: [{ modType: 'Areas contain an additional Strongbox', amount: null }],
    neighbors: [372, 373]
  },
  {
    x: 142.02888458692098,
    y: -1027.48,
    name: 'Strongbox Additional Pack Chance',
    stats: [{ modType: 'Strongboxes in Areas have 1$AMOUNT chance to be guarded by an additional Pack of Monsters', amount: 5 }],
    neighbors: [371, 372, 2]
  },
  {
    x: 422.62111541307905,
    y: -1027.48,
    name: 'Strongbox Additional Pack Chance',
    stats: [{ modType: 'Strongboxes in Areas have 1$AMOUNT chance to be guarded by an additional Pack of Monsters', amount: 5 }],
    neighbors: [1, 373, 370]
  },
  {
    x: 142.02888458692092,
    y: -1189.48,
    name: 'Strongbox Additional Pack Chance',
    stats: [{ modType: 'Strongboxes in Areas have 1$AMOUNT chance to be guarded by an additional Pack of Monsters', amount: 5 }],
    neighbors: [369, 370]
  },
  {
    x: 422.62111541307905,
    y: -1189.48,
    name: 'Strongbox Additional Pack Chance',
    stats: [{ modType: 'Strongboxes in Areas have 1$AMOUNT chance to be guarded by an additional Pack of Monsters', amount: 5 }],
    neighbors: [369, 371]
  },
  {
    x: 510.435,
    y: -2785.53,
    name: 'Domination Shrine Duration',
    stats: [{ modType: '2$AMOUNT increased Duration of Shrine Effects on Players', amount: 5 }],
    neighbors: [375, 401, 377]
  },
  {
    x: 267.435,
    y: -2645.2338845869212,
    name: 'Domination Shrine Duration',
    stats: [{ modType: '2$AMOUNT increased Duration of Shrine Effects on Players', amount: 5 }],
    neighbors: [374, 347]
  },
  {
    x: 267.43499999999995,
    y: -2925.826115413079,
    name: 'Supplication',
    stats: [{ modType: 'Areas contain an additional Shrine', amount: null }],
    neighbors: [377]
  },
  {
    x: 429.435,
    y: -2925.826115413079,
    name: 'Domination Shrine Duration',
    stats: [{ modType: '2$AMOUNT increased Duration of Shrine Effects on Players', amount: 5 }],
    neighbors: [374, 376]
  },
  {
    x: 376.235,
    y: -5101.15,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [299, 321, 400]
  },
  {
    x: 376.235,
    y: -4270.92,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [339, 400]
  },
  {
    x: 376.235,
    y: -3163.63,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [401, 334]
  },
  {
    x: 326.735,
    y: -2173.603884586921,
    name: 'Rare Monster Duplication',
    stats: [{ modType: '1 Rare Monster in Areas is Duplicated', amount: null }],
    neighbors: [382, 384]
  },
  {
    x: 267.43888458692095,
    y: -2394.9,
    name: 'Rare Monster Duplication',
    stats: [{ modType: '1 Rare Monster in Areas is Duplicated', amount: null }],
    neighbors: [347, 381]
  },
  {
    x: 548.0311154130791,
    y: -2394.9,
    name: 'Spoils of War',
    stats: [
      { modType: 'Rare Monsters in Areas have $AMOUNT chance to drop an additional Basic Currency Item', amount: 1 },
      { modType: 'Rare Monsters in Areas have $AMOUNT chance to drop an additional Rare Jewellery Item', amount: 5 }
    ],
    neighbors: [384]
  },
  {
    x: 488.735,
    y: -2173.603884586921,
    name: 'Rare Monster Duplication',
    stats: [{ modType: '1 Rare Monster in Areas is Duplicated', amount: null }],
    neighbors: [383, 381]
  },
  {
    x: 435.675,
    y: -8874.37,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [357, 407]
  },
  {
    x: 446.495,
    y: -7007.76,
    name: 'Expedition Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Expedition Encounter', amount: 1 }],
    neighbors: [388, 390]
  },
  {
    x: 527.495,
    y: -6705.463884586921,
    name: 'Expedition Artifact Quantity',
    stats: [{ modType: '$AMOUNT increased quantity of Artifacts dropped by Monsters', amount: 4 }],
    neighbors: [388, 389]
  },
  {
    x: 586.7911154130791,
    y: -6926.76,
    name: 'Expedition Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Expedition Encounter', amount: 1 }],
    neighbors: [312, 387, 386]
  },
  {
    x: 306.198884586921,
    y: -6764.76,
    name: 'Buried Knowledge',
    stats: [
      { modType: '5$AMOUNT increased Quantity of Expedition Logbooks dropped by Runic Monsters in Areas', amount: 0 },
      { modType: 'Areas contain 2$AMOUNT increased number of Runic Monster Markers', amount: 0 }
    ],
    neighbors: [387, 390]
  },
  {
    x: 306.19888458692094,
    y: -6926.76,
    name: 'Expedition Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Expedition Encounter', amount: 1 }],
    neighbors: [386, 389]
  },
  {
    x: 403.76499999999993,
    y: -6447.966115413079,
    name: 'Additional Harbinger Chance',
    stats: [{ modType: 'Areas have a $AMOUNT chance to contain an additional Harbinger', amount: 5 }],
    neighbors: [393, 394, 307]
  },
  {
    x: 646.765,
    y: -6307.67,
    name: 'Additional Harbinger Chance',
    stats: [{ modType: 'Areas have a $AMOUNT chance to contain an additional Harbinger', amount: 5 }],
    neighbors: [313, 394]
  },
  {
    x: 403.765,
    y: -6167.373884586921,
    name: 'First Wave',
    stats: [{ modType: 'Harbingers in Areas have 2$AMOUNT chance to be replaced by a powerful Harbinger boss', amount: 5 }],
    neighbors: [391]
  },
  {
    x: 565.765,
    y: -6447.966115413079,
    name: 'Additional Harbinger Chance',
    stats: [{ modType: 'Areas have a $AMOUNT chance to contain an additional Harbinger', amount: 5 }],
    neighbors: [392, 391]
  },
  {
    x: 584.9549999999999,
    y: -7829.126115413079,
    name: 'Unique Map Chance',
    stats: [{ modType: 'Map Items have a 0.$AMOUNT chance to drop as a random Unique Map instead in Areas', amount: 2 }],
    neighbors: [396, 397]
  },
  {
    x: 503.95500000000004,
    y: -7688.83,
    name: 'Unique Map Chance',
    stats: [{ modType: 'Map Items have a 0.$AMOUNT chance to drop as a random Unique Map instead in Areas', amount: 2 }],
    neighbors: [399, 395]
  },
  {
    x: 780.5062985522208,
    y: -7803.381298552221,
    name: 'Deadly Nightmare',
    stats: [{ modType: 'Unique maps have +2 to Monster Level', amount: null }],
    neighbors: [395]
  },
  {
    x: 780.5062985522208,
    y: -7574.278701447779,
    name: 'Unique Map Chance',
    stats: [{ modType: 'Map Items have a 0.$AMOUNT chance to drop as a random Unique Map instead in Areas', amount: 2 }],
    neighbors: [414, 399]
  },
  {
    x: 584.955,
    y: -7548.533884586921,
    name: 'Unique Map Chance',
    stats: [{ modType: 'Map Items have a 0.$AMOUNT chance to drop as a random Unique Map instead in Areas', amount: 2 }],
    neighbors: [398, 396]
  },
  {
    x: 732.285,
    y: -4476.83,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [378, 379, 455, 448]
  },
  {
    x: 780.615,
    y: -2930.05,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [374, 459, 462, 431, 380]
  },
  {
    x: 975.285,
    y: -5173.77,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [448, 404, 406]
  },
  {
    x: 732.2849999999999,
    y: -5314.066115413079,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [406, 313]
  },
  {
    x: 813.285,
    y: -5011.77,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [402, 405]
  },
  {
    x: 813.285,
    y: -4838.77,
    name: 'Mining Byproducts',
    stats: [{ modType: 'Sulphite Veins and Chests in Areas have 1$AMOUNT chance to also contain an equal amount of Azurite', amount: 0 }],
    neighbors: [404]
  },
  {
    x: 894.285,
    y: -5314.066115413079,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [402, 403]
  },
  {
    x: 879.785,
    y: -8617.96,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [385, 465]
  },
  {
    x: 786.2488845869209,
    y: -1362.24,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [1, 410]
  },
  {
    x: 926.545,
    y: -1605.24,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [410, 436]
  },
  {
    x: 1066.841115413079,
    y: -1362.24,
    name: 'Mad Devotion',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Niko Mission on Completion', amount: 4 }],
    neighbors: [408, 409]
  },
  {
    x: 1098.6611154130792,
    y: -2539.71,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 5 }],
    neighbors: [462, 412]
  },
  {
    x: 818.068884586921,
    y: -2539.71,
    name: 'Higher Map Tier Chance',
    stats: [{ modType: 'Maps dropped in Areas have $AMOUNT chance to be 1 tier higher', amount: 5 }],
    neighbors: [411, 413]
  },
  {
    x: 958.365,
    y: -2296.71,
    name: 'Shaping the Skies',
    stats: [
      { modType: '$AMOUNT chance on Completing Areas to gain a free use of a special Map crafting option', amount: 3 },
      { modType: 'Maps dropped in Areas have 1$AMOUNT chance to be 1 tier higher', amount: 5 }
    ],
    neighbors: [412]
  },
  {
    x: 987.825,
    y: -7453.38,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [398, 466, 312, 442]
  },
  {
    x: 859.22,
    y: -5815.23,
    name: 'Domination Shrine Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Shrine', amount: 0 }],
    neighbors: [417, 416]
  },
  {
    x: 940.2199999999999,
    y: -5955.5261154130785,
    name: 'Domination Shrine Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Shrine', amount: 0 }],
    neighbors: [313, 415, 418]
  },
  {
    x: 940.22,
    y: -5674.933884586921,
    name: 'Drawn to Power',
    stats: [
      { modType: 'Shrines in Areas have 5$AMOUNT chance to be guarded by an additional Pack of Monsters', amount: 0 },
      { modType: 'Shrines in Areas are guarded by at least one Magic Pack', amount: null }
    ],
    neighbors: [415]
  },
  {
    x: 1102.22,
    y: -5955.5261154130785,
    name: 'Domination Shrine Effect',
    stats: [{ modType: '2$AMOUNT increased Effect of Shrine Effects on Players in Areas', amount: 0 }],
    neighbors: [416, 419]
  },
  {
    x: 1183.22,
    y: -5815.23,
    name: 'Syncretism',
    stats: [
      { modType: 'Shrines grant a random additional Shrine Effect', amount: null },
      { modType: '3$AMOUNT increased Effect of Shrine Effects on Players in Areas', amount: 0 }
    ],
    neighbors: [418]
  },
  {
    x: 882.673884586921,
    y: -8283.8,
    name: 'Domination Shrine Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Shrine', amount: 0 }],
    neighbors: [423, 422]
  },
  {
    x: 1163.2661154130792,
    y: -8283.8,
    name: 'Domination Shrine Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Shrine', amount: 0 }],
    neighbors: [465, 423]
  },
  {
    x: 1022.97,
    y: -8040.799999999999,
    name: 'All That Glitters',
    stats: [{ modType: 'Shrines in Areas have 1$AMOUNT chance to be a Covetous Shrine', amount: 0 }],
    neighbors: [420]
  },
  {
    x: 1022.97,
    y: -8364.8,
    name: 'Domination Shrine Chance',
    stats: [{ modType: 'Areas have a 1$AMOUNT chance to contain an additional Shrine', amount: 0 }],
    neighbors: [421, 420]
  },
  {
    x: 1496.19,
    y: -3718.2,
    name: 'Harvest Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain The Sacred Grove', amount: 1 }],
    neighbors: [428, 434, 432]
  },
  {
    x: 871.0714897322132,
    y: -3550.7,
    name: 'Additional Harvest Crafting Chance',
    stats: [{ modType: 'Plants Harvested in Areas have $AMOUNT chance to give an additional Crafting option', amount: 3 }],
    neighbors: [431, 426]
  },
  {
    x: 826.19,
    y: -3718.2,
    name: 'Additional Harvest Crafting Chance',
    stats: [{ modType: 'Plants Harvested in Areas have $AMOUNT chance to give an additional Crafting option', amount: 3 }],
    neighbors: [425, 429]
  },
  {
    x: 1161.19,
    y: -4053.2,
    name: 'Bountiful Harvest',
    stats: [
      { modType: 'Harvest Monsters in Areas grant 20$AMOUNT increased Experience', amount: 0 },
      { modType: 'Harvested Plants in Areas have 5$AMOUNT chance to spawn an additional Monster', amount: 0 }
    ],
    neighbors: [432]
  },
  {
    x: 1451.308510267787,
    y: -3550.7,
    name: 'Harvest Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain The Sacred Grove', amount: 1 }],
    neighbors: [424, 430]
  },
  {
    x: 871.0714897322132,
    y: -3885.7,
    name: 'Bumper Crop',
    stats: [{ modType: 'The Sacred Grove in Areas contains an additional Harvest', amount: null }],
    neighbors: [426]
  },
  {
    x: 1328.69,
    y: -3428.081489732213,
    name: 'Harvest Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain The Sacred Grove', amount: 1 }],
    neighbors: [428, 431]
  },
  {
    x: 993.69,
    y: -3428.081489732213,
    name: 'Additional Harvest Crafting Chance',
    stats: [{ modType: 'Plants Harvested in Areas have $AMOUNT chance to give an additional Crafting option', amount: 3 }],
    neighbors: [401, 430, 425]
  },
  {
    x: 1451.308510267787,
    y: -3885.7,
    name: 'Additional Harvest Crafting Chance',
    stats: [{ modType: 'Plants Harvested in Areas have $AMOUNT chance to give an additional Crafting option', amount: 3 }],
    neighbors: [424, 427]
  },
  {
    x: 1893.847491601635,
    y: -4141.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [434, 454, 448, 557]
  },
  {
    x: 2007.19,
    y: -3718.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [424, 435, 554, 433]
  },
  {
    x: 1893.8474916016353,
    y: -3295.2,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [458, 462, 434, 568]
  },
  {
    x: 1162.66,
    y: -2018.3,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [409, 462]
  },
  {
    x: 1032.243884586921,
    y: -595.2649999999999,
    name: 'Betrayal Syndicate Reinforcement Chance',
    stats: [{ modType: 'Immortal Syndicate Members in Areas are $AMOUNT more\nlikely to be accompanied by reinforcements', amount: 5 }],
    neighbors: [439, 0]
  },
  {
    x: 1312.836115413079,
    y: -757.265,
    name: 'Betrayal Syndicate Reinforcement Chance',
    stats: [{ modType: 'Immortal Syndicate Members in Areas are $AMOUNT more\nlikely to be accompanied by reinforcements', amount: 5 }],
    neighbors: [441, 439]
  },
  {
    x: 1253.54,
    y: -535.9688845869209,
    name: 'Focused Investigation',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Jun Mission on Completion', amount: 4 }],
    neighbors: [438, 437]
  },
  {
    x: 1005.0399999999998,
    y: -966.3835102677868,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [441, 0]
  },
  {
    x: 1462.6585102677868,
    y: -843.765,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [440, 464, 477, 516, 438]
  },
  {
    x: 1215.49,
    y: -7847.71,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [414, 465]
  },
  {
    x: 1472.586115413079,
    y: -6670.44,
    name: 'Delve Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Niko Mission on Completion', amount: 1 }],
    neighbors: [446, 445]
  },
  {
    x: 1170.29,
    y: -6589.44,
    name: 'Delve Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Niko Mission on Completion', amount: 1 }],
    neighbors: [315, 446]
  },
  {
    x: 1472.586115413079,
    y: -6508.44,
    name: 'Sulphite Infusion',
    stats: [
      { modType: 'White Tier Maps grant 200 additional Voltaxic Sulphite on Completion', amount: null },
      { modType: 'Yellow Tier Maps grant 350 additional Voltaxic Sulphite on Completion', amount: null },
      { modType: 'Red Tier Maps grant 500 additional Voltaxic Sulphite on Completion', amount: null }
    ],
    neighbors: [443]
  },
  {
    x: 1332.29,
    y: -6751.44,
    name: 'Delve Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Niko Mission on Completion', amount: 1 }],
    neighbors: [444, 443]
  },
  {
    x: 1332.29,
    y: -6163.88,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [313, 497]
  },
  {
    x: 1460.39,
    y: -4893.25,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [400, 402, 433, 502, 514, 453]
  },
  {
    x: 1320.893884586921,
    y: -5269.25,
    name: 'Abyssal Army',
    stats: [
      { modType: 'Abyss Monsters in Areas grant 5$AMOUNT increased Experience', amount: 0 },
      { modType: 'Abysses in Area spawn 10$AMOUNT increased Monsters', amount: 0 }
    ],
    neighbors: [453]
  },
  {
    x: 1601.486115413079,
    y: -5431.25,
    name: 'Abyss Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 }],
    neighbors: [452, 451]
  },
  {
    x: 1601.486115413079,
    y: -5269.25,
    name: 'Abyss Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 }],
    neighbors: [450, 453]
  },
  {
    x: 1461.19,
    y: -5512.25,
    name: 'Votive Hoard',
    stats: [{ modType: 'Abyssal Troves in Areas have 2$AMOUNT chance to drop a Rare Item with an Abyssal Socket', amount: 0 }],
    neighbors: [450]
  },
  {
    x: 1461.19,
    y: -5188.25,
    name: 'Abyss Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 }],
    neighbors: [448, 451, 449]
  },
  {
    x: 1462.21,
    y: -4141.21,
    name: 'Labyrinth Trial Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Trial of Ascendancy', amount: 2 }],
    neighbors: [433, 455]
  },
  {
    x: 1321.913884586921,
    y: -4222.21,
    name: 'Labyrinth Trial Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Trial of Ascendancy', amount: 2 }],
    neighbors: [454, 457, 400]
  },
  {
    x: 1462.21,
    y: -4465.21,
    name: 'Trial of Glory',
    stats: [
      { modType: 'Labyrinth Trials in Areas have 2$AMOUNT chance to award an Improved Offering to the Goddesss', amount: 0 },
      { modType: 'Areas have +$AMOUNT chance to contain a Trial of Ascendancy', amount: 4 }
    ],
    neighbors: [457]
  },
  {
    x: 1321.913884586921,
    y: -4384.21,
    name: 'Labyrinth Trial Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Trial of Ascendancy', amount: 2 }],
    neighbors: [456, 455]
  },
  {
    x: 1462.66,
    y: -3295.21,
    name: 'Additional Harbinger Shards',
    stats: [{ modType: 'Harbingers in Areas have 2$AMOUNT chance to drop an additional Currency Shard', amount: 0 }],
    neighbors: [435, 459]
  },
  {
    x: 1322.363884586921,
    y: -3214.21,
    name: 'Additional Harbinger Shards',
    stats: [{ modType: 'Harbingers in Areas have 2$AMOUNT chance to drop an additional Currency Shard', amount: 0 }],
    neighbors: [458, 401, 461]
  },
  {
    x: 1462.66,
    y: -2971.21,
    name: 'Ominous Arrival',
    stats: [{ modType: 'Areas contain an additional Harbinger', amount: null }],
    neighbors: [461]
  },
  {
    x: 1322.3638845869211,
    y: -3052.21,
    name: 'Additional Harbinger Shards',
    stats: [{ modType: 'Harbingers in Areas have 2$AMOUNT chance to drop an additional Currency Shard', amount: 0 }],
    neighbors: [459, 460]
  },
  {
    x: 1462.66,
    y: -2537.9,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [411, 436, 463, 496, 515, 401, 435]
  },
  {
    x: 1462.66,
    y: -1937.01,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [464, 462]
  },
  {
    x: 1462.66,
    y: -1444.01,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [463, 441]
  },
  {
    x: 1465.09,
    y: -8280.02,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [421, 442, 513, 407, 485]
  },
  {
    x: 1319.66,
    y: -7454.59,
    name: 'Strongbox Item Quantity',
    stats: [{ modType: '1$AMOUNT increased Quantity of Items dropped by Strongboxes in Areas', amount: 0 }],
    neighbors: [469, 474, 468, 414]
  },
  {
    x: 1944.778510267787,
    y: -7622.09,
    name: 'Vault of Mysteries',
    stats: [{ modType: 'Strongboxes in Areas contain Duplicated Divination Cards', amount: null }],
    neighbors: [470]
  },
  {
    x: 1364.5414897322132,
    y: -7287.09,
    name: "Arcanist's Strongbox Chance",
    stats: [{ modType: "Strongboxes in Areas have 3$AMOUNT increased chance to be an Arcanist's Strongbox", amount: 0 }],
    neighbors: [466, 472]
  },
  {
    x: 1492.66,
    y: -7454.59,
    name: "Cartographer's Strongbox Chance",
    stats: [{ modType: "Strongboxes in Areas have 3$AMOUNT increased chance to be a Cartographer's Strongbox", amount: 0 }],
    neighbors: [473, 466]
  },
  {
    x: 1654.66,
    y: -7789.59,
    name: "Diviner's Strongbox Chance",
    stats: [{ modType: "Strongboxes in Areas have 3$AMOUNT increased chance to be a Diviner's Strongbox", amount: 0 }],
    neighbors: [474, 467]
  },
  {
    x: 1944.7785102677872,
    y: -7287.09,
    name: 'Backup Cache',
    stats: [{ modType: 'Strongboxes in Areas contain Duplicated Currency Items', amount: null }],
    neighbors: [472]
  },
  {
    x: 1654.66,
    y: -7119.59,
    name: "Arcanist's Strongbox Chance",
    stats: [{ modType: "Strongboxes in Areas have 3$AMOUNT increased chance to be an Arcanist's Strongbox", amount: 0 }],
    neighbors: [468, 471]
  },
  {
    x: 1654.66,
    y: -7616.59,
    name: "Cartographer's Strongbox Chance",
    stats: [{ modType: "Strongboxes in Areas have 3$AMOUNT increased chance to be a Cartographer's Strongbox", amount: 0 }],
    neighbors: [475, 469]
  },
  {
    x: 1364.5414897322132,
    y: -7622.09,
    name: "Diviner's Strongbox Chance",
    stats: [{ modType: "Strongboxes in Areas have 3$AMOUNT increased chance to be a Diviner's Strongbox", amount: 0 }],
    neighbors: [470, 466]
  },
  {
    x: 1816.66,
    y: -7454.59,
    name: 'Concealed Logistics',
    stats: [{ modType: 'Strongboxes in Areas contain Duplicated Map Items', amount: null }],
    neighbors: [473]
  },
  {
    x: 1857.57,
    y: -453.765,
    name: 'Expedition Artifact Quantity',
    stats: [{ modType: '$AMOUNT increased quantity of Artifacts dropped by Monsters', amount: 4 }],
    neighbors: [478, 479]
  },
  {
    x: 1717.2738845869208,
    y: -696.765,
    name: 'Expedition Artifact Quantity',
    stats: [{ modType: '$AMOUNT increased quantity of Artifacts dropped by Monsters', amount: 4 }],
    neighbors: [441, 479]
  },
  {
    x: 1997.8661154130791,
    y: -534.765,
    name: 'Hunt for Answers',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Expedition Encounter', amount: 4 }],
    neighbors: [476]
  },
  {
    x: 1717.273884586921,
    y: -534.7649999999999,
    name: 'Expedition Artifact Quantity',
    stats: [{ modType: '$AMOUNT increased quantity of Artifacts dropped by Monsters', amount: 4 }],
    neighbors: [477, 476]
  },
  {
    x: 1567.681489732213,
    y: -8792.71,
    name: 'Conqueror Influenced Item Drop Chance',
    stats: [{ modType: 'Items found in Conqueror Maps have $AMOUNT increased chance to be Influenced', amount: 5 }],
    neighbors: [485, 487]
  },
  {
    x: 1857.8,
    y: -8625.21,
    name: 'Conqueror Influenced Item Drop Chance',
    stats: [{ modType: 'Items found in Conqueror Maps have $AMOUNT increased chance to be Influenced', amount: 5 }],
    neighbors: [485, 488]
  },
  {
    x: 2192.8,
    y: -8960.21,
    name: 'Martialed Forces',
    stats: [
      { modType: '2$AMOUNT increased Quantity of Items found in Conqueror Maps', amount: 0 },
      { modType: 'Conqueror Maps have 2$AMOUNT increased Pack Size', amount: 0 },
      { modType: 'Eldritch Bosses have 2$AMOUNT chance to drop a Conqueror Map', amount: 0 }
    ],
    neighbors: [486]
  },
  {
    x: 1690.2999999999997,
    y: -9250.328510267786,
    name: 'Conquered Conquerors',
    stats: [
      { modType: "Conquerors have 2$AMOUNT increased chance to drop a Conqueror's Exalted Orb", amount: 5 },
      { modType: 'Unique Bosses have 2$AMOUNT increased chance to drop a Conqueror Map', amount: 5 },
      { modType: 'Sirus has 1$AMOUNT chance to drop an Awakened Support Gem', amount: 0 }
    ],
    neighbors: [484]
  },
  {
    x: 1567.681489732213,
    y: -9127.71,
    name: 'Conqueror Influenced Item Drop Chance',
    stats: [{ modType: 'Items found in Conqueror Maps have $AMOUNT increased chance to be Influenced', amount: 5 }],
    neighbors: [487, 483]
  },
  {
    x: 1690.3,
    y: -8670.091489732213,
    name: 'Conqueror Influenced Item Drop Chance',
    stats: [{ modType: 'Items found in Conqueror Maps have $AMOUNT increased chance to be Influenced', amount: 5 }],
    neighbors: [465, 480, 481]
  },
  {
    x: 2147.918510267787,
    y: -8792.71,
    name: 'Conqueror Influenced Item Drop Chance',
    stats: [{ modType: 'Items found in Conqueror Maps have $AMOUNT increased chance to be Influenced', amount: 5 }],
    neighbors: [488, 482]
  },
  {
    x: 1522.8,
    y: -8960.21,
    name: 'Conqueror Influenced Item Drop Chance',
    stats: [{ modType: 'Items found in Conqueror Maps have $AMOUNT increased chance to be Influenced', amount: 5 }],
    neighbors: [480, 484]
  },
  {
    x: 2025.3,
    y: -8670.091489732213,
    name: 'Conqueror Influenced Item Drop Chance',
    stats: [{ modType: 'Items found in Conqueror Maps have $AMOUNT increased chance to be Influenced', amount: 5 }],
    neighbors: [481, 486]
  },
  {
    x: 2053.246115413079,
    y: -1858.06,
    name: 'Legion Duplicate Splinter Chance',
    stats: [
      {
        modType: 'Splinters dropped by Legion Monsters or contained in Legion Chests in Areas have $AMOUNT chance to be Duplicated',
        amount: 4
      }
    ],
    neighbors: [515, 492]
  },
  {
    x: 1772.6538845869209,
    y: -1858.06,
    name: 'Legion Duplicate Splinter Chance',
    stats: [
      {
        modType: 'Splinters dropped by Legion Monsters or contained in Legion Chests in Areas have $AMOUNT chance to be Duplicated',
        amount: 4
      }
    ],
    neighbors: [492, 491]
  },
  {
    x: 1912.95,
    y: -1615.06,
    name: 'Monumental',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 4 }],
    neighbors: [490]
  },
  {
    x: 1912.95,
    y: -1939.06,
    name: 'Legion Duplicate Splinter Chance',
    stats: [
      {
        modType: 'Splinters dropped by Legion Monsters or contained in Legion Chests in Areas have $AMOUNT chance to be Duplicated',
        amount: 4
      }
    ],
    neighbors: [489, 490]
  },
  {
    x: 2107.236115413079,
    y: -2702.83,
    name: 'Abyss Monster Count',
    stats: [{ modType: 'Abysses in Area spawn 1$AMOUNT increased Monsters', amount: 0 }],
    neighbors: [494, 495]
  },
  {
    x: 1826.643884586921,
    y: -2702.83,
    name: 'Abyss Monster Count',
    stats: [{ modType: 'Abysses in Area spawn 1$AMOUNT increased Monsters', amount: 0 }],
    neighbors: [496, 493]
  },
  {
    x: 2107.236115413079,
    y: -2540.83,
    name: 'Underground Kingdom',
    stats: [{ modType: 'Areas have 1% chance to contain an Abyss per $AMOUNT increased Pack Size', amount: 2 }],
    neighbors: [493]
  },
  {
    x: 1826.643884586921,
    y: -2540.83,
    name: 'Abyss Monster Count',
    stats: [{ modType: 'Abysses in Area spawn 1$AMOUNT increased Monsters', amount: 0 }],
    neighbors: [494, 462]
  },
  {
    x: 1911.843884586921,
    y: -6163.88,
    name: 'Breach Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }],
    neighbors: [447, 500]
  },
  {
    x: 2192.436115413079,
    y: -6163.88,
    name: 'Breach Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }],
    neighbors: [500, 534, 501]
  },
  {
    x: 2052.14,
    y: -5920.88,
    name: 'Flash Breach',
    stats: [
      { modType: 'Breaches in Areas have 3$AMOUNT increased Area of Effect', amount: 0 },
      { modType: 'Breaches in Areas have 3$AMOUNT increased Monster density', amount: 0 },
      { modType: 'Breaches in Areas open and close 5$AMOUNT faster', amount: 0 }
    ],
    neighbors: [501]
  },
  {
    x: 2052.14,
    y: -6244.88,
    name: 'Breach Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }],
    neighbors: [497, 498]
  },
  {
    x: 2192.436115413079,
    y: -6001.88,
    name: 'Magic Breach Monster Chance',
    stats: [{ modType: 'Breaches in Areas spawn $AMOUNT increased Magic Monsters', amount: 8 }],
    neighbors: [498, 499]
  },
  {
    x: 1981.38,
    y: -4893.25,
    name: 'Additional Harbinger Chance',
    stats: [{ modType: 'Areas have a $AMOUNT chance to contain an additional Harbinger', amount: 5 }],
    neighbors: [448, 506, 507]
  },
  {
    x: 2224.38,
    y: -5033.546115413079,
    name: 'Additional Harbinger Chance',
    stats: [{ modType: 'Areas have a $AMOUNT chance to contain an additional Harbinger', amount: 5 }],
    neighbors: [507, 505]
  },
  {
    x: 2224.38,
    y: -4752.953884586921,
    name: 'Additional Harbinger Shards',
    stats: [{ modType: 'Harbingers in Areas have 2$AMOUNT chance to drop an additional Currency Shard', amount: 0 }],
    neighbors: [505, 506]
  },
  {
    x: 2305.38,
    y: -4893.25,
    name: 'Unspeakable Offensive',
    stats: [
      { modType: 'Harbingers in Areas have 6$AMOUNT increased Cooldown Recovery Rate', amount: 0 },
      { modType: 'Harbingers in Areas summon 6$AMOUNT more Minions', amount: 0 },
      { modType: 'Currency Shards dropped by Harbingers in Areas can drop as Currency Items instead', amount: null }
    ],
    neighbors: [503, 504]
  },
  {
    x: 2062.38,
    y: -4752.953884586921,
    name: 'Additional Harbinger Shards',
    stats: [{ modType: 'Harbingers in Areas have 2$AMOUNT chance to drop an additional Currency Shard', amount: 0 }],
    neighbors: [504, 502]
  },
  {
    x: 2062.38,
    y: -5033.546115413079,
    name: 'Additional Harbinger Chance',
    stats: [{ modType: 'Areas have a $AMOUNT chance to contain an additional Harbinger', amount: 5 }],
    neighbors: [502, 503]
  },
  {
    x: 2192.44,
    y: -8153.620000000001,
    name: 'Atlas Currency Chance',
    stats: [{ modType: 'Unique Map Bosses have $AMOUNT chance to drop additional Map Currency Items', amount: 1 }],
    neighbors: [512, 513]
  },
  {
    x: 2332.736115413079,
    y: -8396.62,
    name: 'Atlas Currency Chance',
    stats: [{ modType: 'Unique Map Bosses have $AMOUNT chance to drop additional Map Currency Items', amount: 1 }],
    neighbors: [510, 512]
  },
  {
    x: 2192.44,
    y: -8477.62,
    name: 'Atlas Currency Chance',
    stats: [{ modType: 'Unique Map Bosses have $AMOUNT chance to drop additional Map Currency Items', amount: 1 }],
    neighbors: [511, 509]
  },
  {
    x: 2052.143884586921,
    y: -8396.62,
    name: 'Enduring Influence',
    stats: [{ modType: 'Sextant Modifiers have 1 additional use', amount: null }],
    neighbors: [510]
  },
  {
    x: 2332.736115413079,
    y: -8234.62,
    name: 'Atlas Currency Chance',
    stats: [{ modType: 'Unique Map Bosses have $AMOUNT chance to drop additional Map Currency Items', amount: 1 }],
    neighbors: [509, 508]
  },
  {
    x: 2192.44,
    y: -7858.61,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [548, 465, 508]
  },
  {
    x: 2192.44,
    y: -5320.0,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [448, 534]
  },
  {
    x: 2200.25,
    y: -2112.66,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [489, 553, 462]
  },
  {
    x: 2032.2399999999998,
    y: -1192.64,
    name: 'Magic Breach Monster Chance',
    stats: [{ modType: 'Breaches in Areas spawn $AMOUNT increased Magic Monsters', amount: 8 }],
    neighbors: [517, 441, 522]
  },
  {
    x: 2077.121489732213,
    y: -1025.1399999999999,
    name: 'Magic Breach Monster Chance',
    stats: [{ modType: 'Breaches in Areas spawn $AMOUNT increased Magic Monsters', amount: 8 }],
    neighbors: [516, 518]
  },
  {
    x: 2199.74,
    y: -902.5214897322132,
    name: 'Probing for Weaknesses',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 4 }],
    neighbors: [517]
  },
  {
    x: 2657.3585102677866,
    y: -1360.14,
    name: 'Breach Chest Splinter Quantity',
    stats: [{ modType: '1$AMOUNT increased Quantity of Breach Splinters found in Breach Hands in Areas', amount: 0 }],
    neighbors: [520]
  },
  {
    x: 2534.74,
    y: -1482.7585102677872,
    name: 'Breach Chest Splinter Quantity',
    stats: [{ modType: '1$AMOUNT increased Quantity of Breach Splinters found in Breach Hands in Areas', amount: 0 }],
    neighbors: [519, 522, 553, 521]
  },
  {
    x: 2702.24,
    y: -1192.64,
    name: 'Call of Xesht-Ula',
    stats: [
      { modType: 'Breaches in Areas have $AMOUNT chance to contain Xesht-Ula, the Open Hand', amount: 2 },
      { modType: 'Breaches in Areas have 2$AMOUNT chance to contain a Hand of Xesht-Ula', amount: 0 }
    ],
    neighbors: [520]
  },
  {
    x: 2199.74,
    y: -1482.758510267787,
    name: 'Breach Chest Splinter Quantity',
    stats: [{ modType: '1$AMOUNT increased Quantity of Breach Splinters found in Breach Hands in Areas', amount: 0 }],
    neighbors: [516, 520]
  },
  {
    x: 2611.88,
    y: -6282.8,
    name: 'Templar Legion Chance',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 },
      { modType: 'Legion Encounters in Areas have 6$AMOUNT increased chance to include a Templar army', amount: 0 }
    ],
    neighbors: [526, 528]
  },
  {
    x: 2684.56,
    y: -6870.46,
    name: 'Legion Timeless Emblem Chance',
    stats: [{ modType: 'Timeless Splinters dropped in Areas have 0.$AMOUNT chance to drop as Timeless Emblems instead', amount: 2 }],
    neighbors: [532, 531]
  },
  {
    x: 2769.88,
    y: -6282.8,
    name: 'Eternal Legion Chance',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 },
      { modType: 'Legion Encounters in Areas have 10$AMOUNT increased chance to include an Eternal Empire army', amount: 0 }
    ],
    neighbors: [526, 528]
  },
  {
    x: 2927.88,
    y: -6124.8,
    name: 'Legion Monolith Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 }],
    neighbors: [573, 527, 571, 525, 523, 534]
  },
  {
    x: 2927.88,
    y: -6282.8,
    name: 'Vaal Legion Chance',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 },
      { modType: 'Legion Encounters in Areas have 8$AMOUNT increased chance to include a Vaal army', amount: 0 }
    ],
    neighbors: [526, 528]
  },
  {
    x: 2927.88,
    y: -6455.8,
    name: 'Emblematic',
    stats: [{ modType: 'Timeless Splinters dropped in Areas have 0.$AMOUNT chance to drop as Timeless Emblems instead', amount: 6 }],
    neighbors: [523, 525, 527, 571, 573]
  },
  {
    x: 2927.88,
    y: -7110.8,
    name: 'Legion Monolith Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 }],
    neighbors: [548, 530, 531]
  },
  {
    x: 3096.4959306595547,
    y: -7081.068462047453,
    name: 'Legion Duplicate Splinter Chance',
    stats: [
      {
        modType: 'Splinters dropped by Legion Monsters or contained in Legion Chests in Areas have $AMOUNT chance to be Duplicated',
        amount: 4
      }
    ],
    neighbors: [529, 572]
  },
  {
    x: 2759.264069340445,
    y: -7081.068462047453,
    name: 'Legion Timeless Emblem Chance',
    stats: [{ modType: 'Timeless Splinters dropped in Areas have 0.$AMOUNT chance to drop as Timeless Emblems instead', amount: 2 }],
    neighbors: [524, 529]
  },
  {
    x: 2592.88,
    y: -6617.8,
    name: 'Face Off',
    stats: [
      { modType: 'Legion Encounters in Areas are 6$AMOUNT more likely to include a General', amount: 0 },
      { modType: 'Legion Encounters with a General in Areas have both Generals', amount: null }
    ],
    neighbors: [524]
  },
  {
    x: 3262.88,
    y: -6617.8,
    name: 'War Supplies',
    stats: [{ modType: 'Each Legion in Areas contains an additional War Hoard', amount: null }],
    neighbors: [572]
  },
  {
    x: 2927.88,
    y: -5740.5,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [498, 514, 526, 581, 585, 540]
  },
  {
    x: 3095.38,
    y: -4792.691489732213,
    name: 'Abyssal Depths Item Quantity',
    stats: [{ modType: '1$AMOUNT increased Quantity of Items dropped in Abyssal Depths in Areas', amount: 0 }],
    neighbors: [543, 536]
  },
  {
    x: 2760.38,
    y: -4792.691489732213,
    name: 'Abyssal Depths Item Quantity',
    stats: [{ modType: '1$AMOUNT increased Quantity of Items dropped in Abyssal Depths in Areas', amount: 0 }],
    neighbors: [535, 539]
  },
  {
    x: 2637.7614897322132,
    y: -5250.31,
    name: 'Abyss Monster Count',
    stats: [
      { modType: 'Abyssal Depths in Areas have 1$AMOUNT increased Pack Size', amount: 5 },
      { modType: 'Abysses in Area spawn 1$AMOUNT increased Monsters', amount: 5 }
    ],
    neighbors: [538, 540]
  },
  {
    x: 2592.88,
    y: -5082.81,
    name: 'Abyss Monster Count',
    stats: [
      { modType: 'Abyssal Depths in Areas have 1$AMOUNT increased Pack Size', amount: 5 },
      { modType: 'Abysses in Area spawn 1$AMOUNT increased Monsters', amount: 5 }
    ],
    neighbors: [539, 537]
  },
  {
    x: 2637.7614897322132,
    y: -4915.31,
    name: 'Lightless Legion',
    stats: [
      { modType: 'Abyssal Depths in Areas have +3 to Monster Level', amount: null },
      { modType: 'Abyssal Depths in Areas have 10$AMOUNT more Magic Monsters', amount: 0 },
      { modType: 'Abyssal Depths in Areas have 10$AMOUNT more Rare Monsters', amount: 0 },
      { modType: 'Abyssal Depths in Areas have 3$AMOUNT increased Pack Size', amount: 0 }
    ],
    neighbors: [536, 538]
  },
  {
    x: 2927.88,
    y: -5417.81,
    name: 'Abyss and Abyssal Depths Chances',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 },
      { modType: 'Abysses in Areas have 1$AMOUNT increased chance to lead to an Abyssal Depths', amount: 0 }
    ],
    neighbors: [534, 537, 542]
  },
  {
    x: 3262.88,
    y: -5082.81,
    name: 'Abyss and Abyssal Depths Chances',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 },
      { modType: 'Abysses in Areas have 1$AMOUNT increased chance to lead to an Abyssal Depths', amount: 0 }
    ],
    neighbors: [542, 543]
  },
  {
    x: 3217.998510267787,
    y: -5250.31,
    name: 'Abyss and Abyssal Depths Chances',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 },
      { modType: 'Abysses in Areas have 1$AMOUNT increased chance to lead to an Abyssal Depths', amount: 0 }
    ],
    neighbors: [540, 541]
  },
  {
    x: 3217.998510267787,
    y: -4915.31,
    name: 'Awakened Depths',
    stats: [
      { modType: 'Abysses in Areas have 5$AMOUNT increased chance to lead to an Abyssal Depths', amount: 0 },
      { modType: 'Abyssal Depths in Areas have 10$AMOUNT increased chance to contain a Lich', amount: 0 }
    ],
    neighbors: [541, 535]
  },
  {
    x: 2928.33,
    y: -8054.07,
    name: 'Betrayal Syndicate Reinforcement Chance',
    stats: [{ modType: 'Immortal Syndicate Members in Areas are $AMOUNT more\nlikely to be accompanied by reinforcements', amount: 5 }],
    neighbors: [547, 546]
  },
  {
    x: 2928.33,
    y: -7730.07,
    name: 'Betrayal Syndicate Reinforcement Chance',
    stats: [{ modType: 'Immortal Syndicate Members in Areas are $AMOUNT more\nlikely to be accompanied by reinforcements', amount: 5 }],
    neighbors: [546, 548]
  },
  {
    x: 2788.033884586921,
    y: -7973.07,
    name: 'Betrayal Syndicate Reinforcement Chance',
    stats: [{ modType: 'Immortal Syndicate Members in Areas are $AMOUNT more\nlikely to be accompanied by reinforcements', amount: 5 }],
    neighbors: [544, 545]
  },
  {
    x: 3068.626115413079,
    y: -7973.07,
    name: 'Intelligence Gathering',
    stats: [{ modType: 'Completing Maps grants 10 Intelligence for a random Immortal Syndicate Safehouse', amount: null }],
    neighbors: [544]
  },
  {
    x: 2928.33,
    y: -7435.07,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [513, 545, 579, 529]
  },
  {
    x: 2929.76,
    y: -2309.48,
    name: 'Additional Harvest Crafting Chance',
    stats: [{ modType: 'Plants Harvested in Areas have $AMOUNT chance to give an additional Crafting option', amount: 3 }],
    neighbors: [552, 551]
  },
  {
    x: 2929.76,
    y: -1985.48,
    name: 'Additional Harvest Crafting Chance',
    stats: [{ modType: 'Plants Harvested in Areas have $AMOUNT chance to give an additional Crafting option', amount: 3 }],
    neighbors: [551, 553]
  },
  {
    x: 2767.76,
    y: -2147.48,
    name: 'Additional Harvest Crafting Chance',
    stats: [{ modType: 'Plants Harvested in Areas have $AMOUNT chance to give an additional Crafting option', amount: 3 }],
    neighbors: [549, 550]
  },
  {
    x: 3091.76,
    y: -2147.48,
    name: 'Call of the Grove',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain The Sacred Grove', amount: 4 }],
    neighbors: [549]
  },
  {
    x: 2929.76,
    y: -1691.48,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [597, 520, 574, 550, 515]
  },
  {
    x: 2930.84,
    y: -3718.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [617, 434]
  },
  {
    x: 3220.9685102677868,
    y: -4476.21,
    name: 'Distinguished Demolitionist',
    stats: [
      { modType: '3$AMOUNT increased Explosive Radius in Areas', amount: 5 },
      { modType: '2$AMOUNT increased number of Explosives in Areas', amount: 0 }
    ],
    neighbors: [563, 562]
  },
  {
    x: 3220.9685102677868,
    y: -4141.21,
    name: 'Expedition Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Expedition Encounter', amount: 1 }],
    neighbors: [561, 617, 563]
  },
  {
    x: 2640.731489732213,
    y: -4141.21,
    name: 'Expedition Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Expedition Encounter', amount: 1 }],
    neighbors: [433, 559, 561]
  },
  {
    x: 2763.35,
    y: -4598.828510267787,
    name: 'Expedition Vendor Reroll Currency Chance',
    stats: [{ modType: '$AMOUNT increased Quantity of Vendor Refresh Currencies dropped by Monsters in Areas', amount: 5 }],
    neighbors: [562, 560]
  },
  {
    x: 2595.85,
    y: -4308.71,
    name: 'Expedition Vendor Reroll Currency Chance',
    stats: [{ modType: '$AMOUNT increased Quantity of Vendor Refresh Currencies dropped by Monsters in Areas', amount: 5 }],
    neighbors: [560, 557]
  },
  {
    x: 2640.731489732213,
    y: -4476.21,
    name: 'Ancient Writings',
    stats: [
      { modType: 'Remnants in Areas have 3$AMOUNT chance to have an additional Suffix Modifier', amount: 0 },
      { modType: 'Expeditions in Areas have +2 Remnants', amount: null }
    ],
    neighbors: [558, 559]
  },
  {
    x: 2930.85,
    y: -3973.71,
    name: 'Expedition Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Expedition Encounter', amount: 1 }],
    neighbors: [557, 556]
  },
  {
    x: 3098.35,
    y: -4598.828510267787,
    name: 'Explosive Placement Distance',
    stats: [{ modType: '2$AMOUNT increased Explosive Placement Range in Areas', amount: 0 }],
    neighbors: [555, 558]
  },
  {
    x: 3265.85,
    y: -4308.71,
    name: 'Explosive Placement Distance',
    stats: [{ modType: '2$AMOUNT increased Explosive Placement Range in Areas', amount: 0 }],
    neighbors: [556, 555]
  },
  {
    x: 2930.85,
    y: -3462.7,
    name: 'Delve Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Niko Mission on Completion', amount: 1 }],
    neighbors: [568, 567]
  },
  {
    x: 3265.85,
    y: -3127.7,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [566, 567]
  },
  {
    x: 3220.9685102677868,
    y: -2960.2,
    name: 'Delve Sulphite Quantity',
    stats: [{ modType: 'Voltaxic Sulphite Veins and Chests in Areas contain $AMOUNT increased Sulphite', amount: 3 }],
    neighbors: [569, 565]
  },
  {
    x: 3220.9685102677868,
    y: -3295.2,
    name: 'Delve Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Niko Mission on Completion', amount: 1 }],
    neighbors: [564, 565, 617]
  },
  {
    x: 2640.731489732213,
    y: -3295.2,
    name: 'Delve Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Niko Mission on Completion', amount: 1 }],
    neighbors: [435, 570, 564]
  },
  {
    x: 3098.35,
    y: -2837.581489732213,
    name: 'Guarded Hoards',
    stats: [
      { modType: 'Voltaxic Sulphite Veins and Chests in Areas have $AMOUNT chance to contain double Sulphite', amount: 5 },
      { modType: 'Sulphite Veins and Chests in Areas are guarded by Sulphite-hoarding Monsters', amount: null }
    ],
    neighbors: [566]
  },
  {
    x: 2595.85,
    y: -3127.7,
    name: 'Packed with Energy',
    stats: [
      { modType: '+$AMOUNT to all maximum Elemental Resistances for each Voltaxic Sulphite Vein or Chest found in Areas', amount: 1 },
      { modType: '3$AMOUNT increased Damage for each Voltaxic Sulphite Vein or Chest found in Areas', amount: 5 },
      { modType: '1$AMOUNT increased Movement Speed for each Voltaxic Sulphite Vein or Chest found in Areas', amount: 5 }
    ],
    neighbors: [568]
  },
  {
    x: 3085.88,
    y: -6282.8,
    name: 'Karui Legion Chance',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 },
      { modType: 'Legion Encounters in Areas have 10$AMOUNT increased chance to include a Karui army', amount: 0 }
    ],
    neighbors: [526, 528]
  },
  {
    x: 3172.63,
    y: -6870.46,
    name: 'Legion Duplicate Splinter Chance',
    stats: [
      {
        modType: 'Splinters dropped by Legion Monsters or contained in Legion Chests in Areas have $AMOUNT chance to be Duplicated',
        amount: 4
      }
    ],
    neighbors: [530, 533]
  },
  {
    x: 3243.88,
    y: -6282.8,
    name: 'Maraketh Legion Chance',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 },
      { modType: 'Legion Encounters in Areas have 4$AMOUNT increased chance to include a Maraketh army', amount: 0 }
    ],
    neighbors: [526, 528]
  },
  {
    x: 3184.373884586921,
    y: -1544.48,
    name: 'Kirac Mission Pack Size',
    stats: [{ modType: 'Kirac Mission Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [553, 575]
  },
  {
    x: 3184.373884586921,
    y: -1382.48,
    name: 'Kirac Mission Pack Size',
    stats: [{ modType: 'Kirac Mission Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [574, 576]
  },
  {
    x: 3324.67,
    y: -1301.48,
    name: 'Kirac Mission Pack Size',
    stats: [{ modType: 'Kirac Mission Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [575, 577]
  },
  {
    x: 3464.966115413079,
    y: -1382.48,
    name: 'Solidarity',
    stats: [
      { modType: '2$AMOUNT increased Atlas Scouting Reports found in Areas', amount: 0 },
      { modType: "1$AMOUNT chance for Scouting Reports in Areas to drop as Operative's Scouting Reports instead", amount: 0 }
    ],
    neighbors: [576]
  },
  {
    x: 3509.9,
    y: -7388.61,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [589, 591]
  },
  {
    x: 3657.28,
    y: -7014.21,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [614, 548, 589]
  },
  {
    x: 3576.28,
    y: -5740.426115413079,
    name: 'Eater of Worlds Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [584, 581]
  },
  {
    x: 3495.28,
    y: -5600.13,
    name: 'Eater of Worlds Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [580, 534]
  },
  {
    x: 3738.28,
    y: -5740.426115413079,
    name: 'Eater of Worlds Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [583, 584]
  },
  {
    x: 3819.28,
    y: -5600.13,
    name: 'Eater of Worlds Pack Size',
    stats: [{ modType: 'Influenced Monster Packs in Areas have $AMOUNT increased Pack Size', amount: 5 }],
    neighbors: [615, 582]
  },
  {
    x: 3657.28,
    y: -5935.13,
    name: 'Rampant Growth',
    stats: [
      {
        modType: 'Eldritch Currency Items found in Areas influenced by The Eater of Worlds have 1$AMOUNT chance to be Duplicated',
        amount: 0
      },
      {
        modType:
          'Monster Packs Influenced by The Eater of Worlds in Areas have 1$AMOUNT chance to contain an additional Touching Tentacle Mass',
        amount: 0
      }
    ],
    neighbors: [582, 580]
  },
  {
    x: 3657.29,
    y: -6164.44,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [534, 614]
  },
  {
    x: 3824.9,
    y: -7904.788510267787,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [594, 588]
  },
  {
    x: 3367.2814897322132,
    y: -7782.17,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [590, 593]
  },
  {
    x: 3947.518510267787,
    y: -7782.17,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [586, 595]
  },
  {
    x: 3657.4,
    y: -7452.67,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [579, 578, 603]
  },
  {
    x: 3489.9,
    y: -7904.7885102677865,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [594, 587]
  },
  {
    x: 3367.2814897322132,
    y: -7447.17,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [578, 593]
  },
  {
    x: 3947.518510267787,
    y: -7447.17,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [595, 603]
  },
  {
    x: 3322.4,
    y: -7614.67,
    name: 'Etched by Acid',
    stats: [{ modType: 'Maps have 1$AMOUNT chance to award double progress towards encountering The Eater of Worlds', amount: 0 }],
    neighbors: [587, 591]
  },
  {
    x: 3657.4,
    y: -7949.67,
    name: 'Regurgitated Relics',
    stats: [
      {
        modType: 'Eldritch Currency Items dropped by The Infinite Hunger or The Eater of Worlds has 2$AMOUNT chance to be Duplicated',
        amount: 5
      },
      { modType: 'The Eater of Worlds has 2$AMOUNT increased chance to drop Forbidden Flesh', amount: 5 }
    ],
    neighbors: [590, 586]
  },
  {
    x: 3992.4,
    y: -7614.67,
    name: 'The Shadow of Hunger',
    stats: [{ modType: '5$AMOUNT increased chance to find Eater of Worlds Altars in Areas', amount: 0 }],
    neighbors: [588, 592]
  },
  {
    x: 3514.94,
    y: -2416.158510267787,
    name: 'Betrayal Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Jun Mission on Completion', amount: 1 }],
    neighbors: [598, 597]
  },
  {
    x: 3392.321489732213,
    y: -1958.5399999999997,
    name: 'Betrayal Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Jun Mission on Completion', amount: 1 }],
    neighbors: [553, 596, 601]
  },
  {
    x: 3972.558510267787,
    y: -2293.54,
    name: 'Betrayal Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Jun Mission on Completion', amount: 1 }],
    neighbors: [600, 619, 596]
  },
  {
    x: 3972.558510267787,
    y: -1958.54,
    name: 'Effective Leadership',
    stats: [
      { modType: 'Immortal Syndicate Members in Areas are 10$AMOUNT more likely to be accompanied by their Leader', amount: 0 },
      { modType: 'Immortal Syndicate Leaders in Areas drop an additional Veiled Item', amount: null }
    ],
    neighbors: [600]
  },
  {
    x: 4017.44,
    y: -2126.04,
    name: 'Betrayal Veiled Item Chance',
    stats: [{ modType: 'Immortal Syndicate Members have 1$AMOUNT chance to drop an additional Veiled Item', amount: 5 }],
    neighbors: [599, 598]
  },
  {
    x: 3514.94,
    y: -1835.921489732213,
    name: 'Betrayal Veiled Item Chance',
    stats: [{ modType: 'Immortal Syndicate Members have 1$AMOUNT chance to drop an additional Veiled Item', amount: 5 }],
    neighbors: [597, 602]
  },
  {
    x: 3682.44,
    y: -1791.04,
    name: 'Bribery',
    stats: [
      { modType: 'Immortal Syndicate Members in Areas are 20$AMOUNT more\nlikely to offer to Bargain for Items', amount: 0 },
      { modType: 'Immortal Syndicate Members in Areas drop 20$AMOUNT more\nItems when Bargained with for Items', amount: 0 }
    ],
    neighbors: [601]
  },
  {
    x: 3804.9,
    y: -7388.69,
    name: 'Eater of Worlds Item Chance',
    stats: [
      {
        modType:
          'Monsters Influenced by The Eater of Worlds in Areas have 0.$AMOUNT chance to drop an item with an Eater of Worlds Implicit Modifier',
        amount: 2
      }
    ],
    neighbors: [589, 592]
  },
  {
    x: 3991.38,
    y: -6587.76,
    name: 'Abyss Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 }],
    neighbors: [606, 614]
  },
  {
    x: 3667.38,
    y: -6587.76,
    name: 'Abyss Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 }],
    neighbors: [606, 607]
  },
  {
    x: 3748.38,
    y: -6447.463884586921,
    name: 'Abyss Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain an Abyss', amount: 1 }],
    neighbors: [604, 605]
  },
  {
    x: 3748.38,
    y: -6728.056115413079,
    name: 'Corrupted Gaze',
    stats: [{ modType: 'Abyss Jewels found in Areas have 2$AMOUNT chance to be Corrupted and have 5 or 6 random Modifiers', amount: 0 }],
    neighbors: [605]
  },
  {
    x: 3891.28,
    y: -4762.703884586921,
    name: 'Legion Monolith Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 }],
    neighbors: [609, 612]
  },
  {
    x: 4053.28,
    y: -4762.703884586921,
    name: 'Legion Monolith Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain a Legion Encounter', amount: 1 }],
    neighbors: [618, 608, 610]
  },
  {
    x: 4134.280000000001,
    y: -4903.0,
    name: 'Legion Duration',
    stats: [{ modType: 'Legion Encounters in Areas have 1$AMOUNT increased Duration', amount: 0 }],
    neighbors: [609, 613]
  },
  {
    x: 3891.28,
    y: -5043.296115413079,
    name: 'Legion Duration',
    stats: [{ modType: 'Legion Encounters in Areas have 1$AMOUNT increased Duration', amount: 0 }],
    neighbors: [613, 612]
  },
  {
    x: 3810.28,
    y: -4903.0,
    name: 'Chain of Command',
    stats: [
      { modType: 'Legions in Areas contains 2 additional Sergeants', amount: null },
      { modType: 'Legion Sergeants in Areas have 2$AMOUNT additional chance to have Rewards', amount: 0 }
    ],
    neighbors: [608, 611]
  },
  {
    x: 4053.28,
    y: -5043.296115413079,
    name: 'Protracted Battle',
    stats: [
      { modType: 'Legion Encounters in Areas have 4$AMOUNT increased Duration', amount: 0 },
      { modType: 'Legion Monsters in Areas take 5$AMOUNT increased Damage while in Stasis', amount: 0 }
    ],
    neighbors: [610, 611]
  },
  {
    x: 4395.38,
    y: -6587.76,
    name: 'Map Modifier Effect',
    stats: [{ modType: '$AMOUNT increased effect of Modifiers on non-unique Maps', amount: 2 }],
    neighbors: [585, 604, 630, 579, 615]
  },
  {
    x: 4395.38,
    y: -5740.52,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [583, 614, 616, 635]
  },
  {
    x: 4395.38,
    y: -5149.71,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [618, 615]
  },
  {
    x: 3551.09,
    y: -3718.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [556, 567, 620, 623, 554, 621]
  },
  {
    x: 4397.09,
    y: -4564.2,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [621, 638, 609, 616]
  },
  {
    x: 3974.09,
    y: -2985.5425083983646,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [598, 620]
  },
  {
    x: 3664.4325083983654,
    y: -3295.1999999999994,
    name: 'Adjacent Map Drop Chance',
    stats: [{ modType: '$AMOUNT chance for an additional connected Map to drop from Unique Map Bosses', amount: 2 }],
    neighbors: [619, 617]
  },
  {
    x: 3798.877663116181,
    y: -4316.412336883819,
    name: 'Map Drop Duplication',
    stats: [{ modType: '0.$AMOUNT chance for Map Drops to be Duplicated', amount: 5 }],
    neighbors: [617, 618]
  },
  {
    x: 4733.42,
    y: -3718.2,
    name: 'Gatekeepers',
    stats: [
      { modType: 'Breaches in Areas have 7$AMOUNT increased chance to contain a Boss', amount: 0 },
      { modType: 'Breach Bosses in Areas drop double Breach Splinters', amount: null }
    ],
    neighbors: [625, 628, 624, 626, 627]
  },
  {
    x: 3905.42,
    y: -3718.2,
    name: 'Breach Chance',
    stats: [{ modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }],
    neighbors: [617, 624, 626, 627, 628, 625]
  },
  {
    x: 4398.42,
    y: -3556.2,
    name: 'Xoph Breach Chance',
    stats: [
      { modType: 'Breaches in Areas have 10$AMOUNT increased chance to belong to Xoph', amount: 0 },
      { modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }
    ],
    neighbors: [622, 623]
  },
  {
    x: 4398.42,
    y: -3383.2,
    name: 'Tul Breach Chance',
    stats: [
      { modType: 'Breaches in Areas have 10$AMOUNT increased chance to belong to Tul', amount: 0 },
      { modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }
    ],
    neighbors: [623, 622]
  },
  {
    x: 4398.42,
    y: -3880.2,
    name: 'Esh Breach Chance',
    stats: [
      { modType: 'Breaches in Areas have 10$AMOUNT increased chance to belong to Esh', amount: 0 },
      { modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }
    ],
    neighbors: [622, 623]
  },
  {
    x: 4398.42,
    y: -4053.2,
    name: 'Uul-Netol Breach Chance',
    stats: [
      { modType: 'Breaches in Areas have 6$AMOUNT increased chance to belong to Uul-Netol', amount: 0 },
      { modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 }
    ],
    neighbors: [622, 623]
  },
  {
    x: 4891.42,
    y: -3718.2,
    name: 'Chayula Breach Chance',
    stats: [
      { modType: 'Areas have +$AMOUNT chance to contain Breaches', amount: 1 },
      { modType: 'Breaches in Areas have 3$AMOUNT increased chance to belong to Chayula', amount: 0 }
    ],
    neighbors: [622, 623]
  },
  {
    x: 5014.38,
    y: -6587.76,
    name: 'Breach Boss Chance',
    stats: [{ modType: 'Breaches in Areas have $AMOUNT increased chance to contain a Boss', amount: 8 }],
    neighbors: [631, 632]
  },
  {
    x: 4690.38,
    y: -6587.76,
    name: 'Breach Boss Chance',
    stats: [{ modType: 'Breaches in Areas have $AMOUNT increased chance to contain a Boss', amount: 8 }],
    neighbors: [614, 633]
  },
  {
    x: 4852.38,
    y: -6749.76,
    name: 'Within Their Grasp',
    stats: [
      { modType: 'Breach Bosses Defeated in Areas have $AMOUNT chance to drop a Breachstone', amount: 8 },
      { modType: 'Breachstones dropped by Breach Bosses in Areas have $AMOUNT chance to be Charged', amount: 9 },
      { modType: 'Breachstones dropped by Breach Bosses in Areas have $AMOUNT chance to be Enriched', amount: 3 },
      { modType: 'Breachstones dropped by Breach Bosses in Areas have $AMOUNT chance to be Pure', amount: 1 }
    ],
    neighbors: [629]
  },
  {
    x: 4933.38,
    y: -6447.463884586921,
    name: 'Breach Boss Chance',
    stats: [{ modType: 'Breaches in Areas have $AMOUNT increased chance to contain a Boss', amount: 8 }],
    neighbors: [629, 633]
  },
  {
    x: 4771.38,
    y: -6447.463884586921,
    name: 'Breach Boss Chance',
    stats: [{ modType: 'Breaches in Areas have $AMOUNT increased chance to contain a Boss', amount: 8 }],
    neighbors: [630, 632]
  },
  {
    x: 4933.38,
    y: -5880.546115413079,
    name: 'Map Boss Rarity',
    stats: [{ modType: '2$AMOUNT increased Rarity of Items dropped by Unique Bosses', amount: 5 }],
    neighbors: [635, 637]
  },
  {
    x: 4690.38,
    y: -5740.25,
    name: 'Map Boss Rarity',
    stats: [{ modType: '2$AMOUNT increased Rarity of Items dropped by Unique Bosses', amount: 5 }],
    neighbors: [634, 615]
  },
  {
    x: 4933.38,
    y: -5599.953884586921,
    name: 'Enriched Entities',
    stats: [
      { modType: 'Unique Bosses drop an additional Basic Currency Item', amount: null },
      { modType: 'Unique Bosses have 2$AMOUNT chance to be Duplicated if possible', amount: 0 }
    ],
    neighbors: [637]
  },
  {
    x: 5014.38,
    y: -5740.25,
    name: 'Map Boss Rarity',
    stats: [{ modType: '2$AMOUNT increased Rarity of Items dropped by Unique Bosses', amount: 5 }],
    neighbors: [634, 636]
  },
  {
    x: 4692.09,
    y: -4564.21,
    name: 'Betrayal Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Jun Mission on Completion', amount: 1 }],
    neighbors: [639, 618]
  },
  {
    x: 4935.09,
    y: -4704.506115413079,
    name: 'Betrayal Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Jun Mission on Completion', amount: 1 }],
    neighbors: [638, 641]
  },
  {
    x: 4935.09,
    y: -4423.913884586921,
    name: 'Test of Loyalty',
    stats: [{ modType: 'Immortal Syndicate Members Executed in Areas have 10$AMOUNT chance to gain an additional Rank', amount: 0 }],
    neighbors: [641]
  },
  {
    x: 5016.09,
    y: -4564.21,
    name: 'Betrayal Mission Chance',
    stats: [{ modType: 'Areas have $AMOUNT chance to grant an additional Jun Mission on Completion', amount: 1 }],
    neighbors: [639, 640]
  }
]

const yscale = 2.605
const ybase = 4540
const xscale = 2.61
const xbase = 2560

skillList.forEach((skill) => {
  skill.x = (skill.x + xbase * xscale) / xscale
  skill.y = (skill.y + ybase * yscale) / yscale
})
