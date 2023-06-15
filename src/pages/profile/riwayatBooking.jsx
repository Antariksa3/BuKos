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

function RiwayatBooking() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Logika atau pembaruan data lainnya berdasarkan halaman yang dipilih
  };
  const navigate = useNavigate();
  
  return (
    <div className="isi-page-profile-kanan">
      <header>
        <h2>Riwayat Booking</h2>
      </header>
      <div className="isi-riwayat-booking">
        <div className="card-riwayat">
          <div className="card-riwayat-atas">
            <img src={img1} alt="" />
            <div className="isi-card-riwayat-atas">
              <h4>Kost Singgahsini MnV Co-Living Tipe B Bendungan
Hilir Jakarta Pusat 482539SH</h4>
              <p>Tersedia 2 kamar - <span>Campur</span></p>
              <h4>Rp. 1.000.000 Per Bulan</h4>
            </div>
          </div>
          <div className="card-riwayat-bawah">
            <button className="delete-button">
              <svg viewBox="0 0 448 512" className="svgIcon">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
              </svg>
            </button>
            <div className="button-isi-profil">
              <button >Booking Sekarang</button>
            </div>
          </div>
        </div>
        <div className="card-riwayat">
          <div className="card-riwayat-atas">
            <img src={img1} alt="" />
            <div className="isi-card-riwayat-atas">
              <h4>Kost Singgahsini MnV Co-Living Tipe B Bendungan
Hilir Jakarta Pusat 482539SH</h4>
              <p>Tersedia 2 kamar - <span>Campur</span></p>
              <h4>Rp. 1.000.000 Per Bulan</h4>
            </div>
          </div>
          <div className="card-riwayat-bawah">
            <button className="delete-button">
              <svg viewBox="0 0 448 512" className="svgIcon">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
              </svg>
            </button>
            <div className="button-isi-profil">
              <button >Booking Sekarang</button>
            </div>
          </div>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default RiwayatBooking;
