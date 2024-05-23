import { useState } from 'react';
import styles from './Contact.module.css'

export const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleModal}>Contact</button>
            {isOpen && (
                <div id="contactModal" className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={toggleModal}>&times;</span>
                        <p>Email Address 📧</p>
                        <input type="text" placeholder="anteater@uci.edu" name="email" required className={styles.input}/>
                        <p>Description ❓</p>
                        <textarea name="subject" placeholder="" className={styles.textarea}></textarea>
                        <button className={styles.submitButton} onClick={toggleModal}>Submit</button>
                    </div>
                </div>
            )}
        </>
    );
};
