import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import React from 'react';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2026 LB Tile Company. All rights reserved.</p>
            <ul className="footer-links">
            <li>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        </div>
                        </li>
                        <li>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        </div>
                        </li>   
                        <li>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
                        </div>
                    </li>
            </ul>
        </footer>
    );
}

export default Footer;