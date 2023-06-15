import './ListKosCard.css'
import popularImage from '../../assets/images/popular1.svg'
import popularOwner from '../../assets/images/popularOwner1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Button4 from '../Button/Button4'


const ListKosCard = (product) =>{
    return(
    <div className='listkos-card'>
        <div className="listkos-image">
            <img src={product.gambar} alt="gambar kos" className='listkos-kos-image'/>
            <div className="listkos-owner">
                <img src={popularOwner} className='owner-image' />
                <h4>{product.pemilik}</h4>
            </div>
        </div>
        <div className="listkos-kos">
            <h4>{product.nama_kos}</h4>
            <div className="listkos-location">
                <FontAwesomeIcon icon={faLocationDot} className='listkos-location-icon'/>
                <h4>{product.lokasi}</h4>
            </div>
            <div className="listkos-price">
                <h4>Rp{product.harga}/<span>Bulan</span></h4>
            </div>
        </div>
        <Button4 button='Lebih Rinci'/>
    </div>
    )
}

export default ListKosCard
