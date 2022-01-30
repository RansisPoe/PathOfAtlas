import React from "react";
import { Text } from "react-konva";
import SkillCircle from "./SkillCircle";

interface SkillNode {
  x: number;
  y: number;
  skill: string;
}

const skillList: SkillNode[] = [
  { x: 1981, y: 2987, skill: "+5% increased map quantity" },
  { x: 1855, y: 3021, skill: "+5% increased master missions" },
];

interface SkillTreeState {
  toggles: boolean[];
}

class SkillTree extends React.Component<any, SkillTreeState> {
  state = {
    toggles: skillList.map((skill) => false),
  };

  toggleIndex(index: number) {
    const toggles = [...this.state.toggles];
    toggles[index] = !toggles[index];

    this.setState({ toggles });
  }

  skillSums() {
    return this.state.toggles.reduce((acc, toggle, index) => {
      if (toggle) {
        return acc + skillList[index].skill + "\n";
      }
      return acc;
    }, "");
  }

  render() {
    return (
      <div>
        {this.state.toggles.map((toggle, index) => (
          <SkillCircle
            x={skillList[index].x}
            y={skillList[index].y}
            toggled={toggle}
            onClick={this.toggleIndex.bind(this, index)}
          ></SkillCircle>
        ))}
        <Text
          fill="white"
          text={this.skillSums()}
          x={1200}
          y={3200}
          fontSize={36}
        ></Text>
      </div>
    );
  }
}

export default SkillTree;
