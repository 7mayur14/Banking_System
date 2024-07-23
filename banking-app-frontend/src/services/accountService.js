const API_URL = 'http://localhost:8080/api/accounts';

const accountService = {
    async getAccountById(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch account:', error);
            throw error;
        }
    },

    async createAccount(newAccount) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAccount),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to create account:', error);
            throw error;
        }
    },

    async deposit(id, amount) {
        try {
            const response = await fetch(`${API_URL}/${id}/deposit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: parseFloat(amount) }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to deposit amount:', error);
            throw error;
        }
    },

    async withdraw(id, amount) {
        try {
            const response = await fetch(`${API_URL}/${id}/withdraw`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: parseFloat(amount) }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to withdraw amount:', error);
            throw error;
        }
    },

    async deleteAccount(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Network response was not ok');
            }
            return await response.text();
        } catch (error) {
            console.error('Failed to delete account:', error);
            throw error;
        }
    }
};

export default accountService;
