import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink as ReactLink } from 'react-router-dom';
import {NavItem} from 'react-bootstrap';

const CustomNavbar =()=> {
  return (
    <Navbar bg="warning" expand="lg" variant="light">
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar"/>
        <Navbar.Brand href="#">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home</Nav.Link>
            {/* <Nav className='me-auto'> */}
                <Nav.Link href="/login"> Login </Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link href="/patientForm">New Patient Registration</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Address</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;