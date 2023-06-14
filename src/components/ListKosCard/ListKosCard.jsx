import './ListKosCard.css'
import popularImage from '../../assets/images/popular1.svg'
import popularOwner from '../../assets/images/popularOwner1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Button4 from '../Button/Button4'


const ListKosCard = () =>{
    return(
    <div className='listkos-card'>
        <div className="listkos-image">
            <img src={popularImage} alt="listkos-image" className='listkos-kos-image'/>
            <div className="listkos-owner">
                <img src={popularOwner} alt="" />
                <h4>Bu Marni</h4>
            </div>
        </div>
        <div className="listkos-kos">
            <h4>Kos Permata Bunda</h4>
            <div className="listkos-location">
                <FontAwesomeIcon icon={faLocationDot} className='listkos-location-icon'/>
                <h4>Jl. Jurang, Besito</h4>
            </div>
            <div className="listkos-price">
                <h4>Rp1.200.000/<span>Bulan</span></h4>
            </div>
        </div>
        <Button4 button='Lebih Rinci'/>
    </div>
    )
}

export default ListKosCard
