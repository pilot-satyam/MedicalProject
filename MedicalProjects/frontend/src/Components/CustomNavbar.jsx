import React from 'react';
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Style/Global.css";
import { Link } from 'react-router-dom';
import { doLogout, getCurrentUserDetail,isLoggedIn } from '../auth';

const CustomNavbar =()=> {

  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(undefined)

  useEffect(() => {

      setLogin(isLoggedIn())
      setUser(getCurrentUserDetail())

  }, [login])

  const logout=()=>{
    doLogout(()=>{
      //logged out
      setLogin(false)
      navigate("/")
    })
  }

  return (
    <Navbar bg="secondary" navbar-expand-sm variant="light" style={{width:"auto", height:"13%", justifyContent: "space-around"}} fixed="top" >
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar" className='rounded-circle'/>
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
            {
              login && ( 
                <>
                <Nav.Link href="/user/profile-info">
                  Profile Info
                </Nav.Link>
                <Nav.Link href="/user/dashboard">{user.email}</Nav.Link>
              <Nav.Link onClick = {logout}> LogOut &nbsp;&nbsp;&nbsp; </Nav.Link>
              </>
              )
            }
            {
              !login && (
                <>
                <NavLink to="/login" style={{textDecoration: 'none'}}> New Admission &nbsp;&nbsp;&nbsp; </NavLink>
          <NavLink to='/physicianlogin' style={{textDecoration: 'none'}}>Physician Login &nbsp;&nbsp;&nbsp;</NavLink>
                </>
              )
            }
          {/* <NavLink to="/login" style={{textDecoration: 'none'}}> New Admission &nbsp;&nbsp;&nbsp; </NavLink>
          <NavLink to='/physicianlogin' style={{textDecoration: 'none'}}>Physician Login &nbsp;&nbsp;&nbsp;</NavLink> */}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;