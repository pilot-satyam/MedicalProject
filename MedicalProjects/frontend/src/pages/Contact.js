import React from 'react'
import Base from "../Components/Base";
function Contact() {

  return (
    
<div>
  <Base >
<h2 className="common-heading d-flex align-items-center justify-content-center">Contact page</h2>



<div className="container col-4 d-flex justify-content-center">
  <div className="contact-form">
    <form 
      action="https://formspree.io/f/myyvrrwa"
      method="POST"
      className="contact-inputs">
      <input
        type="text"
        placeholder="username"
        name="username"
        required
        autoComplete="off"
      />
      <br/>
      <input
        type="email"
        name="Email"
        placeholder="Email"
        autoComplete="off"
        required
        className='mt-4'
      />
      <br/>
      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        placeholder="Enter you message"
        className='mt-4'></textarea>
      <br/>
      <input className ="d-flex align-items-center justify-content-center"type="submit" value="send" />
    </form>
  </div>
</div>
</Base>
</div>
  )
}

export default Contact

