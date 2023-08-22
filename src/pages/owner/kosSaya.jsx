// import Library
import React, { Suspense, useEffect, useState } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { getProduct, getProductOwner } from '../../api/api'

// import Styles

// import Components
// import AssetCard from '../../components/AssetCard/AssetCard' 

// import Assets
import Tagihan from '../../assets/icons/ic_booking_succeed.png'
import Keamanan from '../../assets/icons/ic_payment.png'
import Cashless from '../../assets/icons/ic_disbursement_funds.png'
import AssetCardShimmer from '../../components/AssetCardShimmer/AssetCardShimmer'

const AssetCard = React.lazy(() => import('../../components/AssetCard/AssetCard'));

const KosSaya = () => {
  const navigate = useNavigate()
  const [products, setProduct] = useState([])
  const token = localStorage.getItem('token');
  const [assets, setAsset] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getProduct()
      .then((product) => {
        setProduct(product)
        setDataLoaded(true)
      })
  }, [])

  useEffect(() => {
    getProductOwner(token)
      .then((product) => {
        setAsset(product)
        setDataLoaded(true)
      })
  }, [token])

  console.log(assets)

  const AssetList = () => {
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

    return assets.map((product, i) => {
      return (
        <Suspense key={i} fallback={<AssetCardShimmer />}>
          <AssetCard
            // foto_pemilik={`${process.env.REACT_APP_API_URL}/${product.foto_pemilik}`}
            // pemilik={product.nama_pemilik}
            nama_kos={product.nama_kos}
            lokasi={product.lokasi_kos}
            harga={product.harga_kos}
            gambar={`${process.env.REACT_APP_API_URL}/${product.foto_kos}`}
            id={product.id}
          />
        </Suspense>
      )
    })
  }

  return (
    <div className="isi-page-profile-kanan">
      <header className='dashboard-assets-header'>
        <h2>Asset Saya</h2>
        <RouterLink to="/daftar_kos" className=''>Daftarkan Kos</RouterLink>
      </header>
      <div className="isi-profil-kanan">
        {assets.length === 0 ? (
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
        ) : (
          <div className="list-assets">
            <AssetList />
          </div>
        )}
      </div>
    </div>
  )
}

export default KosSaya