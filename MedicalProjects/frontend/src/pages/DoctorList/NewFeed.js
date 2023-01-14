import React, { useState } from 'react'
import '../../Style/Global.css';
import { useEffect } from 'react';
import Doctor from './Doctor';
import { loadAllDoctors } from '../../services/doctor-service';

import { Card, CardBody, CardText,Row,Col } from 'reactstrap';

function NewFeed() {

    //here we use useState so that we can save the data cmng from useEffect
    const[doctors,setDoctors] = useState([]) //initializing the state with an empty array
    const[error,setError] = useState(null)

    useEffect(()=>{

        //---->load all doctors from server<------
        loadAllDoctors()
            .then((data)=>{
                console.log(data)
                setDoctors(data)
            })
            .catch((error)=>{
                setError(error)
            })

    },[])

   return(
        
    <div className='container-fluid'>
        <Row>
            <Col md={{
                size:10,
                offset:1
            }}>
                <h1>
                    Doctors List Length: {doctors.length} 
                </h1>
                {error && <p>{error}</p>}
                {
                    doctors.map((doctor)=>(
                        <Doctor key={doctor.doctorId} doctor={doctor} /> //passing the doctor object as a prop
                    ))
                }   
            </Col>
        </Row>
    </div>
    
   )
}

export default NewFeed
