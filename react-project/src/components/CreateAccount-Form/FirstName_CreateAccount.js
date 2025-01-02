import React from "react";
import '../CreateAccount-Form/FirstName_CreateAccount.css';

const FirstName_CreateAccount = ({ value, setValue }) => {
  return (
   
      <input
        type="text"
        id="Creat-account-fname"
        name="first-name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="*First name"
        required
      />
    
  );
};

export default FirstName_CreateAccount;

































// import React from "react";
// import '../styles/FirstName_CreateAccount.css';

// const FirstName_CreateAccount = () => {
//   return (
//     <input
//       type="text"
//       id="Creat-account-fname"
//       name="first-name"
//       placeholder="*First name"
//     />
//   );
// };

// export default FirstName_CreateAccount;
