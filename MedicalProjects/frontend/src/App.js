import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import Services from './pages/Services';
import FormForPatient from './Components/FormForPatient';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
  <Container>
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
  <Footer />
  </Container>
  );
}

export default App;
