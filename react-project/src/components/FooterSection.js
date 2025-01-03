import React from 'react';
import {  useNavigate } from 'react-router-dom';

import './forget.css';

function FooterSection  ({ code }){
  const correctCode = '1234';
  const navigate = useNavigate(); 

  function  handleSend () {
    const enteredCode = code.join('');
    if (enteredCode === correctCode) {
      navigate('path of fathi code'); 
    } 
    else
    {
      alert('invalid code enter it again');
    }
  }

  return (

    <footer className="footer">
      
      <input onClick={handleSend} type="submit" className="forget-password-2rd-pg-input-submit" value="Send"></input>
      
    </footer>
  )
}

export default FooterSection;
