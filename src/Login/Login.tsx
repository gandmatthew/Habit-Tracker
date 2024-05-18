import { HabitatMock } from "./components/HabitatMock"
import { LoginForm } from "./components/LoginForm"
import { LoginLogo } from "./components/LoginLogo"
import "./Login.css"


export const Login = () => {

    return (
        <div>
            <div className="login__split login__left">
                <LoginLogo/>
                <div className="login__center">
                    <HabitatMock/>
                </div>
            </div>
            <div className="login__split login__right">
                <LoginForm/>
            </div>
        </div>
    )
}