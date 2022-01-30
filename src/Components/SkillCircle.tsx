import React from "react";
import { Circle } from "react-konva";

// For now, this is just an example of a single skill circle. Its x/y coordinates are hard-coded to be the first node at the bottom-middle of the tree
class SkillCircle extends React.Component {
  state = {
    toggled: false,
  };
  handleClick = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  };
  render() {
    return (
      <Circle
        x={1981}
        y={2987}
        width={30}
        height={30}
        fill={"black"}
        opacity={this.state.toggled ? 0.1 : 0.6}
        shadowBlur={5}
        onClick={this.handleClick}
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
