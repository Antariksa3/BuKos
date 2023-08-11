import './ListKosCard.css'
import popularImage from '../../assets/images/popular1.svg'
import popularOwner from '../../assets/images/popularOwner1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ButtonDetail from '../Button/ButtonDetail'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import axios from 'axios'
import { api } from '../../api/api'
import { useParams } from 'react-router-dom'

const ListKosCard = (product) => {
    const formattedPrice = product.harga.toLocaleString('id-ID');
    // const [isFavorite, setIsFavorite] = useState(false);
    const [isFavorite, setIsFavorite] = useState(product.favorite);
    const token = localStorage.getItem('token');
    // const { productId } = useParams();

    const productId = product.id;

    const postFavoriteProduct = async (productId, NewIsFavorite) => {
        try {
            const response = await axios.post(`${api()}/product/${productId}/favorite`,
                null,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
            setIsFavorite(NewIsFavorite)
        } catch (error) {
            console.error('Error posting favorite:', error.message);
        }
    };

    const handleFavoriteProduct = () => {
        const newIsFavorite = !isFavorite;
        postFavoriteProduct(productId, newIsFavorite);
    };

    return (
        <div className='listkos-card'>
            <div className="listkos-image">
                <img src={product.gambar} alt="gambar kos" className='listkos-kos-image' />
                <div className="listkos-owner">
                    <img src={product.foto_pemilik} className='owner-image' />
                    <h4>{product.pemilik}</h4>
                </div>
                <div className="listkos-favorite">
                    <button className="favorite-button" onClick={handleFavoriteProduct}>
                        <Icon
                            icon="wpf:like"
                            className='favorite-icon'
                            height="16"
                            color={isFavorite ? 'red' : '#383746'}
                        />
                        {/* <FontAwesomeIcon icon={faHeart} className='favorite-icon' /> */}
                    </button>
                </div>
            </div>
            <div className="listkos-kos">
                <h4>{product.nama_kos}</h4>
                <div className="listkos-location">
                    <FontAwesomeIcon icon={faLocationDot} className='listkos-location-icon' />
                    <h4>{product.lokasi}</h4>
                </div>
                <div className="listkos-price">
                    <h4>Rp{formattedPrice}/<span>Bulan</span></h4>
                </div>
            </div>
            <ButtonDetail productID={product.id} button='Lebih Rinci' />
        </div>
    )
}

export default ListKosCard