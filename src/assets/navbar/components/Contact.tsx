import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleModal}>Contact</button>
            {isOpen && (
                <div id="contactModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <p>Email Address 📧</p>
                        <input type="text" placeholder="anteater@uci.edu" name="email" required/>
                        <p>Description ❓</p>
                        <textarea name="subject" placeholder=""></textarea>
                        <button className="submit-button" onClick={toggleModal}>Submit</button>
                    </div>
                </div>
            )}
        </>
    );
};
