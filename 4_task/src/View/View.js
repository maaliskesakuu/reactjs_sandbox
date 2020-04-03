import React from 'react';
import './View.css';

const View = props => {
  return (
    <div className="inputView">
      <h1>This is your input:</h1>
      <form className="formView">
        <label>First name:<p>{props.firstname}</p></label>
        <label>Last name:<p>{props.lastname}</p></label>
        <label>Phone number:<p>{props.phonenumber}</p></label>
        <label>Message:<p>{props.message}</p></label>
      </form>
    </div>
  )
}

export default View;