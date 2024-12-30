import React from 'react';
import HeaderSection from './HeaderSection';
import VerificationSection from './VerificationSection';
import FooterSection from './FooterSection';

import './forget.css';

function container ()  {
  return (
    <div className="container">
      <HeaderSection />
      <VerificationSection />
      <FooterSection />
    </div>
  )
}

export default container;