import React, { Component} from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <View />
      </div>
    );  
  }
}

export default App;
