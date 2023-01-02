import { NavLink } from "react-router-dom";
import styled from "styled-components";
import '../Style/Global.css';
import { Button } from "react-bootstrap";
import { Container } from "reactstrap";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Content = ({ myData }) => {
  const { name } = myData;
 
  return (
   
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            

            <h1 className="centerIt mt-5">
            {/* <FontAwesomeIcon icon="fas fa-heading "/> */}
            {name} &nbsp;



            <i style={{fontSize:"24px"}} className='fas'>&#xf812;</i>
            </h1>
            
            {/* </h1> */}
            <p>
            Here at Eye Physicians of I-myEye, we are dedicated to ensuring that our patients get the vision they deserve.
            We are also dedicated to making sure that all of our patients have healthy eyes.<br/>
            Our entire staff works together to give you a good visit every time you come into our office. We will work around your schedule and make every effort to see you in a timely fashion.
            To do this, we ask that you mail ahead with any questions or concerns you have before your appointment.
            </p>
            <Container className="text-center">
             <NavLink to="/contactUs"> 
             
              <button className="button" outline color="secondary">Contact Us </button>
             </NavLink>
            </Container>
            
              
            <br/>
          </div>
          {/* our homepage image  hero-section-image*/}
          <div className="hero-section-image justify-content-center" style={{width:"560px",height:"400px"}} >
            <figure>
              <img
                src="AboutUsImage.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
   
  )
}




export default Content;