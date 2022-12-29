import {Button, Card,CardHeader,Container, FormGroup,CardBody} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import React, { useState } from "react";
import Base from "../Components/Base";
import "../Style/Global.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {MDBInput} from 'mdb-react-ui-kit'
import Form from 'react-bootstrap/Form';

const Login = () =>{
    return(
        <Base>
       <Container className='mt-5 text-center'>
         <Row className='mt-4'>
            <Col sm={{
                size:6,
                offset:2
            }}>
                <Card className='mt-4'>
                    <CardHeader className='mt-4'>
                        <h3 className="centerIt">Login Here</h3>
                        <i style={{fontSize:"24px"}} className="fa centerIt">&#xf2bc;</i>
                    </CardHeader>
                    <CardBody>
                        <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        {/* <MDBInput label='Email' type='text' id='formWhite' contrast /> */}
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                      
                    <Container className='text-center'>
                        <Button color="dark" outline>Login</Button>
                        <Button className='ms-2' color='secondary' outline>Reset</Button>
                        <Button className='ms-2' color='dark' outline href='./Signup'>New Patient? Register Here</Button>
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
export default Login