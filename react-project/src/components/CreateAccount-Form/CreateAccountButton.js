import './CreateAccountButton.css'
const SignInButton = ({ text = "Create-Account", className = "sign-in-button", onClick }) => {
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