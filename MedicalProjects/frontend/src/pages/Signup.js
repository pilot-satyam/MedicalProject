import React, { useEffect } from "react";
import Base from "../Components/Base";
import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form,Label} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import { signUp } from "../services/user-service";
import { useState } from "react";
 


const Signup = () => {

    const[data,setData] = useState({
        name:'',
        email:'',
        password:'',
        age:'',
        weight:'',
        height:'',
        contact:'',
        address:'',
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
        setData({...data,name:event.target.value})
        setData({...data,[property] : event.target.value});
        }

    return(
        <Base>
       <Container className='mt-5 text-center'>
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
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label htmlFor="name">Enter Name</Label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter Name" 
                    invalid="true" 
                    id="name"
                    onChange= {(e)=>handleChange(e,'name')}
                    value = {data.name}></input> 
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="email">Enter Email</Label> <br></br>
                    <input type="email" placeholder="Enter email" 
                    invalid="true" 
                    id="email"
                    onChange= {(e)=>handleChange(e,'email')}
                    value = {data.email}></input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Enter Password</Label> <br></br>
                    <input type="password" 
                     placeholder="Enter Password" 
                     id="password"
                    onChange= {(e)=>handleChange(e,'password')}
                    value = {data.password}></input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="age">Enter Age</Label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter age" 
                    invalid="true" 
                    id="age"
                    onChange= {(e)=>handleChange(e,'age')}
                    value = {data.age}></input> 
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="weight">Enter weight</Label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter weight" 
                    invalid="true" 
                    id="weight"
                    onChange= {(e)=>handleChange(e,'weight')}
                    value = {data.weight}></input> 
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="height">Enter Height</Label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter Height" 
                    invalid="true" 
                    id="height"
                    onChange= {(e)=>handleChange(e,'height')}
                    value = {data.height}></input> 
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="contact">Enter contact</Label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter Contact" 
                    invalid="true" 
                    id="contact"
                    onChange= {(e)=>handleChange(e,'contact')}
                    value = {data.contact}></input> 
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="address">Enter Address</Label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter Address" 
                    invalid="true" 
                    id="address"
                    onChange= {(e)=>handleChange(e,'address')}
                    value = {data.address}></input> 
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
export default Signup;