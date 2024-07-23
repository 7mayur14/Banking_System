import React from 'react';
import './About.css';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h2 className="about-heading">About Us</h2>
                <p className="about-text">
                    Welcome to FinGrow Bank, your trusted partner in financial growth and stability. Established in 2024, we have been providing top-notch banking services for over three decades. Our mission is to offer our customers a wide range of financial products and services that meet their diverse needs, from personal banking to corporate banking solutions.
                </p>
                <p className="about-text">
                    At FinGrow Bank, we prioritize customer satisfaction and strive to build long-term relationships based on trust and integrity. Our dedicated team of professionals is always ready to assist you with your financial needs and provide expert advice to help you achieve your financial goals.
                </p>
                <p className="about-text">
                    We offer a variety of services including savings accounts, current accounts, fixed deposits, loans, and credit cards, tailored to suit your requirements. Our state-of-the-art digital banking platform ensures you have access to your accounts and can perform transactions anytime, anywhere.
                </p>
                <p className="about-text">
                    Join us at FinGrow Bank and experience the difference of personalized banking services. Together, let's build a prosperous future.
                </p>
                <div className="social-media">
                    <h3 className="social-heading">Follow Us</h3>
                    <a href="https://www.facebook.com/FinGrowBank" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/FinGrowBank" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/company/FinGrowBank" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/company/FinGrowBank" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
