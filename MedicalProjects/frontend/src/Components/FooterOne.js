import React from 'react'
import '../Style/footer.css';
import { FaDiscord, FaInstagram, FaYoutube,FaFacebook,FaGoogle,FaTwitter,FaLinkedin } from "react-icons/fa";
// function FooterOne() {

  
// //   return (

//     <div id="page-container">
//    <div id="content-wrap">
//     <footer class="text-center footercss fixed-bottom rounded-pill bottomfooter mb-0" id ="footer">
  
//   <div class="container p-4 pb-0">
  
//     <section class="mb-4">
     
//       <a
//         class="btn text-white btn-floating m-1"
//         style={{backgroundColor: "#3b5998"}}
//         href="https://discord.com/"
//         role="button"
//         > <FaDiscord className="icons" />
//       </a>

      
//       <a
//         class="btn text-white btn-floating m-1"
//         style={{backgroundColor: "#55acee"}}
//         href="https://www.youtube.com/"
//         role="button"
//         ><FaYoutube className="icons" /></a>

     
//       <a
//         class="btn text-white btn-floating m-1"
//         style={{backgroundColor: "#dd4b39"}}
//         href="https://www.instagram.com/"
//         role="button"
//         ><FaInstagram className="icons" /></a>

// //     </section>
  
// //   </div>


 
//   <div class="text-center">
//     {/* p-1 */}
//     <span class="text-black">  @{new Date().getFullYear()} Copyright: </span> 
//     <a  href="http://localhost:3000/">  ImyEyeCareCenter.com  </a>
//   </div>
  
// // </footer>
// // </div>

// // </div>
//   )
// }

// export default FooterOne
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import{faFacebook} from 'fortawesome/free-brands-svg-icons'

function FooterOne(){
  return (
    // const icon = <FontAwesomeIcon icon = {faFacebook} />
    <MDBFooter id ="footer" className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/' role='button'>
          <FaFacebook className="icons" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.twitter.com/' role='button'>
          <FaTwitter className="icons" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='http://localhost:3000/home' role='button'>
          <FaGoogle className="icons" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' role='button'>
            <FaInstagram className='icons'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' role='button'>
          <FaLinkedin className="icons" />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
           I-Myeye is one of the Best EYE CARE in India.
          </p>
        </section>
      </MDBContainer>
      <div className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='/'>
          ImyEye
        </a>
      </div>
    </MDBFooter>

   
  // footer{
  //   padding:14rem 0 9rem 0;

  // }

  );
}
export default FooterOne;
