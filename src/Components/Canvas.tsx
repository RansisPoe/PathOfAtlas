import React from "react";
import { Stage, Layer } from "react-konva";

import SkillTree from "./SkillTree";
import TreeImage from "./TreeImage";
import ToolTip from "./Tooltip";

const scaleBy = 1.1;
var currentScale = 1;

const width = 3956;
const height = 3654;

const overflowBounds = 1.2;

const dragBound = (pos: any) => {
  // This limits how much you can drag the image
  // TODO: somehow make this dynamic based on loaded image size
  return {
    x: Math.max(
      Math.min(pos.x, 240),
      -width * currentScale * overflowBounds + window.innerWidth
    ),
    y: Math.max(
      Math.min(pos.y, 0),
      -height * currentScale * overflowBounds + window.innerHeight
    ),
  };
};

const wheelFunc = (e: any) => {
  // stop default scrolling
  e.evt.preventDefault();

  const stage = e.target.getStage();
  const oldScale = stage.scaleX();
  const pointer = stage.getPointerPosition();

  const mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  };

  // how to scale? Zoom in? Or zoom out?
  let direction = e.evt.deltaY > 0 ? 1 : -1;

  // when we zoom on trackpad, e.evt.ctrlKey is true
  // in that case lets revert direction
  if (e.evt.ctrlKey) {
    direction = -direction;
  }

  const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;
  currentScale = newScale;

  if (width * newScale < window.innerWidth) {
    return;
  }
  if (height * newScale < window.innerHeight) {
    return;
  }

  stage.scale({ x: newScale, y: newScale });

  const newPos = {
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  };
  stage.position(newPos);
};

interface CanvasTreeProps {
  toggles: boolean[];
  toggleIndex: any;
}
interface TooltipData {
  x: number;
  y: number;
  name: string;
  value: string;
}

interface CanvasTreeState {
  tooltip?: TooltipData;
}

// TODO: add zoom with pinch

class CanvasTree extends React.Component<CanvasTreeProps, CanvasTreeState> {
  setTooltip(tooltip?: TooltipData) {
    this.setState({ tooltip });
  }

  render() {
    // TODO: make x and y dynamic based on the image
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer
          draggable
          x={-1200}
          y={-2100}
          dragBoundFunc={dragBound}
          onWheel={wheelFunc}
        >
          <TreeImage src="./tree.png" />
          <SkillTree
            toggles={this.props.toggles}
            toggleIndex={this.props.toggleIndex}
            setTooltip={this.setTooltip.bind(this)}
          ></SkillTree>
          {this.state?.tooltip && <ToolTip data={this.state.tooltip} />}
        </Layer>
      </Stage>
    );
  }
}
export default CanvasTree;
