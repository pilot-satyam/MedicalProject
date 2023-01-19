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
import Contact from './pages/Contact';
import Address from './pages/Address';
import FooterOne from './Components/FooterOne';

import PatientDetails from './pages/Physician/PatientDetails';
import PatientProblemDetails from './pages/Physician/PatientProblemDetails';
import Prescription from './pages/Physician/Prescription';
import PatientInformation from './pages/Physician/PatientInformation';

import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute';
import UserDashboard from './pages/user-routes/UserDashboard';
import ProfileInfo from './pages/user-routes/ProfileInfo';
import NewFeed from './pages/DoctorList/NewFeed';
import AddPrescription from './Components/AddPrescription';
import Doctors from './pages/Doctors';
import { AppointmentPage } from './pages/AppointmentPage/AppoitmentPage';
import Edit from './pages/Edit'
function App() {
  

  return (

  <Container> 
  <BrowserRouter>
  <ToastContainer />
  <Routes>   
  <Route path="/" element={<Home />} />    
  <Route  path="/home" element= {<Home />} />
  <Route exact path="/login" element= {<Login />} />
  <Route exact path ="/signup" element={<Signup />} />
  <Route exact path="/physicianlogin" element={<PhysicianLogin />} />
  <Route exact path="/doctorsignup" element={<DoctorSignup />} />
  <Route exact path="/editProfile" element={<Edit/>}/>

  {/* <Route exact path='/patientForm' render={() => (
          <FormProvider>
            <FormForPatient />
          </FormProvider>
        )} /> */}
    <Route exact path ="/patientForm" element ={<FormForPatient />} />
 
  <Route exact path="/services" element={<Services />} />
  <Route exact path="/contactUs" element={<Contact />}/>
  <Route exact path="/address" element={<Address/>}/>  
  <Route exact path="/symptomForm" element={<PatientInformation/>}/>
  <Route exact path="/patientDetails" element={<PatientDetails/>}/>
  <Route exact path ="/patientProblemDetails" element={<PatientProblemDetails/>}/>
  <Route exact path="/prescription" element={<Prescription/>}/>
  <Route exact path ="/appointmentForm" element={<AppointmentPage/>}/>

  <Route exact path='/newfeed' element={<NewFeed />}/>
  <Route exact path ='addPrescription' element={<AddPrescription/>}/>
  <Route exact path='/doctors/:doctorId' element={<Doctors />}/>
  <Route exact path= "*" element ={<ErrorPage />} />


  <Route path="/user" element={<PrivateRoute />} >
  <Route path="dashboard" element={<UserDashboard />} />
  <Route path="profile-info/:userId" element={<ProfileInfo />} />

  </Route>
   </Routes>
  <FooterOne />
  </BrowserRouter>
  </Container>
  );
}

export default App;
