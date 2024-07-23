import React, { useState } from 'react';
import accountService from '../services/accountService';
import ConfirmationDialog from './ConfirmationDialog';
import './AccountForm.css'; // Import the new CSS file

const AccountForm = ({ accountId, onActionSuccess }) => {
    const [amount, setAmount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');
    const [message, setMessage] = useState('');

    const openModal = (type) => {
        setActionType(type);
        setIsModalOpen(true);
    };

    const handleConfirm = async () => {
        try {
            const parsedAmount = parseFloat(amount);
            if (actionType === 'deposit') {
                await accountService.deposit(accountId, parsedAmount);
                setMessage('Deposit successful!');
            } else if (actionType === 'withdraw') {
                await accountService.withdraw(accountId, parsedAmount);
                setMessage('Withdrawal successful!');
            }
            onActionSuccess();
            setAmount('');
        } catch (error) {
            setMessage(`Failed to ${actionType}: ${error.message}`);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="account-form-container">
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="account-form-input"
            />
            <button className="account-form-button" onClick={() => openModal('deposit')}>Deposit</button>
            <button className="account-form-button" onClick={() => openModal('withdraw')}>Withdraw</button>
            {message && <p className="account-form-message">{message}</p>}
            <ConfirmationDialog
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
                message={`Are you sure you want to ${actionType} this amount?`}
            />
        </div>
    );
};

export default AccountForm;
