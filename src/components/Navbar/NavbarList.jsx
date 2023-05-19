import './NavbarList.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import close from '../../assets/icons/close.svg'
import React, {useState} from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'


const NavbarList = () =>{
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

    // const [color, setColor] = useState(false)
    // const changeColor = () =>{
    //     if (window.scrollY >= 50){
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }

    // window.addEventListener('scroll', changeColor)

    return(
        <nav className='navList'>
            <a onClick={() => navigate('/')} className='navList-logo'><img src={logo} alt="logo" /></a>
            {/* <SearchBar/> */}
            <ul className='navList-menu'>
                <li className='navList-item'>
                    <a href="#">Cari Kos</a>
                </li>
                <li className='navList-item'>
                    <a href="#">Layanan</a>
                </li>
                <li className='navList-item'>
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

export default NavbarList