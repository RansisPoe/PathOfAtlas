import Graph from "node-dijkstra";
import _ from "lodash";

export interface PassiveMod {
  modType: string;
  amount: number;
}

export interface SkillNode {
  x: number;
  y: number;
  name: string;
  description: string;
  mods: PassiveMod[];
  neighbors: number[];
}

export const skillList: SkillNode[] = [
  {
    x: 1719,
    y: 3089,
    name: "Map Quantity",
    description: "+5% increased map quantity",
    mods: [{ modType: "Increased map quantity", amount: 5 }],
    neighbors: [],
  },
  {
    x: 1855,
    y: 3021,
    name: "Master Missions",
    description: "+5% increased master missions",
    mods: [{ modType: "Increased master missions", amount: 5 }],
    neighbors: [7],
  },
  {
    x: 1981,
    y: 2987,
    name: "Map Quantity",
    description: "+5% increased map quantity",
    mods: [{ modType: "Increased map quantity", amount: 5 }],
    neighbors: [5, 6],
  },
  {
    x: 2107,
    y: 3020,
    name: "Map Quantity",
    description: "+5% increased map quantity",
    mods: [{ modType: "Increased map quantity", amount: 5 }],
    neighbors: [],
  },
  {
    x: 2243,
    y: 3081,
    name: "Map Quantity",
    description: "+5% increased map quantity",
    mods: [{ modType: "Increased map quantity", amount: 5 }],
    neighbors: [],
  },
  {
    x: 1981,
    y: 2736,
    name: "Map Quantity",
    description: "+5% increased map quantity",
    mods: [{ modType: "Increased map quantity", amount: 5 }],
    neighbors: [2],
  },
  {
    x: 1939,
    y: 2931,
    name: "Essence Chance",
    description: "+5% increased essence spawn chance",
    mods: [{ modType: "Increased essence spawn chance", amount: 20 }],
    neighbors: [2, 7],
  },
  {
    x: 1855,
    y: 2931,
    name: "Essence Chance",
    description: "+5% increased essence spawn chance",
    mods: [{ modType: "Increased essence spawn chance", amount: 20 }],
    neighbors: [1, 6, 8],
  },
  {
    x: 1898,
    y: 2856,
    name: "Duplicate Essence",
    description: "+30% chance to duplicate essence",
    mods: [{ modType: "Chance to duplicate essence", amount: 30 }],
    neighbors: [7],
  },
];

export const skillGraph = new Graph();
skillGraph.addNode("root", { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 });
skillList.forEach((skill, index) => {
  const children: any = {};
  skill.neighbors.forEach((neighbor) => {
    children[neighbor.toString()] = 1;
  });
  skillGraph.addNode(index.toString(), children);
});

export function findShortestPath(toggles: boolean[], index: number) {
  const paths: any[] = [];

  // toggling it to enabled, find minPath
  paths.push(skillGraph.path("root", index + ""));
  toggles.forEach((toggle, subIndex) => {
    if (toggle) {
      paths.push(skillGraph.path(subIndex + "", index + ""));
    }
  });

  const minPath = _.minBy(paths, "length");

  return minPath;
}

function disconnectedSearchHelper(
  index: number,
  toggles: boolean[],
  connected: boolean[],
  visited: boolean[]
) {
  if (!toggles[index]) return;
  if (visited[index]) return;

  visited[index] = true;
  connected[index] = true;

  skillList[index].neighbors.forEach((neighborIndex) => {
    disconnectedSearchHelper(neighborIndex, toggles, connected, visited);
  });
}

export function disconnectedSearch(toggles: boolean[]): boolean[] {
  const connected = skillList.map((skill) => false);
  const visited = skillList.map((skill) => false);
  disconnectedSearchHelper(0, toggles, connected, visited);
  disconnectedSearchHelper(1, toggles, connected, visited);
  disconnectedSearchHelper(2, toggles, connected, visited);
  disconnectedSearchHelper(3, toggles, connected, visited);
  disconnectedSearchHelper(4, toggles, connected, visited);

  return connected;
}
