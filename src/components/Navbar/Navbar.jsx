// import Library
import React, { useState, useContext } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// import Styles
import './Navbar.css'

// import Components
import SearchBar from '../../components/SearchBar/SearchBar'

// import Assets
import logo from '../../assets/images/logo.svg'
import close from '../../assets/icons/close.svg'
import profileImage from '../../assets/images/reviewUser1.svg'

const NavBar = () => {
    const navigate = useNavigate()
    const [color, setColor] = useState(false)
    const [modal, setModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(hasToken());
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [role, setRole] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownRoute, setDropdownRoute] = useState(null);

    const toggleModal = () => {
        setModal(!modal);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        const userRole = localStorage.getItem('userRole');
        console.log(userRole)
        if (userRole === 'user') {
            setDropdownRoute('/profile/kosansaya');
        } else if (userRole === 'owner') {
            setDropdownRoute('/dashboard/kos_saya');
        } else {
            // setDropdownRoute('*');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
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


    return (
        <nav className={color ? 'nav fixed' : 'nav'}>
            <a href="/" className='nav-logo'><img src={logo} alt="logo" /></a>
            <div className={`nav-menu ${menuOpen ? 'show-menu' : ''}`}>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <ScrollLink to="popular" spy={true} smooth={true} offset={-50} duration={500} className='nav-link' onClick={closeMenu}>Cari Kos</ScrollLink>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link' onClick={closeMenu}>Layanan</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link' onClick={closeMenu}>Syarat & Ketentuan</a>
                    </li>
                    {isLoggedIn ? (
                        <li className='nav-item'>
                            <div className="dropdown">
                                <img src={profileImage} alt="Profile" className="profile-image" onClick={toggleDropdown} />
                                {dropdownOpen && (
                                    <div className="dropdown-content open">
                                        <RouterLink to={dropdownRoute} onClick={toggleDropdown} className="dropdown-link">
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
                                <div className='login-role-selection' onClick={() => handleRoleSelection('user')}>
                                    <p>Pencari Kos</p>
                                </div>
                                <div className='login-role-selection' onClick={() => handleRoleSelection('owner')}>
                                    <p>Pemilik Kos</p>
                                </div>
                                <button className="close-modal" onClick={toggleModal} ><img src={close} alt="close" /></button>
                            </div>
                        </div>
                    )}
                    <div className="close-menu">
                        <FontAwesomeIcon icon={faXmark} onClick={closeMenu} />
                    </div>
                </ul>
            </div>
            <div className="toggle-menu">
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className='menu-icon' />
            </div>
        </nav>
    )
}

export default NavBar