import React from "react";
import { Line } from "react-konva";

interface SkillLineProps {
  x: number;
  y: number;
  neighborX: number;
  neighborY: number;
  toggled: boolean;
  hovered: boolean;
}

class SkillLine extends React.Component<SkillLineProps> {
  render() {
    return (
      <Line
        points={[
          this.props.x,
          this.props.y,
          this.props.neighborX,
          this.props.neighborY,
        ]}
        strokeWidth={5}
        opacity={this.props.toggled ? 0.6 : this.props.hovered ? 0.2 : 0}
        stroke="yellow"
        listening={false}
      />
    );
  }
}

export default SkillLine;
