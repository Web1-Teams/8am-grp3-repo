import React, { useState } from "react";
import CreateAccountButton from '../../components/CreateAccount-Form/CreateAccountButton';
import CreateAccountEmail from '../../components/CreateAccount-Form/CreateAccountEmail';
import CreateAccountPassword from '../../components/CreateAccount-Form/CreateAcoountPassword';
import CreateAccountRPassword from '../../components/CreateAccount-Form/CreateAccountRPassword';
import CreateAccountHeader from '../../components/CreateAccount-Form/CreateAccountHeadr';
import CreateAccountUserName from '../../components/CreateAccount-Form/CreateUserName';
import CreateAccountFirstName from '../../components/CreateAccount-Form/FirstName_CreateAccount';
import CreateAccountLastName from '../../components/CreateAccount-Form/LastName_CreateAccount';
import { addUser } from '../../data/adduser';
import { Link } from 'react-router-dom';
import CreateAcoountRPassword from "../../components/CreateAccount-Form/CreateAccountRPassword";
import './CreateAccount.css'

const CreateAccountForm = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = () => {
        if (!username || !firstName || !lastName || !email || !password || !rpassword) {
            setError("All fields are required!");
            return;
        }

        if (password !== rpassword) {
            setError("Passwords do not match!");
            return;
        }

        const result = addUser(username, password, firstName, lastName, email);

        if (!result) {
            setError("User with this username or email already exists!");
        } else {
            setError("");
            alert("Account created successfully!");
            setUsername("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setRpassword("");
        }
    };

    return (
         <div className="createaccountform">
            <CreateAccountHeader />
            <CreateAccountUserName value={username} setValue={setUsername}/>
            <div>
            <CreateAccountFirstName value={firstName} setValue={setFirstName}/>
            <CreateAccountLastName value={lastName} setValue={setLastName}/>
            </div>
            <CreateAccountEmail value={email} setValue={setEmail}/>
            <CreateAccountPassword value={password} setValue={setPassword}/>
            <CreateAcoountRPassword password={password} rPassword={rpassword} setRPassword={setRpassword} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <CreateAccountButton onClick={handleSignUp} />
        </div>  
    );
};

export default CreateAccountForm;
