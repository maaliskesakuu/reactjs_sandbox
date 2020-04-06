import React from 'react';
import './View.css';

const View = props => {
  return (
    <div className="inputView">
      <h1>This is your input:</h1>
      <div className="formView">
        <div>First name:<p>{props.firstname}</p></div>
        <div>Last name:<p>{props.lastname}</p></div>
        <div>Phone number:<p>{props.phonenumber}</p></div>
        <div>Message:<p>{props.message}</p></div>
      </div>
    </div>
  )
}

export default View;