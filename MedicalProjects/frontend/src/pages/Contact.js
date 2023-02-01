import React from 'react';
import Base from "../Components/Base";
import '../Style/Global.css';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Button, Card,CardHeader,Container, FormGroup,CardBody} from 'reactstrap'
import Form from 'react-bootstrap/Form';
import userContext from '../context/userContext';

const Contact=()=>{



  return (
    
<>
  <Base >

{/* <div className='contact'>
<h1 className="common-heading d-flex align-items-center justify-content-center mt-5">Contact page &nbsp;
  <i style={{fontSize:"24px"}} className='far'>&#xf086;</i>
</h1>



<div className="container col-4 d-flex align-items-center justify-content-center">
 
  <div className="contact-form form-container" style={{ width: "40%", margin: "0 auto", textAlign: "center" }}>
    <form 
      action="https://formspree.io/f/myyvrrwa"
      method="POST"
      className="contact-inputs form">

    <div className="user-input-wrp">  
    <label className="floating-label">UserName</label> 
      <input
        type="text"
        name="username"
        required
        autoComplete="off"
        className='mt-3'
      />
        
    </div>

    <div className="user-input-wrp">
      <label className="floating-label">Email</label>
      <input
        type="email"
        name="Email"
        autoComplete="off"
        required
        className='mt-3'
      />
     
    </div>
    

    <div className="user-input-wrp">
      <label className="floating-label">Enter Text</label>
      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        className='mt-3'>
        
      </textarea>
      
    </div>

      <div className="text-center">
        <button className ="button mb-5"type="submit" value="send" >
          Submit
        </button>
      </div>
    </form>



  </div>
</div> */}



{/* </div> */}
 <CardHeader className='mt-4 formStyle'>
 <h1 className="common-heading d-flex align-items-center justify-content-center mt-5">Contact Page &nbsp;
  <i style={{fontSize:"24px"}} className='far'>&#xf086;</i>
</h1>
                </CardHeader>
<CardBody className='formStyle card-body'>
 
                    <Form  action="https://formspree.io/f/myyvrrwa"
                            method="POST"
                            className="contact-inputs form">

<br/>
  <br/>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                        
                    >
                        <Form.Control
                         type="text" 
                         placeholder="Username" 
                         name="username"
                         />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control
                         type="email" 
                         placeholder="Email" 
                         name="Email"
                         />
                    </FloatingLabel>



                    <FloatingLabel controlId="floatingPassword" label="Enter Message">
                        <Form.Control 
                        type="textarea" 
                        placeholder = "textarea" 
                        name="Message"
                        
                         />
                    </FloatingLabel>

                    <br></br>
                  
                <Container className='text-center'>
                    <Button color="primary" outline>Submit</Button>
                </Container>
                <br/>
  <br/>
                    </Form>
                </CardBody>
</Base>
</>

  )
}

export default Contact


