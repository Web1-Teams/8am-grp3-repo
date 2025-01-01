import React, { useEffect } from "react";
import CardHolderName from "../components/DonationScreen-omar/CardNumberHolder";
import CardNumberField from "../components/DonationScreen-omar/CardHolderName";
import CvvNumber from "../components/DonationScreen-omar/CvvNumber";
import DonationAmount from "../components/donationScren_Hadi/DonationAmount";
import DonationDate from "../components/donationScren_Hadi/DonationDate";
import DonationInput from "../components/donationScren_Hadi/DonationInput";
import "../components/DonationScreen-omar/Donation.css";

function DonationScreenApp() {
  useEffect(() => {
    const cardNumber = document.getElementById("cardNumber");
    const cvvNumber = document.getElementById("cvv");
    const date = document.querySelectorAll("#date");
    const amount = document.getElementById("amount");

      cardNumber.addEventListener("input", function () {
      // Allow only numbers 
        let numbersOnly = cardNumber.value.replace(/[^0-9]/g, "");
        let newString = "";

        // add the - after the forth character automatic 
        for (let i = 0; i < numbersOnly.length; i++) {
          if (i > 0 && i % 4 === 0) {
            newString += "-";
          }
          newString += numbersOnly[i];
        }

        cardNumber.value = newString;
      });
    

      cvvNumber.addEventListener("input", function () {
        cvvNumber.value = cvvNumber.value.replace(/[^0-9]/g, "");
      });
    

      date[0].addEventListener("input", function () {
        // Allow only numbers 
        date[0].value = date[0].value.replace(/[^0-9]/g, "");
      
        // Ensure the value does not exceed 12
        if (date[0].value > 12) {
          date[0].value = date[0].value[0] + "";
        }
      });
      
      date[1].addEventListener("input", function () {
        // Allow only numbers 
        date[1].value = date[1].value.replace(/[^0-9]/g, "");
      });
    
      amount.addEventListener("input", function () {
        // Allow only numbers 
        amount.value = amount.value.replace(/[^0-9]/g, "");
        
        // it can't start from 0 
        if (amount.value === "0") {
          amount.value = "";
        }
      });
        
  }, []);

  return (
    <>
      <div className="donation-screen-background-container">
        <form className="donation-screen-Form">
        <CardNumberField />
          <CardHolderName />
          <CvvNumber />
          <DonationDate />
          <DonationAmount />
          <DonationInput />
        </form>
      </div>
    </>
  );
}

export default DonationScreenApp;