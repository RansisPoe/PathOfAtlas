import { Rect, Text, Group } from 'react-konva'
import _ from 'lodash'

const ToolTip = (props: any) => {
  const { name, values, x, y } = props.data
  const valArray = values as string[]

  // TODO: make width dynamic based on text size?
  const width = Math.max(name?.length, _.maxBy(valArray, 'length')?.length || 0) * 7 * props.currentScale
  return (
    <Group x={x + 15 * props.currentScale} y={y}>
      <Rect width={width} height={(valArray?.length + 1) * 25 * props.currentScale} fill="rgba(0,0,0,0.9)" cornerRadius={8} />
      <Text fontSize={12 * props.currentScale} fill="#fff" text={name || ''} fontStyle="bold" x={10} y={8 * props.currentScale} />
      {valArray.map((val: string, index: number) => (
        <Text fontSize={12 * props.currentScale} fill="#fff" text={val} x={10} y={24 * props.currentScale * (index + 1)} />
      ))}
    </Group>
  )
}

export default ToolTip
