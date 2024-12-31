import "./donation-screen-background-container.css"
import "./donation-screen-date.css"
import "./donation-screen-Form.css"
function DonationAmount()
{
    return(
        <div className="donation-screen-amount donation-screen-background-container donation-screen-Form">
        <label for="donation-screen-amount">Amount</label>
        <input type="text" placeholder="Money Amount" required id="amount" />
      </div>
    )
}
export default DonationAmount;
