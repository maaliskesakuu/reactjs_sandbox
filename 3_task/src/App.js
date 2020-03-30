import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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
        <Header />
        <h2 className={this.state.likes === 0 ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>Total likes: {this.state.likes}</h2>
        <main>
        <button className="btn" onClick={this.addHandler}>Add a like</button>
        <button className="btn" onClick={this.minusHandler}>Remove a like</button>
        <button className="btn" onClick={this.resetHandler}>Reset</button>
        </main>
        <Footer />
      </div>
    );
  }  
}

export default App;
