import React from "react";

function Footer() {

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Logo */}

                <div className="footer-logo">

                    <a href="#home">
                        <span>&lt;/&gt;</span>
                        Habiba Alhanbly
                    </a>

                    <p>
                        Front-End Developer
                    </p>

                </div>


                {/* Quick Links */}

                <div className="footer-links">

                    <a href="#home">
                        Home
                    </a>

                    <a href="#skills">
                        Skills
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#contact">
                        Contact
                    </a>

                </div>


                {/* Social */}

                <div className="footer-social">

                    <a
                        href="#"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>

                    <a
                        href="#"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2025 Habiba Alhanbly.
                    All rights reserved.
                </p>

                <p>
                    Built with React & ❤️
                </p>

            </div>

        </footer>
    );
}

export default Footer;