import React, { useState } from 'react';
import '../../App.css'
import './TextField.css'

const TextField = (props) => {
    const { label, htmlFor, type, name, inputId, value, placeholder, onChange } = props;
    const [error, setError] = useState('');

    const handleValidation = (inputValue) => {
        if (name === 'name' && inputValue.length < 3) {
            setError('Nama harus memiliki minimal 3 karakter');
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(inputValue)) {
            setError('Format email tidak valid');
        } else if (name === 'phoneNumber' && !/^(08|\+628)\d{9,11}$/.test(inputValue)) {
            setError('Format nomor HP tidak valid');
        } else if (name === 'password' && inputValue.length < 8) {
            setError('Password harus memiliki minimal 8 karakter');
        } else if (name === 'confirmPassword' && inputValue !== props.password) {
            setError('Password tidak sesuai');
        } else {
            setError('');
        }
    };

    const handleChange = (e) => {
        onChange(e);
        handleValidation(e.target.value);
    };

    return (
        <div className={`text-field ${error ? 'invalid' : ''}`}>
            <label className='text-field-label' htmlFor={htmlFor}>{label}</label><br />
            <input
                className='text-field-input'
                type={type}
                name={name}
                id={inputId}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                autoComplete='off'
            />
            {error && <span>{error}</span>}
        </div>
    )
}

export default TextField