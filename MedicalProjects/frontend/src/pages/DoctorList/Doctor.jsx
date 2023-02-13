//this component is responsible to view single doctor

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../Style/Global.css"
import { getCurrentUserDetail, isLoggedIn } from '../../auth'

function Doctor({doctor={id:-1,name:"THis is default doctor",qualification:"Default qualification"}}){

  const[user,setUser] = useState(null)
  const[login,setLogin] = useState(null)
  useEffect(()=>{
       setUser(getCurrentUserDetail())
       setLogin(isLoggedIn())
  },[])


  return (
<section style={{backgroundColor: "#eee"}}>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card" style={{borderRadius: "15px"}} >
          <div className='centerCard'>
            <img src="person4.jpg"
              style={{height:"40%" , width:"40%",alignItems:"center"}} className="img-fluid mr-5 mt-3 " 
              alt="DoctorPic" />
          </div>
         <p className='centerCard mt-3'>Qualification <i style={{fontSize:"20px"}} className="fa">&#xf19d;</i> &nbsp;:{doctor.qualification}</p>
         <p className='centerCard'>Experience <i style={{fontSize:"20px"}} className="fa">&#xf091;</i> &nbsp;&nbsp;&nbsp;&nbsp; :{doctor.experience}</p>
         <p className='centerCard'>Fees <i style={{fontSize:"20px"}} className="fa">&#xf0d6;</i> &nbsp;&nbsp;&nbsp;&nbsp;:Rs. {doctor.fees}</p>
         
          
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
              <Link className='btn btn-primary' to={'/doctors/'+doctor.doctorId}>Details Of Doc</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Doctor
