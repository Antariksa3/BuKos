import './Footer.css'
import logo from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () =>{
    const navigate = useNavigate()

    return(
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <div><a onClick={() => navigate('/')}><img src={logo} alt="logo" /></a></div>
                    <div>
                        <h4 className='footer-title'>Eksplorasi</h4>
                            <ul className='footer-links'>
                            <li><a href="#" className='footer-link'>Cari kos</a></li>
                            <li><a href="#" className='footer-link'>Layanan</a></li>
                            <li><a href="#" className='footer-link'>Keuntungan</a></li>
                            <li><a href="#" className='footer-link'>Kos Populer</a></li>
                            <li><a href="#" className='footer-link'>Review</a></li>
                            </ul>
                    </div>
                    <div>
                        <h4 className='footer-title'>Legality</h4>
                            <ul className='footer-links'>
                                <li><a href="#" className='footer-link'>Privacy policy</a></li>
                                <li><a href="#" className='footer-link'>Cookie</a></li>
                            </ul>
                    </div>
                    <div>
                        <h4 className='footer-title'>Hubungi Kami</h4>
                            <ul className='footer-links'>
                                <li><FontAwesomeIcon icon={faEnvelope} className='contact-icon'/><a href="#" className='footer-link'>bukos@gmail.com</a></li>
                                <li><FaWhatsapp className='contact-icon'/><a href="#" className='footer-link'>0878-2002-5877</a></li>
                            </ul>
                    </div>
                </div>
            <span className='divider'></span>
            <span className="footer-copy">
            &#169; 2023 BuKos Company | <span><a href="#">Privacy Policy</a></span>
            </span>
            </div>
        </footer>
        
    )
}

export default Footer