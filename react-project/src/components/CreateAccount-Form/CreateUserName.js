import React, { useState } from "react";
import '../CreateAccount-Form/CreateAccountUserName.css';

const CreateAccountUsername = ({ value, setValue }) => {
  const [valid, setValid] = useState("");

  
  const validUsername = (username) => {
   
    const usernameRegEx = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegEx.test(username);
  };

  const Change = (newUsername) => {
    const username = newUsername.target.value;
    setValue(username);
    
   
    if (!validUsername(username)) {
      setValid("Username must be at least 3 characters.");
    } else {
      setValid("");
    }
  };

  return (
    <div className="Create-account-Username">
      <form>
        <input
          type="text"
          id="Create-account-Username"
          name="username"
          placeholder="*Username"
          value={value}
          onChange={(newUsername) => Change(newUsername)}
          required
        />
        {valid && <p className="error-message">{valid}</p>} 
      </form>
    </div>
  );
};

export default CreateAccountUsername;