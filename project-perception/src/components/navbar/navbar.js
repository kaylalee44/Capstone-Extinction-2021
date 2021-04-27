import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';

// Create navbar component
export function NavBar() {
    return(
        <nav className="navbar-main">
            <div>  
                <NavLink to="/" className="navbar-left">
                    <img id="eyes-logo" className="eyes-logo" src="img/eyes1.png" alt="A eyes logo" />
                    <h1 className="navbar-title">Project Perception</h1>
                </NavLink> 
            </div> 
            <div className="navbar-right">
                <ul className="page-links">
                    <li><NavLink to="/about" className="nav-links">ABOUT</NavLink></li>
                    <li><NavLink to="/make-a-change" className="nav-links">MAKE A CHANGE</NavLink></li>
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
