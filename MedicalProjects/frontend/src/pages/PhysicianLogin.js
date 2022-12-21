import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import React, { useState } from "react";
import Base from "../Components/Base";
import DoctorSignup from './DoctorSignup';

const PhysicianLogin = () =>{
    return(
        <Base>
        <Container>
          <Row className='mt-4'>
             <Col sm={{
                 size:6,
                 offset:2
             }}>
                 <Card>
                     <CardHeader>
                         <h3 className="centerIt">Hey Amazing Doc, <br></br>Login Here</h3>
                     </CardHeader>
                     <CardBody>
                         <Form>
                             <FormGroup>
                                 <label for="email"> Enter Email</label> <br></br>
                                 <input type="text" id="email"></input>
                             </FormGroup>
 
                             <FormGroup>
                                 <label for="password"> Enter Password</label> <br></br>
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