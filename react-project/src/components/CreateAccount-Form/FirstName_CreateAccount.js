import React, { useState } from "react";
import '../CreateAccount-Form/FirstName_CreateAccount.css';

const FirstName_CreateAccount = ({ value, setValue }) => {
  const validFirstName = (firstName) => {
    const nameRegEx = /^[a-zA-Z]+$/;
    return nameRegEx.test(firstName);
  };

  const Change = (e) => {
    const firstName = e.target.value;
    setValue(firstName);

    if (!validFirstName(firstName)) {
      alert("First name must only contain letters.");
    }
  };

  return (
    <>
      <input
        type="text"
        id="Creat-account-fname"
        name="first-name"
        value={value}
        onChange={Change}
        placeholder="*First name"
        required
        pattern="[a-zA-Z]+"
      />
    </>
  );
};

export default FirstName_CreateAccount;