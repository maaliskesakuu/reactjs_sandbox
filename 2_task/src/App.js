import React from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>  
      <p>Hello, World!</p>
      <Person name='Margit' age='39'/>
      <Person name='Mira' age='13'/>
      <Person name='Minja' age='15'/>
      <Person name='Tanja' age='44'/>
      <Person name='Mikko' age='41'/>
    </div>
  );
};

export default App;
