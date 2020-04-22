// import React, { Component } from 'react';

// class Lecture extends Component {
//   state = { counter: 0 };

//   addHandler = () => this.setState({ counter: this.state.counter + 1 });

//   removeHandler = () => this.setState({ counter: this.state.counter - 1 });

//   resetHandler = () => this.setState({ counter: 0 });

//   render() {
//     return (
//       <div>
//         <h1>This is my votes: {this.state.counter}</h1>
//         <button onClick={this.addHandler}>Add one</button>
//         <button onClick={this.removeHandler}>Remove one</button>
//         <button onClick={this.resetHandler}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Lecture;

import React, { useState } from 'react';

const Button = ({ click, text, children}) => {
  return (
    <div>
      <button onClick={click}>{text} {children}</button>
    </div>
  );
}
const Lecture = () => {
  const [counter, setCounter] = useState(0);
  
  const addHandler = () => setCounter(counter + 1);
  const removeHandler = () => setCounter(counter - 1);
  const resetHandler = () => setCounter(0);

	return (
		<div>
      <h1>This is my votes: {counter}</h1>
      <Button click={addHandler} text="Add one">yay</Button> 
      <Button click={removeHandler} text="Remove one" />
      <Button click={resetHandler} text="Reset" />
		</div>
	);
};

export default Lecture;
