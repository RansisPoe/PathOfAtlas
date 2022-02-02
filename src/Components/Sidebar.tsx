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
    const passives: { [key: string]: { amount: number; modGroup: string } } = {}
    this.props.toggles.forEach((toggle, index) => {
      if (!toggle) return
      const skill = skillList[index]

      skill.stats.forEach((mod) => {
        passives[mod.modType] = { amount: (passives[mod.modType]?.amount || 0) + (mod.amount || 0), modGroup: mod.modGroup }
      })
    })

    return _(passives)
      .map((obj, modType) => {
        return { ...obj, modType }
      })
      .sortBy('modType')
      .groupBy('modGroup')
      .value()
  }

  render() {
    const passives = this.passives()
    return (
      <div className="sidebar">
        <h3>{_.sum(this.props.toggles)} / 128</h3>
        <CopyToClipboard
          text={window.location.href}
          onCopy={() => {
            navigator.clipboard.writeText(window.location.href)
            this.setState({ copied: true })
            window.setTimeout(() => {
              this.setState({ copied: false })
            }, 2000)
          }}
          options={{ format: 'margin-left: 5px' }}
        >
          <button>Copy build to clipboard</button>
        </CopyToClipboard>

        {this.state?.copied ? <span style={{ color: 'red' }}> Copied.</span> : null}
        <div>
          {Object.keys(passives).map((modGroup) => (
            <div className="statGroup" key={modGroup}>
              <h3 key={modGroup}>{modGroup}</h3>
              {passives[modGroup].map(({ modType, amount }) => (
                <div className="stat" key={modType}>
                  {modType.replace('$AMOUNT', `${amount}`)}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="disclaimer">This product isn't affiliated with or endorsed by Grinding Gear Games in any way.</div>
      </div>
    )
  }
}

export default Sidebar
