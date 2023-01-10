import React from 'react'
import Base from "../Components/Base";
function Address() {
  return (
    <div className='mt-5'>
    <Base>
    
        <h2 className='common-heading d-flex align-items-center justify-content-center'>Address &nbsp;
        <i style={{fontSize:'24px'}} className='fas'>&#xf3c5;</i>
        </h2>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.678167433704!2d73.73566711371699!3d18.588542671946087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe789036745%3A0x5cec70e9d75d43db!2sPersistent%20Systems!5e0!3m2!1sen!2sin!4v1671006525096!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
  </Base>
</div>
  )
}

export default Address
