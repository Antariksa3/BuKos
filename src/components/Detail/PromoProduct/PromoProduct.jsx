import { Icon } from '@iconify/react'
import React from 'react'

const PromoProduct = () => {
    return (
        <div>
            <div className="promo">
                <div className="isi-promo">
                    <Icon icon="teenyicons:gift-solid" color="#404040" height="20" />
                    <h1>Promo Yang Tersedia</h1>
                    <h4>Chat untuk tanyakan promo terbaru yang tersedia</h4>
                    <p>04 May 2023 - 31 May 2023</p>
                </div>
                <a href="#">Lihat Selengkapnya</a>
            </div>
        </div>
    )
}

export default PromoProduct