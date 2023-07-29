import React, { useEffect, useState } from 'react';
import UploadWidget from '../../components/UploadWidget/UploadWidget';
import axios from 'axios';
import { api } from '../../api/api'
import NavbarDetail from '../../components/Navbar/NavbarDetail';
import Footer from '../../components/Footer/Footer'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import logo from '../../assets/images/logo2.svg'

const DaftarKos = () => {
    const [fotoKos, setFotoKos] = useState(null);
    const [fotoPemilik, setFotoPemilik] = useState(null);
    const [namaPemilik, setNamaPemilik] = useState('');
    const [namaKos, setNamaKos] = useState('');
    const [lokasiKos, setLokasiKos] = useState('');
    const [hargaKos, setHargaKos] = useState('');
    const [spesifikasiKamar, setSpesifikasiKamar] = useState('');
    const [fasilitasKamar, setFasilitasKamar] = useState('');
    const [fasilitasUmum, setFasilitasUmum] = useState('');
    const [peraturanKamar, setPeraturanKamar] = useState('');
    const [peraturanKos, setPeraturanKos] = useState('');
    const [tipeKamar, setTipeKamar] = useState('');

    const handleFotoKosSelect = (file) => {
        setFotoKos(file);
        // console.log(fotoKos)
    };

    useEffect(() => {
        console.log(fotoKos);
    }, [fotoKos]);

    const handleFotoPemilikSelect = (file) => {
        setFotoPemilik(file);
    };

    const handleFotoKosRemove = () => {
        setFotoKos(null);
    };

    const handleFotoPemilikRemove = () => {
        setFotoPemilik(null);
    };

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
                lokasi_kos: lokasiKos,
                harga_kos: hargaKos,
                spesifikasi_kamar: spesifikasiKamar,
                fasilitas_kamar: fasilitasKamar,
                fasilitas_umum: fasilitasUmum,
                peraturan_kamar: peraturanKamar,
                peraturan_kos: peraturanKos,
                tipe_kamar: tipeKamar,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`, // Tambahkan header Authorization dengan token
                },
            });

            console.log('Response:', response.data);

            console.log('Data berhasil disubmit ke server!');
        } catch (error) {
            console.error('Error during request:', error.message);
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
                        {/* Foto Kos */}
                        <div className="form-group">
                            <label htmlFor="">Foto Kos</label>
                            <UploadWidget onFileSelect={handleFotoKosSelect} onRemove={handleFotoKosRemove} />
                        </div>
                        {/* <input type="file" accept="image/jpeg,image/png,image/svg+xml,image/jpg,image/gif,image/jfif" onChange={(e) => setFotoKos(e.target.files[0])} /> */}

                        {/* Foto Pemilik */}
                        <div className="form-group">
                            <label htmlFor="">Foto Pemilik</label>
                            <UploadWidget onFileSelect={handleFotoPemilikSelect} onRemove={handleFotoPemilikRemove} />
                        </div>
                        {/* <input type="file" accept="image/jpeg,image/png,image/svg+xml,image/jpg,image/gif,image/jfif" onChange={(e) => setFotoPemilik(e.target.files[0])} /> */}

                        {/* Nama Pemilik */}
                        <div className="form-group">
                            <label htmlFor="">Nama Pemilik</label>
                            <input type="text" value={namaPemilik} onChange={(e) => setNamaPemilik(e.target.value)} />
                        </div>

                        {/* Nama Kos */}
                        <div className="form-group">
                            <label htmlFor="">Nama Kos</label>
                            <input type="text" value={namaKos} onChange={(e) => setNamaKos(e.target.value)} />
                        </div>

                        {/* Lokasi Kos */}
                        <div className="form-group">
                            <label htmlFor="">Lokasi Kos</label>
                            <input type="text" value={lokasiKos} onChange={(e) => setLokasiKos(e.target.value)} />
                        </div>

                        {/* Harga Kos */}
                        <div className="form-group">
                            <label htmlFor="">Harga Kos</label>
                            <input type="number" value={hargaKos} onChange={(e) => setHargaKos(e.target.value)} />
                        </div>

                        {/* Spesifikasi Kamar */}
                        <div className="form-group">
                            <label htmlFor="">Spesifikasi Kamar</label>
                            <input type="text" value={spesifikasiKamar} onChange={(e) => setSpesifikasiKamar(e.target.value)} />
                        </div>

                        {/* Fasilitas Kamar */}
                        <div className="form-group">
                            <label htmlFor="">Fasilitas Kamar</label>
                            <input type="text" value={fasilitasKamar} onChange={(e) => setFasilitasKamar(e.target.value)} />
                        </div>

                        {/* Fasilitas Umum */}
                        <div className="form-group">
                            <label htmlFor="">Fasilitas Umum</label>
                            <input type="text" value={fasilitasUmum} onChange={(e) => setFasilitasUmum(e.target.value)} />
                        </div>

                        {/* Peraturan Kamar */}
                        <div className="form-group">
                            <label htmlFor="">Peraturan Kamar</label>
                            <input type="text" value={peraturanKamar} onChange={(e) => setPeraturanKamar(e.target.value)} />
                        </div>

                        {/* Peraturan Kos */}
                        <div className="form-group">
                            <label htmlFor="">Peraturan Kos</label>
                            <input type="text" value={peraturanKos} onChange={(e) => setPeraturanKos(e.target.value)} />
                        </div>

                        {/* Tipe Kamar */}
                        <div className="form-group">
                            <label htmlFor="">Tipe Kamar</label>
                            <input type="text" value={tipeKamar} onChange={(e) => setTipeKamar(e.target.value)} />
                        </div>

                        {/* Tombol Submit */}
                        <button type="submit" className='button-post-product'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
            <ScrollUp to='daftar-kos' />
        </div>
    );
};

export default DaftarKos;