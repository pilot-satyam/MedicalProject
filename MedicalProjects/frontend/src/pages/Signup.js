import React, { useEffect } from "react";
import Base from "../Components/Base";
import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form,Label,FormFeedback,Input} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import { signUp } from "../services/user-service";
import { useState } from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
    event.preventDefault();

    // if(error.isError){
    //     toast.error("Form data is invalid!!!");
    //     setError({...error,isError:false})
    //     return;
    // }

    console.log(data);
    //data validation
    //call server api for sending data
    signUp(data).then((resp)=>{
        console.log(resp)
        console.log("Successfully log");
        toast.success("User Registered Successfully!!");
        setData({
            name:'',
            email:'',
            password:'',
            age:'',
            weight:'',
            height:'',
            contact:'',
            address:'',
        })
    }).catch((error)=>{
        console.log(error);
        console.log("Error log");

        //handling errors
        setError({
            errors : error,
            isError : true
        })
    });
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
                <i style={{fontSize:"24px"}} className="fa">&#xf2bc;</i>
               </h4>
            </CardHeader>
        <CardBody>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label htmlFor="name">Enter Name</Label>
                    <Input type="text" 
                    placeholder="Enter Name" 
                    invalid={error.errors?.response?.data?.name ? true : false}
                    id="name"
                    onChange= {(e)=>handleChange(e,'name')}
                    value = {data.name} />

                    <FormFeedback>
                    {error.errors?.response?.data?.name ? true : false}
                    </FormFeedback>

                </FormGroup>

                <FormGroup>
                    <Label htmlFor="email">Enter Email</Label> <br></br>
                    <Input type="email" placeholder="Enter email" 
                     invalid={error.errors?.response?.data?.email ? true : false}
                    id="email"
                    onChange= {(e)=>handleChange(e,'email')}
                    value = {data.email} />
                    <FormFeedback>
                    {error.errors?.response?.data?.email ? true : false}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Enter Password</Label> <br></br>
                    <Input type="password" 
                     placeholder="Enter Password" 
                     id="password"
                     invalid={error.errors?.response?.data?.password ? true : false}
                    onChange= {(e)=>handleChange(e,'password')}
                    value = {data.password} />
                    <FormFeedback>
                    {error.errors?.response?.data?.password ? true : false}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="age">Enter Age</Label>
                    <br></br>
                    <Input type="text" 
                    placeholder="Enter age" 
                    invalid={error.errors?.response?.data?.age ? true : false}
                    id="age"
                    onChange= {(e)=>handleChange(e,'age')}
                    value = {data.age} /> 
                    <FormFeedback>
                    {error.errors?.response?.data?.age ? true : false}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="weight">Enter weight</Label>
                    <br></br>
                    <Input type="text" 
                    placeholder="Enter weight" 
                    invalid={error.errors?.response?.data?.weight ? true : false} 
                    id="weight"
                    onChange= {(e)=>handleChange(e,'weight')}
                    value = {data.weight} /> 
                    <FormFeedback>
                    {error.errors?.response?.data?.weight ? true : false}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="height">Enter Height</Label>
                    <br></br>
                    <Input type="text" 
                    placeholder="Enter Height" 
                    invalid={error.errors?.response?.data?.height ? true : false}
                    id="height"
                    onChange= {(e)=>handleChange(e,'height')}
                    value = {data.height} />
                    <FormFeedback>
                    {error.errors?.response?.data?.height ? true : false}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="contact">Enter contact</Label>
                    <br></br>
                    <Input type="text" 
                    placeholder="Enter Contact" 
                    invalid={error.errors?.response?.data?.contact ? true : false}
                    id="contact"
                    onChange= {(e)=>handleChange(e,'contact')}
                    value = {data.contact} /> 
                    <FormFeedback>
                    {error.errors?.response?.data?.contact ? true : false}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="address">Enter Address</Label>
                    <br></br>
                    <Input type="text" 
                    placeholder="Enter Address" 
                    invalid={error.errors?.response?.data?.address ? true : false}
                    id="address"
                    onChange= {(e)=>handleChange(e,'address')}
                    value = {data.address} />
                    <FormFeedback>
                    {error.errors?.response?.data?.address ? true : false}
                    </FormFeedback>
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