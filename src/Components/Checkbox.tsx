import './Checkbox.css'
import React from 'react'

interface CheckboxProps {
  toggle: () => void
  displayLen: boolean
}

export class Checkbox extends React.Component<CheckboxProps> {
  render() {
    return (
      <div className="checkbox">
        <input checked={this.props.displayLen} onChange={() => this.props.toggle()} type="checkbox"></input>
        <label htmlFor="checbox">Display path length</label>
      </div>
    )
  }
}

export default Checkbox
