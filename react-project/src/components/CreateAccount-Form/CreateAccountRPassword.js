import React, { useState } from "react";
import './Createacoountrpassword.css';

const CreateAcoountRPassword = ({ password, RPassword, setRPassword }) => {
    const [valid, setvalid] = useState("");

    const Change = (e) => {
        const RP = e.target.value;
        setRPassword(RP);
        if (RP !== password) {
            setvalid("Passwords dose not match.");
        } else {
            setvalid("");
        }
    };

    return (
        <div className="creat-account-Rpassword">
            <label htmlFor="creat-account-Rpassword">Retype Password</label>
            <input 
                type="password" 
                id="creat-account-Rpassword" 
                name="Re-password" 
                placeholder="*Retype password" 
                value={RPassword} 
                onChange={Change} 
                required
            />
            {valid && <p style={{ color: "red" }}>{valid}</p>}
        </div>
    );
};

export default CreateAcoountRPassword;
