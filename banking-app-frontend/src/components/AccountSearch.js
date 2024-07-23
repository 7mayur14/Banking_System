import React, { useState } from 'react';

const AccountSearch = ({ onSearch }) => {
    const [accountId, setAccountId] = useState('');

    const handleSearch = () => {
        if (accountId) {
            onSearch(accountId);
        } else {
            alert('Please enter an account ID.');
        }
    };

    return (
        <div>
            <h2>Search for Account</h2>
            <input
                type="text"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                placeholder="Enter account ID"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default AccountSearch;
