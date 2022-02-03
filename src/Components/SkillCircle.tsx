import React from 'react'
import { Circle, Text } from 'react-konva'

interface SkillCircleProps {
  x: number
  y: number
  name: string
  value: string
  toggled: boolean
  onClick: any
  setHover: any
  index: number
  searched: boolean
  shortestPath: number
  displayLen: boolean
}

class SkillCircle extends React.Component<SkillCircleProps> {
  state = {
    isHovered: false
  }

  getOffset() {
    return this.props.shortestPath > 9 ? 18 : 8
  }

  render() {
    return (
      <>
        <Circle
          x={this.props.x}
          y={this.props.y}
          width={30}
          height={30}
          // fill={this.props.toggled || this.props.searched ? 'yellow' : 'black'}
          fill="red"
          opacity={this.props.searched ? 0.8 : this.props.toggled ? 0.1 : 0}
          onClick={this.props.onClick}
          hitStrokeWidth={0}
          shadowForStrokeEnabled={false}
          onTouchStart={this.props.onClick}
          onMouseEnter={(e: any) => {
            // style stage container:
            const container = e.target.getStage().container()
            container.style.cursor = 'pointer'

            this.props.setHover(this.props.index)
            this.setState({ isHovered: true })
          }}
          onMouseLeave={(e: any) => {
            const container = e.target.getStage().container()
            container.style.cursor = 'default'

            this.props.setHover(null)
            this.setState({ isHovered: false })
          }}
        />
        {this.state.isHovered && this.props.displayLen && (
          <Text
            fontStyle="bold"
            listening={false}
            x={this.props.x - this.getOffset()}
            y={this.props.y - 10}
            text={this.props.shortestPath.toString()}
            fill="red"
            fontSize={25}
          />
        )}
      </>
    )
  }
}

export default SkillCircle
