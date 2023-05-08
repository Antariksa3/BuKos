import '../App.css';
import '../assets/styles/login.css';
import img1 from '../assets/images/img1.svg';
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';
import TextField from '../components/TextField/TextField';
import Button1 from '../components/Button/Button1';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate()

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
                    <TextField htmlFor='email' label='Email atau Nomor Handphone' type='email' name='email' inputId='email' placeholder='Email atau Nomor Handphone'   />
                    <TextField htmlFor='password' label='Password' type='password' name='password' inputId='password' placeholder='Minimal 8 Karakter'  />
                    <Button1 button="Login" />
                    <h4>Belum punya akun? <span onClick={() => navigate('/register')}>Daftar disini</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Login