import React from "react";
import LastName_CreateAccount from './components/CreateAccount-Form/LastName_CreateAccount';
import FirstName_CreateAccount from './components/CreateAccount-Form/FirstName_CreateAccount';
import CreateAccountHeader from './components/CreateAccount-Form/CreateAccountHeader';
import CreateUserName  from './components/CreateAccount-Form/CreateUserName';


const App = () => {
  return (
    <>
      <CreateAccountHeader />

     
      
        <FirstName_CreateAccount />
      

        <LastName_CreateAccount />

        <CreateUserName/>
        </>
   
  );
};

export default App;