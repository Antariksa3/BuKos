// import Library
import React from 'react'
import { useNavigate } from 'react-router-dom'

// import Styles

// import Components

// import Assets
import Tagihan from '../../assets/icons/ic_booking_succeed.png'
import Keamanan from '../../assets/icons/ic_payment.png'
import Cashless from '../../assets/icons/ic_disbursement_funds.png'
import rumah from '../../assets/images/undraw_house_searching_re_stk8.svg'

function RiwayatKos() {
    const navigate = useNavigate()
  return (
    <div className="isi-page-profile-kanan">
        <header>
        <h2>Riwayat Booking</h2>
      </header>
    <div className="isi-profil-kanan">
            <div className="isi-riwayat-kos">
              <img src={rumah} alt="" />
            <p>Yuk, sewa di BuKos atau masukkan kode dari pemilik kos untuk aktifkan halaman ini! Coba cara ngekos modern dengan manfaat berikut ini.</p>
            </div>
            <button className="button-riwayat-booking" onClick={() => navigate('/')}>Mulai Jelajahi Kos</button>
          </div>
    </div>
  )
}

export default RiwayatKos