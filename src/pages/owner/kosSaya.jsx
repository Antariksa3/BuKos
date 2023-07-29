// import Library
import React, { Suspense, useEffect, useState } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { getProduct } from '../../api/api'

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
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getProduct().then((product) => {
      setProduct(product)
      setDataLoaded(true)
    })
  }, [])

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

    return products.map((product, i) => {
      return (
        <Suspense key={i} fallback={<AssetCardShimmer />}>
          <AssetCard
            // foto_pemilik={`http://127.0.0.1:8000/${product.foto_pemilik}`}
            // pemilik={product.nama_pemilik}
            nama_kos={product.nama_kos}
            lokasi={product.lokasi_kos}
            harga={product.harga_kos}
            gambar={`http://127.0.0.1:8000/${product.foto_kos}`}
          />
        </Suspense>
      )
    })
  }

  return (
    <div className="isi-page-profile-kanan">
      <header className='dashboard-assets-header'>
        <h2>Kosan Saya</h2>
        <RouterLink to="/daftar_kos" className=''>Daftarkan Kos</RouterLink>
      </header>
      <div className="isi-profil-kanan">
        <div className="list-assets">
          <AssetList />
        </div>
      </div>
    </div>
  )
}

export default KosSaya