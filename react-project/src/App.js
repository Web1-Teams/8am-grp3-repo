import React, { useState } from "react";
import LastName_CreateAccount from './components/CreateAccount-Form/LastName_CreateAccount';
import FirstName_CreateAccount from './components/CreateAccount-Form/FirstName_CreateAccount';
import CreateAccountHeader from './components/CreateAccount-Form/CreateAccountHeader';
import CreateUserName  from './components/CreateAccount-Form/CreateUserName';


const App = () => {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <CreateAccountHeader />

     
      
        <FirstName_CreateAccount value={firstName} setValue={setFirstName}   />
      

        <LastName_CreateAccount  value={lastName} setValue={setLastName}  />

        <CreateUserName  value={username} setValue={setUsername} />
        </>
   
  );
};

export default App;