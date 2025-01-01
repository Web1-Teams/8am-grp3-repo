import React from "react";
function DonationDate()
{
    return(
        <div className="donation-screen-date">
          <label for="donation-screen-date">Expiry Date</label>
          <br />
          <small>Enter the expiration date of the card</small>
          <input
            id="date"
            required
            type="text"
            placeholder="MM"
            maxlength="2"
          />
          <span>/</span>
          <input
            id="date"
            required
            type="text"
            placeholder="YYYY"
            maxlength="4"
          />
        </div>
    )
}
export default DonationDate;
