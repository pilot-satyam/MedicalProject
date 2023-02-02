//this component is responsible to view single doctor

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardText } from 'reactstrap'
import "../../Style/Global.css"

function Doctor({doctor={name:"THis is default doctor",qualification:"Default qualification"}}){
  return (
    <Card className='border-0 shadow-sm  mt-3'>
    <CardBody >
        <h1>{doctor.name}</h1>
        <CardText>
          Qualification :  {doctor.qualification}<br></br>
          Experience :  {doctor.experience}<br></br>
          Fees : Rs. {doctor.fees}
        </CardText>
        <div>
          <Link className='btn btn-secondary' to={'/doctors/'+ doctor.doctorId}>Details Of Doc</Link>
        </div>
    </CardBody>
</Card>


  )
}

export default Doctor
