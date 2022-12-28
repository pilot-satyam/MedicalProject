import React from 'react'
import '../Style/footer.css';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
function FooterOne() {

  
  return (

    <div id="page-container">
   <div id="content-wrap">
    <footer className="text-center footercss fixed-bottom rounded-pill bottomfooter mb-0" id ="footer">
  
  <div className="container p-4 pb-0">
  
    <section className="mb-4">
     
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="https://discord.com/"
        role="button"
        > <FaDiscord className="icons" />
      </a>

      
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="https://www.youtube.com/"
        role="button"
        ><FaYoutube className="icons" /></a>

     
      <a
        className="btn text-white btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="https://www.instagram.com/"
        role="button"
        ><FaInstagram className="icons" /></a>

    </section>
  
  </div>


 
  <div className="text-center">
    {/* p-1 */}
    <span className="text-black">  @{new Date().getFullYear()} Copyright: </span> 
    <a  href="http://localhost:3000/">  ImyEyeCareCenter.com  </a>
  </div>
  
</footer>
</div>

</div>
  )
}

export default FooterOne

