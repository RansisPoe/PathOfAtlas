import { Stage, Layer } from "react-konva";

import SkillCircle from "./SkillCircle";
import TreeImage from "./TreeImage";

const dragmove = (pos: any) => {
  // This limits how much you can drag the image
  // TODO: somehow make this dynamic based on loaded image size
  return {
    x: Math.max(Math.min(pos.x, 0), -3956 + window.innerWidth),
    y: Math.max(Math.min(pos.y, 0), -3654 + window.innerHeight),
  };
};

// TODO: add zoom with scroll/pinch

export default function CanvasExample() {
  // TODO: make x and y dynamic based on the image
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer draggable x={-1200} y={-2100} dragBoundFunc={dragmove}>
        <TreeImage src="./tree.png" />
        <SkillCircle></SkillCircle>
      </Layer>
    </Stage>
  );
}
