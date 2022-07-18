
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
    number: 10
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
    if (number === 0) {
          alert('you are at 0');
    } else {
          const newNumber = this.state.number - 1;
          const newState = {number: newNumber};
          this.setState(newState);
          const number = this.state.number;
    }
  }
  render() {
    return (
                                                            //<h1>This is from APP.js File.</h1>
                                                              /*
                                                                  <React.Fragment>
                                                                  <h1>This is from APP.js File.</h1>
                                                                  <button> click 1</button>
                                                                  </React.Fragment>
                                                              */
          <div> 
            <h1> hurrah </h1>
            <button onClick={this.decrement} type="button" class="btn btn-danger"> -</button>
            <h1>{this.state.number}</h1>
            <button onClick={this.increment} type="button" class="btn btn-success"> +</button>
            <br></br>
          </div>

    );
  }
}
const obj = new App();
obj.render();

export default App;
