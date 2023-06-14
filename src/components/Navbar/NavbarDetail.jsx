import './NavbarDetail.css'
import logo from '../../assets/images/logo.svg'
import close from '../../assets/icons/close.svg'
import React, {useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const NavBar = () =>{
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if (window.scrollY >= 50){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <nav className={color ? 'nav fixed' : 'nav'}>
            <a href=""className='nav-logo'><img src={logo} alt="logo" onClick={() => navigate('/')} /></a>
            {/* <SearchBar/> */}
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to="popular" spy={true} smooth={true} offset={-50} duration={500}>Cari Kos</Link>
                </li>
                <li className='nav-item'>
                    <a href="#">Layanan</a>
                </li>
                <li className='nav-item'>
                    <a href="#">Syarat & Ketentuan</a>
                </li>
                <button className='button-login' onClick={toggleModal}>Masuk</button>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <h2>Masuk ke Bukos</h2>
                                <p>Saya ingin masuk sebagai</p>
                                <div className='login-role-selection' onClick={() => navigate('/register')}>
                                    <p>Pencari Kos</p>
                                </div>
                                <div className='login-role-selection' onClick={() => navigate('/login')}>
                                    <p>Pemilik Kos</p>
                                </div>
                                <button className="close-modal" onClick={toggleModal} ><img src={close} alt="close"/></button>
                            </div>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default NavBar