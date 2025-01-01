import { useState } from 'react';
import Createaccountpassword from './Createaccountpassword.css';

const CreateAcoountPassword = ({ value, setValue }) => {

    const [valid,setValid]=useState("");
    const validPassword=(p)=>{
        const PRegEx=/^(?=.*\d)(?=.*[^\w\d\s]).{8,}$/;//RegEx password
        return(
            PRegEx.test(p)
        )
    };

    const change=(newp)=>{
        const p=newp.target.value;
        setValue(p);
        if(!validPassword(p)){
            setValid("Wrong ! your password must be at least 6 characters and contains numbers, symbols and letters.");
        }
        else{
            setValid("");
        }
    }


    return (
        <div className="creat-account-password">
            <label htmlFor="creat-account-password">Password</label>
            <input 
                type="password" 
                id="creat-account-password" 
                name="password" 
                placeholder="*Password" 
                value={value} 
                onChange={(newp)=>change(newp)}
                required
            />
            {valid && <p style={{ color: "red" }}>{valid}</p>} 
        </div>
    );
};

export default CreateAcoountPassword;
