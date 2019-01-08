import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state= {
    ninjas :[
      {name:"Kim", age:"25", belt:"black", id:1},
      {name:"Lee", age:"23", belt:"blue", id:2},
      {name:"Park", age:"24", belt:"red", id:3}
    ]
  }
  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja= (id) =>{
    console.log("you clicked the deleteNinja function ", id)
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
