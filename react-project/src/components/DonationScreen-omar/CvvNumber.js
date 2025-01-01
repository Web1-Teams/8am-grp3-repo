import React from 'react';

function CvvNumber() {

    return (
    <div className="donation-screen-cvv">
        <label>CVV Number</label>
        <br />
        <small>Enter the 3 or 4 digits number on the card</small>
        <input
          type="text"
          required
          id='cvv'
          placeholder="3-digit code is on the back of the card"
          maxlength="4"
        />
    </div>
    );

}

export default CvvNumber;
