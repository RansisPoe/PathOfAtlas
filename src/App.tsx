import _ from "lodash";
import React from "react";
import "./App.css";
import CanvasTree from "./Components/Canvas";
import Sidebar from "./Components/Sidebar";
import { skillList, skillGraph } from "./utils";

interface AppState {
  toggles: boolean[];
  history: boolean[][];
  redoHistory: boolean[][];
}

const _history: boolean[][] = [];
const _redoHistory: boolean[][] = [];

class App extends React.Component<any, AppState> {
  state = {
    toggles: skillList.map((skill) => false),
    history: _history,
    redoHistory: _redoHistory,
  };

  componentDidMount() {
    const toggles = [...this.state.toggles];
    if (window.location.hash && window.location.hash.length > 1) {
      window.location.hash
        .slice(1)
        .split(",")
        .forEach((elem, index) => (toggles[index] = elem === "1"));

      this.setState({ toggles });
    }

    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  setUrl(toggles: boolean[]) {
    window.history.replaceState(
      null,
      "",
      "#" + toggles.map((toggle) => (toggle ? 1 : 0)).join(",")
    );
  }

  toggleIndex(index: number) {
    const toggles = [...this.state.toggles];
    if (!this.state.toggles[index]) {
      const paths: any[] = [];

      // toggling it to enabled, find minPath
      paths.push(skillGraph.path("root", index + ""));
      toggles.forEach((toggle, subIndex) => {
        if (toggle) {
          paths.push(skillGraph.path(subIndex + "", index + ""));
        }
      });

      const minPath = _.minBy(paths, "length");

      minPath.forEach((pathIndex: any) => {
        toggles[pathIndex] = true;
      });
    } else {
      toggles[index] = !toggles[index];
    }

    const history = [...this.state.history];
    history.push([...this.state.toggles]);

    const redoHistory: boolean[][] = [];

    this.setUrl(toggles);
    this.setState({ toggles, history, redoHistory });
  }

  undo() {
    const history = [...this.state.history];
    const toggles = history.pop();

    if (toggles) {
      const redoHistory = [...this.state.redoHistory];
      redoHistory.push([...this.state.toggles]);

      this.setUrl(toggles);
      this.setState({ toggles, history, redoHistory });
    }
  }

  redo() {
    const redoHistory = [...this.state.redoHistory];
    const toggles = redoHistory.pop();

    if (toggles) {
      const history = [...this.state.history];
      history.push([...this.state.toggles]);

      this.setUrl(toggles);
      this.setState({ toggles, history, redoHistory });
    }
  }
  handleKeyPress(event: any) {
    if (event.ctrlKey && event.key === "z") {
      this.undo();
    }
    if (event.ctrlKey && event.key === "y") {
      this.redo();
    }
  }

  resetToggles() {
    this.setState({ toggles: skillList.map((skill) => false) });
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          toggles={this.state.toggles}
          resetToggles={this.resetToggles.bind(this)}
        ></Sidebar>
        <CanvasTree
          toggles={this.state.toggles}
          toggleIndex={this.toggleIndex.bind(this)}
        ></CanvasTree>
      </div>
    );
  }
}

export default App;
