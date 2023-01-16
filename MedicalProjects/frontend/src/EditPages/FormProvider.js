import React, { useState } from 'react';
import FormContext from './FormContext';

function FormProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  }

  return (
    <FormContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
