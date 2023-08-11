import axios from 'axios';
import React, { useState } from 'react'
import { api } from '../api/api';
import { Icon } from '@iconify/react';
import NavbarDetail from '../components/Navbar/NavbarDetail';
import logo from './../assets/images/logo2.svg'
import { useNavigate } from 'react-router-dom';
import UploadWidget from '../components/UploadWidget/UploadWidget';
import Footer from '../components/Footer/Footer';
import ScrollUp from '../components/ScrollUp/ScrollUp';
import Popup from '../components/Popup/Popup';

const PostReview = () => {
    const navigate = useNavigate()
    const [fotoReview, setFotoReview] = useState(null);
    const [namaReview, setNamaReview] = useState('');
    const [reviewDesc, setReviewDesc] = useState('');
    const [popupType, setPopupType] = useState(null);
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleFotoUserSelect = (file) => {
        // setSelectedFilePemilik(URL.createObjectURL(file));
        setFotoReview(file);
    };

    const handleFotoUserRemove = () => {
        // setSelectedFilePemilik(URL.createObjectURL(file));
        setFotoReview(null);
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token tidak ditemukan');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('nama_review', namaReview);
            formData.append('profile_review', fotoReview);
            formData.append('review_desc', reviewDesc);

            const response = await axios.post(api() + '/addreview', formData,
                // {
                //     nama_review: namaReview,
                //     profile_review: fotoReview,
                //     review_desc: reviewDesc,
                // },
                {
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
            navigate('/')
        }
    };

    return (
        <div>
            <NavbarDetail />
            <div className="review-form" id='review-form'>
                <div className="review-form-container">
                    <div className="review-form-container-header">
                        <img src={logo} alt='logo' />
                        <h2>Tulis Review Anda Disini</h2>
                    </div>
                    <h2>Tulis Review</h2>
                    <form onSubmit={handleFormSubmit} className='review-form-form'>
                        {/* Foto Pemilik */}
                        <div className="form-group">
                            <label htmlFor="">Foto User</label>
                            <UploadWidget onFileSelect={handleFotoUserSelect} onRemove={handleFotoUserRemove} preview={fotoReview} />
                        </div>
                        {/* Nama Pemilik */}
                        <div className="form-group">
                            <label htmlFor="">Nama User</label>
                            <input type="text" value={namaReview} onChange={(e) => setNamaReview(e.target.value)} placeholder="Masukkan Nama Anda" />
                        </div>
                        {/* Nama Pemilik */}
                        <div className="form-group">
                            <label htmlFor="">Masukkan Review Anda</label>
                            <input type="text" value={reviewDesc} onChange={(e) => setReviewDesc(e.target.value)} placeholder="Tulis Review Anda Disini" />
                        </div>
                        {/* <input
                            type="text"
                            name="nama_review"
                            placeholder="Nama Anda"
                            value={reviewData.nama_review}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="profil_review"
                            placeholder="URL Foto Profil Anda"
                            value={reviewData.profil_review}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="review_desc"
                            placeholder="Tulis review Anda di sini..."
                            value={reviewData.review_desc}
                            onChange={handleInputChange}
                        ></textarea> */}
                        <button type="submit">
                            <Icon icon="mdi:send" color="#fff" height="24" />
                            Kirim Review
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
            <ScrollUp to='review-form' />
            {isPopupOpen && (
                <Popup
                    type={popupType}
                    message={popupMessage}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    )
}

export default PostReview
