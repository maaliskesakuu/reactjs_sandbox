import React from 'react';
import './Form.css'

const Form = (props) => {
  return (
    <div className="form">
      <form>
        <label htmlFor="firstname">First name
          <input type="text" name="firstname" id="firstname" onChange={props.onchange}/>
        </label><br />
        <label htmlFor="lastname">Last name
          <input type="text" name="lastname" id="lastname" />
        </label>< br />
        <label htmlFor="phonenumber">Phone number
          <input type="number" name="phonenumber" id="phonenumber" />
        </label><br />
        <label htmlFor="message">Message
          <textarea name="message" id="message"></textarea>
        </label><br />
      </form>
    </div>
  )
}

export default Form;