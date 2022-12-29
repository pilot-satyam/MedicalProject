import React from 'react';
import Base from "../Components/Base";
import '../Style/Global.css';
// import '../Style/placeholderTop.css';
function Contact() {

  return (
    
<div>
  <Base >
  
<h2 className="common-heading d-flex align-items-center justify-content-center mt-5">Contact page &nbsp;
  <i style={{fontSize:"24px"}} className='far'>&#xf086;</i>
</h2>



<div className="container col-4 d-flex align-items-center justify-content-center">
  <div className="contact-form">
    <form 
      action="https://formspree.io/f/myyvrrwa"
      method="POST"
      className="contact-inputs">

    <div className="user-input-wrp">   
      <input
        type="text"
        name="username"
        required
        autoComplete="off"
        className='mt-3'
      />
         <span className="floating-label">UserName</span>
    </div>

    <div className="user-input-wrp">

      <input
        type="email"
        name="Email"
        autoComplete="off"
        required
        className='mt-3'
      />
      <span className="floating-label">Email</span>
    </div>
    

    <div className="user-input-wrp">
      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        className='mt-3'>
        
      </textarea>
      <span className="floating-label">Enter Text</span>
    </div>

      <div className="text-center">
        <button className ="button"type="submit" value="send" >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
</Base>
</div>
  )
}

export default Contact


