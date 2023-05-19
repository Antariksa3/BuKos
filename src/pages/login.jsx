import '../App.css';
import '../assets/styles/login.css';
import img1 from '../assets/images/img1.svg';
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';
import TextField from '../components/TextField/TextField';
import Button1 from '../components/Button/Button1';
import { useNavigate } from 'react-router-dom';
import apiurl from '../api'
import axios from 'axios'
import { useState } from 'react';

const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    const onSubmit = async (data) => {
        // e.preventDefault()
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);
        await axios({
            method: "post",
            url: apiurl() + "login",
            data: formData,
            headers: {
            "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.data.token);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
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
                    <form onSubmit={onSubmit}>
                        <TextField htmlFor='email' label='Email atau Nomor Handphone' type='email' name='email' inputId='email' placeholder='Email atau Nomor Handphone'   />
                        <TextField htmlFor='password' label='Password' type='password' name='password' inputId='password' placeholder='Minimal 8 Karakter'  />
                        <Button1 button="Login" />
                    </form>
                    <h4>Belum punya akun? <span onClick={() => navigate('/register')}>Daftar disini</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Login