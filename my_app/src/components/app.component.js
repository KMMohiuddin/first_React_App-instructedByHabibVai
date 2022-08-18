import React, { Component } from "react";
//import Box from './components/box.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./box.component.js";
class App extends Component {
  state = {
    boxes: [],
  };
  createBox = () => {
    const { boxes } = this.state;
    this.setState({ boxes: [...boxes, 0] }); //spread operator
  };
  onDelete = id => {
    function filterArray(number, index) {
      if (id === index) return false;
      else return true;
    }
    const updateBoxes = this.state.boxes.filter(filterArray);
    this.setState({ boxes: updateBoxes });
    
  };
  onIncrement = id => {
    const arr = [...this.state.boxes];
    arr[id]++;
    this.setState({ boxes: arr });
    console.log("new id", id);
  };
  onDecrement = id => {
    const arr = [...this.state.boxes];
    arr[id]--;
    this.setState({ boxes: arr });
    console.log("new id", id);
  };
  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.createBox}>
          Add New
        </button>{" "}
        <br />
        {this.state.boxes.map((number, index) => (
          <div key={index}>
            <Box
              num={number}
              id={index}
              onDelete={this.onDelete}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
