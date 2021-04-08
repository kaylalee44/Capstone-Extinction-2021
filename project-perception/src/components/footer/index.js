import {React, useState} from 'react';

export default function Footer() {
    return (
        <footer className="footer-main">
            <div>
                <img id="eyes-logo" className="eyes-logo" src="img/eyes.png" alt="A eyes logo" />
                <h3>Project Perception</h3>
            </div>
            <div>
                <p>Project Perception is a capstone project created by 4 University of Washington students 
                    looking to spread awareness about the endangered species crisis in hopes for people to make 
                    sustainable lifestyle changes and further spread awareness.</p>
            </div>
            <p>Project Perception. All rights reserved.</p>
        </footer>
    );
}