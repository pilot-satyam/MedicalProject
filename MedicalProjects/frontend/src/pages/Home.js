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
      const slideStyles = {
        width: "100%",
        height: "90%",
        borderRadius: "10px",
        // backgroundSize :""
        backgroundPosition: "center",
      };
  return (
    <div style={slideStyles} className="mt-5">
    <Base><br/>
        <div >
          <h2 className="centerIt">Welcome to<br/> ImyEYE Care Center &nbsp;
            <i style={{fontSize:"24px"}} className='far'>&#xf06e;</i>
          </h2>
          <p className="centerIt">We provide the best cure that you are looking for!</p>
        </div>
        <div>
        
            <Slider/>
         
            <Content myData={data} />
        </div>
    </Base>
    </div>
  )
}

export default Home

