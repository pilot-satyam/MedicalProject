import { NavLink } from "react-router-dom";
import styled from "styled-components";
import '../Style/Global.css';
import { Button } from "react-bootstrap";

const Content = ({ myData }) => {
  const { name } = myData;

  return (
   
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <br/>
            <br/>
              
            <h1> {name} </h1>
            <p>
            Here at Eye Physicians of I-myEye, we are dedicated to ensuring that our patients get the vision they deserve.
            We are also dedicated to making sure that all of our patients have healthy eyes.<br/>
            Our entire staff works together to give you a good visit every time you come into our office. We will work around your schedule and make every effort to see you in a timely fashion.
            To do this, we ask that you call ahead with any questions or concerns you have before your appointment.
            </p>
            
            <NavLink to="/contactUs"> 
              <button className="btn button btn.sm justify-content-center">Contact Us!</button>
            </NavLink>
              
            <br/>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image mt-4">
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