import React from "react";
import { Circle } from "react-konva";

interface SkillCircleProps {
  x: number;
  y: number;
  toggled: boolean;
  onClick: any;
}

class SkillCircle extends React.Component<SkillCircleProps> {
  render() {
    return (
      <Circle
        x={this.props.x}
        y={this.props.y}
        width={30}
        height={30}
        fill={"black"}
        opacity={this.props.toggled ? 0.1 : 0.6}
        shadowBlur={5}
        onClick={this.props.onClick}
        onMouseEnter={(e: any) => {
          // style stage container:
          const container = e.target.getStage().container();
          container.style.cursor = "pointer";
        }}
        onMouseLeave={(e: any) => {
          const container = e.target.getStage().container();
          container.style.cursor = "default";
        }}
      />
    );
  }
}

export default SkillCircle;
