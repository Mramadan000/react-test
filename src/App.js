import React, { Component } from "react";
import "./App.css";
import Child from "./Child";

class App extends Component {
  state = {
    title: "Hello sila"
  };

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <Child address={this.state.title} />
      </div>
    );
  }
}

export default App;
