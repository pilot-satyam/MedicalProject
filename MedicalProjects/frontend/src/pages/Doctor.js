import React, { useState, useEffect } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';






function Doctor() {

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <div className="container">
    <div className="text-center">
      {loading && <span className="spinner-border spinner-border-lg" />}
    </div>
    <div>
      <img src={content.image} alt={content.name} />
      <div>
        <h2>
          {content.name}
        </h2>
        <p>
          Appointment Fee &nbsp;&nbsp;&nbsp;&nbsp; Rs. 300
        </p>
        <p>
          Qualification: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {content.qualification}
        </p>
        <p >
          Experience: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {content.experience}
        </p>
        <p>
          Department: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Medicine
        </p>
        <li>
          <Link
            to={{
              pathname: '/appointments/new',
              doctorId: content.id,
            }}
            
          >
            Add Appointment
          </Link>
        </li>
      </div>
    </div>
  </div>
  )
}

export default Doctor;




