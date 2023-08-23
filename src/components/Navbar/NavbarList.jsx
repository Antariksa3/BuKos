// import Library
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// import Styles
import './NavbarList.css'

// import Components
import SearchBar from '../../components/SearchBar/SearchBar'

// import Assets
import logo from '../../assets/images/logo.svg'
import close from '../../assets/icons/close.svg'
import profileImage from '../../assets/images/reviewUser1.svg'


const NavbarList = () => {
    const navigate = useNavigate()
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
        // window.location.reload();
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
        <nav className='navList'>
            <a href="/" className='navList-logo'><img src={logo} alt="logo" /></a>
            <ul className='navList-menu'>
                <li className='navList-item'>
                    <a href="#" className='nav-link'>Cari Kos</a>
                </li>
                <li className='navList-item'>
                    <a href="#" className='nav-link'>Layanan</a>
                </li>
                <li className='navList-item'>
                    <a href="#" className='nav-link'>Syarat & Ketentuan</a>
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
            </ul>
        </nav>
    )
}

export default NavbarList