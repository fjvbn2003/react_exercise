import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state= {
    ninjas :[
      {name:"Kim", age:"25", belt:"black", id:1},
      {name:"Lee", age:"23", belt:"blue", id:2},
      {name:"Park", age:"24", belt:"red", id:3}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>

      </div>
    );
  }
}

export default App;
