import React from 'react'
import SkillCircle from './SkillCircle'
import SkillLine from './SkillLine'
import { skillList } from '../tree'
import { Group } from 'react-konva'

interface SkillTreeProps {
  toggles: boolean[]
  hoveredList: boolean[]
  toggleIndex: any
  setHover: any
}

class SkillTree extends React.Component<SkillTreeProps> {
  toggleIndex(index: number) {
    this.props.toggleIndex(index)
  }

  render() {
    return (
      <Group>
        {this.props.toggles.map((toggle, index) => {
          return (
            <Group key={`g${index}`}>
              <SkillCircle
                key={index}
                index={index}
                x={skillList[index].x}
                y={skillList[index].y}
                name={skillList[index].name}
                value={skillList[index].stats.join(',')}
                toggled={toggle}
                onClick={this.toggleIndex.bind(this, index)}
                setHover={this.props.setHover}
              ></SkillCircle>
              {skillList[index].neighbors.map((neighbor) => (
                <SkillLine
                  key={`l${index}-${neighbor}`}
                  x={skillList[index].x}
                  y={skillList[index].y}
                  neighborX={skillList[neighbor].x}
                  neighborY={skillList[neighbor].y}
                  toggled={toggle && this.props.toggles[neighbor]}
                  hovered={this.props.hoveredList[index] && this.props.hoveredList[neighbor]}
                />
              ))}
            </Group>
          )
        })}
      </Group>
    )
  }
}

export default SkillTree
