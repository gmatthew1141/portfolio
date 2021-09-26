import React from 'react';
import './Footer.css';
import {SiGmail, SiLinkedin} from 'react-icons/si';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="contact">
                    <a href="mailto:gmatthew1141@gmail.com" className="footer-link"><SiGmail size="3em"/></a>
                    <a href="https://www.linkedin.com/in/george-matthew-7a9672181/" rel="noopener noreferrer" target="_blank"><SiLinkedin size="3em" className="footer-link"/></a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
