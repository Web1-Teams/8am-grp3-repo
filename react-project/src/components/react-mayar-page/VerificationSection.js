import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Verification.css';
function VerificationSection () {
  const [code, setCode] = useState(['', '', '', '']);
  const correctCode = '1234';
  const navigate = useNavigate();
  const updateCode = (position, event) => {
    let updatedCode = code.map((item, idx) =>
      idx === position ? event.target.value.slice(0, 1) : item
    );
    setCode(updatedCode);
    if (event.target.nextElementSibling && event.target.value) {
      event.target.nextElementSibling.focus();
    }
  };
function handleSend () {
    const enteredCode = code.join('');
    if (enteredCode === correctCode) {
      navigate('/password-reset');
    }else
    alert('invalid code enter it again');

  }
    return (
    <div className="verification-container">
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
    <footer className="footer">
      <input onClick={handleSend} type="submit" className="forget-password-2rd-pg-input-submit" value="Send"></input>
    </footer>
  </div>
);
}
export default VerificationSection;