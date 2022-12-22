import React from 'react'
import Doctor from '../DoctorList/Doctor'
import AppointmentForm from "../AppointmentPage/AppointmentForm"
import { Link } from 'react-router-dom';

function List() {
  return (
    <div>
      <table className="centerTable mt-5 mb-5 striped bordered hover">
        <tr>
            <td>
                <Doctor name="Ashish Sabharwal" qualification="Ophthalmologist (MBBS)" exp="10 years" fee="500rs" />
            </td>
            <td>
                <Link to ="/showAppointment">
                    <button>Add Appointment</button>
                </Link>
            </td>
        </tr>
        <tr>
            <td>
                <Doctor name="Sanjay Sachdeva" qualification="Optician (MBBS)" exp="12 years" fee="500rs" />
            </td>
            <td>
                <Link to ="/showAppointment">
                    <button>Add Appointment</button>
                </Link>
            </td>
        </tr>
        <tr>
            <td>
                <Doctor name="Sandeep Batra" qualification="Optometrist (MBBS)" exp="12 years" fee="600rs" />
            </td>
            <td>
                <Link to ="/showAppointment">
                    <button>Add Appointment</button>
                </Link>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default List
