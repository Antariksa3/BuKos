// import Library
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react'
import { api } from '../api/api'

// import Styles
import '../App.css';
import '../assets/styles/login.css';

// import Components
import TextField from '../components/TextField/TextField';
import ButtonRegister from '../components/Button/ButtonRegister';

// import Assets
import img1 from '../assets/images/img1.svg';
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';
import Popup from '../components/Popup/Popup';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const selectedRole = location.state ? location.state.role : '';
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleValidation = () => {
        let formIsValid = true;
        const newErrors = {};

        // Validasi email
        if (!email) {
            formIsValid = false;
            newErrors.email = 'Email atau nomor handphone harus diisi';
        }

        // Validasi password
        if (!password) {
            formIsValid = false;
            newErrors.password = 'Password harus diisi';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        let endpoint = '/login';

        if (selectedRole === 'user') {
            endpoint = '/user/login';
        } else if (selectedRole === 'owner') {
            endpoint = '/owner/login';
        }

        try {
            const response = await axios.post(api() + endpoint, {
                email: email,
                password: password,
            });
            console.log(response)
            const token = response.data.data.token;
            localStorage.setItem('token', token);
            // console.log(token)
            const userRole = response.data.data.role;
            localStorage.setItem('userRole', userRole);
            // console.log(userRole)
            navigate('/', { state: { role: selectedRole } });
        } catch (error) {
            console.log(error);
            setShowErrorPopup(true);
            // if (error.response && error.response.status === 403) {
            //     const errorMessage = error.response.data.message;
            //     if (errorMessage === 'Email not found') {
            //         // Tampilkan popup error untuk kasus "email tidak ditemukan"
            //         setShowErrorPopup(true);
            //         setErrorMessage('Email tidak ditemukan. Silakan cek kembali email Anda.');
            //     } else if (errorMessage === 'Access forbidden for this role') {
            //         // Tampilkan popup error untuk kasus "akses tidak diizinkan untuk role ini"
            //         setShowErrorPopup(true);
            //         setErrorMessage('Akses tidak diizinkan untuk peran ini.');
            //     }
            // } else {
            //     // Menampilkan popup error umum jika terjadi kesalahan lain selain 403
            //     setShowErrorPopup(true);
            //     setErrorMessage('Terjadi kesalahan saat login. Silakan coba lagi.');
            // }
        }
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
                <div className="form-login">
                    <img src={logo2} alt="logo2" className='logo2' />
                    <h1>Selamat Datang Kembali</h1>
                    <h4>Selamat datang kembali! <br /> Silakan login dengan akun yang Anda Daftarkan</h4>
                    <br />
                    <form onSubmit={handleLogin}>
                        <TextField
                            htmlFor='email'
                            label='Email'
                            type='email'
                            inputId='email'
                            placeholder='Masukkan Email'
                            onChange={(e) => setEmail(e.target.value)}
                            error={errors.email}
                        />
                        <TextField
                            htmlFor='password'
                            label='Password'
                            type='password'
                            inputId='password'
                            placeholder='Minimal 8 Karakter'
                            onChange={(e) => setPassword(e.target.value)}
                            error={errors.password}
                        />
                        <ButtonRegister button="Login" />
                    </form>
                    <h4>Belum punya akun? <span onClick={() => navigate('/register', { state: { role: selectedRole } })}>Daftar disini</span></h4>
                </div>
            </div>
            {showErrorPopup && (
                <Popup
                    type="error"
                    message="Silakan cek kembali email dan password anda."
                    // message={errorMessage}
                    onClose={handleErrorPopupClose}
                />
            )}
        </div>
    )
}

export default Login