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
        <div className="con-content2-left">
            <div className="title-nama-kos">              
            <h1>
              Kost Singgahsini MnV Co-Living Tipe B Bendungan Hilir Jakarta
              Pusat 482539SH
            </h1>
            </div>
          
            <div className="tentang-kos">
              <div className="jenis">
                <p>Campur</p>
              </div>
              <div className="lokasi">
                <Icon
                  icon="system-uicons:location"
                  color="#383746"
                  height="20"
                />
                <p>Besito Gebog, Kudus</p>
              </div>
              <div className="rating">
                <Icon icon="ic:round-star-rate" color="#834bff" height="20" />
                <p>
                  7,3 <span>(21)</span>
                </p>
              </div>
              <div className="transaksi">
                <Icon
                  icon="solar:hand-money-linear"
                  color="#383746"
                  height="20"
                />
                <p>71 Transaksi berhasil di kos ini</p>
              </div>
            </div>

            <div className="bawah-tentang">
              <div className="sisa">
                <Icon
                  icon="fluent:conference-room-16-filled"
                  color="#383746"
                  height="20"
                />
                <p>
                  Tersisa <span>1 Kamar</span>
                </p>
              </div>

              <div className="save-share">
                <div className="save">
                  <Icon icon="wpf:like" color="#383746" height="15" />
                  <p>Simpan</p>
                </div>
                <div className="share">
                  <Icon icon="ic:sharp-share" color="#383746" height="17" />
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div className="garis"></div>
            <div className="isi-profil">
              <div className="isi-profil-text">
                <h1>Kos dikelola oleh Rasyid</h1>
                <p>
                  <span>Online</span> 2 Hari yang lalu
                </p>
              </div>
              <div className="isi-profil-foto">
                <img src={pp} alt="" />
              </div>
            </div>
            <div className="garis"></div>

            <div className="keuntungan">
              <h1>Yang kamu dapatkan di Singgahsini</h1>
              <div className="isi-keuntungan">
                <div className="keuntungan1">
                  <img src={bulat} alt="" />
                  <div className="text-keuntungan1">
                    <h3>Bebas Biaya Admin</h3>
                    <p>
                      Kamu tidak akan dikenakan biaya admin saat melakukan
                      pembayaran di BuKos.
                    </p>
                  </div>
                </div>
                <div className="keuntungan1">
                  <img src={bulat} alt="" />
                  <div className="text-keuntungan1">
                    <h3>Pro Service</h3>
                    <p>
                      Ditangani secara profesional oleh tim Mamikos. Selama kamu
                      ngekos di sini, ada tim dari Mamikos yang akan merespon
                      saran dan komplainmu.
                    </p>
                  </div>
                </div>
                <div className="keuntungan1">
                  <img src={bulat} alt="" />
                  <div className="text-keuntungan1">
                    <h3>Dikelola BuKos, Terjamin Nyaman</h3>
                    <p>
                      Kos ini operasionalnya dikelola dan distandardisasi oleh
                      BuKos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="garis"></div>
            <div className="refund">
              <Icon icon="ri:refund-2-line" height="40" />
              <div className="text-refund">
                <h3>Bisa Refund</h3>
                <p>
                  Sesuai dengan ketentuan dan kebijakan refund yang berlaku di
                  Mamikos.
                </p>
                <a href="#">Bagaimana Ketentuannya?</a>
              </div>
            </div>

            <div className="garis"></div>
            <div className="spesifikasi">
              <h1>Spesifikasi Tipe Kamar</h1>
              <div className="isi-spesifikasi">
                <div className="isi-spesifikasi1">
                  <img src={spek} alt="" />
                  <p>3 x 3 meter</p>
                </div>
                <div className="isi-spesifikasi2">
                  <Icon icon="icons8:electrical" color="#404040" height="30" />
                  <p>Tidak termasuk listrik</p>
                </div>
              </div>
            </div>
            <div className="garis"></div>

            <div className="fasilitas-kamar">
              <h1>Fasilitas Kamar</h1>
              <div className="isi-fasilitas">
                <div className="fasilitas-kiri">
                  <div className="isi-fasilitas1">
                    <img src={bulat} alt="" />
                    <p>AC</p>
                  </div>
                  <div className="isi-fasilitas1">
                    <img src={bulat} alt="" />
                    <p>Meja</p>
                  </div>
                  <div className="isi-fasilitas1">
                    <img src={bulat} alt="" />
                    <p>Lemari Baju</p>
                  </div>
                  <div className="isi-fasilitas1">
                    <img src={bulat} alt="" />
                    <p>Cleaning Service</p>
                  </div>
                </div>
                <div className="fasilitas-kanan">
                  <div className="isi-fasilitas1">
                    <img src={bulat} alt="" />
                    <p>Kasur</p>
                  </div>
                  <div className="isi-fasilitas1">
                    <img src={bulat} alt="" />
                    <p>Meja Kerja</p>
                  </div>
                  <div className="isi-fasilitas1">
                    <img src={bulat} alt="" />
                    <p>Kursi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="garis"></div>
            <div className="kamar-mandi">
              <h1>Fasilitas Kamar Mandi</h1>
              <div className="isi-kamar-mandi">
                <div className="kamar-mandi-kiri">
                  <div className="kamar-mandi1">
                    <img src={bulat} alt="" />
                    <p>K. Mandi Dalam</p>
                  </div>
                  <div className="kamar-mandi1">
                    <img src={bulat} alt="" />
                    <p>Shower</p>
                  </div>
                </div>
                <div className="kamar-mandi-kanan">
                  <div className="kamar-mandi1">
                    <img src={bulat} alt="" />
                    <p>Kloset Duduk</p>
                  </div>
                  <div className="kamar-mandi1">
                    <img src={bulat} alt="" />
                    <p>Air Panas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="garis"></div>

            <div className="aturan">
              <h1>Peraturan khusus tipe kamar ini</h1>
              <div className="isi-aturan">
                <div className="aturan1">
                  <img src={bulat} alt="" />
                  <p>Tipe ini bisa diisi maks. 1 orang/ kamar</p>
                </div>
                <div className="aturan1">
                  <img src={bulat} alt="" />
                  <p>Tidak untuk pasutri</p>
                </div>
                <div className="aturan1">
                  <img src={bulat} alt="" />
                  <p>Tidak boleh bawa anak</p>
                </div>
                <div className="aturan1">
                  <img src={bulat} alt="" />
                  <p>Tidak boleh membawa lawan jenis</p>
                </div>
              </div>
            </div>

            <div className="garis"></div>

            <div className="informasi">
              <div className="isi-informasi">
                <h1>Informasi kos dari pemilik</h1>
                <p>
                  Kost ini terdiri dari 3 lantai. Tipe kamar B berada di setiap
                  lantainya dengan jendela menghadapke arah koridor.
                </p>
                <p>
                  erdapat layanan pembersihan AC secara rutin setiap 3 bulan
                  sekali dan GRATIS laundry 20 kg/bulan (kelebihan berat akan
                  ditagihkan setiap bulan pada tanggal 25). Apabila Anda
                  membutuhkan bantuan, Anda dapat menghubungi penjaga yang
                  bertugas dari pukul 07.00-22.00 WIB.
                </p>
                <p>...</p>
                <a href="#">Selengkapnya</a>
              </div>
            </div>
            <div className="garis"></div>

            <div className="card-rekomendasi">
              <div className="card-header">
                <div className="card-title">
                  <h1>Tipe Kamar Lainya</h1>
                  <p>Kost Singgahsini MnV CoLiving</p>
                </div>
                <div className="card-arrow">
                  <div className="arrow-kiri">
                    <Icon
                      icon="mingcute:arrow-up-fill"
                      color="#383746"
                      rotate={3}
                      height="24"
                    />
                  </div>
                  <div className="arrow-kanan">
                    <Icon
                      icon="mingcute:arrow-up-fill"
                      color="#383746"
                      rotate={1}
                      height="24"
                    />
                  </div>
                </div>
              </div>
              <div className="isi-card">
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
                    <div className="inti1-card1">
                      <Icon
                        icon="fluent:bed-20-filled"
                        color="#383746"
                        height="24"
                      />
                      <p>Kasur</p>
                    </div>
                    <div className="inti1-card1">
                      <Icon
                        icon="pepicons-print:electricity-off"
                        color="#383746"
                        height="24"
                      />
                      <p>Tidak termasuk listrik</p>
                    </div>
                    <div className="inti1-card1">
                      <Icon
                        icon="fluent:bed-20-filled"
                        color="#383746"
                        height="24"
                      />
                      <p>Max. kamar 1 orang</p>
                    </div>
                    <div className="inti1-card1">
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
                    <div className="inti1-card1">
                      <Icon
                        icon="fluent:bed-20-filled"
                        color="#383746"
                        height="24"
                      />
                      <p>Kasur</p>
                    </div>
                    <div className="inti1-card1">
                      <Icon
                        icon="pepicons-print:electricity-off"
                        color="#383746"
                        height="24"
                      />
                      <p>Tidak termasuk listrik</p>
                    </div>
                    <div className="inti1-card1">
                      <Icon
                        icon="fluent:bed-20-filled"
                        color="#383746"
                        height="24"
                      />
                      <p>Max. kamar 1 orang</p>
                    </div>
                    <div className="inti1-card1">
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
              </div>
            </div>

            <div className="garis"></div>
            <div className="fasilitas-umum">
              <h1>Fasilitas Umum</h1>
              <div className="isi-fasilitas-umum">
                <div className="umum1">
                  <img src={bulat} alt="" />
                  <p>Wifi</p>
                </div>
                <div className="umum1">
                  <img src={bulat} alt="" />
                  <p>Dapur Bersama</p>
                </div>
                <div className="umum1">
                  <img src={bulat} alt="" />
                  <p>Penjaga kos</p>
                </div>
              </div>
            </div>
            <div className="garis"></div>

            <div className="fasilitas-parkir">
              <h1>Fasilitas Parkir</h1>
              <div className="isi-fasilitas-parkir">
                <div className="parkir1">
                  <img src={bulat} alt="" />
                  <p>Parkir Motor</p>
                </div>
                <div className="parkir1">
                  <img src={bulat} alt="" />
                  <p>Parkir Sepeda</p>
                </div>
                <div className="parkir1">
                  <img src={bulat} alt="" />
                  <p>Parkir Mobil</p>
                </div>
              </div>
            </div>

            <div className="garis"></div>
            <div className="maps">
              <h1>Lokasi dan lingkungan sekitar</h1>
              <div className="alamat">
                <Icon icon="logos:google-maps" height="24" />
                <p>
                  SMK Raden Umar Said, Jalan Sukun Raya, Besito Kulon, Besito,
                  Kabupaten Kudus, Jawa Tengah
                </p>
              </div>
              <div className="isi-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.131730049922!2d110.84026577494669!3d-6.753785593242736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70db068724fae7%3A0x7610925ddad70c54!2sSMK%20Raden%20Umar%20Said!5e0!3m2!1sid!2sid!4v1685755925925!5m2!1sid!2sid"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="maps-button">
                  <button className="button-tempat-terdekat">
                    Tempat Terdekat
                  </button>
                  <button className="button-transportasi">Transportasi</button>
                </div>
                <div className="list-map">
                  <div className="map1">
                    <Icon
                      icon="material-symbols:food-bank-outline"
                      color="#383746"
                      height="24"
                    />
                    <div className="text-map">
                      <h5>Warung Makan Mak Ru</h5>
                      <p>674 m</p>
                    </div>
                  </div>
                  <div className="map1">
                    <Icon
                      icon="material-symbols:food-bank-outline"
                      color="#383746"
                      height="24"
                    />
                    <div className="text-map">
                      <h5>Warung Makan Mak Ru</h5>
                      <p>674 m</p>
                    </div>
                  </div>
                  <div className="map1">
                    <Icon
                      icon="material-symbols:food-bank-outline"
                      color="#383746"
                      height="24"
                    />
                    <div className="text-map">
                      <h5>Warung Makan Mak Ru</h5>
                      <p>674 m</p>
                    </div>
                  </div>
                  <div className="map1">
                    <Icon
                      icon="material-symbols:food-bank-outline"
                      color="#383746"
                      height="24"
                    />
                    <div className="text-map">
                      <h5>Warung Makan Mak Ru</h5>
                      <p>674 m</p>
                    </div>
                  </div>
                  <div className="map1">
                    <Icon
                      icon="material-symbols:food-bank-outline"
                      color="#383746"
                      height="24"
                    />
                    <div className="text-map">
                      <h5>Warung Makan Mak Ru</h5>
                      <p>674 m</p>
                    </div>
                  </div>
                  <div className="map1">
                    <Icon
                      icon="material-symbols:food-bank-outline"
                      color="#383746"
                      height="24"
                    />
                    <div className="text-map">
                      <h5>Warung Makan Mak Ru</h5>
                      <p>674 m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="garis"></div>

            <div className="syarat-sewa">
              <h1>Ketentuan pengajuan sewa</h1>
              <div className="syarat1">
                <h4>Bisa bayar DP (uang muka) dulu</h4>
                <p>Biaya DP adalah 30% dari biaya yang dipilih.</p>
              </div>
              <div className="syarat2">
                <div className="terdekat">
                  <Icon icon="mdi:calendar" color="#383746" height={24} />
                  <div className="terdekat-text">
                    <h4>Waktu mulai ngekos terdekat</h4>
                    <p>Bisa di hari H setelah sewa</p>
                  </div>
                </div>
                <div className="terjauh">
                  <Icon icon="mdi:calendar" color="#383746" height={24} />
                  <div className="terjauh-text">
                    <h4>Waktu mulai ngekos terjauh</h4>
                    <p>1 Bulan setelah pengajuan sewa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="garis"></div>
            <div className="review-detail">
              <div className="title-review">
                <Icon icon="uis:favorite" color="#834bff" height="26" />
                <h1>4,7 (22 review)</h1>
              </div>
              <div className="rating">
                <div className="rating-kiri">
                  <div className="rating-kiri1">
                    <p>Kebersihan</p>
                    <div className="bintang">
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                    </div>
                    <h4>4,7</h4>
                  </div>
                  <div className="rating-kiri1">
                    <p>Kebersihan</p>
                    <div className="bintang">
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                    </div>
                    <h4>4,7</h4>
                  </div>
                  <div className="rating-kiri1">
                    <p>Kebersihan</p>
                    <div className="bintang">
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                    </div>
                    <h4>4,7</h4>
                  </div>
                </div>
                <div className="rating-kanan">
                  <div className="rating-kanan1">
                    <p>Kebersihan</p>
                    <div className="bintang">
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                    </div>
                    <h4>4,7</h4>
                  </div>
                  <div className="rating-kanan1">
                    <p>Kebersihan</p>
                    <div className="bintang">
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                    </div>
                    <h4>4,7</h4>
                  </div>
                  <div className="rating-kanan1">
                    <p>Kebersihan</p>
                    <div className="bintang">
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                      <Icon icon="uis:favorite" color="#404040" height="26" />
                    </div>
                    <h4>4,7</h4>
                  </div>
                </div>
              </div>

              <Komentar />
              <Komentar />
              <Komentar />
            </div>

            <div className="garis"></div>

            
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