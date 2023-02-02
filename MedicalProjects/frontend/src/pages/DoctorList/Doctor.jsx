//this component is responsible to view single doctor

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardText } from 'reactstrap'
import "../../Style/Global.css"

function Doctor({doctor={name:"THis is default doctor",qualification:"Default qualification"}}){
  return (
    <Card className='border-0 shadow-sm  mt-3 outer newFeedStyle'>
    <CardBody className='box'>
        <h1><b>{doctor.name}</b></h1>
        <CardText>
          Qualification :  <i style={{fontSize:"24px"}} className="fa">&#xf19d;</i> &nbsp; {doctor.qualification}<br></br>
          Experience : <i style={{fontSize:"24px"}} className="fa">&#xf091;</i> &nbsp; {doctor.experience}<br></br>
          Fees : <i style={{fontSize:"24px"}} className="fa">&#xf0d6;</i> &nbsp; Rs. {doctor.fees}
        </CardText>
        <div>
          <Link className='btn btn-secondary' to={'/doctors/'+ doctor.doctorId}>Details Of Doc</Link>
        </div>
    </CardBody>
</Card>


  )
}

export default Doctor
