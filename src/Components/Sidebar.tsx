import './Sidebar.css'
import React from 'react'
import { skillList } from '../tree'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import _ from 'lodash'

interface SidebarProps {
  toggles: boolean[]
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

      skill.stats.forEach((mod) => {
        if (mod.amount) {
          passives[mod.modType] = (passives[mod.modType] || 0) + mod.amount
        }
      })
    })

    return _(passives)
      .map((amount, modType) => {
        return { modType, amount }
      })
      .sortBy('modType')
      .value()
  }

  render() {
    return (
      <div className="sidebar">
        <h3>{_.sum(this.props.toggles)} / 132</h3>
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
          {this.passives().map(({ modType, amount }) => (
            <div className="stat" key={modType}>
              {modType.replace('$AMOUNT', `${amount}%`)}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Sidebar
