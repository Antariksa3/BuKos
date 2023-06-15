// import Library
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import { useState, useContext} from 'react'
import { api } from '../api/api'
import { AuthContext } from '../auth/AuthContext'

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

const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const selectedRole = location.state ? location.state.role : '';

    const handleLogin = async (e) => {
        e.preventDefault();

        let endpoint = '/login';

        if (selectedRole === 'pencari') {
            endpoint = '/login/user';
        } else if (selectedRole === 'pemilik') {
            endpoint = '/login/pemilik';
        }

        try {
            const response = await axios.post(api() + endpoint, {
                email: email,
                password: password,
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/'
            // , { state: { role } }
            );
        } catch (error) {
            console.log(error);
        }
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
                <div className="form-login">
                    <img src={logo2} alt="logo2" className='logo2' />
                    <h1>Selamat Datang Kembali</h1>
                    <h4>Selamat datang kembali! <br /> Silakan login dengan akun yang Anda Daftarkan</h4>
                    <br />
                    <form onSubmit={handleLogin}>
                        <TextField 
                        htmlFor='email' 
                        label='Email atau Nomor Handphone'
                        type='email' 
                        name='email' 
                        inputId='email' 
                        placeholder='Email atau Nomor Handphone'
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
                        <ButtonRegister button="Login" />
                    </form>
                    <h4>Belum punya akun? <span onClick={() => navigate('/register', { state: { role: selectedRole } })}>Daftar disini</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Login