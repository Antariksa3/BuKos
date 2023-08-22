//import Library
import { useNavigate, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import { api } from '../api/api';

//import Styles
import '../App.css';
import '../assets/styles/register.css';

//import Components
import TextField from '../components/TextField/TextField';
import ButtonRegister from '../components/Button/ButtonRegister';
import Popup from '../components/Popup/Popup';

//import Assets
import img1 from '../assets/images/img1.svg';
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';


const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const selectedRole = location.state ? location.state.role : ''

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const handleValidation = () => {
        let formIsValid = true;
        const newErrors = {};

        // Validasi nama
        if (!name) {
            formIsValid = false;
            newErrors.name = 'Nama harus diisi';
        } else if (name.length < 3) {
            formIsValid = false;
            newErrors.name = 'Nama harus memiliki minimal 3 karakter';
        }

        // Validasi email
        if (!email) {
            formIsValid = false;
            newErrors.email = 'Email harus diisi';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            newErrors.email = 'Format email tidak valid';
        }

        // Validasi nomor hp
        if (!phoneNumber) {
            formIsValid = false;
            newErrors.phoneNumber = 'Nomor HP harus diisi';
        } else if (!/^(08|\+628)\d{9,11}$/.test(phoneNumber)) {
            formIsValid = false;
            newErrors.phoneNumber = 'Format nomor HP tidak valid';
        }

        // Validasi password
        if (!password) {
            formIsValid = false;
            newErrors.password = 'Password harus diisi';
        } else if (password.length < 8) {
            formIsValid = false;
            newErrors.password = 'Password minimal 8 karakter';
        }

        // Validasi konfirmasi password
        if (!confirmPassword) {
            formIsValid = false;
            newErrors.confirmPassword = 'Konfirmasi password harus diisi';
        } else if (confirmPassword !== password) {
            formIsValid = false;
            newErrors.confirmPassword = 'Password tidak sesuai';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        let endpoint = '/register';

        if (selectedRole === 'user') {
            endpoint = '/user/register';
        } else if (selectedRole === 'owner') {
            endpoint = '/owner/register';
        }

        if (handleValidation()) {
            try {
                const response = await axios.post(api() + endpoint, {
                    name: name,
                    email: email,
                    phone: phoneNumber,
                    password: password,
                    confirm_password: confirmPassword,
                },);
                setShowSuccessPopup(true);
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setShowErrorPopup(error.response.data.message);
                } else {
                    setShowErrorPopup('Terjadi kesalahan pada server');
                }
                setShowErrorPopup(true);
            }
        }
    };

    const handleSuccessPopupClose = () => {
        setShowSuccessPopup(false);
        navigate('/login', { state: { role: selectedRole } });
    };

    const handleErrorPopupClose = () => {
        setShowErrorPopup(false);
    };

    return (
        <div className="wrapper">
            <div className="left">
                <img src={logo1} className='logo1' alt='logo1' />
                <div className="image">
                    <img src={img1} className='img1' alt='img1' />
                    <h1>Temukan Kost Yang <br /> Nyaman Dengan BuKos</h1>
                </div>
                <button className='button-back' onClick={() => navigate('/')}>Kembali</button>
            </div>
            <div className="right">
                <div className="form-register">
                    <img src={logo2} alt="logo2" className='logo2' />
                    <h1>Selamat Datang</h1>
                    <form onSubmit={handleRegister}>

                        <TextField
                            label="Nama"
                            type="text"
                            name='nama'
                            value={name}
                            placeholder='Masukkan nama lengkap sesuai identitas'
                            onChange={(e) => setName(e.target.value)}
                            error={errors.name}
                        />

                        <TextField
                            label="Nomor HP"
                            type="text"
                            name='phoneNumber'
                            value={phoneNumber}
                            placeholder='Isi dengan nomor handphone yang aktif'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            error={errors.phoneNumber}
                        />

                        <TextField
                            label="Email"
                            type="email"
                            name='email'
                            value={email}
                            placeholder='Masukkan Email'
                            onChange={(e) => setEmail(e.target.value)}
                            error={errors.email}
                        />

                        <TextField
                            label="Password"
                            type="password"
                            name='password'
                            value={password}
                            placeholder='Minimal 8 Karakter'
                            onChange={(e) => setPassword(e.target.value)}
                            error={errors.password}
                        />

                        <TextField
                            label="Konfirmasi Password"
                            type="password"
                            name='confirmPassword'
                            value={confirmPassword}
                            placeholder='Masukkan kembali password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            password={password}
                            error={errors.confirmPassword}
                        />

                        <ButtonRegister button="Daftar" />
                    </form>
                    <h4>Sudah memiliki akun? <span className='login-now' onClick={() => navigate('/login', { state: { role: selectedRole } })}>Login sekarang</span></h4>
                </div>
            </div>
            {showSuccessPopup && (
                <Popup
                    type="success"
                    message="Selamat! Akun Anda telah berhasil dibuat."
                    onClose={handleSuccessPopupClose}
                />
            )}
            {showErrorPopup && (
                <Popup
                    type="error"
                    message={errors}
                    // "Registrasi gagal. Silakan coba lagi."
                    onClose={handleErrorPopupClose}
                />
            )}
        </div>
    )
}

export default Register