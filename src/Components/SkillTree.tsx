import React from "react";
import SkillCircle from "./SkillCircle";
import SkillLine from "./SkillLine";
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
        {this.props.toggles.map((toggle, index) => {
          return (
            <Group>
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
              {skillList[index].neighbors.map((neighbor) => (
                <SkillLine
                  key={`l${index}-${neighbor}`}
                  x={skillList[index].x}
                  y={skillList[index].y}
                  neighborX={skillList[neighbor].x}
                  neighborY={skillList[neighbor].y}
                  toggled={toggle && this.props.toggles[neighbor]}
                />
              ))}
            </Group>
          );
        })}
      </Group>
    );
  }
}

export default SkillTree;
