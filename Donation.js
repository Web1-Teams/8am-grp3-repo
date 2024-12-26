const cardNumber = document.getElementById("cardnumber");
      const cvvNumber = document.getElementById("cvv");
      const date = document.querySelectorAll("#date");
      const amount = document.getElementById("amount");
  
      cardNumber.addEventListener("input", function () {
  
      let numbersOnly = cardNumber.value.replace(/[^0-9]/g, "");
  
      let newString = "";
  
      for (let i = 0; i < numbersOnly.length; i++) {
        if (i > 0 && i % 4 == 0) {
          newString += "-";
        }
        newString += numbersOnly[i];
      }
  
      cardNumber.value = newString;
  
    });

    cvvNumber.addEventListener("input" , function(){
      cvvNumber.value = cvvNumber.value.replace(/[^0-9]/g , "");
    });
  
    date[0].addEventListener("input" , function(){
      date[0].value = date[0].value.replace(/[^0-9]/g , "");
    });
    date[1].addEventListener("input" , function(){
      date[1].value = date[1].value.replace(/[^0-9]/g , "");
    });


    amount.addEventListener("input" , function(){

      amount.value = amount.value.replace(/[^0-9]/g , "");

      if (amount.value === '0') {
        amount.value = "";
      }

    });