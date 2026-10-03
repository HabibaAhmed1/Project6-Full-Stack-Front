import React from 'react';

function Navbar() {
    return(
        <nav className="navbar">
            <h2 className="logo">
                <span></span>
                Portfolio
            </h2>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="connect-btn">let's connect</button>
        </nav>
    )
}

export default Navbar;