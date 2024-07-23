import React, { useState } from 'react';
import accountService from '../services/accountService';
import AccountForm from './AccountForm';
import ConfirmationDialog from './ConfirmationDialog'; // Import the confirmation dialog component
import numberToWords from 'number-to-words'; // Import the number-to-words library
import './BankingOperations.css'; // Import the new CSS file

const BankingOperations = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [accountId, setAccountId] = useState('');
    const [account, setAccount] = useState(null);
    const [message, setMessage] = useState('');
    const [newAccountId, setNewAccountId] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [securityDeposit, setSecurityDeposit] = useState('');
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    const handleSearch = async () => {
        if (accountId) {
            try {
                const accountData = await accountService.getAccountById(accountId);
                if (accountData) {
                    setAccount(accountData);
                    setMessage('');
                } else {
                    setAccount(null);
                    setMessage('The account you want to search is not present.');
                }
            } catch (error) {
                console.error('Failed to fetch account:', error);
                setAccount(null);
                setMessage('The account you want to search is not present.');
            }
        } else {
            alert('Please enter an account ID.');
        }
    };

    const handleCreateAccount = async () => {
        if (!newAccountId || !accountHolderName || !securityDeposit) {
            alert('Please fill in all fields.');
            return;
        }
        if (parseFloat(securityDeposit) < 1000) {
            alert('Minimum security deposit amount is 1000.');
            return;
        }

        try {
            const newAccount = {
                id: newAccountId,
                accountHolderName,
                balance: parseFloat(securityDeposit),
            };

            await accountService.createAccount(newAccount);
            setMessage('Account created successfully.');
            setNewAccountId('');
            setAccountHolderName('');
            setSecurityDeposit('');
            setShowCreateForm(false);
        } catch (error) {
            console.error('Failed to create account:', error);
            setMessage('Account creation failed.');
        }
    };

    const handleDeleteAccount = async () => {
        if (accountId) {
            try {
                await accountService.deleteAccount(accountId);
                setAccount(null);
                setMessage('Account deleted successfully.');
            } catch (error) {
                console.error('Failed to delete account:', error);
                setMessage('Account deletion failed.');
            }
        } else {
            alert('Please enter an account ID.');
        }
        setIsDeleteConfirmOpen(false);
    };

    const openDeleteConfirm = () => {
        setIsDeleteConfirmOpen(true);
    };

    const closeDeleteConfirm = () => {
        setIsDeleteConfirmOpen(false);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
    };

    const formatAmountInWords = (amount) => {
        return numberToWords.toWords(amount) + ' only';
    };

    return (
        <div className="banking-operations-container">
            <div className="header">
                <div className="bank-logo"></div> {/* Bank logo */}
            </div>
            <h2 className="operations-heading">Banking Operations</h2>
            <button className="operations-button" onClick={() => setShowCreateForm(!showCreateForm)}>
                {showCreateForm ? 'Hide Create Account Form' : 'Create Account'}
            </button>

            {showCreateForm && (
                <div className="form-container">
                    <h3>Create Account</h3>
                    <input
                        className="form-input"
                        type="text"
                        value={newAccountId}
                        onChange={(e) => setNewAccountId(e.target.value)}
                        placeholder="Enter new account ID"
                    />
                    <input
                        className="form-input"
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        placeholder="Enter account holder name"
                    />
                    <input
                        className="form-input"
                        type="number"
                        value={securityDeposit}
                        onChange={(e) => setSecurityDeposit(e.target.value)}
                        placeholder="Enter minimum security deposit"
                    />
                    <button className="form-button" onClick={handleCreateAccount}>Submit</button>
                    <button className="form-button" onClick={() => setShowCreateForm(false)}>Cancel</button>
                </div>
            )}

            <div className="search-container">
                <h3>Search for Account</h3>
                <input
                    className="search-input"
                    type="text"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    placeholder="Enter account ID"
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
                {account && (
                    <div className="account-details-container">
                        <h4>Account Details</h4>
                        <p><strong>ID:</strong> {account.id}</p>
                        <p><strong>Holder Name:</strong> {account.accountHolderName}</p>
                        <p><strong>Balance:</strong> {formatCurrency(account.balance)}</p>
                        <p><strong>Balance in Words:</strong> {formatAmountInWords(account.balance)}</p> {/* Added balance in words */}
                        <button className="delete-button" onClick={openDeleteConfirm}>Delete Account</button>
                        <AccountForm accountId={account.id} onActionSuccess={handleSearch} />
                    </div>
                )}
                {message && <p className="message">{message}</p>}
            </div>

            <ConfirmationDialog
                isOpen={isDeleteConfirmOpen}
                onClose={closeDeleteConfirm}
                onConfirm={handleDeleteAccount}
                message="Are you sure you want to delete this account?"
            />
        </div>
    );
};

export default BankingOperations;
