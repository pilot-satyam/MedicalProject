import React, { useEffect } from "react";
import Base from "../Components/Base";
import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import { signUp } from "../services/user-service";
import { useState } from "react";
 


const Signup = () => {

    const[data,setData] = useState({
        name:'',
        email:'',
        password:'',
      })
    
      const[error,setError] = useState({
        errors : {},
        // to check error hai ki nahi hai
        isError : false
      })
// it will run only when the data is changed
      useEffect(()=>{
       console.log(data);
      },[data])
    
     //submitting the form, so that preventing the page from getting reloaded after the form is submitted 
 const submitForm = (event) =>{
    event.preventDefault()
    console.log(data);
    //data validation
    //call server api for sending data
    signUp(data).then((resp)=>{
        console.log(resp)
        console.log("Successfully log");
    }).catch((error)=>{
        console.log(error)
        console.log("Error log")
    })
 };

     //dynamically setting the values 
    const handleChange = (event,property)=>{
        // console.log("name changed");
        //here name will be override by new value
        // setData({...data,name:event.target.value})
        setData({...data,[property] : event.target.value});
        }

    return(
        <Base>
       <Container>
        <Row className="mt-4">
            <Col sm={{size:6}}>
            <Card>
            <CardHeader>
               <h4> Fill Information To Register
                <br/>
                <i style={{fontSize:"24px"}} class="fa">&#xf2bc;</i>
               </h4>
            </CardHeader>
        <CardBody>
            <Form>
                <FormGroup>
                    <label htmlFor="name">Enter Name</label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter Name" 
                    invalid="true" 
                    id="name"
                    onChange= {(e)=>handleChange(e,'name')}
                    value = {data.name}></input> 
                </FormGroup>

                <FormGroup>
                    <label htmlFor="email">Enter Email</label> <br></br>
                    <input type="email" placeholder="Enter email" invalid="true" id="name"
                    onChange= {(e)=>handleChange(e,'email')}
                    value = {data.email}></input>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="password">Enter Password</label> <br></br>
                    <input type="password" placeholder="Enter Password" invalid="true" id="password"
                    onChange= {(e)=>handleChange(e,'password')}
                    value = {data.password}></input>
                </FormGroup>

                <Container className="text-center">
            <Button color="dark">Register</Button>
            <Button color="secondary" className="ms-2" type="reset" value="Reset">Reset</Button>
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
export default Signup