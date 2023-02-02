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


