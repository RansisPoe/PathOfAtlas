import React from "react";
import "./App.css";
import CanvasTree from "./Components/Canvas";
import Sidebar from "./Components/Sidebar";
import { skillList } from "./utils";

interface AppState {
  toggles: boolean[];
}

class App extends React.Component<any, AppState> {
  state = {
    toggles: skillList.map((skill) => false),
  };

  toggleIndex(index: number) {
    const toggles = [...this.state.toggles];
    toggles[index] = !toggles[index];

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
