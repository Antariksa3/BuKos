import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api, getProductDetail, getUserDetail } from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import '../assets/styles/payment.css'
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Icon } from '@iconify/react';

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
import close from '../assets/icons/close.svg'
import Img1 from "../assets/images/BgFjxmDl-540x720.jpg.png";


const Pembayaran = () => {
  const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [snapToken, setSnapToken] = useState('');
    const token = localStorage.getItem('token');
    const [selectedDate, setSelectedDate] = useState(null)
    const [userData, setUserData] = useState({})
    const [showModal, setShowModal] = useState(false);

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

    // console.log(userData)

    useEffect(() => {
        getProductDetail(productId)
            .then((product) => {
                setProduct(product);
                console.log(product);
            })
            .catch(error => {
                console.error('Error fetching product detail:', error.message);
            });
    }, [productId]);

    const handlePayment = async (e) => {
        e.preventDefault();

        const storedDurasi = localStorage.getItem('selectedDurasi');

        const params = {
            name: userData ? userData.name : '',
            phone: userData ? userData.phone : '',
            qty: parseInt(storedDurasi),
            harga_kos: product ? product.harga_kos : 0,
            product_id: product ? product.id : 0,
            tipe_kamar: product ? product.tipe_kamar : null,
        };

        try {
            const response = await axios.post(api() + '/checkout', params, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });
            const { snapToken } = response.data;
            setSnapToken(snapToken);
            console.log(response)
            setShowModal(true);

        } catch (error) {
            console.error('Error processing payment:', error.message);
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const scriptSnap = document.createElement('script');

        scriptSnap.type = 'text/javascript';
        scriptSnap.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        scriptSnap.setAttribute('data-client-key', 'SB-Mid-client-Mkh96hcK0ChFAs2J');

        document.head.appendChild(scriptSnap);

        return () => {
            document.head.removeChild(scriptSnap);
        }
    }, []);

    useEffect(() => {
      if (snapToken) {
          const scriptFunctionSnap = document.createElement('script');

          scriptFunctionSnap.type = 'text/javascript';
          scriptFunctionSnap.innerHTML = `
              var payButton = document.getElementById('pay-button');
              payButton.addEventListener('click', function () {
                  snap.pay('${snapToken}', 
                  {
                      onSuccess: function(result){
                          console.log("Payment success:", result);
                          window.location.href = 'https://bukos.my.id/finish';
                      },
                      onPending: function(result){
                          console.log("Payment pending:", result);
                      },
                      onError: function(result){
                          console.log("Payment error:", result);
                      }
                  }
                  );
              });
          `;

          document.body.appendChild(scriptFunctionSnap);

          return () => {
              document.body.removeChild(scriptFunctionSnap);
          }
      }
  }, [snapToken]);

    useEffect(() => {
        const selectedDateFromStorage = localStorage.getItem('selectedDate');
        if (selectedDateFromStorage) {
            const parsedDate = new Date(selectedDateFromStorage);
            setSelectedDate(parsedDate);
        }
    }, []);


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
              {/* <a href="/profile">Ubah</a> */}
            </div>
            <div className="isi-informasi-penyewa">
              <div className="isi-informasi-penyewa1">
                <h4>Nama Penyewa</h4>
                <p>{userData.name}</p>
              </div>
              <div className="isi-informasi-penyewa1">
                <h4>Nomor HP</h4>
                <p>{userData.phone}</p>
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

              Rp {product ? product.harga_kos : 0}
            </div>
          </div>
          <div className="garis-pembatas-card"></div>

          <div className="totalan">
            <div className="totalan_title">
              <h3>Total biaya Sewa</h3>
              <h3>
              Rp {product ? product.harga_kos : 0}<span>Per Bulan</span>
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
                Rp {product ? product.harga_kos : 0}
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
                {selectedDate ? format(selectedDate, "EEEE, d MMMM yyyy", { locale: id }) : 'Pilih tanggal'}
                </p>

              </div>
            </div>
          </div>

          <button onClick={handlePayment} type="submit" className='button-riwayat-booking'>Lanjutkan Pembayaran</button>

        </div>
        <div className="pembayaran-kanan">
        <CardPembayaran
                        // tipe_kamar={product.tipe_kamar}
                        // lokasi={product.lokasi_kos}
                        // nama={product.nama_kos}
                        // alamat={product.alamat_kos}
                        // harga_kos={product.harga_kos}

                        tipe_kamar={product ? product.tipe_kamar : 'Tipe Kamar Default'}
                        lokasi={product ? product.lokasi_kos : 'Lokasi Default'}
                        nama={product ? product.nama_kos : 'Nama Kos Default'}
                        alamat={product ? product.alamat_kos : 'Alamat Kos Default'}
                        harga_kos={product ? product.harga_kos : 0}
                        durasi={localStorage.getItem('selectedDurasi')}
                        image={`${process.env.REACT_APP_API_URL}/${product ? product.foto_kos : 'default_image.jpg'}`}
                    />
        </div>
      {showModal && (
                <div className="custom-modal">
                    <div onClick={toggleModal} className="overlay-login"></div>
                    <div className="modal-content">
                        <h2>Konfirmasi Pembayaran</h2>
                        <p>Apakah Anda yakin ingin melanjutkan pembayaran?</p>
                        <button type="button" id='pay-button' className='proceed-button'>Bayar</button>
                        <button className="close-modal" onClick={toggleModal} ><img src={close} alt="close" /></button>
                    </div>
                </div>
            )}
      </div>
    </div>
  );
}

export default Pembayaran