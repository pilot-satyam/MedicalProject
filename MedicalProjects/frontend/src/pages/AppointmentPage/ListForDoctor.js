import React from 'react'
import { useState } from 'react';
// import Base from "../Components/Base";
import axios from 'axios';
import { Button } from 'react-bootstrap';

function ListForDoctor(props){
    return(
        <div>
            <h3 className="text-center mt-4">Doctor-1</h3>
            <table className="table table-bordered">
            <h6 className="text-center mt-4">{props.name}</h6>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Update Appointment</th>
                    <th>Appointment Timing</th>
                </tr>
                  
                <tr>
                    <td>{props.id}</td>
                    <td>{props.p_name}</td>
                    <td>{props.timing}</td>
                </tr>
                
                <tr>
                    <td>{props.id}</td>
                    <td>{props.p_name}</td>
                    <td>{props.timing}</td>
                </tr>

                <tr>
                    <td>{props.id}</td>
                    <td>{props.p_name}</td>
                    <td>{props.timing}</td>
                </tr>

                <tr>
                    <td>{props.id}</td>
                    <td>{props.p_name}</td>
                    <td>{props.timing}</td>
                </tr>

            </table>
            
        </div>
    )
}


export default ListForDoctor