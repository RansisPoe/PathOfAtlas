import './Searchbar.css'
import React from 'react'

interface SearchbarProps {
  setSearch: any
}

class Searchbar extends React.Component<SearchbarProps> {
  render() {
    return (
      <div className="searchbar">
        <input placeholder="Search" onInput={this.props.setSearch}></input>
      </div>
    )
  }
}

export default Searchbar
