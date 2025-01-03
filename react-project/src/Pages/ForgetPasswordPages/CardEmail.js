import InputEmail from "../../components/react-fathi-input/InputEmail";
import "../../components/react-fathi-border/EmailCard.css";
import ButtonSendEmail from "../../components/react-fathi-button/ButtonSendEmail";
import { useState } from "react";
import { Link } from "react-router-dom";

function CardEmail() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!localStorage.getItem("emailList")) {
    localStorage.setItem("emailList", "test@example.com,fathi@gmail.com,mohamad@yahoo.com,ahmad@gmail.com,khaled@gmail.com,mo@gmail.com");
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const isEmailValid = () => {
    const storedEmails = localStorage.getItem("emailList").split(",");
    return storedEmails.includes(email);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    if (email === "") {
      setMessage("Please enter an email");
    } else if (isEmailValid()) {
      setMessage("");
      alert("Email is valid");
    } else {
      setMessage("Email does not exist");
    }
  };

  return (
    <div className="body-forgetPass">

    <div className="anchor-pane">
      <div className="inner-pane">
        <form className="form-forget" onSubmit={handleValidation}>
          <InputEmail value={email} onChange={handleChange} />
          <Link
            to={isEmailValid() ? "/Verification-page" : "#"}
            onClick={(e) => {
              if (!isEmailValid()) {
                e.preventDefault();
                setMessage("Email does not exist");
              }
            }}
          >
            <ButtonSendEmail />
          </Link>
          <p>{message}</p>
        </form>
      </div>
    </div>
    </div>

  );
}

export default CardEmail;
