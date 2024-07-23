import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend)
        console.log('Form submitted:', { name, email, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
        alert('Thank you for contacting us. We will get back to you shortly.');
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-intro">
                    We are here to assist you with all your banking needs. Please fill out the form below to get in touch with us.
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="contact-details">
                    <h3>Our Contact Information</h3>
                    <p><strong>Address:</strong> 123 FinGrow Tower, Banking City, Pune 12345</p>
                    <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                    <p><strong>Email:</strong> support@FinGrowbank.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
