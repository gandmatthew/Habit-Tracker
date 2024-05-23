import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// Contact, About, and Terms/Conditions will be located at the bottom of the page

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Habits</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/friends">Friends</Link></li>
                <li className={styles.liRight}><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    )
}