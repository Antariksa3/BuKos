import React from 'react'
import img1 from "../../assets/images/BgFjxmDl-540x720.jpg.png";

import './TransactionCardOwner.css'

const TransactionCard = (props) => {
    const numericPrice = parseFloat(props.price);
    const formattedPrice = numericPrice.toLocaleString('id-ID');

    return (
        <div className="card-transaksi">
            <div className="card-transaksi-atas">
                <img src={props.gambar_kos} alt="" />
                <div className="isi-card-riwayat-atas">
                    <h4>{props.nama_kos}</h4>
                    <h4>{props.nama_penyewa}</h4>
                    <h4>{props.email_penyewa}</h4>
                    <p>{props.tipe_kos}</p>
                    <h4>Rp. {formattedPrice}</h4>
                </div>
            </div>
            <div className="card-transaksi-bawah">
                <button className="button-detail-transaksi">Detail Transaksi</button>
            </div>
        </div>
    )
}

export default TransactionCard