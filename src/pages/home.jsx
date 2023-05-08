import '../App.css'
import '../assets/styles/home.css'
// import { useNavigate } from 'react-router-dom'
import NavBar from '../layouts/Navbar/Navbar'
import React, {useState} from 'react'
import dashboard1 from '../assets/images/dashboard1.svg'
import benefit1 from '../assets/images/benefit1.svg'
import SearchBar from '../components/SearchBar/SearchBar'
import BenefitCard from '../components/BenefitCard/BenefitCard'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faCommentDots, faRupiahSign } from '@fortawesome/free-solid-svg-icons'
import Button2 from '../components/Button/Button2'

const Home = () =>{
    // const navigate = useNavigate()

    return(
        <div className="home">
            <NavBar/>
            <div className="dashboard">
                <div className="circle shape-big"></div>
                <div className="circle shape-small"></div>
                <div className="dashboard-title">
                    <h1>Temukan Kos Yang Paling Cocok</h1>
                    <h3>Temukan kos yang sesuai dengan Anda dan lupakan semua kesulitan dalam menemukan tempat tinggal</h3>
                    <SearchBar/>
                </div>
                <div className="dashboard-image">
                    <img src={dashboard1} alt="dashboard-image" />
                </div>
            </div>
            <div className="benefit">
                <div className="benefit-image">
                    <img src={benefit1} alt="benefit-image" />
                </div>
                <div className="benefit-desc">
                    <h2>Dapatkan kos yang nyaman <br /> Dengan cara yang mudah</h2>
                    <h4>Cari kos seperti Anda mencari jodoh, cek harga, cek lokasi, dan cek apakah rumah tersebut cocok untuk Anda. Gunakan BuKos untuk menemukan kos yang Anda inginkan.</h4>
                    <div className="benefit-cards">
                        <BenefitCard icon={faHouseUser} benefitText='Mencari kos lebih mudah'/>
                        <BenefitCard icon={faCommentDots} benefitText='Chat sebelum menyewa'/>
                        <BenefitCard icon={faRupiahSign} benefitText='Pembayaran lebih muda'/>
                    </div>
                    <Button2 button='Lebih Lanjut'/>
                </div>
            </div>
        </div>
    )

}

export default Home