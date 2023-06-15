// import Library
import { useNavigate } from 'react-router-dom'
// import React, {useState} from 'react'
import { faHouseUser, faCommentDots, faRupiahSign } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import { Link } from 'react-scroll'

// import Styles
import '../App.css'
import '../assets/styles/home.css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-coverflow'

// import Components
import NavBar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'
import BenefitCard from '../components/BenefitCard/BenefitCard'
import Button2 from '../components/Button/Button2'
import Button3 from '../components/Button/Button3'
import SearchBar1 from '../components/SearchBar/SearchBar1'
import PopularCard from '../components/PopularCard/PopularCard'
import ReviewCard from '../components/ReviewCard/ReviewCard'
import Button5 from '../components/Button/Button5'
import Footer from '../components/Footer/Footer'
import ScrollUp from '../components/ScrollUp/ScrollUp'

// import Assets
import dashboard1 from '../assets/images/dashboard1.svg'
import benefit1 from '../assets/images/benefit1.svg'
import { useEffect, useState } from 'react'
import { getReviewUser, api } from '../api/api'

const Home = () =>{
    // const navigate = useNavigate()
    const [reviewsUser, setReviewsUser] = useState([])

    useEffect(() =>{
        getReviewUser().then((review) => {
            setReviewsUser(review)
        })
    }, [])

    const UserReviewList = () => {
        return (
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={2.75}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow]}
                className="swiper_container"
            >
                {reviewsUser.map((review, i) => (
                <SwiperSlide key={i}>
                    <ReviewCard
                    user={review.nama_review}
                    icon={faThumbsUp}
                    review={review.review_desc}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            )
        }

    return(
        <>
            <div className="dashboard section">
                <NavBar/>
                <div className="dashboard-content">
                    <div className="circle shape-big"></div>
                    <div className="circle shape-small"></div>
                    <div className="dashboard-title">
                        <h1>Temukan Kos Yang Paling Cocok</h1>
                        <h3>Temukan kos yang sesuai dengan Anda dan lupakan semua kesulitan dalam menemukan tempat tinggal</h3>
                        {/* <SearchBar/> */}
                    </div>
                    <div className="dashboard-image">
                        <img src={dashboard1} alt="dashboard-image" />
                    </div>
                    <div className="scroll-down-container">
                    <Link to="benefit" className="scrollDown" spy={true} smooth={true} offset={-50} duration={250}>
                        <span></span>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="benefit section" id='benefit'>
                <div className="benefit-content">
                    <div className="benefit-images">
                        <img src={benefit1} alt="benefit-image" className='benefit-image'/>
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
            <div className="popular section" id='popular'>
                <div className="popular-content">
                    <div className="popular-header">
                        <h2>Kos Terpopuler</h2>
                        <div className="popular-search">
                            <Button3 button='Lihat Semua'/>
                            {/* <SearchBar1 /> */}
                        </div>
                    </div>
                    <div className="popular-cards">
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard /> 
                    </div>
                </div>
            </div>
            <div className="review">
                <div className="review-content">
                    <div className="review-header">
                    <h2>Apa yang customer kami katakan tentang BuKos</h2>
                    <h4>Sebagian besar pengguna kami memberi kami umpan balik mengenai layanan. Anda dapat melihat komentar mereka di bawah ini Ikuti kesenangan mereka dengan bergabung dengan anggota lain segera!</h4>
                    </div>
                    <div className="swipers">
                        <UserReviewList />
                    </div>
                </div>
            </div>
            <div className="start section">
                    <div className="get-started">
                        <h2>Dengan BuKos Anda dapat menemukan Kos yang Anda butuhkan</h2>
                        <h4>BuKos memudahkan pembeli untuk mulai mencari Kos impian mereka dengan mudah dan cepat</h4><br />
                        <Button5 />
                    </div>
            </div>
            <Footer />
            <ScrollUp />
        </>
    )
}

export default Home