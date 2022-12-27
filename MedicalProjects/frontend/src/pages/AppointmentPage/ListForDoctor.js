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
                    <th>Appointment Timing</th>
                </tr>
                  
                <tr>
                    <td>1</td>
                    <td>Patient-1</td>
                    <td>12</td>
                </tr>
                
                <tr>
                    <td>2</td>
                    <td>Patient-2</td>
                    <td>13</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Patient-3</td>
                    <td>14</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Patient-4</td>
                    <td>15</td>
                </tr>

            </table>
            
        </div>
    )
}


export default ListForDoctor