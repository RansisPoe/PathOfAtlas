import React from "react";
import SkillCircle from "./SkillCircle";
import { skillList } from "../utils";

interface SkillTreeProps {
  toggles: boolean[];
  toggleIndex: any;
}

class SkillTree extends React.Component<SkillTreeProps> {
  toggleIndex(index: number) {
    this.props.toggleIndex(index);
  }

  render() {
    return (
      <div>
        {this.props.toggles.map((toggle, index) => (
          <SkillCircle
            key={index}
            x={skillList[index].x}
            y={skillList[index].y}
            toggled={toggle}
            onClick={this.toggleIndex.bind(this, index)}
          ></SkillCircle>
        ))}
      </div>
    );
  }
}

export default SkillTree;
