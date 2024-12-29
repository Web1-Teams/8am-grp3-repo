import React, { useState } from 'react';
import './forget.css';
function Section () {
  const [code, setCode] = useState(['', '', '', '']);

  const updateCode = (position, event) => {
    let updatedCode = code.map((item, idx) => 
      idx === position ? event.target.value.slice(0, 1) : item
    );
    
    setCode(updatedCode);

    if (event.target.nextElementSibling && event.target.value) {
      event.target.nextElementSibling.focus();
    }
  };

  return (
    <section className="verification-section">
      {code.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          maxLength="1"
          className="circle-input"
          value={digit}
          onChange={(e) => updateCode(idx, e)}
        />
      ))}
    </section>
  )
}

export default Section;
