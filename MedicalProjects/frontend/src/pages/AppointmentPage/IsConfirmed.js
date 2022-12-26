import React,{useState} from 'react'
import {Alert} from 'reactstrap';
function IsConfirmed() {
const [count, setCount] = useState(0);

const confirm = () =>{
    setCount(count + 1);
    if(count < 2){
      <Alert color="success">
        Congratulations! Appointment is confirmed.
      </Alert>
    }else{
      <Alert color="warning">
        Sorry! Appointments are full.
      </Alert>
    }
}
  return (
    <div>
      <button onClick={()=>confirm}>
        Click for Confirmation
      </button>


    </div>
  )
}

export default IsConfirmed;
