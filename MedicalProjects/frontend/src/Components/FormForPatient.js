import React from 'react'
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

function FormForPatient() {

const [name, setName] = useState("");
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

//   const handleMobileChange =(e) =>{
//     setMobile(e.target.value);
//   }
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

  const handleSubmit=(e)=>{
   
      alert('Name :'+name+" "+ 'Age :'+age+" "+'occupation :'+occupation+" "+'Heigth :'+height+" "+
      'Weight :'+weight+" "+'PhoneNo :'+mobile+" "+'Address :'+address+" ");
    
    e.preventDefault();

  }

  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
        <div>
            <label>Name</label><br/>
            <input type='Text' required onChange={(e)=>{handleName(e)}} /><br/>


            <label>Age</label><br/>
            <input type='number' required onChange={(e)=>{handleAgeChange(e)}} /><br/>

            <label>Occupation</label><br/>
            <input type='Text' onChange={(e)=>{handleOccupationChnage(e)}} /><br/>
            
            <label>Height</label><br/>
            <input type='number' onChange={(e)=>{handleHeightChange(e)}} /><br/>

            <label>Weight</label><br/>
            <input type='number' onChange={(e)=>{handleWeightChange(e)}} /><br/>

            <label>Phone/mobile No.</label>
            <PhoneInput value ={mobile} onChange={setMobile} /><br/>

            <label>Address</label><br/>
            <input type='Text' required onChange={(e)=>{handleAddressChange(e)}} /><br/>

            <label>State</label><br/>
            <input type='Text' required onChange={(e)=>{handleStateChange(e)}} /><br/>

            <br/>
            <label>City</label>
            <input type='Text' required onChange={(e)=>{handleCityChange(e)}} />

            <label>Street</label>
            <input type='Text' required onChange={(e)=>{handleStreetChange(e)}} />

            <label>ZipCode</label>
            <input type='Text' required onChange={(e)=>{handleZipCodeChange(e)}} /><br/>


            <input type="submit" value="Submit"/>

        </div>
    </form>
  )

}
export default FormForPatient
