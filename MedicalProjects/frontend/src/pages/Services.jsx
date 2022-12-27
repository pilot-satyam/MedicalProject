import Base from "../Components/Base"
import {Link} from recat
import Content from "../Components/Content";
const Services = () => {
    const data = {
        name: "Our Services",
      };
    return (
        <Base>
            <Content myData={data} />
            <div class="row">
                 <div class="col-sm-4">
                    <Link to="./doctor">
                        <button>
                            Find Doctor
                        </button>
                    </Link>
                 </div>
                 
                 <div class="col-sm-4">.col-sm-4
                 <Link to="./doctor">
                        <button>
                            Add Appoitment 
                        </button>
                    </Link>
                 </div>
                 <div class="col-sm-4">.col-sm-4
                 <Link to="./doctor">
                        <button>
                            Address
                        </button>
                    </Link>
                 </div>
            </div>
        </Base>
    );
}
export default Services