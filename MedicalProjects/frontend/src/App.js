
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Base from './components/Base';
import CustomNavbar from './components/CustomNavbar';
import Services from './pages/Services';

function App() {
  return (
    
  <BrowserRouter>
  <Routes>
     <FormForPatient />
    <Route path="/home" element= {<Home />} />
    <Route path="/login" element= {<Login />} />
    <Route path ="/signup" element={<Signup />} />
    <Route path="/services" element={<Services />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
