import React, { Component } from 'react'
import './Sidebar'

interface SavedTreesProps {
  onClick: () => void
}

export class SavedTrees extends Component<SavedTreesProps> {
  render() {
    return (
      <div className="trees">
        <button onClick={() => this.props.onClick()}>aaaaaaaaaaaa</button>
      </div>
    )
  }
}

export default SavedTrees
