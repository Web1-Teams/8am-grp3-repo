import React from "react";
import '../CreateAccount-Form/LastName_CreateAccount.css';

const LastName_CreateAccount = ({ value, setValue }) => {
  return (
   
      <input
        type="text"
        id="Creat-account-lname"
        name="last-name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="*Last name"
        required
      />
   
  );
};

export default LastName_CreateAccount;




















// import React from "react";
// import '../styles/LastName_CreateAccount.css';

// const LastName_CreateAccount= ()=> {
//   return (
//     <input
//       type="text"
//       id="Creat-account-lname"
//       name="last-name"
//       placeholder="*Last name"
//     />
//   );
// }

// export default LastName_CreateAccount;
