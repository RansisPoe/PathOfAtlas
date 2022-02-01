import React from "react";
import { Circle } from "react-konva";

interface SkillCircleProps {
  x: number;
  y: number;
  name: string;
  value: string;
  toggled: boolean;
  onClick: any;
  setTooltip: any;
}

class SkillCircle extends React.Component<SkillCircleProps> {
  render() {
    return (
      <Circle
        x={this.props.x}
        y={this.props.y}
        width={30}
        height={30}
        fill={this.props.toggled ? "yellow" : "black"}
        opacity={this.props.toggled ? 0.3 : 0.6}
        shadowBlur={5}
        onClick={this.props.onClick}
        onMouseEnter={(e: any) => {
          // style stage container:
          const container = e.target.getStage().container();
          container.style.cursor = "pointer";

          this.props.setTooltip({
            x: this.props.x,
            y: this.props.y,
            name: this.props.name,
            value: this.props.value,
          });
        }}
        onMouseLeave={(e: any) => {
          const container = e.target.getStage().container();
          container.style.cursor = "default";

          this.props.setTooltip(null);
        }}
      />
    );
  }
}

export default SkillCircle;
