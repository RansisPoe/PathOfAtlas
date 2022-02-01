import './Sidebar.css'
import React from 'react'
import { skillList } from '../utils'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import _ from 'lodash'

interface SidebarProps {
  toggles: boolean[]
  resetToggles: any
}

interface SidebarState {
  copied: boolean
}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
  passives() {
    const passives: { [key: string]: number } = {}
    this.props.toggles.forEach((toggle, index) => {
      if (!toggle) return
      const skill = skillList[index]

      skill.mods.forEach((mod) => {
        passives[mod.modType] = (passives[mod.modType] || 0) + mod.amount
      })
    })

    return _(passives)
      .map((val, key) => [key, val])
      .sortBy([0])
      .value()
  }

  render() {
    return (
      <div className="sidebar">
        <h3>{_.sum(this.props.toggles)} / 132</h3>
        <button
          onClick={() => {
            if (window.confirm('Are you sure you wish to reset your entire tree?')) {
              this.props.resetToggles()
            }
          }}
        >
          Reset all points
        </button>
        <CopyToClipboard
          text={window.location + ''}
          onCopy={() => {
            this.setState({ copied: true })
            window.setTimeout(() => {
              this.setState({ copied: false })
            }, 2000)
          }}
        >
          <button>Copy build to clipboard</button>
        </CopyToClipboard>

        {this.state?.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        <h3>Total Stats</h3>
        <div>
          {this.passives().map(([modType, amount]) => (
            <div key={modType}>
              {modType}: <span>+{amount}%</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Sidebar
