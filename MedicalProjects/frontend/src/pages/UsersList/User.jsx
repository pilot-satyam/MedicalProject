
//this component is responsible to view single user

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardText } from 'reactstrap'
import "../../Style/Global.css"
function User({prescription={name:"THis is default prescription",age:"Default age"}}  ){
  return (
    <Card className='border-0 shadow-sm  mt-3 newFeedStyle outer'>
   <CardBody className='box'>
        <CardBody className='box'>
        <h1>{user.name}</h1>
        <CardText>
          Age :  {user.age}<br></br>
          Weight :  {user.weight}<br></br>
          Height :  {user.height}<br></br>
          {/* Contact : {user.contact} <br></br>
          Address : {user.address} <br></br> */}
        </CardText>
        <div>
          <Link className='btn btn-secondary' to={'/users/'+user.id}>Details Of Patient</Link>
        </div>
    </CardBody>
</Card>


  )
}

export default User
