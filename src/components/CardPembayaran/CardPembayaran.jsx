import React from 'react'
import '../CardPembayaran/CardPembayaran.css'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom'
import BoxJenis from '../BoxJenis/BoxJenis'
import Img1 from '../../assets/images/BgFjxmDl-540x720.jpg.png'

function CardPembayaran() {
  return (
    <div className="card-page-pembayaran">
                        <div className="bagian-atas-card">
                          <img src={Img1} alt="" />
                          <div className="bagian-atas-card-title">
                          <BoxJenis/>
                          <h5>Kost Singgahsini MnV Co.. </h5>
                          <h3>Kecamatan Gebog</h3>
                          <p>K. Mandi Dalam · Kloset Duduk..</p>
                          </div>
                        </div>
                        <div className="garis-pembatas-card"></div>
                        <div className="bagian-bawah-card-title">
                        <h1>Rincian pembayaran pertama</h1>
                        <p>Dibayar setelah pemilik kos menyetujui pengajuan sewa</p>
                        </div>
                        <div className="detail-card-pembayaran">
                          <div className="card-biaya-sewa">
                            <a href="#">Biaya sewa kos</a>
                            <p>Rp2.200.000</p>
                          </div>
                          <div className="card-deposit">
                            <div className="deposit-dan-icon">
                          <p>Deposit</p>
                          <Icon icon="fluent:info-32-regular" color="#383746" height="20" />
                            </div>
                            <p>Rp2.200.000</p>
                          </div>
                          <div className="garis-pembatas-card"></div>
                          <div className="card-total-pembayaran">
                          <h2>Biaya sewa kos</h2>
                            <p>Rp2.200.000</p>
                          </div>
                        </div>
                    </div>
  )
}

export default CardPembayaran