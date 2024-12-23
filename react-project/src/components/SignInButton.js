import '../styles/login-screen-form-button.css'

/*const SignInButton=(props)=>{
    return(
        <div>
             <p>Name: {props.name}</p>
             <div className="sign-in-button "  button type="submit">Sign in</div>
        </div>
        
    );
}*/
const SignInButton = ({ text = "Sign in", className = "sign-in-button", onClick }) => {
    return (
        <button 
            type="submit" 
            className={className} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};


export default SignInButton;