import React from 'react'
import Konva from 'konva'
import { Stage, Layer } from 'react-konva'

import SkillTree from './SkillTree'
import TreeImage from './TreeImage'
import ToolTip from './Tooltip'
import { findShortestPath } from '../utils'
import { skillList } from '../tree'

const scaleBy = 1.3

const width = 5000
const height = 5000

const overflowBounds = 1.1

interface CanvasTreeProps {
  toggles: boolean[]
  searched: boolean[]
  toggleIndex: any
}
interface TooltipData {
  x: number
  y: number
  name: string
  value: string
}

interface CanvasTreeState {
  tooltip?: TooltipData
  currentScale: number
  hoveredList: boolean[]
  hoveredIndex?: number
  windowWidth: number
  windowHeight: number
}

const emptyHoverList = skillList.map((skill) => false)

// TODO: add zoom with pinch

class CanvasTree extends React.Component<CanvasTreeProps, CanvasTreeState> {
  stage: Konva.Stage | null = null

  state = {
    currentScale: 1,
    hoveredList: [...emptyHoverList],
    hoveredIndex: undefined,
    tooltip: undefined,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  getCurrentScale() {
    return this.state.currentScale
  }

  dragBound(pos: any) {
    // This limits how much you can drag the image
    // TODO: somehow make this dynamic based on loaded image size
    return {
      x: Math.max(Math.min(pos.x, 240), -width * this.getCurrentScale() * overflowBounds + window.innerWidth),
      y: Math.max(Math.min(pos.y, 0), -height * this.getCurrentScale() * overflowBounds + window.innerHeight)
    }
  }

  setHover(index?: number) {
    if (index) {
      const tooltip = {
        x: skillList[index].x,
        y: skillList[index].y,
        name: skillList[index].name,
        value: skillList[index].stats.map((skill) => skill.description).join(',')
      }

      const hoveredList = [...this.state.hoveredList]
      if (!this.props.toggles[index]) {
        const minPath = findShortestPath(this.props.toggles, index)

        minPath.forEach((pathIndex: any) => {
          hoveredList[pathIndex] = true
        })
      }
      this.setState({ tooltip, hoveredList })
    } else {
      this.setState({ tooltip: undefined, hoveredList: [...emptyHoverList] })
    }
  }

  setScale(stage: Konva.Stage, newScale: number) {
    if (width * newScale < window.innerWidth) {
      return
    }
    if (height * newScale < window.innerHeight) {
      return
    }
    const pointer = stage.getPointerPosition()
    const oldScale = stage.scaleX()

    this.setState({ currentScale: newScale })

    stage.scale({ x: newScale, y: newScale })

    if (pointer) {
      const mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale
      }

      const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale
      }
      stage.position(newPos)
    }
  }

  wheelFunc(e: any) {
    // stop default scrolling
    e.evt.preventDefault()

    const stage = e.target.getStage()
    const oldScale = stage.scaleX()

    // how to scale? Zoom in? Or zoom out?
    let direction = e.evt.deltaY > 0 ? -1 : 1

    // when we zoom on trackpad, e.evt.ctrlKey is true
    // in that case lets revert direction
    if (e.evt.ctrlKey) {
      direction = -direction
    }

    const newScale = Math.min(direction > 0 ? oldScale * scaleBy : oldScale / scaleBy, 1.5)
    this.setScale(stage, newScale)
  }

  render() {
    // TODO: make x and y dynamic based on the image
    return (
      <Stage
        ref={(node) => {
          this.stage = node
        }}
        width={window.innerWidth}
        height={window.innerHeight}
        scaleX={0.8}
        scaleY={0.8}
      >
        <Layer draggable x={-1500} y={-3500} dragBoundFunc={this.dragBound.bind(this)} onWheel={this.wheelFunc.bind(this)}>
          <TreeImage src="./tree.png" />
          <SkillTree
            toggles={this.props.toggles}
            searched={this.props.searched}
            toggleIndex={this.props.toggleIndex}
            setHover={this.setHover.bind(this)}
            hoveredList={this.state.hoveredList}
          ></SkillTree>
          {this.state?.tooltip && <ToolTip data={this.state.tooltip} currentScale={1 / this.getCurrentScale()} />}
        </Layer>
      </Stage>
    )
  }
}
export default CanvasTree
