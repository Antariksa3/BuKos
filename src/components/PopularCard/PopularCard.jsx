import './PopularCard.css'
import popularImage from '../../assets/images/popular1.svg'
import popularOwner from '../../assets/images/popularOwner1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ButtonDetail from '../Button/ButtonDetail'
import { useNavigate } from 'react-router-dom'


const PopularCard = (newest) => {
    const numericPrice = parseFloat(newest.harga);
    const formattedPrice = numericPrice.toLocaleString('id-ID');
    const navigate = useNavigate()
    const productId = newest.id;

    return (
        <div className='popular-card'>
            <div className="popular-image">
                <img src={newest.gambar} alt="popular-image" className='popular-kos-image' />
                <div className="popular-owner">
                    <img src={newest.foto_pemilik} alt="" className='popular-owner-image' />
                    <h4>{newest.pemilik}</h4>
                </div>
            </div>
            <div className="popular-kos">
                <h4>{newest.nama_kos}</h4>
                <div className="popular-location">
                    <FontAwesomeIcon icon={faLocationDot} className='popular-location-icon' />
                    <h4>{newest.lokasi}</h4>
                </div>
                <div className="popular-price">
                    <h4>Rp{formattedPrice}/<span>Bulan</span></h4>
                </div>
            </div>
            <ButtonDetail button='Lebih Rinci' productID={newest.id} />
        </div>
    )
}

export default PopularCard
