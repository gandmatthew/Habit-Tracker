import { Footer } from "./components/Footer"
import { Habitat } from "../assets/habitat/Habitat"
import { Navbar } from "../assets/navbar/Navbar"
import "./Home.css"

export const Home = () => {
    return (
        <div>
            <div className='home__sticky'>
            <Navbar/>
            </div>
            <div className='home__center'>
            <Habitat/>
            </div>

            <p>Example</p>
            <p>Example</p>
            <p>Example</p>
            <p>Example</p>
            <p>Example</p>

            <div className='home__footer'>
            <Footer/>
            </div>
            
        </div>
    )
}