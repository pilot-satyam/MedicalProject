import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import React, { useState } from "react";
import Base from "../Components/Base";

const Login = () =>{
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
                        <h3 className="centerIt">Login Here</h3>
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