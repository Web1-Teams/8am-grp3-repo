import React from "react";
import Creataccountemail from '../styles/Createaccountemail.css'
import email from '../images/email.png';

const CreateAccountEmail = ()=>{
    return(
        <div className="Creat-account-Address">
        <form>
            <input type="text" id="Creat-account-Email" name="Email" placeholder="*Email"/>
        </form>
     </div>
    )
}

export default CreateAccountEmail;