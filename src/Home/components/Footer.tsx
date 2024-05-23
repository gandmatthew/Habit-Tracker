import { Link } from 'react-router-dom';
import { Contact } from '../../assets/navbar/components/Contact';
import { About } from '../../assets/navbar/components/About';

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul>
                <li className={styles.liRight}><About/></li>
                <li className={styles.liRight}><Contact/></li>
            </ul>
        </div>
    )
}