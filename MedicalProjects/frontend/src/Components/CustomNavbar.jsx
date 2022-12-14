import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const CustomNavbar =()=> {
  return (
    <Navbar bg="secondary" expand="lg" variant="light">
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar"/>
        <Navbar.Brand href="#">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="#home"> Home</NavLink>
            {/* <Nav className='me-auto'> */}
                <NavLink to="/login"> New Admission </NavLink>
            <NavLink to='/physicianlogin'>Physician Login</NavLink>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href='/contactUS'>
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/address">Address</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;