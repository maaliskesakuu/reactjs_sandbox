import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  };

  addHandler = () => {
    console.log('test');
    this.setState({ likes: this.state.likes + 1})
  };

  minusHandler = () => {
    console.log('Test');
    this.setState({ likes: this.state.likes - 1 })
  };

  resetHandler = () => {
    console.log('testing');
    this.setState({ likes: this.state.likes = 0 })
  };

  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add a like</button>
        <button onClick={this.minusHandler}>Remove a like</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }  
}

export default App;
