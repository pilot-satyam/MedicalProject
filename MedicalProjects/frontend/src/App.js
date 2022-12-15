import Footer from './Components/Footer';
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
import PatientInformation from './pages/PatientInformation';

import Contact from './pages/Contact';
import Address from './pages/Address';



function App() {
  return (
<<<<<<< HEAD
 
=======
  <Container>
>>>>>>> 1b3cf2f1bccaa3cb7fa61a6006b7e0d74d359ac7
  <BrowserRouter>
  <Routes>

    <Route exact path="/home" element= {<Home />} />
    <Route exact path="/login" element= {<Login />} />
    <Route exact path ="/signup" element={<Signup />} />
    <Route exact path="/services" element={<Services />} />
    <Route exact path="/physicianlogin" element={<PhysicianLogin />} />
    <Route exact path ="/patientForm" element ={<FormForPatient />} />
    <Route exact path="/doctorsignup" element={<DoctorSignup />} />
    <Route exact path="/contactUs" element={<Contact />}/>
    <Route exact path="/address" element={<Address/>}/>
    <Route exact path= "*" element ={<ErrorPage />}></Route>
  
  </Routes>
  <Footer />
  </BrowserRouter>
  
  </Container>
  );
}

export default App;
