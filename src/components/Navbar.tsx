import './Navbar.css';

// Contact, About, and Terms/Conditions will be located at the bottom of the page

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Habits</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Friends</a></li>
                <li className="li-right"><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}