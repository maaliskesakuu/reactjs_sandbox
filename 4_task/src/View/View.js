import React from 'react';
import './View.css';

const View = (props) => {
  return (
    <div className="inputView">
      <h1>This is your input:</h1>
      <form className="formView">
        <p><label>First name:</label>{props.firstname}</p>
        <p><label>Last name:</label>{props.lastname}</p>
        <p><label>Phone number:</label>{props.phonenumber}</p>
        <p><label>Message:</label>{props.message}</p>
      </form>
    </div>
  )
}

export default View;