import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer-content">
                <FooterLogo />
                <FooterDesc />
            </div>
            <FooterCopyright />
        </footer>
    );
}

function FooterLogo() {
    return (
        <div className="footer-logo">
            <img id="eyes-logo" className="eyes-logo" src="img/eyes1.png" alt="A eyes logo" />
            <h3>Project Perception</h3>
        </div>
    );
}

function FooterDesc() {
    return (
        <div className="footer-desc">
            <p>
                Project Perception is a capstone project created by 4 University of Washington students 
                looking to spread awareness about the endangered species crisis in hopes for people to make 
                sustainable lifestyle changes and further spread awareness.
            </p>
        </div>
    );
}

function FooterCopyright() {
    return (
        <div className="footer-copyright">
            <p><span>&#169;</span>2021 Project Perception. All rights reserved.</p>
        </div>
    );
}