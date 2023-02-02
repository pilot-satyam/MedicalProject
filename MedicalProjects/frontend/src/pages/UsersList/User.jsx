
//this component is responsible to view single user

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardText } from 'reactstrap'
import "../../Style/Global.css"
function User({prescription={name:"THis is default prescription",age:"Default age"}}  ){
  return (
    <Card className='border-0 shadow-sm  mt-3 newFeedStyle outer'>
    <CardBody className='box'>
        <h1>{prescription.name}</h1>
        <CardText>
          Age :  {prescription.age}<br></br>
          Weight :  {prescription.weight}<br></br>
          Height :  {prescription.height}<br></br>
          {/* Contact : {prescription.contact} <br></br>
          Address : {prescription.address} <br></br> */}
        </CardText>
        <div>
          <Link className='btn btn-secondary' to={'/users/'+prescription.id}>Details Of Patient</Link>
        </div>
    </CardBody>
</Card>


  )
}

export default User
