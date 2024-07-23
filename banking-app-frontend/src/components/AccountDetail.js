import React from 'react';
import './AccountDetail.css';
import numberToWords from 'number-to-words';

const AccountDetail = ({ account }) => {
    const balance = account.balance.toFixed(2);
    const [integerPart, decimalPart] = balance.split('.');

    const balanceInWords = `${numberToWords.toWords(integerPart)} and ${numberToWords.toWords(decimalPart)}/100`;

    return (
        <div className="account-detail-container">
            <h2 className="account-detail-heading">Account Details</h2>
            <p className="account-detail-info"><strong>ID:</strong> {account.id}</p>
            <p className="account-detail-info"><strong>Account Holder Name:</strong> {account.accountHolderName}</p>
            <p className="account-detail-info"><strong>Balance:</strong> ₹{balance}</p>
            <p className="account-detail-info"><strong>Balance in Words:</strong> {balanceInWords} Rupees</p>
        </div>
    );
};

export default AccountDetail;
