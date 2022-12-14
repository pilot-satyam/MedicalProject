import React, { useState } from "react";
// import React from 'react'
import CustomNavbar from './CustomNavbar';
import Base from './Base';

function PatientProblemDetails(props){

    const [allergies, setAllergies] = useState('');
    const [illness , setIllness] = useState('');
    const [operations , setOperations] = useState('');
    const [medications , setMedications] = useState('');
    const [exercise , setExercise] = useState('');
    const [diet,setDiet] = useState('');
    const [alcohol, setAddress] = useState('');
    const [caffeine, setCaffeine] = useState('');
    const [everhad, setEverHad] = useState('');
    const [disease, setDisease] = useState([]);
    var dList=[];

    const handleAllergyChange =(e)=>{
        setAllergies(e.target.value)
    }
    const handleIllnessChange =(e)=>{
        setIllness(e.target.value)
    }
    const handleOperationChange =(e)=>{
        setOperations(e.target.value)
    }
    const handleMedicationsChange =(e)=>{
        setMedications(e.target.value)
    }
    const handleExerciseChange =(str)=>{
        setExercise(str)
    }
    const handleDietChange =(str)=>{
        setDiet(str)
    }
    const handleAlcoholChange =(str)=>{
        setAlcohol(str)
    }
    const handleCaffeineChange =(str)=>{
        setCaffeine(str)
    }
    const handleSmokeChange =(str)=>{                   
        setSmoke(str)
    }
    const handleDisease=(key)=>{
        dList.push(lst[key])
    }


    const handleOtherChange =(e)=>{
        console.log(e.target.value)
    }

    const handleSubmit =()=>{

    }
    
    const lst=["Anemia","Asthma","Arthritis","Cancer","Gout","Diabetes","Emotional", "Disorder","Epilepsy Seizures","Fainting Spells","Gallstones","Heart Disease","Heart Attack","Rheumatic Fever","High Blood Pressure","Digestive Problems", "Ulcerative Colitis","Ulcer Disease","Hepatitis","Kidney Disease","Liver Disease","Sleep Apnea","Use a C-PAP machine","Thyroid Problems","Tuberculosis","Venereal Diseases","Neurological Disorders","Bleeding Disroders","Lung Disease","Emphysema"    ];

    return(
        <Base>
        <form className="row g-3 justify-content-center" onSubmit={handleSubmit()}>
            <h1>Patients information</h1>
            <div className="justify-content-center col-12">
            <label for='AllergiesInput'>Please list any drug allergies</label>
            <input type="text" id='AllergiesInput' onChange={(e)=>{handleAllergyChange(e)}} />
            </div>

            <div>
               {lst.map(data=>{
                return(<div><input type="checkbox" key={lst.indexOf(data)} onClick={()=>handleDisease(lst.indexOf(data))} />{data }</div>)
               })}
            </div>

            <div>
            <label className= "justify-content-center col-12" for="IllnessInput">Other illness</label>
            <input type="text" id='IllnessInput' onChange={(e)=>{handleIllnessChange(e)}} />
            </div>

            <div>
            <label for="OperationsInput">Please list any Operations and Dates of Each</label>
            <input type="text"  id='operations' onChange={(e)=>{handleOperationChange(e)}}/>
            </div>

            <div>
            <label for="MedicationsInput">Please list your Current Medications</label>
            <input type="text" id='MedicationsInput' onChange={(e)=>{handleMedicationsChange(e)}}/>
            </div>

            <h5>Healthy and Unhealthy Habits</h5>
            
            <div>
            <label for="ExerciseInput">Exercise</label>
            never<input type="radio" id="ExerciseInput" onClick={(e)=>{handleExerciseChange(e)}}/>           
            2-3days<input type="radio"  id="ExerciseInput" onClick={(e)=>{handleExerciseChange(e)}}/>
            4-5days<input type="radio"  id="ExerciseInput" onClick={(e)=>{handleExerciseChange(e)}}/>
            5+days<input type="radio"  id="ExerciseInput" onClick={(e)=>{handleExerciseChange(e)}}/>
            </div>

            <div>
            <label for="DietInput">Eating following a diet</label>
            I have a loose diet<input type="radio" id="DietInput" onClick={(e)=>{handleDietChange(e)}}/>           
            I have a strict diet<input type="radio"  id="DietInput" onClick={(e)=>{handleDietChange(e)}}/>
            I don't have a diet plan<input type="radio"  id="DietInput" onClick={(e)=>{handleDietChange(e)}}/>
            <input type="radio" id="DietInput" onClick={(e)=>{handleDietChange(e)}}/>
            </div>

            <label for="AlcoholInput" >Alcohol Consumption</label>
            I don't drink<input type="radio" id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>           
            1-2 glasses/day<input type="radio"  id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>
            3-4 glasses/day<input type="radio"  id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>
            5+ glasses/day<input type="radio"  id="AlcoholInput" onClick={(e)=>{handleAlcoholChange(e)}}/>

            <div>
            <label for="CaffeineInput">Caffeine Consumption</label>
            I don't use caffeine<input type="radio" id="CaffeineInput"  onClick={()=>{handleCaffeineChange("I don't use caffeine")}}/>           
            1-2 cups/day<input type="radio" id="CaffeineInput"  onClick={(e)=>{handleCaffeineChange("1-2 cups/day")}}/>
            3-4 cups/day<input type="radio" id="CaffeineInput"  onClick={(e)=>{handleCaffeineChange("3-4 cups/day")}}/>
            5+ cups/day<input type="radio" id="CaffeineInput"  onClick={(e)=>{handleCaffeineChange("5+ cups/day")}}/>
            </div>


            <div>
            <label for="SmokeInput" onChange={(e)=>{handleSmokeChange(e)}}> Do you smoke?</label>
            No<input type="radio"  id='SmokeInput' onClick={(e)=>{handleOtherChange(e)}} />           
            0-1 pack/day<input type="radio"  id='SmokeInput' onClick={(e)=>{handleSmokeChange(e)}}/>
            1-2 packs/day<input type="radio"  id='SmokeInput' onClick={(e)=>{handleSmokeChange(e)}}/>
            2+ packs/day<input type="radio"  id='SmokeInput' onClick={(e)=>    {handleSmokeChange(e)}}/>
            </div>  

            <div>
                <label for="">Include other comments regarding your Medical History</label>
                <input type="text" onChange={(e)=>{handleOtherChange(e)}}/>
            </div>

            <div >
            <button type="submit">submit</button>
          </div>

        </form>
        </Base>
    )
}

export default PatientProblemDetails;