import {React, useState} from 'react';

// Create navbar component
export function NavBar() {
    return(
        <nav className="navbar-main">
            <div className="navbar-left">
                <img id="eyes-logo" className="eyes-logo" src="img/eyes.png" alt="A eyes logo" />
                <h1 className="navbar-title">Project Perception</h1>
            </div> 
            <div className="navbar-right">
                <ul className="page-links">
                    <li><strong>ABOUT</strong></li>
                    <li><strong>MAKE A CHANGE</strong></li>
                </ul> 
            </div>
            {window.innerWidth < 992 ? <HamburgerMenu /> : null}
        </nav>
    );
}

function HamburgerMenu() {
    const [show, setShow] = useState(false);
    const handleAbout = (event) => {
        let showCopy = show;
        if (!showCopy) {
            showCopy = true; 
        } else {
            showCopy = false;
        }
        setShow(showCopy);
    }
    const handleMakeAChange = (event) => {
        let showCopy = show;
        if (!showCopy) {
          showCopy = true; 
        } else {
          showCopy = false;
        }
        setShow(showCopy);
    }
    let menuDropdown;
    if (show) {
    menuDropdown = <MenuDropdown handleAbout={handleAbout} handleMakeAChange={handleMakeAChange} />
    }
    return(
        <div>
            <img onClick={handleAbout} id="hamburger-menu" className="hamburger-menu" src="img/hamburger-menu.png" alt="A hamburger menu icon" />
            {menuDropdown}
        </div>
    );
}

function MenuDropdown(props) {
    return(
        <div className="menu-dropdown">
            <ul className="page-links">
                <li onClick={props.handleAbout}><strong>ABOUT</strong></li>
                <li onClick={props.handleMakeAChange}><strong>MAKE A CHANGE</strong></li>
            </ul>
        </div>
    );
}
