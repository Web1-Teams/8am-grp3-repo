import "./CreateAccountButton.css";
import { Link } from 'react-router-dom';

const CreateAccountButton = () => {
  return (
    <div className="login-screen-new-account">
      <Link to="/create-account">
        <button type="button">
          Create new account
        </button>
      </Link>
    </div>
  );
};

//You need to import BrowserRouter before use it
export default CreateAccountButton;


