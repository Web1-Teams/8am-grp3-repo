import "../react-fathi-border/EmailCard.css";

function EmailForm(props) {
   

    return (
        <div>
         
         <label className="label-forget"for="email"> Enter your email address</label>
         <br />
                <input
                    type="email"
                    id="text"
                    value={props.value}
                    onChange={props.onChange}
                    className="text-field"
                />

        </div>
    );
}

export default EmailForm;
