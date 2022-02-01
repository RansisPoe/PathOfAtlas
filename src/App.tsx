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

  componentDidMount() {
    const toggles = [...this.state.toggles];
    if (window.location.hash && window.location.hash.length > 1) {
      window.location.hash
        .slice(1)
        .split(",")
        .forEach((elem, index) => (toggles[index] = elem === "1"));

      this.setState({ toggles });
    }
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
      console.log("minPath", minPath);

      minPath.forEach((pathIndex: any) => {
        toggles[pathIndex] = true;
      });
    } else {
      toggles[index] = !toggles[index];
    }
    window.history.replaceState(
      null,
      "",
      "#" + toggles.map((toggle) => (toggle ? 1 : 0)).join(",")
    );
    this.setState({ toggles });
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
