import React from "react";
import Creataccountemail from '../styles/Createaccountemail.css'
import email from '../images/email.png';

const CreateAccountEmail = ()=>{
    return(
        <div className="">
            <form>
                <input type="text" id="create-account-email" name="Email" placeholder="*Email" />
            </form>
        </div>
    )
}

export default CreateAccountEmail;