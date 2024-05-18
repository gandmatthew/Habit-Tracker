import React, { useState } from 'react';
import './About.css';

export const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleModal}>About Us</button>
            {isOpen && (
                <div id="aboutModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <p>Made with love 💖</p>
                        <p>Created by Justin Lee & Matthew Gandasetiawan 📝</p>
                        <p>University of California, Irvine 🐜🎒</p>
                    </div>
                </div>
            )}
        </>
    );
};
