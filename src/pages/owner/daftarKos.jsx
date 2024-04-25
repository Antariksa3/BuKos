import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../api/api'
import UploadWidget from '../../components/UploadWidget/UploadWidget';
import NavbarDetail from '../../components/Navbar/NavbarDetail';
import Footer from '../../components/Footer/Footer'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import Popup from '../../components/Popup/Popup';
import logo from '../../assets/images/logo2.svg'
import '../../assets/styles/daftarKos.css'
import MapOwner from '../../components/MapComponent/MapOwner';

const DaftarKos = () => {
    const navigate = useNavigate()
    const [fotoKos, setFotoKos] = useState(null);
    const [fotoPemilik, setFotoPemilik] = useState(null);
    const [namaPemilik, setNamaPemilik] = useState('');
    const [namaKos, setNamaKos] = useState('');
    const [kecamatanKos, setKecamatanKos] = useState('');
    const [lokasiKos, setLokasiKos] = useState('');
    const [alamatKos, setAlamatKos] = useState('');
    const [hargaKos, setHargaKos] = useState('');
    const [spesifikasiKamar, setSpesifikasiKamar] = useState('');
    const [fasilitasKamar, setFasilitasKamar] = useState('');
    const [fasilitasUmum, setFasilitasUmum] = useState('');
    // const [peraturanKamar, setPeraturanKamar] = useState('');
    const [peraturanKos, setPeraturanKos] = useState('');
    const [tipeKamar, setTipeKamar] = useState('');
    const [popupType, setPopupType] = useState(null);
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [latitude, setLatitude] = useState(-6.753652);
    const [longitude, setLongitude] = useState(110.842876);

    const handleFotoKosSelect = (file) => {
        // setSelectedFileKos(URL.createObjectURL(file));
        setFotoKos(file);
        // console.log(fotoKos)
    };

    const handleFotoPemilikSelect = (file) => {
        // setSelectedFilePemilik(URL.createObjectURL(file));
        setFotoPemilik(file);
    };

    const handleFotoKosRemove = () => {
        setFotoKos(null);
    };

    const handleFotoPemilikRemove = () => {
        setFotoPemilik(null);
    };

    const showSuccessPopup = () => {
        setPopupType('success');
        setPopupMessage('Data berhasil disubmit ke server!');
        setIsPopupOpen(true);
    };

    const showErrorPopup = () => {
        setPopupType('error');
        setPopupMessage('Gagal saat mengirim data ke server. Silakan coba lagi.');
        setIsPopupOpen(true);
    };

    const latitudeString = latitude.toFixed(6);
    const longitudeString = longitude.toFixed(6);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token tidak ditemukan');
            return;
        }

        try {
            const response = await axios.post(api() + '/addproduct', {
                foto_kos: fotoKos,
                foto_pemilik: fotoPemilik,
                nama_pemilik: namaPemilik,
                nama_kos: namaKos,
                kecamatan: kecamatanKos,
                lokasi_kos: lokasiKos,
                alamat_kos: alamatKos,
                harga_kos: hargaKos,
                spesifikasi_kamar: spesifikasiKamar,
                fasilitas_kamar: fasilitasKamar,
                fasilitas_umum: fasilitasUmum,
                // peraturan_kamar: peraturanKamar,
                peraturan_kos: peraturanKos,
                tipe_kamar: tipeKamar,
                latitude: latitudeString,
                longitude: longitudeString,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Response:', response.data);

            showSuccessPopup()
        } catch (error) {
            console.error('Error during request:', error.message);

            showErrorPopup();
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);

        // Jika popup tipe 'success', arahkan ke halaman dashboard
        if (popupType === 'success') {
            // Tambahkan logika pengalihan halaman ke dashboard di sini
            navigate('/dashboard/kos_saya')
        }
    };

    return (
        <div>
            <NavbarDetail />
            <div className="daftar-kos" id='daftar-kos'>
                <div className='daftar-kos-container'>
                    <div className="daftar-kos-container-header">
                        <img src={logo} alt='logo' />
                        <h2>Ayo Daftarkan Kos Anda Sekarang!</h2>
                    </div>
                    <form onSubmit={handleFormSubmit} className='daftar-kos-form'>
                        <div className="form-columns">
                            <div className="form-column">
                                {/* Nama Pemilik */}
                                <div className="form-group">
                                    <label htmlFor="">Nama Pemilik</label>
                                    <input type="text" value={namaPemilik} onChange={(e) => setNamaPemilik(e.target.value)} />
                                </div>
                                {/* Lokasi Kos */}
                                <div className="form-group">
                                    <label htmlFor="">Lokasi Kos</label>
                                    <select value={lokasiKos}
                                        // onChange={(e) => setLokasiKos(e.target.value)}
                                        onChange={(e) => e.target.value !== '' ? setLokasiKos(e.target.value) : null}
                                    >
                                        <option value="">Pilih Lokasi Kos</option>
                                        <option value="Bacin">Bacin</option>
                                        <option value="Besito">Besito</option>
                                        <option value="Demaan">Demaan</option>
                                        <option value="Jepang">Jepang</option>
                                        <option value="Getas">Getas</option>
                                        <option value="Ngembal">Ngembal</option>
                                        <option value="Nganguk">Nganguk</option>
                                        <option value="Purwosari">Purwosari</option>
                                    </select>
                                    {/* <input type="text" value={lokasiKos} onChange={(e) => setLokasiKos(e.target.value)} /> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Kecamatan Kos</label>
                                    <select value={kecamatanKos}
                                        // onChange={(e) => setKecamatanKos(e.target.value)}
                                        onChange={(e) => e.target.value !== '' ? setKecamatanKos(e.target.value) : null}
                                    >
                                        <option value="">Pilih Kecamatan Kos</option>
                                        <option value="Bae">Bae</option>
                                        <option value="Gebog">Gebog</option>
                                        <option value="Kota Kudus">Kota Kudus</option>
                                        <option value="Jati">Jati</option>
                                        <option value="Mejobo">Mejobo</option>
                                        <option value="Kota">Kota</option>
                                    </select>
                                    {/* <input type="text" value={lokasiKos} onChange={(e) => setLokasiKos(e.target.value)} /> */}
                                </div>
                                {/* Spesifikasi Kamar */}
                                <div className="form-group">
                                    <label htmlFor="">Spesifikasi Kamar</label>
                                    <input type="text" value={spesifikasiKamar} onChange={(e) => setSpesifikasiKamar(e.target.value)} />
                                </div>
                                {/* Fasilitas Umum */}
                                <div className="form-group">
                                    <label htmlFor="">Fasilitas Umum</label>
                                    <input type="text" value={fasilitasUmum} onChange={(e) => setFasilitasUmum(e.target.value)} />
                                </div>
                                {/* Peraturan Kos */}
                                {/* <div className="form-group">
                                    <label htmlFor="">Peraturan Kamar</label>
                                    <input type="text" value={peraturanKamar} onChange={(e) => setPeraturanKamar(e.target.value)} />
                                </div> */}
                                {/* Alamat Kos */}
                                <div className="form-group">
                                    <label htmlFor="">Alamat Kos</label>
                                    <textarea
                                        rows="4"
                                        cols="50"
                                        type="text"
                                        value={alamatKos}
                                        onChange={(e) => setAlamatKos(e.target.value)}
                                    />
                                </div>
                                {/* Foto Kos */}
                                <div className="form-group">
                                    <label htmlFor="">Foto Kos</label>
                                    <UploadWidget onFileSelect={handleFotoKosSelect} onRemove={handleFotoKosRemove} preview={fotoKos} />
                                </div>
                            </div>

                            <div className="form-column">
                                {/* Nama Kos */}
                                <div className="form-group">
                                    <label htmlFor="">Nama Kos</label>
                                    <input type="text" value={namaKos} onChange={(e) => setNamaKos(e.target.value)} />
                                </div>
                                {/* Harga Kos */}
                                <div className="form-group">
                                    <label htmlFor="">Harga Kos(per bulan)</label>
                                    <input type="number" value={hargaKos} onChange={(e) => setHargaKos(e.target.value)} />
                                    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <span>Rp</span>
                                    </div> */}
                                </div>
                                {/* Fasilitas Kamar */}
                                <div className="form-group">
                                    <label htmlFor="">Fasilitas Kamar</label>
                                    <input type="text" value={fasilitasKamar} onChange={(e) => setFasilitasKamar(e.target.value)} />
                                </div>
                                {/* Tipe Kamar */}
                                <div className="form-group">
                                    <label htmlFor="">Tipe Kamar</label>
                                    <select value={tipeKamar}
                                        // onChange={(e) => setTipeKamar(e.target.value)}
                                        onChange={(e) => e.target.value !== '' ? setTipeKamar(e.target.value) : null}
                                    >
                                        <option value="">Pilih Tipe Kamar</option>
                                        {/* {tipeKamar === "" && <option style={{ display: "none" }} value="">Pilih Tipe Kamar</option>} */}
                                        <option value="Putra">Putra</option>
                                        <option value="Putri">Putri</option>
                                        <option value="Campuran">Campuran</option>
                                    </select>
                                    {/* <input type="text" value={tipeKamar} onChange={(e) => setTipeKamar(e.target.value)} /> */}
                                </div>
                                {/* Peraturan Kos */}
                                <div className="form-group">
                                    <label htmlFor="">Peraturan Kos</label>
                                    <textarea
                                        rows="4"
                                        cols="50"
                                        type="text"
                                        value={peraturanKos}
                                        onChange={(e) => setPeraturanKos(e.target.value)} />
                                </div>
                                {/* Foto Pemilik */}
                                <div className="form-group">
                                    <label htmlFor="">Foto Pemilik</label>
                                    <UploadWidget onFileSelect={handleFotoPemilikSelect} onRemove={handleFotoPemilikRemove} preview={fotoPemilik} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Lokasi Kos (Latitude dan Longitude Kos)</label>
                            <MapOwner
                                setLongitude={setLongitude}
                                setLatitude={setLatitude}
                            />
                        </div>

                        {/* Tombol Submit */}
                        <button type="submit" className='button-post-product'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
            <ScrollUp to='daftar-kos' />
            {isPopupOpen && (
                <Popup
                    type={popupType}
                    message={popupMessage}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
};

export default DaftarKos