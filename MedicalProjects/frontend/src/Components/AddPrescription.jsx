import { useState } from "react";
import { useEffect } from "react";
import { Card,CardBody, Input,Form, Label,Container,Button } from "reactstrap";
import { loadAllDoctors } from "../services/doctor-service";
import JoditEditor from "jodit-react";
import {toast} from 'react-toastify'
import { useRef } from "react";
import { loadAllUsers } from "../services/user-service";
import { getCurrentUserDetail } from "../auth";
import { createPrescription as doCreatePrescription } from "../services/prescription-service";



const AddPrescription=()=>{

    const editor = useRef(null)
    // const [content,setContent] = useState('')

    //use to destructure array so that data can be fetched from backend
   const [doctors,setDoctors] = useState([])
   const[users,setUsers] = useState([])
   const[currentUser,setCurrentUser] = useState(undefined)
   //since we need to pass it to server that's why using it as object initially
   const[prescription,setPrescription] = useState({
      oldRemarks : '',
      newRemarks : '',
      doctorId : '',
      id:'',
      alcohol:'',
      smoke:'',
      operations:''
   })

    useEffect(
        ()=>{
            setCurrentUser(getCurrentUserDetail())
            loadAllDoctors().then((data)=>{
                console.log(data) //data comes here in log
                setDoctors(data)
            }).catch(error=>{
                console.log(error)
            })
        },[] //passing blank because it should only run in starting,otherwise server wil keep running till infinity
    )

    useEffect(
        ()=>{
            loadAllUsers().then((data)=>{
                console.log(data)
                setUsers(data)
            }).catch(error=>{
                console.log(error)
            })
        },[]
    )

    //field changed fn
    const fieldChanged=(event)=>{
        setPrescription({...prescription,[event.target.name]:event.target.value})
    }

    //create prescription function

    const createPrescription = (event)=>{
        event.preventDefault();
        // console.log("form submitted")
        console.log(prescription)
        if(prescription.oldRemarks.trim() === ''){
            toast.error("Old Remarks Required");
        }
        if(prescription.newRemarks.trim() === ''){
            toast.error("New Remarks Required");
        }
        if(prescription.DoctorId === ''){
            toast.error("Select A Doctor");
        }
        if(prescription.id ===''){
            toast.error("Select Patient")
        }
        if(prescription.alcohol === ''){
            toast.error("Required alcohol consumption")
        }
        if(prescription.smoke === ''){
            toast.error("Required smoke consumption")
        }
        if(prescription.operations === ''){
            toast.error("Required operations history")
        }

        //submit the form on server
        prescription['id'] = currentUser.id
        doCreatePrescription(prescription).then(data=>{
            toast.success("Prescription Created")
            // console.log(prescription)


            setPrescription({
                oldRemarks : '',
                newRemarks : '',
                doctorId : '',
                id:'',
                alcohol:'',
                smoke:'',
                operations:''
            })
        }).catch((error)=>{
            toast.error("Prescription Not Created Due TO Some Error Caused!!!")
            // console.log(error)
        })
    }

    return(
        <div className="wrapper">
        <Card className="shadow-sm">
            <CardBody>
                {/* {JSON.stringify(prescription)} */}
                <h3> User's Prescription </h3>
                <Form onSubmit={createPrescription}>
                    <div className="my-3">
                        <Label for="oldRemarks">Old Remarks</Label>
                        <Input 
                        type="text" 
                        id="oldRemarks"
                        placeholder="Old Remarks" 
                        onChange={fieldChanged}
                        name="oldRemarks"
                        />
                    </div>

                    <div className="my-3">
                        <Label for="newRemarks">New Remarks</Label>
                        <Input 
                        type="text" 
                        id="newRemarks"
                        placeholder="New Remarks" 
                        onChange={fieldChanged}
                        name="newRemarks"
                        />
                        {/* <JoditEditor 
                        ref = {editor}
                        value = {content}
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			            onChange={newContent => {}}
                        /> */}
                    </div>
                    <div className="my-3">
                        <Label for="doctor">Select Doctor</Label>
                        <Input 
                        type="select" 
                        id="doctor"
                        name="doctorId"
                        onChange={fieldChanged}
                        placeholder="Doctor" 
                        defaultValue={0}
                        >
                            {/* getting the data from database */}

                            <option disabled value={0}>---Select Doctor---</option>
                       {
                        doctors.map((doctor)=>(
                            <option value={doctor.doctorId} key={doctor.doctorId}>
                                {doctor.name}
                            </option>
                        ))
                       }
                        </Input>

                        <div className="my-3">
                        <Label for="users">Select Patient</Label>
                        <Input 
                        type="select" 
                        id="user"
                        name="id"
                        onChange={fieldChanged}
                        placeholder="Patient" 
                        defaultValue={0}
                        >
                            {/* getting the data from database */}
                            <option disabled value={0}>---Select Patient---</option>
                       {
                        users.map((user)=>(
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        ))
                       }
                        </Input>
                    </div>
                    </div>
                    <div className="my-3">
                        <Label for="alcohol">Alcohol</Label>
                        <Input 
                        type="text" 
                        id="alcohol"
                        placeholder="alcohol" 
                        onChange={fieldChanged}
                        name="alcohol"
                        />
                    </div>
                    <div className="my-3">
                        <Label for="smoke">Smoke</Label>
                        <Input 
                        type="text" 
                        id="smoke"
                        placeholder="smoke" 
                        onChange={fieldChanged}
                        name="smoke"
                        />
                    </div>
                    <div className="my-3">
                        <Label for="operations">Operations</Label>
                        <Input 
                        type="text" 
                        id="operations"
                        placeholder="operations" 
                        onChange={fieldChanged}
                        name="operations"
                        />
                    </div>
                    <Container className="text-center">
                        <Button type="submit" color="primary">Create Prescription</Button>
                        <Button className="ms-2" color="danger">Reset Button</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>
        </div>

    );
}
export default AddPrescription;