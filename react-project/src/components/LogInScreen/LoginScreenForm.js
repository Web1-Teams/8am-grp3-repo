import {useState} from 'react';
import SignInButton from './SignInButton';
import './login-screen-form.css'
import { addUser } from '../../data/LogInUser';
import { LogIn } from '../../data/LogInUser';

const LoginScreenForm=()=>{
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordMsg,setPasswordMsg]=useState("");
   const [emailMsg,setEmailMsg]=useState("");
   const [msg, setMsg] = useState('');

  const handleLogin = () =>
  {
    addUser('alaa', 'alaa123', 'Alaa', 'Ali', 'Alaa@gmail.com');
    
    const user = LogIn(email, password)
    if(user){
      setMsg('Login successfully')
      localStorage.setItem("loggedInUser", email);
      window.location.href = '/MainPage'
    }
    else{
      setMsg('invalid password or email')
    }
  }

   const CheckValidateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    if (emailRegex.test(email)){setEmailMsg('Email is valid')}
    else if (!email){setEmailMsg("Please enter email")}
    else if (!emailRegex.test(email)){setEmailMsg("Email is not valid")}
    else {setEmailMsg("")}
   };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailMsg("");
  };
  const CheckValidatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    
    if (!password) {setPasswordMsg("Please enter a password");}
    else if (passwordRegex.test(password)) { setPasswordMsg("password is valid"); }
    else {setPasswordMsg("Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, and a number");
     }
    };
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordMsg(""); 
    }; 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    CheckValidateEmail();
    CheckValidatePassword();
  
    if (email && password && !emailMsg && !passwordMsg) {
      console.log("Form submitted with:", { email, password });
    }
  };


return(

<form onSubmit={handleFormSubmit}>
  <div className="password-email-container">
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
        />
         <label htmlFor="floatingInput">Email or Username</label>
         {emailMsg && <p className="email-massage">{emailMsg}</p>}

      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
         <label htmlFor="floatingPassword">Password</label>
         {passwordMsg && <div className="password-massage">{passwordMsg}</div>}
        </div>
      </div>
      <div className="forget-password">Forget password?</div>
      {msg && <p className="error-message"> {msg} </p>}
      <SignInButton text="Sign in" onClick = {handleLogin}/>
    </form>
);
}
export default LoginScreenForm; 