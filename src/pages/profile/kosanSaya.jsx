// import Library
import React, { useEffect, useState, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFavoriteProduct } from '../../api/api'

// import Styles

// import Components
import AssetCardShimmer from '../../components/AssetCardShimmer/AssetCardShimmer'

// import Assets
import Tagihan from '../../assets/icons/ic_booking_succeed.png'
import Keamanan from '../../assets/icons/ic_payment.png'
import Cashless from '../../assets/icons/ic_disbursement_funds.png'

const AssetCard = React.lazy(() => import('../../components/AssetCard/AssetCard'));

const KosanSaya = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const [favProduct, setFavProduct] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getFavoriteProduct(token)
      .then((favorite) => {
        setFavProduct(favorite)
        setDataLoaded(true)
      })
  }, [token])
  console.log(favProduct)

  const FavList = () => {
    if (!dataLoaded) {
      return (
        <div className='list-cards'>
          <AssetCardShimmer />
          <AssetCardShimmer />
          <AssetCardShimmer />
          <AssetCardShimmer />
          <AssetCardShimmer />
          <AssetCardShimmer />
          <AssetCardShimmer />
          <AssetCardShimmer />
        </div>
      );
    }

    return favProduct.map((favorite, i) => {
      return (
        <Suspense key={i} fallback={<AssetCardShimmer />}>
          <AssetCard
            // foto_pemilik={`http://127.0.0.1:8000/${favorite.foto_pemilik}`}
            // pemilik={favorite.nama_pemilik}
            nama_kos={favorite.nama_kos}
            lokasi={favorite.lokasi_kos}
            harga={favorite.harga_kos}
            gambar={`http://127.0.0.1:8000/${favorite.foto_kos}`}
            id={favorite.id}
          />
        </Suspense>
      )
    })
  }

  return (
    <div className="isi-page-profile-kanan">
      <header>
        <h2>Favorit Saya</h2>
      </header>
      <div className="isi-profil-kanan">
        {favProduct.length > 0 ? (
          <div div className="list-assets">
            <FavList />
          </div>

        ) : (
          <div>
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
            <button className="button-riwayat-booking" onClick={() => navigate('/listkos')}>Mulai Jelajahi Kos</button>
          </div>
        )}

      </div>
    </div >
  )
}

export default KosanSaya