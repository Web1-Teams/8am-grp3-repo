import CardNumberField from "./components/CardHolderName";
import CardHolderName from "./components/CardNumberHolder";
import CvvNumber from "./components/CvvNumber";
import "./DonationScreen.css";

function DonationComponents() {
  return(
    <>

        <form class="donation-screen-Form"> 

            <CardHolderName />
            <CardNumberField />
            <CvvNumber />
   
        </form>         

      </>
  );
}

export default DonationComponents;
