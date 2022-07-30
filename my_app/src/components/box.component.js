import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Box extends Component {
  state = {
    number: 10,
    className: "btn btn-danger p-2",
  };
  constructor ({ num }) {
    super();
    this.state.number = num;
    this.state.className = "btn btn-danger";
    this.state = {
      number: num,
      className: "btn btn-danger",
    };
    //console.log(num);

  }
  // constructor(props) { //props holo ekta object //properties are passed in as an argument
  //   super(props);
  //   this.state.number = props.num;
  //   console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  //   console.log(props);
  //   console.log('++++++++++++++++++')
  //   const number = props.num;
  //   console.log(number);
  //   const name = props.name;
  //   console.log(number , name);

  // }

  increment = () => {
    const newNumber = this.state.number + 1;
    const newState = { number: newNumber, className: "btn btn-danger" };
    this.setState(newState);
  };

  decrement = () => {
    const number = this.state.number;
    if (number === 0) {
      const newClassName = "btn btn-secondary";
      const newState = { number: this.state.number, className: newClassName };
      this.setState(newState);
      //alert("you are at 0");
    } else {
      const newNumber = this.state.number - 1;
      const newState = { number: newNumber };
      this.setState(newState);
      const number = this.state.number;
    }
  };
  render() {
    return (
      <div>
        <br />
        <button
          onClick={this.decrement}
          type="button"
          class={this.state.className}
        >
          {" "}
          -{" "}
        </button>
        <span class="p-3">{this.state.number} </span>
        <button onClick={this.increment} type="button" class="btn btn-primary">
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default Box;
