import './Checkbox.css'
import React from 'react'

interface CheckboxProps {
  toggle: () => void
  checked: boolean
}

export class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return (
      <div className="checkbox">
        <input checked={this.props.checked} onChange={() => this.props.toggle()} type="checkbox"></input>
        <label htmlFor="checbox">{this.props.children}</label>
      </div>
    )
  }
}

export default Checkbox
