
//this component is responsible to view single user

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

function PrescriptionList({prescription={name:"THis is default user",age:"Default age"}}  ){
  return (
    <Card className='border-0 shadow-sm  mt-3 my-2'>
       <CardHeader tag="h3" className='text-center bold'>
        Patient's Prescription
      </CardHeader>
    <CardBody>
        <h1>{prescription.user.name}</h1>
        <CardText>
          Age :  {prescription.user.age}yrs<br></br>
          Weight :  {prescription.user.weight}Kgs<br></br>
          Height :  {prescription.user.height}Cms<br></br>
          {/* Contact : {user.contact} <br></br>
          Address : {user.address} <br></br> */}
        </CardText>
        <div>
          <Link className='btn btn-secondary' to={'/prescriptions/'+prescription.id}>View Prescription</Link>
        </div>
    </CardBody>
</Card>
  )
}

export default PrescriptionList

