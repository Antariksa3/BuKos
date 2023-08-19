// import Library
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

// import Styles
import "../assets/styles/pembayaran.css";

// import Components
import Lainnya from "../components/Lainnya/lainnya";
import BoxJenis from "../components/BoxJenis/BoxJenis";
import CardPembayaran from "../components/CardPembayaran/CardPembayaran";
import Timeline from "../components/TimeLine/TimeLine";
import IncrementDecrement from "../components/IncrementDecrement/IncrementDecrement";
import CheckBox from "../components/CheckBox/CheckBox";
import UploadWidget from "../components/UploadWidget/UploadWidget";
import NavbarDetail from "../components/Navbar/NavbarDetail";

// import Assets
import Img1 from "../assets/images/BgFjxmDl-540x720.jpg.png";
import { getUserDetail } from "../api/api";


const Pembayaran = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserDetail(token)
        .then((userDetail) => {
          setUserData(userDetail)
        })
    } else {
      console.log('Token tidak ditemukan. Anda belum login atau token telah kadaluarsa.');
    }
  }, []);

  console.log(userData)

  const navigate = useNavigate();
  return (
    <div>
      <NavbarDetail />
      <div className="konten-pembayaran">
        <div className="pembayaran-kiri">
          <div className="isi-atas-pembayaran-kiri">
            <div
              className="button-text-kembali"
              onClick={() => navigate("/detail")}
            >
              <Icon
                icon="ic:round-arrow-back-ios"
                color="#383746"
                height="20"
              />
              <p>Kembali</p>
            </div>
            <div className="title-button-text-kembali">
              <h1>Pengajuan Sewa</h1>
            </div>
          </div>

          <Timeline />

          <div className="informasi-penyewa">
            <div className="title-informasi-penyewa">
              <h2>Informasi penyewa</h2>
              <a href="/profile">Ubah</a>
            </div>
            <div className="isi-informasi-penyewa">
              <div className="isi-informasi-penyewa1">
                <h4>Nama Penyewa</h4>
                <p>Sinatrya Rasyid Fawwaz</p>
              </div>
              <div className="isi-informasi-penyewa1">
                <h4>Nomor HP</h4>
                <p>0895636453</p>
              </div>
              <div className="isi-informasi-penyewa1">
                <h4>Jenis Kelamin</h4>
                <p>Laki-Laki</p>
              </div>
              <div className="isi-informasi-penyewa1">
                <h4>Pekerjaan</h4>
                <p>Magang</p>
              </div>
            </div>
          </div>
          <div className="garis-pembatas-card"></div>
          <div className="jumlah-penyewa-pembayaran">
            <h3>Jumlah Penyewa</h3>
            <IncrementDecrement />
            <p>Maksimal 3 orang</p>

            <CheckBox />
          </div>
          <div className="larangan-pemilik">
            <Icon icon="noto:warning" />
            <p>Pemilik kos tidak memperbolehkan membawa anak</p>
          </div>
          <div className="garis-pembatas-card"></div>
          <div className="upload-data-gambar">
            <h3>Dokumen persyaratan masuk kos</h3>
            <p>
              Mohon melengkapi dokumen berikut yang diperlukan pemilik kos untuk
              verifikasi.{" "}
              <a href="#">
                Apakah <br />
                data saya aman?
              </a>
            </p>
            <div className="upload-data-gambar-atas">
              <div className="upload-ktp">
                <UploadWidget />
                <p>Foto KTP</p>
              </div>
              <div className="upload-selfie-ktp">
                <UploadWidget />
                <p>Foto Selfie KTP </p>
              </div>
            </div>
            <div className="upload-data-gambar-bawah">
              <div className="upload-kartu-keluarga">
                <UploadWidget />
                <p>Foto KK</p>
              </div>
              <div className="upload-buku-nikah">
                <UploadWidget />
                <p>Foto Buku Nikah</p>
              </div>
            </div>
            <div className="larangan-pemilik">
              <Icon
                icon="mdi:information-variant-circle-outline"
                color="#3754c7"
                height="18"
              />
              <p>
                Pada saat masuk kos, mohon siapkan kartu identitas asli untuk
                verifikasi.
              </p>
            </div>
          </div>
          <div className="garis-pembatas-card"></div>
          <div className="biaya_sewa_pembayaran">
            <div className="biaya_sewa_title">
              <h3>Biaya sewa kos</h3>
              <a href="#">Ubah</a>
            </div>
            <div className="isi_biaya_sewa">
              <p>
                Harga sewa perbulan <br />
                <span>Dibayar sebulan sekali</span>
              </p>

              <h3>Rp 2.000.000</h3>
            </div>
          </div>
          <div className="garis-pembatas-card"></div>

          <div className="totalan">
            <div className="totalan_title">
              <h3>Total biaya Sewa</h3>
              <h3>
                Rp 2.000.000 <span>Per Bulan</span>
              </h3>
            </div>
          </div>
          <div className="garis-pembatas-card"></div>

          <div className="biaya_sewa_pembayaran">
            <div className="metode_title">
              <h3>Biaya sewa kos</h3>
              <a href="#">Ubah</a>
            </div>
            <div className="total_metode">
              <p>
                Pembayaran Penuh
                <br />
                <span>Rp. 2.000.000</span>
              </p>
            </div>
          </div>
          <div className="garis-pembatas-card"></div>

          <div className="durasi_ngekos">

            <div className="durasi_kos_title">
              <h3>Durasi Kos</h3>
              <p>Durasi dapat disesuaikan di kemudian hari</p>
              <IncrementDecrement />
            </div>

          </div>

          <div className="garis-pembatas-card"></div>

          <div className="tanggal_ngekos">
            <div className="biaya_sewa_pembayaran">
              <div className="biaya_sewa_title">
                <h3>Tanggal mulai kos</h3>
                <a href="#">Ubah</a>
              </div>
              <div className="isi_biaya_sewa">
                <p>
                  Rabu, 14 Juni 2024
                </p>

              </div>
            </div>
          </div>

          <button class="button-riwayat-booking" onClick={() => navigate('/')}>Ajukan sewa</button>

        </div>
        <div className="pembayaran-kanan">
          {/* <CardPembayaran /> */}
        </div>
      </div>
    </div>
  );
}

export default Pembayaran