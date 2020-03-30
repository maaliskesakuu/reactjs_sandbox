import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  };

  addHandler = () => {
    this.setState({ likes: this.state.likes + 1})
  };

  minusHandler = () => {
    this.setState({ likes: this.state.likes - 1 })
  };

  resetHandler = () => {
    if (this.state.likes > 0) {
      this.setState({likes: this.state.likes - this.state.likes})
    } else if (this.state.likes < 0) {
      this.setState({likes: this.state.likes - this.state.likes})
    }
  };

  render() {
    return (
      <div>
        <h1 className={this.state.likes === 0 ? "likes" :this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>Total likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add a like</button>
        <button onClick={this.minusHandler}>Remove a like</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }  
}

export default App;
