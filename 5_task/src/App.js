import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

class App extends Component {
  state = {
    score: 0,
  };

  clickHandler = (circleID) => {
    console.log('Clicked ', circleID);

    this.setState({
      score: this.state.score + 1
    })
  }

  render() {
    return (
      <div className="speedgame">
        <h1>Speedgame</h1>
        <p>Your score is {this.state.score}</p>
        <main>
          <Circle myClick={this.clickHandler.bind(this, 1)}/>
          <Circle myClick={this.clickHandler.bind(this, 2)}/>
          <Circle myClick={this.clickHandler.bind(this, 3)}/>
          <Circle myClick={this.clickHandler.bind(this, 4)}/>          
        </main>
        <button>Start game</button>
        <button>End game</button>        
      </div>
    );
  }
}

export default App;
