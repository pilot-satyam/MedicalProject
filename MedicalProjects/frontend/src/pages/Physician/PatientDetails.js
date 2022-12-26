import React from 'react'
import { useState } from 'react';
import  '../../Style/Global.css';

import Base from '../../Components/Base';

function PatientDetails(props)
{
    const [prescription, setPrescription] = useState('');

    const handlePrescription =(e)=>{
        setPrescription(e.target.value)
    }  
    
    const handleSubmit=()=>{

    }

    return (

        

                <Base>

                <table className="table table-bordered ">
                    <h3 className = "text-center">Patient Details</h3>
                    <tr classNAme="col">
                        <td className="col-6">Name of Patient</td>
                        <td className="col-6">ejndjen</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>kewmdewkd</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>lw,dwld,</td>
                    </tr>
                    <tr>
                        <td>Any Drug allergies</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Other illness</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Any Operations</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Current Medications</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Exercise</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Eating</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Alcohol Consumtipn</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Caffeine Consumption</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Smoke</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Comments regarding Medical History</td>
                        <td>10</td>
                    </tr>
                </table>




                        <form className="row g-3 justify-content-center" onSubmit={(e) => {handleSubmit(e)}} >
                            <div className="justify-content-center col-12" >
                                <label className="text-center">Prescription</label>
                                <input type="text" className="form-control" placeholder="Prescription" rows="3" required onChange={(e)=>{handlePrescription(e)}}  />
                            </div>
                        </form>
              </Base>
    )
}

export default PatientDetails