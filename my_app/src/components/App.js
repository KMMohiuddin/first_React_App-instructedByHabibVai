
import React,{ Component } from 'react';
//import Box from './components/box.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './box.js';
                                                            /*setState(a){
                                                              this.state = a;
                                                              this.render();
                                                            }*/

class App extends Component {

  render() {
    return (                                                        
   <div>
    <h1> First react app </h1>
      <Box />
      <Box />
    </div>

    ); 
  }
}


export default App;
