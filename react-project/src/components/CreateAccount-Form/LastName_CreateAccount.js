import React from "react";
import '../CreateAccount-Form/LastName_CreateAccount.css';

const LastName_CreateAccount = ({ value, setValue }) => {
  const validLastName = (lastName) => {
    const nameRegEx = /^[a-zA-Z]+$/;
    return nameRegEx.test(lastName);
  };

  const Change = (e) => {
    const lastName = e.target.value;
    setValue(lastName);

    if (!validLastName(lastName)) {
      alert("Last name must only contain letters.");
    }
  };

  return (
    <>
      <input
        type="text"
        id="Creat-account-lname"
        name="last-name"
        value={value}
        onChange={Change}
        placeholder="*Last name"
        required
        pattern="[a-zA-Z]+"
      />
    </>
  );
};

export default LastName_CreateAccount;




