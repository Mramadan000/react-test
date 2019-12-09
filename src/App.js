import React, { Component } from "react";
import "./App.css";
import Child from "./Child";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'mizo',
        age: 32
      },
      {
        id: 2,
        name: 'aya',
        age: 28
      },
      {
        id: 3,
        name: 'sila',
        age: 3
      },
      {
        id: 4,
        name: 'asia',
        age: 1
      }
    ]
  };
  render() {
    return (
      <div>
        <Child passData={this.state.items} />
      </div>
    );
  }
}

export default App;
