import { Login } from "./Login"
import "./Home.css"

export const Home = () => {
    return (
        <div>
            <div className="left-align">
                <div className="slide-right">
                    <h2 className="slide-first">Grow Your Best Self with</h2>
                    <h1 className="slide-second">Habit Tracker</h1>
                    <h2 className="slide-third">Plant, Log, Thrive!</h2>
                </div>
            </div>
            <div className="right-box">
                <div className="right-align">

                    <Login>
                    </Login>
                </div>
            </div>
        </div>
    )
}