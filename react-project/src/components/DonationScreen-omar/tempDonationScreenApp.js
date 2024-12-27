import CardNumberField from "./CardHolderName";
import CardHolderName from "./CardNumberHolder";
import CvvNumber from "./CvvNumber"
import "./Donation.css";

function tempDonationScreenApp() {
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
export default tempDonationScreenApp;