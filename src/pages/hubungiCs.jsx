import React from "react";
import { Icon } from "@iconify/react";
import "../assets/styles/hubungiCs.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavbarDetail";
import Footer from "../components/Footer/Footer";

function HubungiCs() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />

      <div className="isi-hubungics">
        <div className="title-cs">
          <h1>Hubungi BuKos</h1>
          <p>Silahkan pilih metode yang anda inginkan</p>
        </div>

        <div className="pilihan-cs">
          <div className="hubungi-wa">
            <Icon icon="ic:baseline-whatsapp" height="30" />
            <h2>Hubungi WhatsApp</h2>
            <p>Hubungi customer service lewat WhatsApp Anda (chat only).</p>
          </div>
          <div className="hubungi-chat">
            <Icon icon="ic:round-chat" height="30" />
            <h2>Chat dengan CS</h2>
            <p>Langsung chat di sini dengancustomer service kami.</p>
          </div>
        </div>

        <div className="layanan-pengaduan-konsumen">
          <h3>Layanan Komsumen</h3>

          <div className="layanan-wa">
            <p>CS BuKos</p>
            <div className="nomor-wa">
              <Icon icon="ic:baseline-whatsapp" height="24" />
              <p>WhatsApp: 0895-3548-80006</p>
            </div>
          </div>

          <div className="layanan-wa">
            <p>
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
              Kementerian Perdagangan Republik Indonesia
            </p>
            <div className="nomor-wa">
              <Icon icon="ic:baseline-whatsapp" height="24" />
              <p>WhatsApp: 0895-3548-80006</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HubungiCs;
