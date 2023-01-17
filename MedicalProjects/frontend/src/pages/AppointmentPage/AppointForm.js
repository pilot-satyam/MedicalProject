import React, { useState } from 'react';
import {
    Card, CardHeader, CardBody, Form, FormGroup, Label, Input, FormText, Button, Alert
  } from 'reactstrap'
function AppointmentForm() {
  const [patientName, setPatientName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [appointmentCount, setAppointmentCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appointmentCount >= 3) {
      setErrorMessage('Only 3 appointments are allowed per day.');
    } else {
      // submit appointment
      setAppointmentCount(appointmentCount + 1);
      setErrorMessage('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'patientName') {
      setPatientName(value);
    } else if (name === 'symptoms') {
      setSymptoms(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'time') {
      setTime(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    

      <FormGroup>
              <Label htmlFor="patientName">Patient Name</Label>
              <Input type="text" name="patientName" placeholder="Patient's name" value={patientName} onChange={handleChange}/>
            </FormGroup>
      <br />
      <label>
        Symptoms:
        <textarea
          name="symptoms"
          value={symptoms}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={time}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default AppointmentForm;
