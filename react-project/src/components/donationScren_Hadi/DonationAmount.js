import React from "react";

function DonationAmount()
{
    return(
        <div className="donation-screen-amount">
        <label for="donation-screen-amount">Amount</label>
        <input type="text" placeholder="Money Amount" required id="amount" />
      </div>
    )
}
export default DonationAmount;
