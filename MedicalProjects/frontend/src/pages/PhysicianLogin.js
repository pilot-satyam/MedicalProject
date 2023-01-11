import {Button, Card,CardHeader,Container, FormGroup,CardBody} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import React, { useState } from "react";
import Base from "../Components/Base";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import DoctorSignup from './DoctorSignup';

const PhysicianLogin = () =>{
    return(
        <Base>
        <Container className='mt-5 text-center'>
          <Row className='mt-4'>
             <Col sm={{
                 size:10
             }}>
                 <Card>
                    <Row>
                        <Col sm={6}><div className="hero-section-image imageCenter">
            
                        <img
                          src="contact.jpg"
                          alt="hero-section-photo"
                          className="img-style  float-left"
    
                           style={{
                            width:"80vh",
                            marginRight:"7%"
                           }} 
                      
                        />
                    
                    </div></Col>
                
                        <Col sm={5}><CardHeader>
                        <h6 className="centerIt" >Hey Amazing Doctors, <br></br>
                        <h3>
                        Login Here<br/>
                        </h3>
                        
                        
                           <i style={{fontSize:"24px"}} class="fa">&#xf2bc;</i>
                        </h6>
                        
                    </CardHeader>
                
                    <CardBody>
                        <Form>
                            {/* <FormGroup>
                                <label htmlFor="email"> Enter Email</label> <br></br>
                                <input type="text" id="email"></input>
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="password"> Enter Password</label> <br></br>
                                <input type="password" id="password"></input>
                            </FormGroup> */}
                             <FloatingLabel
                           controlId="floatingInput"
                           label="Email address"
                           className="mb-3"
                       >
                           <Form.Control type="email" placeholder="email" />
                       </FloatingLabel>
                       {/* <MDBInput label='Email' type='text' id='formWhite' contrast /> */}
                       <FloatingLabel controlId="floatingPassword" label="Password">
                           <Form.Control type="password" placeholder="password" />
                       </FloatingLabel>
                       <br></br>
                    <Container className='text-center'>
                        <Button color="dark" outline>Login</Button>
                        <Button className='ms-2' color='dark' outline>Reset</Button>
                        <Button  color='dark' className='ms-2 my-2 ' href='./DoctorSignup' outline >New Here ? Register Here </Button>
                    </Container>
                        </Form>
                    </CardBody></Col>
                    </Row>
                     
                 </Card>
 
             </Col>
          </Row>
        </Container>
         </Base>
    );
}
export default PhysicianLogin