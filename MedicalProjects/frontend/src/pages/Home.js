// import CustomNavbar from "../components/CustomNavbar";
import Base from "../Components/Base";
import Content from "../Components/Content"

import React from 'react'
import { NavLink } from "react-router-dom";
function Home() {

    const data = {
        name: "ImyEYE Care Center",
      };
  return (
    <Base>
       <Content myData={data} />;
    </Base>
  )
}

export default Home

