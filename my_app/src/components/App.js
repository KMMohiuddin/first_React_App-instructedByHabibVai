
import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
                                                            /*setState(a){
                                                              this.state = a;
                                                              this.render();
                                                            }*/

class App extends Component {
  
                                                            /*
                                                            constructor() { 
                                                              super(); 
                                                            }
                                                            */

  state = {
    number: 4 ,
    className: 'btn btn-danger'
  };

  increment = () => {
    const newNumber = this.state.number + 1;
    const newState = {number: newNumber};
    this.setState(newState);
                                                            // this.state.number = this.state.number + 1 ;
                                                            // console.log(this.state.number);
                                                            // const x = { number: this.state.number };
                                                            //this.setState(x);
  }
  decrement = () => {
                                                            // dynamically update the button if number is less than 0;    
    const number = this.state.number;
    if (number === 0) {
         
          const newClassName = "btn btn-secondary";
          const newState = {number: this.state.number, className: newClassName};
          this.setState(newState);
          alert('you are at 0');
    } else {
      const newClassName = "btn btn-danger";
          const newNumber = this.state.number - 1;
          const newState = {number: newNumber, className: newClassName};
          this.setState(newState);
          const number = this.state.number;
    }
  }
  render() {
    return (                                                        
                                                                  /* <React.Fragment>
                                                                  <h1>This is from APP.js File.</h1>
                                                                  <button> click 1</button>
                                                                  </React.Fragment> */
                                                             
          <div> 
            <h1> First react app </h1>
            <button onClick={this.decrement} type="button" class={this.state.className}> - </button>
            <span class="p-3">{this.state.number} </span>
            <button onClick={this.increment} type="button" class="btn btn-success"> + </button>
            
          </div>

    );
  }
}
const obj = new App();
obj.render();

export default App;
