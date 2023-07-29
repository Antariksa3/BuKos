// import Library
import React from 'react'
import { useNavigate } from 'react-router-dom'

// import Styles

// import Components

// import Assets
import Tagihan from '../../assets/icons/ic_booking_succeed.png'
import Keamanan from '../../assets/icons/ic_payment.png'
import Cashless from '../../assets/icons/ic_disbursement_funds.png'

function KosanSaya() {
  const navigate = useNavigate()
  return (
    <div className="isi-page-profile-kanan">
      <header>
        <h2>Kosan Saya</h2>
      </header>
      <div className="isi-profil-kanan">
        <div className="title-isi-profil-kanan">
          <h1>Kamu Belum Menyewa Kos</h1>
          <p>Yuk, sewa di BuKos atau masukkan kode dari pemilik kos untuk aktifkan halaman ini! Coba cara ngekos modern dengan manfaat berikut ini.</p>
        </div>
        <div className="list-isi-profil-kanan">
          <div className="tagihan-dan-kontrak">
            <img src={Tagihan} alt="" height={50} />
            <p>Tagihan dan kontrak sewa tercatat rapi</p>
          </div>
          <div className="tagihan-dan-kontrak">
            <img src={Keamanan} alt="" height={50} />
            <p>BuKos menjaga keamanan transaksi</p>
          </div>
          <div className="tagihan-dan-kontrak">
            <img src={Cashless} alt="" height={45} />
            <p>Cashless, dengan beragam metode pembayaran</p>
          </div>
        </div>
        <button className="button-riwayat-booking" onClick={() => navigate('/')}>Mulai Jelajahi Kos</button>
      </div>
    </div>
  )
}

export default KosanSaya