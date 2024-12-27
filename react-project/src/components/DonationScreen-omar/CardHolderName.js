import React from 'react';


function CardNumberField() {

    return (
    <div className="donation-screen-cardnumber">
        <label>Card Number</label>
        <br />
        <small>Enter the 16-digit card number on the card</small>
        <input
        type="tel"  
        placeholder="xxxx - xxxx - xxxx - xxxx"
        required
        maxlength="19"  
        />
    </div>
    )   

}

export default CardNumberField;
