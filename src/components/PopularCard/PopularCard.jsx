import './PopularCard.css'
import popularImage from '../../assets/images/popular1.svg'
import popularOwner from '../../assets/images/popularOwner1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Button4 from '../Button/Button4'


const PopularCard = () =>{
    return(
    <div className='popular-card'>
        <div className="popular-image">
            <img src={popularImage} alt="popular-image" className='popular-kos-image'/>
            <div className="popular-owner">
                <img src={popularOwner} alt="" />
                <h4>Bu Marni</h4>
            </div>
        </div>
        <div className="popular-kos">
            <h4>Kos Permata Bunda</h4>
            <div className="popular-location">
                <FontAwesomeIcon icon={faLocationDot} className='popular-location-icon'/>
                <h4>Jl. Jurang, Besito</h4>
            </div>
            <div className="popular-price">
                <h4>Rp1.200.000/<span>Bulan</span></h4>
            </div>
        </div>
        <Button4 button='Lebih Rinci'/>
    </div>
    )
}

export default PopularCard
