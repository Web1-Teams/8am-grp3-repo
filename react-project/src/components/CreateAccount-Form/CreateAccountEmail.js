import React, { useState } from "react";
import Creataccountemail from './Createaccountemail.css';

const CreateAccountEmail = ({ value, setValue }) => {

    const [valid,setValid]=useState("");
    const validEmail=(email)=>{
        const ERegEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //RegEx for email
        return(
            ERegEx.test(email)
        )
    };

    const Change=(newEmail)=>{
        const email=newEmail.target.value;
        setValue(email);
         if (!validEmail(email)) {
            setValid("Wrong input! Enter a valid email.");
        } 
        else {
            setValid("");
        }
    };
    
    return (
        <div className="Creat-account-Address">
            <form>
                <label htmlFor="Creat-account-Email">Email</label>
                <input 
                    type="text" 
                    id="Creat-account-Email" 
                    name="Email" 
                    placeholder="*Email" 
                    value={value} 
                    onChange={(newEmail) => Change(newEmail)}
                    required
                />
                {valid && <p style={{ color: "red" }}>{valid}</p>} 
            </form>
        </div>
    );
};

export default CreateAccountEmail;
