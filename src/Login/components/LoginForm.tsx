import { useContext, useState } from "react"
import { UserContext } from "../../App";
import styles from './LoginForm.module.css'
import { configureStore } from "@reduxjs/toolkit";

interface Item {
    email: string;
    password: string;
}

export const LoginForm = () => {

    const {signedIn, setSignedIn} = useContext(UserContext)
    const [showLogin, setLogin] = useState(false);

    const verifyUser = async(event: any) => {
        event.preventDefault();
        
        var email = document.getElementById("login_email")?.value
        var email = email.toLowerCase();
        var password = document.getElementById("login_password")?.value

        const data = await fetch('http://localhost:4000/loginUser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({email: email, password: password})
        })
        const resp = await data.json()
        console.log(resp)
        if (resp === 'SUCCESS') {
            setSignedIn(email)
        } else {
            setSignedIn('false')
        }
    }

    const createUser = async(event: any) => {
        event.preventDefault();
        
        var email = document.getElementById("register_email")?.value
        var email = email.toLowerCase();
        var password = document.getElementById("register_password")?.value
        var confirm_password = document.getElementById("register_confirm-password")?.value

        if (password === confirm_password) {

            const data = await fetch('http://localhost:4000/createUser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({email: email, password: password})
            })
            const resp = await data.json()
            console.log(resp)
            if (resp === 'SUCCESS') {
                setSignedIn(email)
            } else {
                setSignedIn('false')
            }
        }

        
    }
    
    function toggleLogin() {
        if (showLogin) {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }

    return (
        <div>
            {showLogin ?

            <form>
                <p>
                    <input className={styles.form} type="text" placeholder="Email" id="login_email" required/>
                </p>
                <p>
                    <input className={styles.form} type="password" placeholder="Password" id="login_password" required/>
                </p>
                <p>
                    <button onClick={verifyUser}>Login</button>
                </p>
                
                <p className={styles.p}>Need an account? <span className={styles.textBlue} onClick={toggleLogin}>Register</span></p>
            </form>

            :

            <form>
                <p>
                    <input className={styles.form} type="text" placeholder="Email" id="register_email" required/>
                </p>
                <p>
                    <input className={styles.form} type="password" placeholder="Password" id="register_password" required/>
                </p>
                <p>
                    <input className={styles.form} type="password" placeholder="Confirm Password" id="register_confirm-password" required/>
                </p>    
                <p>
                    <button onClick={createUser}>Register</button>
                </p>

                <p className={styles.p}>Have an account? <span className={styles.textBlue} onClick={toggleLogin}>Login</span></p>
            </form>

            }
        </div>
    )
}
