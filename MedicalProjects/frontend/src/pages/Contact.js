import React from 'react';
import Base from "../Components/Base";
import '../Style/Global.css';
import '../Style/placeholderTop.css';
import '../Style/backgrd.css'
import userContext from '../context/userContext';
const Contact=()=>{

  return (
    <userContext.Consumer>
     {
      (user)=>{
        <Base>
        <h1>
        Welcome{user.name}
        </h1>
        </Base>
      }
     }
</userContext.Consumer>
  )
}

export default Contact


