// import Library
import React, { useState, useContext } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate, Link as RouterLink } from 'react-router-dom'

// import Styles
import './Navbar.css'

// import Components
import SearchBar from '../../components/SearchBar/SearchBar'

// import Assets
import logo from '../../assets/images/logo.svg'
import close from '../../assets/icons/close.svg'
import profileImage from '../../assets/images/reviewUser1.svg'

const NavBar = () =>{
    const navigate = useNavigate()
    const [color, setColor] = useState(false)
    const [modal, setModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(hasToken());
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [role, setRole] = useState('');

    const toggleModal = () => {
        setModal(!modal);
    };
    
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
    const changeColor = () =>{
        if (window.scrollY >= 50){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        navigate('/');
    };
    
    function hasToken() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        navigate('/login', { state: { role: selectedRole } });
    };


    return(
        <nav className={color ? 'nav fixed' : 'nav'}>
            <a href="" className='nav-logo'><img src={logo} alt="logo" /></a>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <ScrollLink to="popular" spy={true} smooth={true} offset={-50} duration={500} className='nav-link'>Cari Kos</ScrollLink>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Layanan</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Syarat & Ketentuan</a>
                </li>
                {isLoggedIn ? (
                <li className='nav-item'>
                    <div className="dropdown">
                        <img src={profileImage} alt="Profile" className="profile-image" onClick={toggleDropdown} />
                        {dropdownOpen && (
                            <div className="dropdown-content open">
                                <RouterLink to="/profile/kosansaya" onClick={toggleDropdown} className="dropdown-link">
                                    Profile
                                </RouterLink>
                                <button onClick={handleLogout} className="dropdown-button">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </li>
                ) : (
                <li className='nav-item'>
                    <button className='button-login' onClick={toggleModal}>Masuk</button>
                </li>
                )}
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay-login"></div>
                        <div className="modal-content">
                            <h2>Masuk ke Bukos</h2>
                            <p>Saya ingin masuk sebagai</p>
                            <div className='login-role-selection' onClick={() => handleRoleSelection('pencari')}>
                                <p>Pencari Kos</p>
                            </div>
                            <div className='login-role-selection' onClick={() => handleRoleSelection('pemilik')}>
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