import LoginHeader from "../../components/LoginHeader/LoginHeader";
import LoginScreenForm from "../../components/LogInScreen/LoginScreenForm";
import CreateAccountButton from "../../components/CreateAccountButton/CreateAccountButton";
import LoginScreenRight from "../../components/LoginImage/LoginScreenRight";
import "./LoginPageStyles.css";

const LoginPage = () => {
  return (
    <body class="login-screen-body">
      <LoginHeader />
      <div class="login-screen-header-gap"></div>

      <main class="login-screen-main">
        <div class="login-screen-left">
          <div className="login-header">Sign in</div>

          <LoginScreenForm />

          <div class="login-screen-or">
            <span>--------------or--------------</span>
          </div>

          <CreateAccountButton />
        </div>

        <LoginScreenRight />
      </main>
    </body>
  );
};

export default LoginPage;
