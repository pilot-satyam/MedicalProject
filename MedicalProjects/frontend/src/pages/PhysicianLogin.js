import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import React, { useState } from "react";
import Base from "../Components/Base";
import DoctorSignup from './DoctorSignup';

const PhysicianLogin = () =>{
    return(
        <Base>
        <Container className='mt-5 text-center'>
          <Row className='mt-4'>
             <Col sm={{
                 size:6,
                 offset:2
             }}>
                 <Card>
                     <CardHeader>
                         <h6 className="centerIt">Hey Amazing Doctors, <br></br>
                         <h3>
                         Login Here<br/>
                         </h3>
                            <i style={{fontSize:"24px"}} class="fa">&#xf2bc;</i>
                         </h6>
                     </CardHeader>
                     <CardBody>
                         <Form>
                             <FormGroup>
                                 <label htmlFor="email"> Enter Email</label> <br></br>
                                 <input type="text" id="email"></input>
                             </FormGroup>
 
                             <FormGroup>
                                 <label htmlFor="password"> Enter Password</label> <br></br>
                                 <input type="password" id="password"></input>
                             </FormGroup>
                     <Container className='text-center'>
                         <Button color="dark" outline>Login</Button>
                         <Button className='ms-2' color='dark' outline>Reset</Button>
                         <Button color='dark'className='ms-2' href='./DoctorSignup' outline >New Here ? Register Here </Button>
                     </Container>
                         </Form>
                     </CardBody>
                 </Card>
 
             </Col>
          </Row>
        </Container>
         </Base>
    );
}
export default PhysicianLogin