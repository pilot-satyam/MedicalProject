import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from './pages/Login';

import PhysicianLogin from './pages/PhysicianLogin';

import DoctorSignup from './pages/DoctorSignup';

import Signup from './pages/Signup';

import Home from './pages/Home';

import { Container } from 'react-bootstrap';

import Services from './pages/Services';

import FormForPatient from './pages/FormForPatient';

import ErrorPage from './pages/ErrorPage';



import Doctor from './pages/Doctor11';

import List from "../src/pages/DoctorList/List"

import Contact from './pages/Contact';

import Address from './pages/Address';

import FooterOne from './Components/FooterOne';




import ShowAppointment from './pages/AppointmentPage/ShowApppointment';

import IsConfirmed from './pages/AppointmentPage/IsConfirmed';

import Appointment from './pages/AppointmentPage/AppointmentForm';

import PatientDetails from './pages/Physician/PatientDetails';
import PatientProblemDetails from './pages/Physician/PatientProblemDetails';

import Prescription from './pages/Physician/Prescription';

import PatientInformation from './pages/Physician/PatientInformation';


import ListForDoctor from './pages/AppointmentPage/ListForDoctor';

function App() {
  return (

  <Container>
    
  <BrowserRouter>
  
  <Routes>    

  <Route  path="/" element= {<Home />} />

  <Route exact path="/login" element= {<Login />} />

  <Route exact path ="/signup" element={<Signup />} />

 

  <Route exact path="/physicianlogin" element={<PhysicianLogin />} />

  <Route exact path="/doctorsignup" element={<DoctorSignup />} />

  <Route exact path ="/patientForm" element ={<FormForPatient />} />



  <Route exact path="/services" element={<Services />} />

  <Route exact path="/contactUs" element={<Contact />}/>

  <Route exact path="/address" element={<Address/>}/>

 

  <Route exact path="/symptomForm" element={<PatientInformation/>}/>

  <Route exact path="/patientDetails" element={<PatientDetails/>}/>

  <Route exact path ="/patientProblemDetails" element={<PatientProblemDetails/>}/>

  <Route exact path="/prescription" element={<Prescription/>}/>

  <Route exact path ="/appointmentForm" element={<Appointment/>}/>

  <Route exact path ="/showAppointment" element ={<ShowAppointment/>}/>

  <Route exact path ="/doctor" element ={<List/>}/>

  <Route exact path ="/isConfirmed" element={<IsConfirmed/>}/>

  <Route exact path= "*" element ={<ErrorPage />}></Route>
=======
    <Route  path="/" element= {<Home />} />
    <Route exact path="/login" element= {<Login />} />
    <Route exact path ="/signup" element={<Signup />} />
    
    <Route exact path="/physicianlogin" element={<PhysicianLogin />} />
    <Route exact path="/doctorsignup" element={<DoctorSignup />} />
    <Route exact path ="/patientForm" element ={<FormForPatient />} />

    <Route exact path="/services" element={<Services />} />
    <Route exact path="/contactUs" element={<Contact />}/>
    <Route exact path="/address" element={<Address/>}/>
    
    <Route exact path="/symptomForm" element={<PatientInformation/>}/>
    <Route exact path="/patientDetails" element={<PatientDetails/>}/>
    <Route exact path ="/patientProblemDetails" element={<PatientProblemDetails/>}/>
    <Route exact path="/prescription" element={<Prescription/>}/>
    <Route exact path ="/appointmentForm" element={<Appointment/>}/>
    <Route exact path ="/showAppointment" element ={<ShowAppointment/>}/>
    <Route exact path ="/doctor" element ={<List/>}/>
    <Route exact path ="/isConfirmed" element={<IsConfirmed/>}/>
    <Route exact path= "*" element ={<ErrorPage />}></Route>
    
  </Routes>
  <FooterOne />
  </BrowserRouter>
  
  </Container>
  );
}

export default App;
