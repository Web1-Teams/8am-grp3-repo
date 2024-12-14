import {useState} from 'react';
import '../styles/sign-in-hana.css'
const TextLabel=()=>{
    const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const handleEmailChange = (e) => setEmail(e.target.value);
   const handlePasswordChange = (e) => setPassword(e.target.value);

   
return(
  <div className='sign-in-left-side'>
    <div className="header">Sign in<br/></div>
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
        <label htmlFor="floatingPassword">Password</label><br/>
      </div>
    </div>
    <div className='forget-password'> Forget password?</div>
    <div className="sign-in-button "   button type="submit">Sign in</div>
    <div className="login-screen-or"> <span>--------------or--------------</span></div>
    

  </div>

  
);



}
export default TextLabel;