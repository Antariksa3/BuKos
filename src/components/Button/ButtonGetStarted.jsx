import '../../App.css'
import './ButtonGetStarted.css'
import { useNavigate } from 'react-router-dom'
import close from '../../assets/icons/close.svg'
import React, {useState} from 'react'

const ButtonGetStarted = () => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);

    // const toggleModal = () => {
    //     setModal(!modal);
    // };
    
    // if(modal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    return(
        <div className="buttonGetStarted">
            <div className="background-glass-button">
            <button className='button-start'>Mulai Sekarang</button>
            {/* {modal && (
                    <div className="modal-start">
                        <div onClick={toggleModal} className="overlay-start"></div>
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
                )} */}
            </div>
        </div>
    )
}

export default ButtonGetStarted