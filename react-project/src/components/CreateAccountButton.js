import { Link } from "react-router-dom";
import "../styles/CreateAccountButton.css";

const CreateAccountButton = () => {
  return (
    <div className="login-screen-new-account">
      <Link to="">
        <button type="button">Create new account</button>
      </Link>
    </div>
  );
};

export default CreateAccountButton;
