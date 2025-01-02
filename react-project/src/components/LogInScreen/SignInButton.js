import './sign_in_button.css'
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
