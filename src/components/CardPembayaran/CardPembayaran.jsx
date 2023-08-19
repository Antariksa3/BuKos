import React from 'react'
import '../CardPembayaran/CardPembayaran.css'
import { Icon } from '@iconify/react';
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import BoxJenis from '../BoxJenis/BoxJenis'
import Img1 from '../../assets/images/BgFjxmDl-540x720.jpg.png'

const CardPembayaran = (props) => {
  const formattedPrice = props.harga_kos.toLocaleString('id-ID');
  const totalBiayaSewa = props.harga_kos * parseInt(props.durasi);


  return (
    <div className="card-page-pembayaran">
      <div className="bagian-atas-card">
        {/* <img src={Img1} alt="" /> */}
        <img src={props.image} alt="" />
        <div className="bagian-atas-card-title">
          <BoxJenis
            tipe_kamar={props.tipe_kamar}
          />
          <h3>{props.nama}</h3>
          <h5>{props.lokasi}</h5>
          <p>{props.alamat}</p>
        </div>
      </div>
      <div className="garis-pembatas-card"></div>
      <div className="bagian-bawah-card-title">
        <h1>Rincian Pembayaran</h1>
        <p>Dibayar setelah pemilik kos menyetujui pengajuan sewa</p>
      </div>
      <div className="detail-card-pembayaran">
        <div className="card-biaya-sewa">
          {/* <a href="#">Biaya sewa kos</a> */}
          <p>Biaya sewa kos</p>
          {/* <p>Rp{props.harga_kos}</p> */}
          <p>Rp{formattedPrice}</p>
        </div>
        <div className="card-deposit">
          {/* <div className="deposit-dan-icon">
            <p>Deposit</p>
            <Icon icon="fluent:info-32-regular" color="#383746" height="20" />
          </div>
          <p>Rp2.200.000</p> */}
          <div className="deposit-dan-icon">
            <p>Durasi Sewa</p>
          </div>
          <p>{props.durasi} Bulan</p>
        </div>
        <div className="garis-pembatas-card"></div>
        <div className="card-total-pembayaran">
          <h2>Total Biaya Sewa</h2>
          {/* <p>Rp2.200.000</p> */}
          <p>Rp{totalBiayaSewa.toLocaleString('id-ID')}</p>
        </div>
      </div>
    </div>
  )
}

export default CardPembayaran