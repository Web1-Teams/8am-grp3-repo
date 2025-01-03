import Input from "../../components/react-fathi-input/ForgetInput";
import "../../components/react-fathi-input/Forget.css"
import { useState } from "react";
import "../../components/react-fathi-border/ForgetCard.css";
import ButtonForget from "../../components/react-fathi-button/ButtonForget";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  if (!localStorage.getItem("passwordList")) {
    localStorage.setItem("passwordList", "12345678,fathihelo,ahmadjamal2005");
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPasswords = localStorage.getItem("passwordList").split(",");

    if (password === "") {
      setError("Please enter a password");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long");
    } else if (confirmPassword === "") {
      setError("Please confirm your password");
    } else if (password !== confirmPassword) {
      setError("The two passwords do not match!");
    } else if (storedPasswords.includes(password)) {
      setError("This password has been used before. Please choose a different one.");
    } else {
      setError("");
      alert("Password has been successfully reset!");
    }
  };

  return (
    <div className="forget-password-3rd-pg-center">
      <div className="forget-password-3rd-pg-form">
        <form onSubmit={handleSubmit}>
          <label className="forget-password-3rd-pg-label">Enter new password</label>
          <br />
          <Input
            value={password}
            onChange={handlePasswordChange}
          />
          <br />

          <label className="forget-password-3rd-pg-label">Confirm your password</label>
          <br />
          <Input
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <br />

          <p className="error-message">{error}</p>
          <ButtonForget />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
