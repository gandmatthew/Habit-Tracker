import { useState } from 'react';
import styles from './About.module.css';

export const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleModal}>About Us</button>
            {isOpen && (
                <div id="aboutModal" className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={toggleModal}>&times;</span>
                        <p>Made with love 💖</p>
                        <p>Created by Justin Lee & Matthew Gandasetiawan 📝</p>
                        <p>University of California, Irvine 🐜🎒</p>
                    </div>
                </div>
            )}
        </>
    );
};
