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

const fullNameRegex  = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const phoneNumberRegex = /^(08|\+628)\d{9,11}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const selectedRole = location.state ? location.state.role : ''

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [phone, setPhoneNumber] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneNumberFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [validConfirm, setValidConfirm] = useState(false);
    const [confirmFocus, setConfirmFocus] = useState(false);

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [errors, setErrors] = useState({});
    // const [error, setError] = useState(null);
    // const [retry, setRetry] = useState(false);

    // useEffect(() =>{
    //     userRef.current.focus();
    // }, [])

    //Nama Lengkap
    useEffect(() =>{
        const result = fullNameRegex.test(name);
        setValidName(result);
    },[name])

    // Nomor Telpon
    useEffect(() =>{
        const result = phoneNumberRegex.test(phone);
        setValidPhone(result);
    },[phone])
    
    // email
    useEffect(() =>{
        const result = emailRegex.test(email);
        setValidEmail(result);
    },[email])

    // password
    useEffect(() =>{
        const result = passwordRegex.test(password);
        setValidPassword(result);
        const match = password === confirmPassword;
        setValidConfirm(match);
    },[password, confirmPassword])

    useEffect(() => {
        setErrMsg('');
    }, [name, phone, email, password, confirmPassword])

    const handleRegister = async (e) => {
        e.preventDefault()

        let endpoint = '/register';

        if (selectedRole === 'pencari') {
        endpoint = '/register/user';
        } else if (selectedRole === 'pemilik') {
        endpoint = '/register/pemilik';
        }
        
        try {
            const response = await axios.post(api()+ endpoint, {
                name: name,
                email: email,
                phone: phone,
                password: password,
                confirm_password: confirmPassword,
            },);
                setShowSuccessPopup(true);
            } catch (error) {
                setShowErrorPopup(true);
            }
    };

    const handleSuccessPopupClose = () => {
        setShowSuccessPopup(false);
        navigate('/login');
    };
    
    const handleErrorPopupClose = () => {
        setShowErrorPopup(false);
    };

    return(
        <div className="wrapper">
            <div className="left">
                <img src={logo1} className='logo1' alt='logo1' />
                <div className="image">
                    <img src={img1} className='img1' alt='img1'/>
                    <h1>Temukan Kost Yang <br /> Nyaman Dengan BuKos</h1>
                </div>
                <button className='button-back' onClick={()=> navigate('/')}>Kembali</button>
            </div>
            <div className="right">
                <div className="form-register">
                    <img src={logo2} alt="logo2" className='logo2' />
                    <h1>Selamat Datang</h1>
                        <form onSubmit={handleRegister}>
                            <TextField 
                            htmlFor='nama' 
                            label='Nama Lengkap' 
                            type='text'
                            name='nama' 
                            inputId='nama' 
                            placeholder='Masukkan nama lengkap sesuai identitas'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            <TextField 
                            htmlFor='nohp' 
                            label='Nomor Handphone' 
                            type='text' 
                            name='nohp' 
                            inputId='nohp' 
                            placeholder='Isi dengan nomor handphone yang aktif'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            maxLength="10"
                            />
                            <TextField 
                            htmlFor='email' 
                            label='Email' 
                            type='email' 
                            name='email' 
                            inputId='email' 
                            placeholder='Masukkan email'
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField 
                            htmlFor='password' 
                            label='Password' 
                            type='password' 
                            name='password' 
                            inputId='password' 
                            placeholder='Minimal 8 Karakter'
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField 
                            htmlFor='conpass' 
                            label='Konfirmasi Password' 
                            type='password' 
                            name='conpass' 
                            inputId='conpass' 
                            placeholder='Masukkan kembali password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <ButtonRegister button="Daftar" disabled={!validName || !validPhone || !validEmail || !validPassword || !validConfirm ? true : false}/>
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
                    message="Registrasi gagal. Silakan coba lagi."
                    onClose={handleErrorPopupClose}
                />
            )}
        </div>
    )
}

export default Register