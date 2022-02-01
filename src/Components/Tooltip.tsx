import React from 'react'
import { Rect, Text, Group } from 'react-konva'

const ToolTip = (props: any) => {
  const { name, value, x, y } = props.data

  // TODO: make width dynamic based on text size?
  const width = Math.max(name?.length, value?.length) * 7 * props.currentScale
  return (
    <Group x={x + 15 * props.currentScale} y={y}>
      <Rect width={width} height={50 * props.currentScale} fill="rgba(0,0,0,0.9)" cornerRadius={8} />
      <Text fontSize={12 * props.currentScale} fill="#fff" text={name || ''} fontStyle="bold" x={10} y={8 * props.currentScale} />
      <Text fontSize={12 * props.currentScale} fill="#fff" text={value || ''} x={10} y={24 * props.currentScale} />
    </Group>
  )
}

export default ToolTip
