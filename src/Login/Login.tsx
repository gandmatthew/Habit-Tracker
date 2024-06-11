import { HabitatMock } from "./components/HabitatMock"
import { LoginForm } from "./components/LoginForm"
import { LoginLogo } from "./components/LoginLogo"

import styles from './Login.module.css'

export const Login = () => {

    return (
        <div>
            <div className={`${styles.split} ${styles.left}`}>
                <LoginLogo/>
                <div className={`${styles.center}`}>
                    <HabitatMock/>
                </div>
            </div>
            <div className={`${styles.split} ${styles.right}`}>
                <LoginForm/>
            </div>
        </div>
    )
}