import React, { Component } from "react";
//import Box from './components/box.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./box.js";
class App extends Component {
  state = {
    boxes: [1, 2, 3, 4, 5],
  };
  render() {
    return (
      <div>
        <h1>23-7-2022</h1>
        {this.state.boxes.map(() => {
          return <Box />;
        })}
      </div>
    );
  }
}

export default App;
