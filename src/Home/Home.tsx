import { Footer } from "./components/Footer"
import { Habitat } from "../assets/habitat/Habitat"
import { Navbar } from "../assets/navbar/Navbar"

import styles from './Home.module.css'

export const Home = () => {
    return (
        <div>
            <div className={styles.sticky}>
                <Navbar/>
            </div>
            <div className={styles.center}>
                <Habitat/>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        
            
        </div>
    )
}