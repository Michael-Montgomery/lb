import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import React from 'react';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2026 LB Tile Company. All rights reserved.</p>
            <ul className="footer-links">
            <li>
                        <div>
                            <a href="https://www.facebook.com/LBTile/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        </div>
                        </li>
                        <li>
                        <div>
                            <a href="mailto:lbtile@comcast.net" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                        </div>
                        </li>   
                        <li>
                        <div>
                            <a href="tel:+14105987485" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a>
                        </div>
                    </li>
            </ul>
        </footer>
    );
}

export default Footer;