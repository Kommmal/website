import React from 'react';
import './Footer.css'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h2 className="footer-title">Shop Co</h2>
                        <h3 className="footer-subtitle">Subscribe</h3>
                        <p className="footer-text">Get 10% off your first order</p>
                        <input type="email" placeholder="Enter your email" className="footer-input" />
                    </div>

                    <div className="footer-section">
                        <h2 className="footer-title">Account</h2>
                        <ul className="footer-list">
                            <li><a href="">My Account</a></li>
                            <li><a href="">Login / Register</a></li>
                            <li><a href="">Cart</a></li>
                            <li><a href="">Wishlist</a></li>
                            <li><a href="">Shop</a></li>
                        </ul>
                    </div>


                    <div className="footer-section">
                        <h2 className="footer-title">Download</h2>
                        <p className="footer-text">Save $3 with App New Use Only</p>
                        <div className="footer-app-container">
                            <img alt='' src="/images/Qr Code.png"  className="footer-imge" />
                            <div className="footer-app-links">
                                <img src="/images/pgoogle-play-store-logo.png"  className="footer-app-logo" />
                                <img src="/images/download-appstore.png" />
                            </div>
                        </div>
                        <div className="footer-social-icons">
                            <FiFacebook size={20} />
                            <FiTwitter size={20} />
                            <FiInstagram size={20} />
                            <FiLinkedin size={20} />
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
