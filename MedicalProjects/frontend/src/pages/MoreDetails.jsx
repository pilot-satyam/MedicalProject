import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Col, Container, Row } from 'reactstrap'
import Base from '../Components/Base'
import DoctorSideMenu from '../Components/DoctorSideMenu'
import { loadPrescriptionByDoctor } from '../services/prescription-service'
import Doctor from './DoctorList/Doctor'

function MoreDetails() {

    const[prescription,setPrescription]=useState([])

//To check wheter we are getting the doctorId after clicking on feed menu or not we use params

const{doctorId} = useParams()
useEffect(()=>{
    console.log(doctorId)
    loadPrescriptionByDoctor(doctorId).then(data=>{
        //copying and setting the data all together
    setPrescription([...data])
    }).catch(error=>{
        console.log(error)
        toast.error("error in loading prescriptions")
    })
},[doctorId])

  return (  
     <Base>
<Container className='mt-3'>
    <Row>
        <Col md={2} className='pt-3'>
        <DoctorSideMenu />
        </Col>
        <Col md={10}>
        {/* <NewFeed /> */}
        {
            prescription && prescription.map((prescription,index)=>{
                return (
                    <Doctor key={index} prescription = {prescription} />
                )
            })
        }

        {
           prescription.length<=0 ? <h1> No User Under this Doctor </h1> : ''
        }

        </Col>
    </Row>
    </Container>

     </Base>
  )
}

export default MoreDetails
