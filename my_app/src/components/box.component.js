import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// class Component{
//   constructor(a){
//     this.props=a;
//   }
// }
class Box extends Component {
  state={
    className: "btn btn-danger",
  }
  // state = {
  //   number: 10,
  //   id: null,
  //   className: "btn btn-danger p-2",
  // };
  // constructor({ num, id, onDelete, onIncrement, onDecrement }) {
  //   super();

  //   this.state = {
  //     number: num,
  //     id: id,
  //     className: "btn btn-danger",
  //     onDelete: onDelete,
  //     onIncrement: onIncrement,
  //     onDecrement: onDecrement,
  //   };
  // }

  // increment = () => {
  //   const newNumber = this.state.number + 1;
  //   const newState = { number: newNumber, className: "btn btn-danger" };
  //   this.setState(newState);
  // };
  constructor(props){
    super(props);
  }
  increment = () => {
  
    this.props.onIncrement(this.props.id);
  };

  // decrement = () => {
  //   const number = this.state.number;
  //   if (number === 0) {
  //     const newClassName = "btn btn-secondary";
  //     const newState = { number: this.state.number, className: newClassName };
  //     this.setState(newState);
  //     //alert("you are at 0");
  //   } else {
  //     const newNumber = this.state.number - 1;
  //     const newState = { number: newNumber };
  //     this.setState(newState);
  //     const number = this.state.number;
  //   }
  // };
  decrement = () => {
    this.props.onDecrement(this.props.id);
  };
  delete = () => {
    const { id } = this.props;
    this.props.onDelete(id);
    //alert("deleteBox called");
    console.log("new id", id);
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
        <span class="p-3">{this.props.num} </span>
        <button onClick={this.increment} type="button" className="btn btn-primary p-2">
          {" "}
          +{" "}
        </button>
        <button className="btn btn-danger p-2 ms-2" onClick={this.delete}>
          delete
        </button>{" "}
        <br />
      </div>
    );
  }
}

export default Box;
