// import Library
import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getOwnerTransaction, getProductDetail } from '../../api/api';

// import Styles

// import Components
import Pagination from "../../components/Pagination/Pagination";

// import Assets
import Tagihan from "../../assets/icons/ic_booking_succeed.png";
import Keamanan from "../../assets/icons/ic_payment.png";
import Cashless from "../../assets/icons/ic_disbursement_funds.png";
import img1 from "../../assets/images/BgFjxmDl-540x720.jpg.png";
// import TransactionCard from '../../components/TransactionCard/TransactionCard';
import AssetCardShimmer from '../../components/AssetCardShimmer/AssetCardShimmer';

const TransactionCardOwner = React.lazy(() => import('../../components/TransactionCardOwner/TransactionCardOwner'));

const Transaksi = () => {
  const [detailTrans, setDetailTrans] = useState([])
  const [product, setProduct] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    getOwnerTransaction(token)
      .then((trans) => {
        setDetailTrans(trans);
        // ProductDetails(trans);
        setDataLoaded(true)
      })
  }, []);
  console.log(detailTrans)

  // const ProductDetails = (transactions) => {
  //   const productIds = transactions.map((item) => item.product_id);
  //   const productDetailsPromises = productIds.map((productId) => {
  //     return getProductDetail(productId);
  //   });

  //   Promise.all(productDetailsPromises)
  //     .then((products) => {
  //       const productsMap = {};
  //       products.forEach((product) => {
  //         productsMap[product.id] = product;
  //       });
  //       setProduct(productsMap);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching product details:', error);
  //     });
  // };
  // console.log(product)

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
          <TransactionCardOwner
            // key={i}
            gambar_kos={`${process.env.REACT_APP_API_URL}/${transaction.kos_yang_di_sewa.foto_kos}`}
            nama_kos={transaction.kos_yang_di_sewa.nama_kos}
            nama_penyewa={transaction.Nama_Penyewa}
            email_penyewa={transaction.Email}
            tipe_kos={transaction.kos_yang_di_sewa.tipe_kamar}
            price={transaction.kos_yang_di_sewa.harga_kos}
          />
        </Suspense>
      );
    });
  };

  return (
    <div className="isi-page-profile-kanan">
      <header>
        <h2>Transaksi</h2>
      </header>
      <div className="isi-profil-kanan">
        {detailTrans.length > 0 ? (
          <div className="list-trans">
            <TransList />
          </div>
        ) : (
          <>
            <div className="title-isi-profil-kanan">
              <h1>Transaksi</h1>
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
          </>
        )}
      </div>
      {/* <div className="transaction-cards">
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div> */}
    </div>
  );
}

export default Transaksi