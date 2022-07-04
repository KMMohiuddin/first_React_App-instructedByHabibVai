
import React,{ Component } from 'react';

class App extends Component {
  constructor() { 
    super(); 
  }
  render() {
    return (
      <h1>This is APP.js File.</h1>
    );
  }
}
const obj = new App();
obj.render();

export default App;
