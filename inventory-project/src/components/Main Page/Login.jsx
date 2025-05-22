export default function Login(){
    return(
        <center>
            <form className="login-form">
                <div>
                    <label htmlFor="username"> Username
                        <input className="username-input" type="text" name="username" id="" />
                    </label>
                    <label htmlFor="password"> Password
                        <input className="password-input" type="password" name="password" id="" />
                    </label>
                    <input className="sign-up-button" type="submit" name="" id="" value="Log-in" />
                </div>
            </form>
        </center>
    )
}