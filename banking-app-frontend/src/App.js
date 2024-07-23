import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AccountDetail from './components/AccountDetail';
import BankingOperations from './components/BankingOperations';
import accountService from './services/accountService';
import './Navbar.css'; // Import the CSS file for navigation styling

const App = () => {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [page, setPage] = useState('home');
    const [loading, setLoading] = useState(false);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleAccountSearch = async (accountId) => {
        setLoading(true);
        try {
            const account = await accountService.getAccountById(accountId);
            setSelectedAccount(account);
            setPage('detail');
        } catch (error) {
            console.error('Failed to fetch account:', error);
            setSelectedAccount(null);
        } finally {
            setLoading(false);
        }
    };

    const renderPage = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        switch (page) {
            case 'home':
                return <Home onNavigateToBanking={() => handlePageChange('banking')} />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            case 'detail':
                return selectedAccount ? <AccountDetail account={selectedAccount} /> : <p>No account found</p>;
            case 'banking':
                return <BankingOperations onAccountSearch={handleAccountSearch} />;
            default:
                return <Home onNavigateToBanking={() => handlePageChange('banking')} />;
        }
    };

    return (
        <div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handlePageChange('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handlePageChange('about')}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handlePageChange('contact')}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handlePageChange('banking')}>Banking Operations</a>
                    </li>
                </ul>
            </nav>
            {renderPage()}
        </div>
    );
};

export default App;
