import React from 'react';
import './Form.css'

const Form = () =>{
  return (
    <div>
      <label htmlFor="firstName">First name</label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="lastName">Last name</label>
      <input type="text" name="lastName" id="lastName" />
      <label htmlFor="phoneNumber">Phone number</label>
      <input type="number" name="phoneNumber" id="phoneNumber" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" ></textarea>
    </div>
  )
}

export default Form;