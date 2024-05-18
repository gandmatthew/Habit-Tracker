import { Link } from 'react-router-dom';
import './Footer.css';
import { Contact } from '../../assets/navbar/components/Contact';
import { About } from '../../assets/navbar/components/About';

export const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li className="li-right"><About/></li>
                <li className="li-right"><Contact/></li>
            </ul>
        </div>
    )
}