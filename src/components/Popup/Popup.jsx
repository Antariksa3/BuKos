import React from 'react';
import './Popup.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Success from '../../assets/images/success.svg'
import Error from '../../assets/images/error.svg'

const Popup = ({ type, message, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation()
    const selectedRole = location.state ? location.state.role : ''

    const handleContinue = () => {
        onClose();
        if (type === 'success') {
            // navigate('/login');
            navigate('/login', { state: { role: selectedRole } });
        }
    };

    const handleRetry = () => {
        onClose();
        if (type === 'error') {
            // Tambahkan logika untuk melakukan upaya ulang
        }
    };

    return (
        <div className='popup-overlay'>
            <div className="popup-container">
                {type === 'success' && (
                    <>
                        <img src={Success} className='popup-img' alt="" />
                        <div className="popup-success">
                            <h1>Success!</h1>
                            <p className="popup-message">{message}</p>
                            <button onClick={handleContinue}>Continue</button>
                        </div>
                    </>
                )}

                {type === 'error' && (
                    <>
                        <img src={Error} className='popup-img' alt="" />
                        <div className="popup-error">
                            <h1>Error!</h1>
                            <p className="popup-message">{message}</p>
                            <button onClick={handleRetry}>Retry</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Popup;
