import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import "../Style/Global.css";

const CustomNavbar =()=> {
  return (
    // style={{width:"auto", height:"13%", justifyContent: "space-around"}} 
    <Navbar bg="secondary" expand="lg" variant="light" fixed="top" >
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar" className='rounded-circle'/>
{/* .........................
        <Navbar.Brand href="#">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* basic-navbar-nav */}
        {/* <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0">
            <NavLink to="/" style={{textDecoration: 'none'}}> Home &nbsp;&nbsp;&nbsp;</NavLink> */}
            {/* <Nav className='me-auto'>  */}
            {/* <NavLink to="/login" style={{textDecoration: 'none'}}> New Admission &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to='/physicianlogin' style={{textDecoration: 'none'}}>Physician Login &nbsp;&nbsp;&nbsp;</NavLink>
.......................... */} 




        <Navbar.Brand href="/home">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* basic-navbar-nav */}
        <Navbar.Collapse id="responsive-navbar-nav">

         <Nav className="me-auto space">
            <NavLink to="/home" style={{textDecoration: 'none'}}> Home &nbsp;&nbsp;&nbsp;</NavLink>
            {/* <Nav className='me-auto'> */}

            <NavDropdown title="More" id="basic-nav-dropdown" className='nav'>
              <NavDropdown.Item href="/services" >Services</NavDropdown.Item>
              <NavDropdown.Item href="/contactUs">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/address" >Address</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
          <NavLink to="/login" style={{textDecoration: 'none'}}> New Admission &nbsp;&nbsp;&nbsp; </NavLink>
          <NavLink to='/physicianlogin' style={{textDecoration: 'none'}}>Physician Login &nbsp;&nbsp;&nbsp;</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default CustomNavbar;