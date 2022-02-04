/* eslint-disable multiline-ternary */
import React from 'react'
import './App.css'
import CanvasTree from './Components/Canvas'
import Sidebar from './Components/Sidebar'
import Searchbar from './Components/Searchbar'
import { findShortestPath, disconnectedSearch, parseEitherEncodedTree, encodePoeCompatibleTree } from './utils'
import { skillList } from './tree'
import Checkbox from './Components/Checkbox'
import SavedTrees from './Components/SavedTrees'

interface AppState {
  toggles: boolean[]
  searched: boolean[]
  history: boolean[][]
  redoHistory: boolean[][]
  displayLen: boolean
  showSavedTrees: boolean
}

const _history: boolean[][] = []
const _redoHistory: boolean[][] = []

class App extends React.Component<any, AppState> {
  state = {
    toggles: skillList.map((skill) => false),
    searched: skillList.map((skill) => false),
    history: _history,
    redoHistory: _redoHistory,
    displayLen: false,
    showSavedTrees: false
  }

  componentDidMount() {
    if (window.location.hash && window.location.hash.length > 1) {
      try {
        const bitList = window.location.hash.slice(1)
        this.setState({ toggles: parseEitherEncodedTree(bitList) })
      } catch (err) {
        console.error('failed to parse build', err)
      }
    }

    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  setUrl(toggles: boolean[]) {
    window.history.replaceState(null, '', '#' + encodePoeCompatibleTree(toggles))
  }

  toggleIndex(index: number) {
    let toggles = [...this.state.toggles]
    if (!this.state.toggles[index]) {
      const minPath = findShortestPath(toggles, index)

      minPath.forEach((pathIndex: any) => {
        toggles[pathIndex] = true
      })
    } else {
      toggles[index] = !toggles[index]

      toggles = disconnectedSearch(toggles)
    }

    const history = [...this.state.history]
    history.push([...this.state.toggles])

    const redoHistory: boolean[][] = []

    this.setUrl(toggles)
    this.setState({ toggles, history, redoHistory })
  }

  undo() {
    const history = [...this.state.history]
    const toggles = history.pop()

    if (toggles) {
      const redoHistory = [...this.state.redoHistory]
      redoHistory.push([...this.state.toggles])

      this.setUrl(toggles)
      this.setState({ toggles, history, redoHistory })
    }
  }

  redo() {
    const redoHistory = [...this.state.redoHistory]
    const toggles = redoHistory.pop()

    if (toggles) {
      const history = [...this.state.history]
      history.push([...this.state.toggles])

      this.setUrl(toggles)
      this.setState({ toggles, history, redoHistory })
    }
  }

  search(e: any) {
    const searched = skillList.map((skill) => false)
    if (e.target.value === '' || e.target.value === ' ') {
      this.setState({ searched })
      return
    }
    const regEx = new RegExp(e.target.value, 'i')

    skillList.forEach((skill, index) => {
      if (skill.name.match(regEx)) {
        searched[index] = true
      } else {
        skill.stats.forEach((stat) => {
          if (stat.description.match(regEx)) {
            searched[index] = true
          }
        })
      }
    })

    this.setState({ searched })
  }

  handleKeyPress = (event: any) => {
    if (event.ctrlKey && event.key === 'z') {
      this.undo()
    }
    if (event.ctrlKey && event.key === 'y') {
      this.redo()
    }
  }

  toggleLenDisplay = () => {
    this.setState({ displayLen: !this.state.displayLen })
  }

  toggleSavedTray = () => {
    this.setState({ showSavedTrees: !this.state.showSavedTrees })
  }

  loadTreeHandler = (bits: string) => {
    const bitList = bits.slice(1)
    this.setState({ toggles: parseEitherEncodedTree(bitList) })
    this.setUrl(parseEitherEncodedTree(bitList))
  }

  render() {
    return (
      <div className="App">
        {this.state.showSavedTrees ? (
          <SavedTrees currentBits={'#' + encodePoeCompatibleTree(this.state.toggles)} loadTree={(bits) => this.loadTreeHandler(bits)} />
        ) : (
          <Sidebar toggles={this.state.toggles}></Sidebar>
        )}
        <Searchbar setSearch={this.search.bind(this)}></Searchbar>
        <div className="checkboxes">
          <Checkbox toggle={this.toggleLenDisplay} checked={this.state.displayLen}>
            Display path length
          </Checkbox>
          <Checkbox toggle={this.toggleSavedTray} checked={this.state.showSavedTrees}>
            Show saved trees
          </Checkbox>
        </div>
        <CanvasTree
          toggles={this.state.toggles}
          searched={this.state.searched}
          toggleIndex={this.toggleIndex.bind(this)}
          displayLen={this.state.displayLen}
        ></CanvasTree>
      </div>
    )
  }
}

export default App
