import React from 'react'
import './AssetCard.css'
import { Link as RouterLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const AssetCard = (asset) => {
    const numericPrice = parseFloat(asset.harga);
    const formattedPrice = numericPrice.toLocaleString('id-ID');
    // const formattedPrice = asset.harga.toLocaleString('id-ID');

    return (
        <div className='asset-card'>
            <div className="image-asset">
                <img src={asset.gambar} alt="" />
            </div>
            <div className="info-asset">
                <p>{asset.nama_kos}</p>
                {/* <p>{asset.lokasi}</p> */}
                <div className="asset-location">
                    <FontAwesomeIcon icon={faLocationDot} className='asset-location-icon' />
                    <p>{asset.lokasi}</p>
                </div>
                <div className="asset-price">
                    {/* <p>{asset.harga}/<span>Bulan</span></p> */}
                    <p>Rp{formattedPrice}/<span>Bulan</span></p>
                </div>
            </div>
            <RouterLink to={`/detail/${asset.id}`}>
                <button>Detail</button>
            </RouterLink>
            {/* <ButtonDetail productID={asset.id} button='Lebih Rinci' /> */}
        </div>
    )
}

export default AssetCard