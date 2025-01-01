import React from 'react';


function CardHolderName() {

    return (
    <div className="donation-screen-name">
        <label>Card Number Holder</label>
        <br/>
        <small>Enter name card holder on the card</small>
        <input type="text" required placeholder="Donor Name" id='donorName' />
    </div>
    )   

}

export default CardHolderName;
