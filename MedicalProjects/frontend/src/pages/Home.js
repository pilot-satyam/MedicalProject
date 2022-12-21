// import CustomNavbar from "../components/CustomNavbar";
import Base from "../Components/Base";
import Content from "../Components/Content"
import Slider from "../pages/Slider"
import React from 'react'
import { NavLink } from "react-router-dom";
import '../Style/Global.css';
function Home() {

    const data = {
        name: "ImyEYE Care Center",
      };
  return (
    <Base><br/>
        <div >
          <h2 className="centerIt">Welcome to ImyEYE care center</h2>
          <p className="centerIt">We provide the best cure that you are looking for!</p>
            <Slider />
            <Content myData={data} />
        </div>
       
       
    </Base>
  )
}

export default Home

