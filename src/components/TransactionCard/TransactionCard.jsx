import React from 'react'
import img1 from "../../assets/images/BgFjxmDl-540x720.jpg.png";

import './TransactionCard.css'

const TransactionCard = (props) => {
    const numericPrice = parseFloat(props.total_price);
    const formattedPrice = numericPrice.toLocaleString('id-ID');

    return (
        <div className="card-transaksi">
            <div className="card-transaksi-atas">
                <img src={props.gambar_kos} alt="" />
                <div className="isi-card-riwayat-atas">
                    {/* <h4>Kost Singgahsini MnV Co-Living Tipe B Bendungan
                    Hilir Jakarta Pusat 482539SH</h4> */}
                    <h4>{props.nama_kos}</h4>
                    <p>{props.tipe_kos}</p>
                    {/* <p>Tersedia 2 kamar - <span>Campur</span></p> */}
                    {/* <h4>Rp. 1.000.000 Per Bulan</h4> */}
                    <h4>Rp. {formattedPrice} Selama {props.qty} Bulan</h4>
                    {/* <h4>Selama {props.qty} Bulan</h4> */}
                    <h4>{props.status}</h4>
                </div>
            </div>
            <div className="card-transaksi-bawah">
                {/* <button className="delete-button">
                    <svg viewBox="0 0 448 512" className="svgIcon">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                </button> */}
                <button className="button-detail-transaksi">Detail Transaksi</button>
            </div>
        </div>
    )
}

export default TransactionCard