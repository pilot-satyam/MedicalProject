import React from 'react'
import { useState } from 'react';
import Base from "../Components/Base";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import '../Style/Global.css';

function FormForPatient() {

const [name, setName] = useState('');
const [age , setAge] = useState('');
const [occupation , setOccupation] = useState('');
const [height , setHeight] = useState('');
const [weight , setWeight] = useState('');
const [mobile,setMobile] = useState('');
const [address, setAddress] = useState('');
const [state, setState] = useState('');
const [city, setCity] = useState('');
const [street , setStreet] = useState('');
const [zipCode, setZipCode] = useState('');

 
const handleName =(e)=>{
    setName(e.target.value);
  }
  const handleAgeChange =(e)=>{
    setAge(e.target.value);
  }
  const handleOccupationChnage =(e)=>{
    setOccupation(e.target.value);
  }
  const handleHeightChange =(e)=>{
    setHeight(e.target.value);
  }
  const handleWeightChange =(e)=>{
    setWeight(e.target.value);
  }

  const handleMobileChange =(e) =>{
    setMobile(e.target.value);
  }
  const handleAddressChange =(e)=>{
    setAddress(e.target.value);
  }
const handleStateChange =(e)=>{
    setState(e.target.value);
  }
const handleCityChange =(e)=>{
    setCity(e.target.value);
  }
const handleStreetChange =(e)=>{
    setStreet(e.target.value);
  }
const handleZipCodeChange =(e)=>{
    setZipCode(e.target.value);
  }


  //Connect to backend 
  const handleSubmit=(e)=>{
   
      // alert('Name :'+name+" "+ 'Age :'+age+" "+'occupation :'+occupation+" "+'Heigth :'+height+" "+
      // 'Weight :'+weight+" "+'PhoneNo :'+mobile+" "+'Address :'+address+" ");
    
    e.preventDefault();
    axios
    .post('',this.state)
    .then(response=>{
      <h3>Welcome {this.state.name}!</h3>
    })
    .catch(error=>{
      <h3>Error occured while loading the date!</h3>
    })

  }
  return (
 <Base>
   <form className="row g-3 justify-content-center" onSubmit={(e) => {handleSubmit(e)}} >
  <div className="justify-content-center col-12" >
    <label className="form-label">Name</label>
    <input type="text" className="form-control" placeholder="Patient Name" required onChange={(e)=>{handleName(e)}}  />

    <label className="form-label">Occupation</label>
    <input type="text" className="form-control" placeholder="Occupation" required onChange={(e)=>{handleOccupationChnage(e)}}  />
  </div>

  <div className="col-4" >
    <label for="number">Age</label>
    <input type="number" class="form-control" placeholder='Age' required onChange={(e)=>{handleAgeChange(e)}} />
  </div>
  <div className="col-4" >
    <label for="number">Weight</label>
    <input type="number" class="form-control" placeholder='Weight' onChange={(e)=>{handleWeightChange(e)}} />
  </div>
  
  <div className="col-4">
    <label for="number">Height</label>
    <input type="number" class="form-control" placeholder='Height' onChange={(e)=>{handleHeightChange(e)}} />
  </div>
  <div class="form-outline col-4">
    <label class="form-label" for="typePhone">Mobile Number</label>
    <input type="tel" id="typePhone" class="form-control" placeholder="Mobile No" onChange={(e)=>{handleMobileChange(e)}}/>
</div>
  <div className="col-4 justify-content-center" >
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required onChange={(e)=>{handleAddressChange(e)}} />
  </div>
  <div className="col-4 justify-content-center">
    <label for="inputAddress2" className="form-label">Street</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required onChange={(e)=>{handleStreetChange(e)}} />
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label" required onChange={(e)=>{handleStateChange(e)}} >State</label>
    <select id="inputState" className="form-select">
      <option >Maharastra</option>
      <option>Hyderabad</option>
      <option>Delhi</option>
      <option>Rajastan</option>
      <option>Kerala</option>

    </select>
  </div>

  <div className="col-4">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"  placeholder="City" required onChange={(e)=>{handleCityChange(e)}} />
  </div>
  
  <div className="col-4">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"  placeholder="Zip Code" required onChange={(e)=>{handleZipCodeChange(e)}} />
  </div>
  
  <div className="col-12">
    <button type="submit" className="button btn-primary">submit</button>
    {/* <Button >Submit</Button> */}
  </div>

</form>
</Base>
  )
}

export default  FormForPatient