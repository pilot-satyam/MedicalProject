import React from 'react'

function LimitedPatient() {
    // value = appoitment 
    const [value, setValue] = useState([]);

    const handleChange = (newValue) => {
    setArray((value) => [...value, newValue]);
};
  return (
    <>
      <button onClick={handleChange}>
         Confirmation
      </button>
    </>
  )
}

export default LimitedPatient
