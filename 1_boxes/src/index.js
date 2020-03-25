import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props) {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

const app = (
  <div>
    <Person name="Kaisa" title="CEO" age="35"/>
    <Person name="Kati" title="developer" age="38"/>
    <Person name="Maisa" title="designer" age="45"/>
  </div>
)

ReactDOM.render(app, document.querySelector("#root"));
