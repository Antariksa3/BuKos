// import Library
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// import Styles

// import Components
import Pagination from "../../components/Pagination/Pagination";

// import Assets
import Tagihan from "../../assets/icons/ic_booking_succeed.png";
import Keamanan from "../../assets/icons/ic_payment.png";
import Cashless from "../../assets/icons/ic_disbursement_funds.png";
import img1 from "../../assets/images/BgFjxmDl-540x720.jpg.png";
import TransactionCard from '../../components/TransactionCard/TransactionCard';

function RiwayatTransaksi() {
  // const [currentPage, setCurrentPage] = useState(1);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  // const navigate = useNavigate();

  return (
    <div className="isi-page-profile-kanan">
      <header>
        <h2>Transaksi</h2>
      </header>
      <div className="transaction-cards">
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
    </div>
  );
}

export default RiwayatTransaksi