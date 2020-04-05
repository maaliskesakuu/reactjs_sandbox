import React, { Component} from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      message: ''
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Form mychange={this.changeHandler} />
        <View firstname={this.state.firstname} lastname={this.state.lastname} phonenumber={this.state.phonenumber} message={this.state.message}/>
      </div>
    );  
  }
}

export default App;
