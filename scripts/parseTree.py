'''
Script to format json tree in a more easily consumable format

This script denormalizes grouping info, calcs x/y coords, etc
'''
import json
import pprint
import math
import re

tree = json.load(open('./tree.json'))
nodes = tree['nodes'].values()
# filter out mastery and root nodes
nodes = [
    x for x in nodes if x.get('isMastery', False) is False and x['group'] != 0
    and x['skill'] != 29045
]

skillsPerOrbit = tree['constants']['skillsPerOrbit']
orbitRadii = tree['constants']['orbitRadii']

# a bit of a hack, but the first 5 elements are hard coded as root nodes, so re-arrange the list to put the starter nodes at the beginning
for index in tree['nodes']['29045']["out"]:
    found = 0
    for i, n in enumerate(nodes):
        if str(n['skill']) == index:
            found = i
            break

    nodes = [nodes[found]] + nodes[:found] + nodes[found + 1:]

for i, x in enumerate(nodes):
    x['index'] = i

ret = []

# See https://github.com/grindinggear/skilltree-export/blob/3.17.0/README.md
orbitAngles = {
    0: [0],
    1: [0, 60, 120, 180, 240, 300],
    2:
    [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330],
    3:
    [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330],
    4: [
        0, 10, 20, 30, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 135,
        140, 150, 160, 170, 180, 190, 200, 210, 220, 225, 230, 240, 250, 260,
        270, 280, 290, 300, 310, 315, 320, 330, 340, 350
    ],
    5: [
        0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85,
        90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155,
        160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225,
        230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295,
        300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355
    ],
    6: [
        0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85,
        90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155,
        160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225,
        230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295,
        300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355
    ],
}
groups = {
    "Unique Maps": ["Unique Map"],
    "Maps": ["Map", "in Areas", "Unique Map Bosses", "Fortune Favours"],
    "Bestiary": ["Bestiary", "Beast", "Einhar"],
    "Betrayal": ["Betrayal", "Jun", "Immortal Syndicate"],
    "Beyond": ["Beyond"],
    "Blight": ["Blight", "Oil"],
    "Breach": ["Breach"],
    "Delirium": ["Delirium"],
    "Delve": ["Delve", "Sulphite", "Niko"],
    "Elderslayers": ["Elderslayer", "Conqueror", "Sirus"],
    "Essence": ["Essence", "Imprisoned"],
    "Expedition": [
        "Expedition", "Remnants", "Explosive", "Runic Monster",
        "Artifacts dropped", "Vendor Refresh"
    ],
    "Harbinger": ["Harbinger"],
    "Harvest": ["Harvest", "Sacred Grove"],
    "Heist": ["Heist", "Smuggler", "Smuggling", "Blueprint", "Bounty Target"],
    "Incursion": ["Incursion", "Alva", "Architect"],
    "Kirac": ["Kirac", "Scouting"],
    "Labyrinth": ["Labyrinth", "Trial of Ascendancy"],
    "Legion": ["Legion", "Timeless"],
    "Map Boss": ["Map Boss", "Unique Bosses"],
    "Metamorph": ["Metamorph"],
    "Rare Monsters": ["Rare Monster"],
    "Abyss": ["Abyss"],
    "Ritual": ["Ritual"],
    "Scarabs": ["Scarab"],
    "Sextants": ["Sextant"],
    "Shrines": ["Shrine"],
    "Strongboxes": ["Strongbox"],
    "Synthesis": ["Synthesis"],
    "Eater of Worlds": ["Eater of Worlds"],
    "Searing Exarch": ["Exarch", "Black Star"],
    "Shaper & Elder": ["Elder", "Shaper"],
    "Torment": ["Torment", "Possessed"],
    "Rogue Exile": ["Rogue Exile"],
    "Vaal Side Areas": ["Vaal Side Area"],
    "Maven": ["Maven"],
}


def matchStat(name, stat):
    amount = None
    original = stat[:]
    m = re.findall('\d+[.]\d+%', stat)
    if m is not None and len(m) > 0:
        amount = float(m[0][:-1])
        stat = stat.replace(m[0][:-1], "$AMOUNT")
    else:
        m = re.findall('\d+', stat)
        if m is not None and len(m) > 0:
            amount = int(m[0])
            stat = stat.replace(m[0], "$AMOUNT")

    group = "Other"
    for groupName, searches in groups.items():
        for search in searches:
            if search.lower() in stat.lower():
                group = groupName

    return {
        "modType": stat,
        "amount": amount,
        "description": original,
        "modGroup": group
    }


for i, x in enumerate(nodes):
    groupData = tree['groups'][str(x['group'])]

    orbitamount = orbitRadii[x['orbit']]
    orbitPos = orbitAngles[x['orbit']][x['orbitIndex']] / 360 * 2 * math.pi

    x['x'] = (groupData['x'] + orbitamount * math.sin(orbitPos))
    x['y'] = (groupData['y'] + orbitamount * -math.cos(orbitPos))

    neighbors = [
        tree["nodes"][n]["index"] for n in x["in"] if n != '29045'
    ] + [tree["nodes"][n]["index"] for n in x["out"] if n != '29045']

    stats = [matchStat(x["name"], s) for s in x['stats']]
    ret.append({
        "x": x["x"],
        "y": x["y"],
        "name": x["name"],
        "stats": stats,
        "neighbors": neighbors,
    })

treeStr = json.dumps(ret)
f = open('./tree.tsx.tmpl').read().replace('$REPLACEME', treeStr)
with open('./tmp', 'w') as out:
    out.write(f)

print('written')