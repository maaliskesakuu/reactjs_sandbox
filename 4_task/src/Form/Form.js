import React from 'react';
import './Form.css'

const Form = props => {
  return (
    <div className="form">
      <form>
        {props.children}
        <label htmlFor="firstname">First name</label>
          <input type="text" name="firstname" id="firstname" onChange={props.mychange}/>
        <br />
        <label htmlFor="lastname">Last name</label>
          <input type="text" name="lastname" id="lastname" onChange={props.mychange} />
        < br />
        <label htmlFor="phonenumber">Phone number</label>
          <input type="tel" name="phonenumber" id="phonenumber" onChange={props.mychange} />
        <br />
        <label htmlFor="message">Message</label>
          <textarea name="message" id="message" onChange={props.mychange} rows="5"></textarea>
        <br />
      </form>
    </div>
  )
}

export default Form;