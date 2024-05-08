import "./Login.css"

export const Login = () => {

    return (
        <form>
            <p>
                <input className="form-field" type="text" placeholder="Email" name="email" required/>
            </p>
            <p>
                <input className="form-field" type="password" placeholder="Password" name="password" required/>
            </p>
            <p>
                <input className="form-field" type="password" placeholder="Confirm Password" name="confirm-password" required/>
            </p>
        </form>
    )
}