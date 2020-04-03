import React from 'react';
import './Form.css'

const Form = props => {
  return (
    <div className="form">
      <form>
        <h1>{props.children}</h1>
        <label htmlFor="firstname">First name
          <input type="text" name="firstname" id="firstname" onChange={props.mychange}/>
        </label><br />
        <label htmlFor="lastname">Last name
          <input type="text" name="lastname" id="lastname" onChange={props.mychange} />
        </label>< br />
        <label htmlFor="phonenumber">Phone number
          <input type="tel" name="phonenumber" id="phonenumber" onChange={props.mychange} />
        </label><br />
        <label htmlFor="message">Message
          <textarea name="message" id="message" onChange={props.mychange} rows="5"></textarea>
        </label><br />
      </form>
    </div>
  )
}

export default Form;