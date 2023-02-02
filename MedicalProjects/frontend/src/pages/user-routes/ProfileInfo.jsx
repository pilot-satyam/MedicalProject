import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap'
import Base from '../../Components/Base'
import ViewUserProfile from '../../Components/ViewUserProfile'
import userContext from '../../context/userContext'
import { loadUser } from '../../services/user-service'


//work flow --> 1)user context->2)in provider create create useState for user 
// 3) Now get the current logged in user details from index.js --> 4)Then access over here by creating an object
//for userContext
function ProfileInfo() {
const object =useContext(userContext)
const[user,setUser] = useState(null)
const{userId} = useParams()
// console.log(userId)

useEffect(()=>{
    loadUser(userId).then(data=>{
      console.log(data)
      setUser({...data})
    })
},[])

const userView=()=>{
  return(
    <Row>
      <Col md={{
        size : 6,
        offset : 3
      }}>
        <ViewUserProfile user = {user} />
      </Col>
    </Row>
  )
}

  return (
    <Base>
    {user ? userView() : 'Loading User Data....'}
    </Base>
  )
}

export default ProfileInfo
