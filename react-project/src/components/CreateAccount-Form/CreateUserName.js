import React from "react";
import '../CreateAccount-Form/CreateAccountUserName.css';

const CreateAccountUsername = () => {
  return (
    <div className="Create-account-Username">
      <form>
        <input
          type="text"
          id="Create-account-Username" 
          name="username" 
          placeholder="*Username"
        />
      </form>
    </div>
  );
};

export default CreateAccountUsername;
