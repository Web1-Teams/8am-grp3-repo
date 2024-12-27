import React, { useState } from 'react';
import '../styles/CheckboxComponent.css';

const CheckboxComponent = () => {
  const [checked, setChecked] = useState(false);


  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <label className="Creat-account-checkbox-container">
      <input 
        type="checkbox" 
        onChange={toggleCheckbox} 
      />
      <span className="Creat-account-checkmark"></span>
      <span className="Creat-account-checkbox-text">show password</span>
    </label>
  );
}

export default CheckboxComponent;
