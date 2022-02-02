import React from 'react'
import { Line } from 'react-konva'

interface SkillLineProps {
  x: number
  y: number
  neighborX: number
  neighborY: number
  toggled: boolean
  hovered: boolean
}

class SkillLine extends React.Component<SkillLineProps> {
  render() {
    return (
      <Line
        points={[this.props.x, this.props.y, this.props.neighborX, this.props.neighborY]}
        strokeWidth={5}
        opacity={this.props.toggled ? 1 : this.props.hovered ? 0.3 : 0}
        stroke="#cac1a6"
        listening={false}
      />
    )
  }
}

export default SkillLine
