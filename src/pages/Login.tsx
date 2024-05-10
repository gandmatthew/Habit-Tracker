import { createContext, useState } from "react"
import "./Login.css"

export const UserContext = createContext(false);

export const Login = () => {

    const [isLoggedin, setLogin] = useState(false);
    
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
                    <input className="form-field" type="text" placeholder="Email" name="email" required/>
                </p>
                <p>
                    <input className="form-field" type="password" placeholder="Password" name="password" required/>
                </p>
                <p>
                    <button>Login</button>
                </p>
                
                <p>Need an account? <span className="blue-text" onClick={toggleLogin}>Register</span></p>
            </form>

            :

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
                <p>
                    <button>Register</button>
                </p>

                <p>Have an account? <span className="blue-text" onClick={toggleLogin}>Login</span></p>
            </form>

            }
        </div>
    )
}