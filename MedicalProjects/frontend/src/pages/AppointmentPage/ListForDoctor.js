import React from 'react'
import { useState } from 'react';
import Base from "../Components/Base";
import axios from 'axios';
import { Button } from 'react-bootstrap';

function Appointmentlist(){
    return(
        <div>
            <table className="table table-bordered">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Appointment Timing</th>
                </tr>
                <h5 className="text-center">Doctor-1</h5>  
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

                <h5 className="text-center">Doctor-2</h5>  
                <tr>
                    <td>5</td>
                    <td>Patient-5</td>
                    <td>16</td>
                </tr>
                
                <tr>
                    <td>6</td>
                    <td>Patient-6</td>
                    <td>17</td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>Patient-7</td>
                    <td>18</td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>Patient-8</td>
                    <td>19</td>
                </tr>

                <h5 className="text-center">Doctor-3</h5>  
                <tr>
                    <td>9</td>
                    <td>Patient-9</td>
                    <td>20</td>
                </tr>
                
                <tr>
                    <td>10</td>
                    <td>Patient-10</td>
                    <td>21</td>
                </tr>

                <tr>
                    <td>11</td>
                    <td>Patient-12</td>
                    <td>22</td>
                </tr>

                <tr>
                    <td>12</td>
                    <td>Patient-12</td>
                    <td>23</td>
                </tr>
                
            </table>
        </div>
    )
}


export default Appointmentlist