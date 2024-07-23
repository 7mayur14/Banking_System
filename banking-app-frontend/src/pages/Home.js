import React from 'react';
import './Home.css'; // Import the updated CSS file

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="bank-logo"></div>
                <p>Welcome to</p>
            <h1 className="home-title">FinGrow Bank</h1>
            </header>
            
            <div className="intro-section">
                <h2 className="home-heading">Empowering your financial future with innovative banking solutions.</h2>
            </div>

            <div className="services-container">
                <h2 className="services-heading">Our Services</h2>
                <div className="services-grid">
                    <div className="service-box">
                        <div className="service-icon personal-banking-icon"></div>
                        <h3 className="service-title">Personal Banking</h3>
                        <p className="service-description">
                            Savings Accounts, Current Accounts, Fixed Deposits
                        </p>
                    </div>
                    <div className="service-box">
                        <div className="service-icon loans-icon"></div>
                        <h3 className="service-title">Loans</h3>
                        <p className="service-description">
                            Personal Loans, Home Loans, Auto Loans
                        </p>
                    </div>
                    <div className="service-box">
                        <div className="service-icon credit-cards-icon"></div>
                        <h3 className="service-title">Credit Cards</h3>
                        <p className="service-description">
                            Various options with attractive rewards
                        </p>
                    </div>
                    <div className="service-box">
                        <div className="service-icon corporate-banking-icon"></div>
                        <h3 className="service-title">Corporate Banking</h3>
                        <p className="service-description">
                            Business Accounts, Corporate Loans, Investment Solutions
                        </p>
                    </div>
                    <div className="service-box">
                        <div className="service-icon digital-banking-icon"></div>
                        <h3 className="service-title">Digital Banking</h3>
                        <p className="service-description">
                            Online Banking, Mobile Banking, E-wallets
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
