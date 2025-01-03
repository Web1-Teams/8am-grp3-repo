import React from 'react';
import HeaderSection from '../../components/react-mayar-page/HeaderSection';
import VerificationSection from '../../components/react-mayar-page/VerificationSection';

import '../../components/react-mayar-page/Verification.css';

function container ()  {
  return (
    <div className="container">
      <HeaderSection />
      <VerificationSection />
    </div>
  )
}

export default container;