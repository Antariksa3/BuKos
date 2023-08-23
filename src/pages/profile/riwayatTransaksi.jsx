// import Library
import React, { useEffect, useState, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductDetail, getTransaction } from '../../api/api'

// import Styles

// import Components
import Pagination from "../../components/Pagination/Pagination";

// import Assets
import Tagihan from '../../assets/icons/ic_booking_succeed.png'
import Keamanan from '../../assets/icons/ic_payment.png'
import Cashless from '../../assets/icons/ic_disbursement_funds.png'
import CardRiwayat from '../../components/CardRiwayat/CardRiwayat'
import img1 from "../../assets/images/BgFjxmDl-540x720.jpg.png";
import AssetCardShimmer from '../../components/AssetCardShimmer/AssetCardShimmer'

const RiwayatTransaksi = () => {
  const [detailTrans, setDetailTrans] = useState([])
  const [product, setProduct] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    getTransaction(token)
      .then((trans) => {
        setDetailTrans(trans);
        ProductDetails(trans);
        setDataLoaded(true)
      })
  }, []);
  console.log(detailTrans)

  const ProductDetails = (transactions) => {
    const productIds = transactions.map((item) => item.product_id);
    const productDetailsPromises = productIds.map((productId) => {
      return getProductDetail(productId);
    });

    Promise.all(productDetailsPromises)
      .then((products) => {
        const productsMap = {};
        products.forEach((product) => {
          productsMap[product.id] = product;
        });
        setProduct(productsMap);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  };
  console.log(product)

  const TransList = () => {
    if (!dataLoaded) {
      return (
        <div className='list-trans'>
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

    return detailTrans.map((transaction, i) => {
      const productItem = product && product[transaction.product_id];
      return (
        <Suspense key={i} fallback={<AssetCardShimmer />}>
          <CardRiwayat
            // key={i}
            gambar_kos={productItem ? `${process.env.REACT_APP_API_URL}/${productItem.foto_kos}` : ''}
            nama_kos={productItem ? productItem.nama_kos : ''}
            tipe_kos={productItem ? productItem.tipe_kamar : ''}
            qty={transaction.qty}
            total_price={transaction.total_price}
            status={transaction.status}
          />
        </Suspense>
      );
    });
  };

  return (
    <div className="isi-page-profile-kanan">
      <header>
        <h2>
          Riwayat Transaksi
        </h2>
      </header>
      <div className="isi-profil-kanan">
        {detailTrans.length > 0 ? (
          <div className="list-trans">
            <TransList />
          </div>
        ) : (
          <div>
            <div className="title-isi-profil-kanan">
              <h1>Riwayat Transaksi</h1>
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
            <div className="button-isi-profil">
              <button onClick={() => navigate('/listkos')}>Mulai cari dan sewa kos</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RiwayatTransaksi