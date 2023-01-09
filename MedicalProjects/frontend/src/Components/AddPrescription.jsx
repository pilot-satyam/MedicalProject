import { useState } from "react";
import { useEffect } from "react";
import { Card,CardBody, Input,Form, Label,Container,Button } from "reactstrap";
import { loadAllDoctors } from "../services/doctor-service";

const AddPrescription=()=>{

    //use to destructure array so that data can be fetched from backend
   const [doctors,setDoctors] = useState([])

    useEffect(
        ()=>{
            loadAllDoctors().then((data)=>{
                console.log(data) //data comes here in log
                setDoctors(data)
            }).catch(error=>{
                console.log(error)
            })
        },[] //passing blank because it should only run in starting
    )
    return(
        <div className="wrapper">
        <Card className="shadow-sm">
            <CardBody>
                <h3> User's Prescription </h3>
                <Form>
                    <div className="my-3">
                        <Label for="oldRemarks">Old Remarks</Label>
                        <Input 
                        type="text" 
                        id="oldRemarks"
                        placeholder="Old Remarks" 
                        />
                    </div>

                    <div className="my-3">
                        <Label for="newRemarks">New Remarks</Label>
                        <Input 
                        type="text" 
                        id="newRemarks"
                        placeholder="New Remarks" 
                        />
                    </div>
                    <div className="my-3">
                        <Label for="doctor">Select Doctor</Label>
                        <Input 
                        type="select" 
                        id="doctor"
                        placeholder="Doctor" 
                        >
                            {/* getting the data from database */}
                       {
                        doctors.map((doctor)=>(
                            <option value={doctor.DoctorId} key={doctor.DoctorId}>
                                {doctor.name}
                            </option>
                        ))
                       }
                        </Input>
                    </div>
                    <Container className="text-center">
                        <Button color="primary">Create Prescription</Button>
                        <Button className="ms-2" color="danger">Reset Button</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>
        </div>

    );
}
export default AddPrescription;