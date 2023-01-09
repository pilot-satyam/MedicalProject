import {Button, Card,CardHeader,Container, FormGroup,CardBody} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import React, { useState } from "react";
import Base from "../Components/Base";
import "../Style/Global.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import Form from 'react-bootstrap/Form';
import { loginUser } from '../services/user-service';
import { doLogin } from '../auth';
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    const navigate = useNavigate()
    const[loginDetail,setLoginDetail] = useState({
        username : '',
        password : ''
    })

const handleChange=(event,field)=>{
    let actualValue = event.target.value
    setLoginDetail({
        ...loginDetail,
        [field] : actualValue
    })
}

const handleForReset=()=>{
    setLoginDetail({
        username : "",
        password : "",
    });
};


const handleForSubmit = (event) =>{
    event.preventDefault();
    console.log(loginDetail);

    //validation
    if(loginDetail.username.trim() == '' || loginDetail.password.trim() == ''){
        toast.error("Username or Password is required!!!!")
        return;
    }

    //submit the data to server to generate token

    //loginUser cmng from user-service file from myAxios
    loginUser(loginDetail).then((data)=>{
        console.log("user login:")
        console.log(data)

      //save data to localStorage
      doLogin(data,()=>{
        console.log("login detail saved to local storage")

        //redirect to user dashboard page
        navigate("/user/dashboard")  
      })


        toast.success("Login Successfull :)")
    }).catch(error=>{
        console.log(error)
        if(error.response.status == 400 || error.response.status == 404){
            toast.error(error.response.data.message)
        }
        else{
        toast.error("Something went wrong!!!")
        }
    })
};

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
                        <Form onSubmit={handleForSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                             type="email" 
                             placeholder="email" 
                             value={loginDetail.username}
                             onChange={(e)=>handleChange(e,'username')} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control 
                            type="password" 
                            placeholder = "password" 
                            value = {loginDetail.password}
                            onChange={(e)=>handleChange(e,'password')}
                             />
                        </FloatingLabel>

                        <br></br>
                      
                    <Container className='text-center'>
                        <Button color="dark" outline>Login</Button>
                        <Button onClick={handleForReset} className='ms-2' color='secondary' outline>Reset</Button>
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