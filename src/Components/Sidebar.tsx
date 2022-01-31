import "./Sidebar.css";
import React from "react";
import { skillList } from "../utils";
import _ from "lodash";

interface SidebarProps {
  toggles: boolean[];
}

class Sidebar extends React.Component<SidebarProps> {
  passives() {
    const passives: { [key: string]: number } = {};
    this.props.toggles.forEach((toggle, index) => {
      if (!toggle) return;
      const skill = skillList[index];

      skill.mods.forEach((mod) => {
        passives[mod.modType] = (passives[mod.modType] || 0) + mod.amount;
      });
    });

    return _(passives)
      .map((val, key) => [key, val])
      .sortBy([0])
      .value();
  }

  render() {
    return (
      <div className="sidebar">
        <h3>{_.sum(this.props.toggles)} / 132</h3>
        <h3>Total Stats</h3>
        <div>
          {this.passives().map(([modType, amount]) => (
            <div key={modType}>
              {modType}: <span>+{amount}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;
