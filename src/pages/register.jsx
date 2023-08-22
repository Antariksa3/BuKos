import '../App.css';
import '../assets/styles/register.css';
import img1 from '../assets/images/img1.svg';
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';
import TextField from '../components/TextField/TextField';
import Button1 from '../components/Button/Button1';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
                <div className="form-register">
                    <img src={logo2} alt="logo2" className='logo2' />
                    <h1>Selamat Datang</h1>
                    {/* <h4>Selamat datang kembali! <br /> Silakan login dengan akun yang Anda Daftarkan</h4> */}
                    <TextField htmlFor='nama' label='Nama Lengkap' type='text' name='nama' inputId='nama' placeholder='Masukkan nama lengkap sesuai identitas' />
                    <TextField htmlFor='nohp' label='Nomor Handphone' type='text' name='nohp' inputId='nohp' placeholder='Isi dengan nomor handphone yang aktif' />
                    <TextField htmlFor='email' label='Email' type='email' name='email' inputId='email' placeholder='Masukkan email' />
                    <TextField htmlFor='password' label='Password' type='password' name='password' inputId='password' placeholder='Minimal 8 Karakter' />
                    <TextField htmlFor='conpass' label='Ulangi Password' type='password' name='conpass' inputId='conpass' placeholder='Masukkan kembali password' />
                    <Button1 button="Daftar" />
                    <h4>Sudah memiliki akun? <span onClick={() => navigate('/login')}>Login sekarang</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Register