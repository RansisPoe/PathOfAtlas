import React from "react";
import { Rect, Text, Group } from "react-konva";

const ToolTip = (props: any) => {
  const { name, value, x, y } = props.data;

  // TODO: make width dynamic based on text size?
  const width = Math.max(name?.length, value?.length) * 7;
  return (
    <Group x={x} y={y}>
      <Rect width={width} height={50} fill="rgba(0,0,0,0.9)" cornerRadius={8} />
      <Text fill="#fff" text={name || ""} fontStyle="bold" x={10} y={8} />
      <Text fill="#fff" text={value || ""} x={10} y={24} />
    </Group>
  );
};

export default ToolTip;
