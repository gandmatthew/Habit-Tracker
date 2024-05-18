import { useContext, useState } from "react"
import "./LoginForm.css"
import { UserContext } from "../../App";

export const LoginForm = () => {

    const {signedIn, setSignedIn} = useContext(UserContext)
    const [isLoggedin, setLogin] = useState(false);

    function loginUser() {
        setSignedIn(true)
    }
    
    function toggleLogin() {
        if (isLoggedin) {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }

    return (
        <div>
            {isLoggedin ?

            <form>
                <p>
                    <input className="loginForm__form" type="text" placeholder="Email" name="email" required/>
                </p>
                <p>
                    <input className="loginForm__form" type="password" placeholder="Password" name="password" required/>
                </p>
                <p>
                    <button onClick={loginUser}>Login</button>
                </p>
                
                <p>Need an account? <span className="loginForm__blue" onClick={toggleLogin}>Register</span></p>
            </form>

            :

            <form>
                <p>
                    <input className="loginForm__form" type="text" placeholder="Email" name="email" required/>
                </p>
                <p>
                    <input className="loginForm__form" type="password" placeholder="Password" name="password" required/>
                </p>
                <p>
                    <input className="loginForm__form" type="password" placeholder="Confirm Password" name="confirm-password" required/>
                </p>    
                <p>
                    <button onClick={loginUser}>Register</button>
                </p>

                <p>Have an account? <span className="loginForm__blue" onClick={toggleLogin}>Login</span></p>
            </form>

            }
        </div>
    )
}