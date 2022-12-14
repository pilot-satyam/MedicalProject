
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Base from './Components/Base';
import CustomNavbar from './Components/CustomNavbar';
import Services from './pages/Services';
import FormForPatient from './Components/FormForPatient';
import ErrorPage from './pages/ErrorPage';
import PatientInformation from './pages/PatientInformation';

function App() {
  return (
 
  <BrowserRouter>
  <Routes>
    
    <Route path="/home" element= {<Home />} />
    <Route path="/login" element= {<Login />} />
    <Route path ="/signup" element={<Signup />} />
    <Route path="/services" element={<Services />} />
    <Route path ="/patientForm" element ={<FormForPatient />} />
    <Route path= "*" element ={<ErrorPage />}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
