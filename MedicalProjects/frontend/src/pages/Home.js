// import CustomNavbar from "../components/CustomNavbar";
import Base from "../Components/Base";
import Content from "../Components/Content"
import Slider from "../pages/Slider"
import React from 'react'
import { NavLink } from "react-router-dom";
import '../Style/Global.css';
import SliderAuto from "../pages/SliderAuto";
function Home() {

    const data = {
        name: "ImyEYE Care Center",
      };
  return (
    <section style={{width :"100%" , heigth:"100%"}}>
    <Base><br/>
    {/* <FontAwesomeIcon icon={['fab', 'twitter']} />

<FontAwesomeIcon icon={['fab', 'facebook']} />

<FontAwesomeIcon icon={['fab', 'linkedin']} />

<FontAwesomeIcon icon={['fab', 'github']} /> */}

        <div >
          <h2 className="centerIt">Welcome to ImyEYE Care Center</h2>
          <p className="centerIt">We provide the best cure that you are looking for!</p>
          <container style={{width :"50%" , heigth:"50%"}}>
            <SliderAuto />
          </container>
            <Content myData={data} />
          
        </div>
       
       
    </Base>
    </section>
  )
}

export default Home

