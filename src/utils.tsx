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
}

export const skillList: SkillNode[] = [
  {
    x: 1981,
    y: 2987,
    name: "Map Quantity",
    description: "+5% increased map quantity",
    mods: [{ modType: "Increased map quantity", amount: 5 }],
  },
  {
    x: 1855,
    y: 3021,
    name: "Master Missions",
    description: "+5% increased master missions",
    mods: [{ modType: "Increased master missions", amount: 5 }],
  },
];
