import React from "react";
import { Line } from "react-konva";

interface SkillLineProps {
  x: number;
  y: number;
  neighborX: number;
  neighborY: number;
  toggled: boolean;
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
        opacity={this.props.toggled ? 0.6 : 0.1}
        stroke="yellow"
        listening={false}
      />
    );
  }
}

export default SkillLine;
