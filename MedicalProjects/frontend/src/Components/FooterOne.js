import React from 'react'
import '../Style/footer.css';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
function FooterOne() {

  
  return (
    <footer class="text-center text-white footercss border-bottom fixed-bottom">
  
  <div class="container p-4 pb-0">
  
    <section class="mb-4">
     
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="https://discord.com/"
        role="button"
        > <FaDiscord className="icons" />
      </a>

      
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="https://www.youtube.com/"
        role="button"
        ><FaYoutube className="icons" /></a>

     
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="https://www.instagram.com/"
        role="button"
        ><FaInstagram className="icons" /></a>

    </section>
  
  </div>


 
  <div class="text-center p-3" >
    <span class="text-black">  @{new Date().getFullYear()} Copyright: </span> 
    <a  href="http://localhost:3000/home">  ImyEyeCareCenter.com  </a>
  </div>
  
</footer>
  )
}

export default FooterOne

