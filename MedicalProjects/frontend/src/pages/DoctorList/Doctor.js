import React from 'react'

function Doctor(props) {
  return (
    <div>
      <h3>Dr.{props.name}.</h3>
      <h6>Qualification:{props.qualification}</h6>
      <h6>Experience:{props.exp}</h6>
      <h6>Appointment Fee:{props.fee}</h6>
    </div>
  )
}

export default Doctor
