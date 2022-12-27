import Base from "../Components/Base"
import { Link } from 'react-router-dom';
import Content from "../Components/Content";
import '../Style/Global.css';
import Contact from "./Contact";
import { Container } from "reactstrap";
const Services = () => {
    const data = {
        name: "Our Services",
      };
    return (
        <Base>
            <Content myData={data} />

        <container className="centerIt">
            <div class="col-container bg1">
                <div class="col">
                    <p>Cure with Care Center</p>
                    <p> and make your vision clear</p>
                    <Link to="/doctor">
                        <button className="button">
                            Find Doctor
                        </button>
                    </Link>
                </div>

                <div class="col bg2">
                    
                    <p>Want to book Appointment</p>
                    <p>to avaid the last minute rush then</p>
                    <p>book your Appointment</p>
                    <p>here!</p>
                    <Link to="/showAppointment">
                        <button className="button">
                            Add Appointment 
                        </button>
                    </Link>
                
                </div>

                <div class="col bg1">
                    
                    <p>See this address </p>
                    <p>for in person meeting.</p>
                    <Link to="/address">
                        <button className="button">
                            Address
                        </button>
                    </Link>
                </div>
            </div>

        </container>
           
        </Base>
    );
}
export default Services