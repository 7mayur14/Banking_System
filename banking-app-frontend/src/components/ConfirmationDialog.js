import React from 'react';
import './ConfirmationDialog.css'; // Import the CSS file for the dialog styling

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm();
        onClose(); // Close dialog after confirming
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="confirmation-dialog-overlay">
            <div className="confirmation-dialog">
                <p>{message}</p>
                <div className="confirmation-dialog-buttons">
                    <button className="confirmation-dialog-button confirm" onClick={handleConfirm}>Yes</button>
                    <button className="confirmation-dialog-button cancel" onClick={handleClose}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
