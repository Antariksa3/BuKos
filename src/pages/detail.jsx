import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from "@iconify/react";
import '../assets/styles/detail.css'
import NavBar from '../components/Navbar/NavbarDetail'
import Footer from '../components/Footer/Footer'
import img1 from '../assets/images/div.detail-photo__left.png';
import img2 from '../assets/images/j8hydwG2-540x720.jpg.png';
import img3 from '../assets/images/BgFjxmDl-540x720.jpg.png';
import pp from '../assets/images/pp.png';
import bulat from '../assets/images/logo-bulat.png';
import spek from '../assets/images/lebar-ruang.png';
import pasutri from '../assets/images/pasutri.png';
import Komentar from '../components/Komentar/komentar';
import Lainnya from '../components/Lainnya/lainnya';
import ScrollUp from '../components/ScrollUp/ScrollUp'

function Detail() {
  const navigate = useNavigate()
  return (
    <div className="detail-page-main" >
            <header>
            <NavBar/>
            </header>
        <div className="detail-page-content">

            <div className="con-content1">
          <div className="con-content1-left">
            <img className="img1" src={img1} alt="" />
          </div>
          <div className="con-content1-right">
            <img className="img2" src={img2} alt="" />
            <img className="img3" src={img3} alt="" />
          </div>
        </div>
        <div className="con-content2">
            <div className="con-conttnt2-left">

            </div>
            <div className="con-content2-right">
  <div className="harga">
    <div className="isi-harga-detail">
        <div className="nominal">
        <p>Rp2.350.000</p>
        <h1>
            Rp2.232.500 <span>/Bulan</span>
        </h1>
        </div>

        <div className="tanggal-mulai">
        <div className="mulai-kos">
            <p>Mulai kos</p>
            <Icon icon="mdi:calendar" color="#303030" height="20" />
        </div>

        <div className="perbulan">
            <p>Perbulan</p>
            <Icon icon="gridicons:dropdown" color="#303030" height="20" />
        </div>
        </div>
            <div className="button-harga-detail">

        <button className="tanya-pemilik">
        <p>Tanya Pemilik</p>
        </button>
        <button className="ajukan-sewa" onClick={() => navigate('/pembayaran')} >
        <p>Ajukan Sewa</p>
        </button>
            </div>
    </div>
  </div>

  <div className="promo">
    <div className="isi-promo">
      <Icon icon="teenyicons:gift-solid" color="#404040" height="20" />
      <h1>Promo Yang Tersedia</h1>
      <h4>Chat untuk tanyakan promo terbaru yang tersedia</h4>
      <p>04 May 2023 - 31 May 2023</p>
    </div>
    <a href="#">Lihat Selengkapnya</a>
  </div>
</div>


        </div>
        <ScrollUp/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Detail