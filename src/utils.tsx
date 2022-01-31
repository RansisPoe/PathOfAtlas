export interface PassiveMod {
  modType: string;
  amount: number;
}

export interface SkillNode {
  x: number;
  y: number;
  description: string;
  mods: PassiveMod[];
}

export const skillList: SkillNode[] = [
  {
    x: 1981,
    y: 2987,
    description: "+5% increased map quantity",
    mods: [{ modType: "map_quant", amount: 5 }],
  },
  {
    x: 1855,
    y: 3021,
    description: "+5% increased master missions",
    mods: [{ modType: "master_mission", amount: 5 }],
  },
];
