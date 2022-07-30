import React, { Component } from "react";
//import Box from './components/box.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./box.component.js";
class App extends Component {
  state = {
    boxes: [1,5,7,9],
  };
  createBox = () => {
    const { boxes } = this.state;
    this.setState({ boxes: [...boxes, 1] }); //spread operator
  };
  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.createBox}>Add New</button> <br/>
        
        
        {this.state.boxes.map((number, index) => (
          <div key={number}>
            <Box num={number}/>
          </div>
          
        ))}
      </div>
    );
  }
}

export default App;
