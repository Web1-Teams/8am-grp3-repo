import CardNumberField from "./CardHolderName";
import CardHolderName from "./CardNumberHolder";
import CvvNumber from "./CvvNumber";
import '../DonationScreen.css';

function DonationScreen() {
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
  
  export default DonationScreen;
  