import './lainnya.css';
import React from "react"
import { Icon } from '@iconify/react';
import Contoh from '../../assets/images/BgFjxmDl-540x720.jpg.png'
import spek from '../../assets/icons/lebar-ruang.png';
import pasutri from '../../assets/icons/pasutri.png';
import img2 from '../../assets/images/j8hydwG2-540x720.jpg.png';


const Lainnya = () => {
    return (
        <div className="card1">
                  <img src={img2} alt="" />
                  <div className="text-card1">
                    <h6>Kamar Penuh</h6>
                    <h3>Tipe A</h3>
                    <p>
                      K. Mandi Dalam · WiFi · AC · Kloset Duduk · Kasur · Akses
                      2
                    </p>
                  </div>
                  <div className="inti-card1">
                    <div className="inti1-card1">
                      <img src={spek} alt="" />
                      <p>3 x 3 Meter</p>
                    </div>
                    <div className="inti2-card1">
                      <Icon
                        icon="fluent:bed-20-filled"
                        color="#383746"
                        height="24"
                      />
                      <p>Kasur</p>
                    </div>
                    <div className="inti3-card1">
                      <Icon
                        icon="pepicons-print:electricity-off"
                        color="#383746"
                        height="24"
                      />
                      <p>Tidak termasuk listrik</p>
                    </div>
                    <div className="inti4-card1">
                      <Icon
                        icon="fluent:bed-20-filled"
                        color="#383746"
                        height="24"
                      />
                      <p>Max. kamar 1 orang</p>
                    </div>
                    <div className="inti5-card1">
                      <img src={pasutri} alt="" />
                      <p>
                        Tidak untuk pasutri <br />
                        Tidak boleh bawa anak
                      </p>
                    </div>
                  </div>
                  <div className="card-harga">
                    <p>Rp2.350.000</p>
                    <h3>
                      Rp2.232.500 <span>/ bulan</span>
                    </h3>
                  </div>
                  <div className="card-button">
                    <button className="button-card1">Lihat Detail</button>
                    <button className="button-card2">Ajukan</button>
                  </div>
                </div>
        
    )
}

export default Lainnya