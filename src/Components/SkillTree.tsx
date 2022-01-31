import React from "react";
import SkillCircle from "./SkillCircle";
import { skillList } from "../utils";
import { Group } from "react-konva";

interface SkillTreeProps {
  toggles: boolean[];
  toggleIndex: any;
  setTooltip: any;
}

class SkillTree extends React.Component<SkillTreeProps> {
  toggleIndex(index: number) {
    this.props.toggleIndex(index);
  }

  render() {
    return (
      <Group>
        {this.props.toggles.map((toggle, index) => (
          <SkillCircle
            key={index}
            x={skillList[index].x}
            y={skillList[index].y}
            name={skillList[index].name}
            value={skillList[index].description}
            toggled={toggle}
            onClick={this.toggleIndex.bind(this, index)}
            setTooltip={this.props.setTooltip}
          ></SkillCircle>
        ))}
      </Group>
    );
  }
}

export default SkillTree;
