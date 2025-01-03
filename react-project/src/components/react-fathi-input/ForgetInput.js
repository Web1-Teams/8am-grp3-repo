import "./InputForget.css"
function Input(props) {
    return (
      <input
        className="forget-password-3rd-pg-input-password"
        type="password"
        value={props.value}
        onChange={props.onChange}
      />
    );
  }
  
  export default Input;
