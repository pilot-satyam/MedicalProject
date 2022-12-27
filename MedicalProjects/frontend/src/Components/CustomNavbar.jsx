import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const CustomNavbar =()=> {
  return (
    <Navbar bg="secondary" expand ="lg" variant="light" style={{width:"auto", height:"13%", justifyContent: "space-around"}} fixed="top" >
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar" className='rounded-circle'/>
        <Navbar.Brand href="#">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto space">
            <NavLink to="/" style={{textDecoration: 'none'}}> Home &nbsp;&nbsp;&nbsp;</NavLink>
            {/* <Nav className='me-auto'> */}
            <NavLink to="/login" style={{textDecoration: 'none'}}> New Admission &nbsp;&nbsp;&nbsp; </NavLink>
            <NavLink to='/physicianlogin' style={{textDecoration: 'none'}}>Physician Login &nbsp;&nbsp;&nbsp;</NavLink>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services" >Services</NavDropdown.Item>
              <NavDropdown.Item href="/contactUs">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/address" >Address</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;