import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const CustomNavbar =()=> {
  return (
    <Navbar bg="secondary" expand="lg" variant="light">
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar"/>
        <Navbar.Brand href="#">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home</Nav.Link>
            {/* <Nav className='me-auto'> */}
                <Nav.Link href="/login"> New Admission </Nav.Link>
            <Nav.Link href='/physicianlogin'>Physician Login</Nav.Link>
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