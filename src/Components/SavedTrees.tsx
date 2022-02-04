/* eslint-disable multiline-ternary */
import React, { Component } from 'react'
import './Sidebar.css'
import './SavedTrees.css'
import SavedTree from './SavedTree'

interface SavedTreesProps {
  loadTree: (bits: string) => void
  currentBits: string
}

interface TreeObject {
  id: string
  name: string
  bits: string
}

interface SavedTreesState {
  treeName: string
  trees: TreeObject[]
}

export class SavedTrees extends Component<SavedTreesProps, SavedTreesState> {
  constructor(props: SavedTreesProps) {
    super(props)

    this.state = {
      treeName: '',
      trees: []
    }
  }

  changeHandler(e: React.FormEvent) {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    this.setState({ treeName: target.value })
  }

  componentDidMount() {
    const trees = localStorage.getItem('trees')

    if (trees) {
      this.setState({ trees: JSON.parse(trees) })
    }
  }

  saveTreeHandler() {
    if (this.state.treeName === '') {
      alert("Name can't be empty")
      return
    }
    const trees = localStorage.getItem('trees')
    const name = this.state.treeName
    const bits = this.props.currentBits

    // Date.now() seems to be good enough as an unique ID for that use case, no?
    // Could be replaced by UUID if needed

    if (!trees) {
      localStorage.setItem('trees', JSON.stringify([{ id: Date.now(), name, bits }]))
    } else {
      localStorage.setItem('trees', JSON.stringify([...JSON.parse(trees), { id: Date.now(), name, bits }]))
    }

    this.setState({ trees: JSON.parse(localStorage.getItem('trees')!), treeName: '' })
  }

  deleteTreeHandler(id: string) {
    const trees = localStorage.getItem('trees')

    if (trees) {
      const parsed: TreeObject[] = JSON.parse(trees)
      const filtered = parsed.filter((tree) => {
        return tree.id !== id
      })
      this.setState({ trees: filtered })
      localStorage.setItem('trees', JSON.stringify(filtered))
    }
  }

  render() {
    return (
      <div className="sidebar">
        <h3>Saved trees</h3>
        <div className="saveBox">
          <input required value={this.state.treeName} onChange={(e) => this.changeHandler(e)} placeholder="Tree Name"></input>
          <button onClick={() => this.saveTreeHandler()}>Save Current Tree</button>
        </div>
        <div className="trees">
          {this.state.trees.length > 0 ? (
            this.state.trees.map((tree) => {
              return (
                <SavedTree
                  loadTree={(bits: string) => this.props.loadTree(bits)}
                  id={tree.id}
                  deleteTree={(id: string) => this.deleteTreeHandler(id)}
                  key={tree.id}
                  name={tree.name}
                  treeBits={tree.bits}
                  currentBits={this.props.currentBits}
                />
              )
            })
          ) : (
            <h2>No saved Trees</h2>
          )}
        </div>
      </div>
    )
  }
}

export default SavedTrees
