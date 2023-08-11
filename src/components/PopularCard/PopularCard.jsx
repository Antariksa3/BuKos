import './PopularCard.css'
import popularImage from '../../assets/images/popular1.svg'
import popularOwner from '../../assets/images/popularOwner1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ButtonDetail from '../Button/ButtonDetail'
import { useNavigate } from 'react-router-dom'


const PopularCard = () => {
    const navigate = useNavigate()

    return (
        <div className='popular-card' onClick={() => navigate('/detail')}>
            <div className="popular-image">
                <img src={popularImage} alt="popular-image" className='popular-kos-image' />
                <div className="popular-owner">
                    <img src={popularOwner} alt="" />
                    <h4>Bu Marni</h4>
                </div>
            </div>
            <div className="popular-kos">
                <h4>Kos Permata Bunda</h4>
                <div className="popular-location">
                    <FontAwesomeIcon icon={faLocationDot} className='popular-location-icon' />
                    <h4>Jl. Jurang, Besito</h4>
                </div>
                <div className="popular-price">
                    <h4>Rp1.200.000/<span>Bulan</span></h4>
                </div>
            </div>
            <ButtonDetail button='Lebih Rinci' onClick={() => navigate('/detail')} />
        </div>
    )
}

export default PopularCard
