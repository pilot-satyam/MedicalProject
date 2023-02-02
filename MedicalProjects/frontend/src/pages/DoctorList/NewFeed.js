import React, { useState } from 'react'
import '../../Style/Global.css';
import { useEffect } from 'react';
import Doctor from './Doctor';
import { loadAllDoctors } from '../../services/doctor-service';

import { Card, CardBody, CardText,Row,Col } from 'reactstrap';

function NewFeed() {

    //here we use useState so that we can save the data cmng from useEffect
    const[doctors,setDoctors] = useState([]) //initializing the state with an empty array
    const[error,setError] = useState(null)

   
   
    //useState for infinite scroll
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // useEffect(()=>{

    //     //---->load all doctors from server<------
    //     loadAllDoctors()
    //         .then((data)=>{
    //             setDoctors(data)
    //         })
    //         .catch((error)=>{
    //             setError(error)
    //         })

    // },[])


    //useEffect with the fetching data nd infinite scroll
  
    useEffect(() => {
        fetchData();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight ||
          loading
        )
          return;
        fetchData();
      };

      const fetchData = async () => {
        setLoading(true);

      
        //loads all doctors for server
        loadAllDoctors()
                .then((data)=>{
                    setDoctors(prevDoctors => [...prevDoctors, ...data]);
                    setHasMore(data.length > 0);
                    setLoading(false);
                })
                .catch((error)=>{
                    setError(error);
                    setLoading(false);
                })

       
      };

   return(
        
    <div className='container-fluid'>
        <Row>
            <Col md={{
                size:10,
                offset:1
            }}>
                {/* <h1>
                    Doctors List Length: {doctors.length} 
                </h1> */}
                {error && <p>{error}</p>}
                {
                    doctors.map((doctor)=>(
                        <Doctor key={doctor.id} doctor={doctor} /> //passing the doctor object as a prop
                    ))
                } 
            
            {/* //Will load more data if it comes to end of the page */}
            {loading && <p>Loading...</p>}
            {!loading && !hasMore && <p>No more data to show</p>}    
            </Col>
        </Row>
    </div>
    
   )
}

export default NewFeed
