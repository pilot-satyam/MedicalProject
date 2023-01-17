import React, { useState, useEffect } from 'react'
import '../../Style/Global.css';
import Doctor from './Doctor';
import { loadAllDoctors } from '../../services/doctor-service';
import { Card, CardBody, CardText, Row, Col } from 'reactstrap';

function NewFeed() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadAllDoctors(page)
      .then(data => {
        setDoctors(prevDoctors => [...prevDoctors, ...data]);
        setHasMore(data.length > 0);
      })
      .catch(error => setError(error));
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='container-fluid'>
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <h1>
            Doctors List Length: {doctors.length} 
          </h1>
          {error && <p>{error}</p>}
          {
            doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))
          }
          {!hasMore && <p>No more doctors</p>}
        </Col>
      </Row>
    </div>
  );
}

export default NewFeed
