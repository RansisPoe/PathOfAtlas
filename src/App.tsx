import _ from "lodash";
import React from "react";
import "./App.css";
import CanvasTree from "./Components/Canvas";
import Sidebar from "./Components/Sidebar";
import { skillList, skillGraph } from "./utils";

interface AppState {
  toggles: boolean[];
}

class App extends React.Component<any, AppState> {
  state = {
    toggles: skillList.map((skill) => false),
  };

  toggleIndex(index: number) {
    const paths: any[] = [];
    if (!this.state.toggles[index]) {
      // toggling it to enabled, find minPath
      paths.push(skillGraph.path("root", index + ""));
      this.state.toggles.forEach((toggle, subIndex) => {
        if (toggle) {
          paths.push(skillGraph.path("root", subIndex + ""));
        }
      });

      const minPath = _.minBy(paths, "length");

      const toggles = [...this.state.toggles];
      minPath.forEach((pathIndex: any) => {
        toggles[pathIndex] = !toggles[pathIndex];
      });
      this.setState({ toggles });
    } else {
      const toggles = [...this.state.toggles];
      toggles[index] = !toggles[index];
      this.state.toggles.forEach((toggle, subIndex) => {
        if (subIndex < 5) return;
        if (toggle) {
          const skillNode = skillList[subIndex];
          const isConnected = _.sum(
            skillNode.neighbors.map((neighbor) => toggles[neighbor])
          );
          if (!isConnected) {
            toggles[subIndex] = !toggles[subIndex];
          }
        }
      });
      this.setState({ toggles });
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
