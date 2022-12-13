import Base from "../Components/Base"

const Services = () => {
    return (
        <Base>
        <div class ="col col2">
            <table>
                <tr>
                    <td>
            <h2 className="text-center">
              <span>Our Services</span>  
            </h2>
            <p>
                Our physicians are board certified Ophthalmologists and Optometrists 
                with extensive surgical and medical training.
                Our patients are more than just a number. As we are the only full-time Ophthalmologists in Hardin County, 
                our patients are the people we live and work with in our community.
            </p>
            </td>
            <td>
         <img loading="lazy" src="/wp-content/uploads/2020/05/Image00147-300x178.jpg" alt="" width="300" height="178" class="rounded float-left" srcset="https://etowneye.com/wp-content/uploads/2020/05/Image00147-300x178.jpg 300w, https://etowneye.com/wp-content/uploads/2020/05/Image00147-768x455.jpg 768w, https://etowneye.com/wp-content/uploads/2020/05/Image00147.jpg 800w" sizes="(max-width: 300px) 100vw, 300px"/>
         </td>
         </tr>
         </table>

        </div>
        <br/>
        <div>
            <table>
                <tr>
                    <td>
            <h2 className="text-center">About Us</h2>
            <br></br>
            
            <p>
            Here at Eye Physicians of I-myEye, we are dedicated to ensuring that our patients get the vision they deserve.
             We are also dedicated to making sure that all of our patients have healthy eyes. 
            </p>
            <br/>
            <p>
            Our entire staff works together to give you a good visit every time you come into our office. We will work around your schedule and make every effort to see you in a timely fashion.
             To do this, we ask that you call ahead with any questions or concerns you have before your appointment.  
            </p>
            </td>
            <td>
                <img src="AboutUsImage.jpg" alt="About Image" className="img-fluid rounded float-left"/> 
            </td>
            </tr>
            </table>
        </div>
        
        </Base>
    );
}
export default Services