import React, { Component} from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      message: ''
    };
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <Form />
        <form>
          <h2>Hello {this.state.firstname} {this.state.lastname}</h2>          
          <input
            type="text"
            name="firstname"
            onChange={this.changeHandler} />
          <input
            type="text"
            name="lastname"
            onChange={this.changeHandler} />
        </form>
        <View />
      </div>
    );  
  }
}

export default App;
