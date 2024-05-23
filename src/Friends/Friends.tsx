import { Navbar } from '../assets/navbar/Navbar'
import styles from './Friends.module.css'

export const Friends = () => {
    return (
        <div>

            <div className={styles.sticky}>
                <Navbar></Navbar>
            </div>
            <div className={styles.center}>

                <div className={styles.modalContent}>
                    <p>
                        <span className={styles.searchIcon}>🔎</span>
                        <input type="text" placeholder="Search for a friend" name="search-friend" className={styles.searchInput}/>
                    </p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>  
                </div>

            </div>
        </div>

    )
}