import "./CreateAccountButton.css";
import { Link } from 'react-router-dom';

const CreateAccountButton = () => {
  return (
    <div className="login-screen-new-account">
      <Link to="/CreateAccount" style={{ textDecoration: "none", color: "#6a0dad" }}>
          Create new account
      </Link>
    </div>
  );
};

//NOTE : You need to import BrowserRouter before use it
export default CreateAccountButton;


