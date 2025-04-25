import React from 'react';
import logo from './assets/logo2.JPG';

function Footer() {
    return (
        <footer>
            <div className="footer-navigation">
                {/* Logo */}
                <div className="footer-logo">
                    <img src={logo} alt="Little Lemon Logo"/>
                </div>

                {/* Doormat Navigation */}
                <div className="footer-nav">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#orderOnline">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                
                {/* Contact Info */}
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>123 Lemon Lane, Tucson, AZ</p>
                    <p>(555) 123-4567</p>
                    <p>contact@littlelemon.com</p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h4>Connect with us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;