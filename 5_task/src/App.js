import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    let nextActive = undefined;

    do {
      nextActive = getRandomInteger(1, 4);
    } while (nextActive === this.state.current)

    this.setState({
      current: nextActive,
    });

    this.timer = setTimeout(this.next, this.pace);
    console.log(this.state.current);
  };

  clickHandler = (circleID) => {
    console.log('Clicked', circleID);

    this.setState({
      score: this.state.score + 1
    });
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () =>
    clearTimeout(this.timer);

  render() {
    return (
      <div className="speedgame">
        <h1>Speedgame</h1>
        <p>Your score is {this.state.score}</p>
        <main>
          <Circle active={this.state.current === 1} buttonColor='#fcff22' myClick={this.clickHandler.bind(this, 1)}/>
          <Circle active={this.state.current === 2} buttonColor='#f1305e' myClick={this.clickHandler.bind(this, 2)}/>
          <Circle active={this.state.current === 3} buttonColor='#60ff22' myClick={this.clickHandler.bind(this, 3)}/>
          <Circle active={this.state.current === 4} buttonColor='#2287ff' myClick={this.clickHandler.bind(this, 4)}/>          
        </main>
        <button onClick={this.startHandler}>Start game</button>
        <button onClick={this.endHandler}>End game</button>        
      </div>
    );
  }
}

export default App;
