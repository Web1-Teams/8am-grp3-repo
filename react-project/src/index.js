import React from "react";
import PasswordInput from "./Pages/ForgetPasswordPages/PasswordConfirm"
import Verification from "./Pages/ForgetPasswordPages/Verification";

import ReactDOM from "react-dom/client";
import CardEmail from "./Pages/ForgetPasswordPages/CardEmail";
import { BrowserRouter ,Routes,Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardEmail />} />
        <Route path="/Verification-page" element={<Verification />} />

        <Route path="/password-reset" element={<PasswordInput />} />

        </Routes>
    </BrowserRouter>
</React.StrictMode>

);
