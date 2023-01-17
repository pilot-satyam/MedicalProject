import React from 'react'
import { Container } from 'reactstrap'
import AddPrescription from '../../Components/AddPrescription'
import Base from '../../Components/Base'

const UserDashboard =()=>{
  return (
   <Base>
    <Container>
      <AddPrescription />
   </Container>
   </Base>
  )
}

export default UserDashboard
