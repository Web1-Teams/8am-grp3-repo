import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import "./Card.css";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");    
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("The two passwords do not match!");
    } else {
      setError(""); 
      alert("The two passwords do match");
    }
  };

  return (
    <div className="forget-password-3rd-pg-center">
      <div className="forget-password-3rd-pg-form">
        <form onSubmit={handleSubmit}>
          <label className="forget-password-3rd-pg-label">Enter new password</label>
          <br />
          <Input
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <label className="forget-password-3rd-pg-label">Confirm your password</label>
          <br />
          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />

          {error && <p className="error-message">{error}</p>}

          <Button />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;