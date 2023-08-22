import "./komentar.css";
import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/images/Logo-Black.png";
import Bulat from "../../assets/images/logo-bulat.png";

const Komentar = () => {
  return (
    <div className="komentar">
      <div className="komentar-card">
        <div className="pengguna">
          <div className="komen-pengguna">
            <img src={Bulat} alt="" />
            <div className="komen-rate">
              <div className="info-pengguna">
                <h3>Anonymous</h3>
                <p>7 Hari yang lalu</p>
              </div>
              <div className="rate">
                <Icon icon="ic:round-star-rate" color="#834bff" height="20" />
                <p>4,2</p>
              </div>
            </div>
          </div>
          <p>Kos nya aman, tentram, bersih banget.</p>
        </div>
        <div className="komen-pemilik">
          <div className="balasan">
            <div className="sekat"></div>
            <div className="isi-balasan">
              <div className="balasan-atas">
                <h3>Balasan dari pemilik kos</h3>
                <p>4 Hari yang lalu</p>
              </div>
              <div className="balasan-bawah">
                <p>
                  Halo, Kakak. Terima kasih atas review dan ratingnya. Kami
                  sangat senang mendengar Anda nyaman bersama kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komentar;
