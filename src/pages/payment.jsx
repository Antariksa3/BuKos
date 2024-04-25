import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api, getProductDetail, getUserDetail } from '../api/api';
import { useParams } from 'react-router-dom';
import NavbarDetail from '../components/Navbar/NavbarDetail';
import Footer from '../components/Footer/Footer';
import CardPembayaran from '../components/CardPembayaran/CardPembayaran';
import '../assets/styles/payment.css'
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import close from '../assets/icons/close.svg'

const PaymentPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [snapToken, setSnapToken] = useState('');
    const token = localStorage.getItem('token');
    const [selectedDate, setSelectedDate] = useState(null)
    const [userData, setUserData] = useState({})
    const [showModal, setShowModal] = useState(false);
    const [userDataLoaded, setUserDataLoaded] = useState(false);
    const [productDataLoaded, setProductDataLoaded] = useState(false);
    const [paymentButtonDisabled, setPaymentButtonDisabled] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUserDetail(token)
                .then((userDetail) => {
                    setUserData(userDetail)
                    setUserDataLoaded(true)
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
                setProductDataLoaded(true);
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
            setPaymentButtonDisabled(true);

        } catch (error) {
            console.error('Error processing payment:', error.message);
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);

        if (!showModal) {
            setPaymentButtonDisabled(false);
        }
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

    return (
        <div className='payment-container'>
            <NavbarDetail />
            <div className="payment-content">
                <div className="payment-form">
                    <h1>Detail Pesanan</h1>
                    <form >
                        <div className="payment-form-group">
                            <label htmlFor="name">Nama Penyewa :</label>
                            <p>{userData.name}</p>
                        </div>
                        <div className="payment-form-group">
                            <label htmlFor="phone">Nomor HP :</label>
                            <p>{userData.phone}</p>
                        </div>
                        <div className="payment-form-group">
                            <label htmlFor="selected-date">Tanggal Mulai Sewa :</label>
                            <div className="selected-date">
                                <p>
                                    {selectedDate ? format(selectedDate, "EEEE, d MMMM yyyy", { locale: id }) : 'Pilih tanggal'}
                                </p>
                            </div>
                        </div>
                        <div className="payment-form-group">
                            <label htmlFor="qty">Durasi Sewa :</label>
                            {/* <p>3 Bulan</p> */}
                            <p>{localStorage.getItem('selectedDurasi') || 'Nilai Durasi Default'} Bulan</p>
                        </div>
                        <button
                            onClick={handlePayment}
                            type="submit"
                            // className='proceed-button'
                            className={`proceed-button ${(!userDataLoaded || !productDataLoaded || paymentButtonDisabled) ? 'disabled' : ''}`}
                            disabled={!userDataLoaded || !productDataLoaded || paymentButtonDisabled}
                        >
                            Lanjutkan Pembayaran
                        </button>
                    </form>
                </div>
                <div className="payment-card">
                    <CardPembayaran
                        tipe_kamar={product ? product.tipe_kamar : 'Tipe Kamar Kos...'}
                        lokasi={product ? product.lokasi_kos : 'Lokasi Kos...'}
                        nama={product ? product.nama_kos : 'Nama Kos...'}
                        alamat={product ? product.alamat_kos : 'Alamat Kos...'}
                        harga_kos={product ? product.harga_kos : 0}
                        durasi={localStorage.getItem('selectedDurasi')}
                        image={`${process.env.REACT_APP_API_URL}/${product ? product.foto_kos : 'default_image.jpg'}`}
                    />
                </div>
            </div>
            {showModal && (
                <div className="custom-modal">
                    <div onClick={toggleModal} className="overlay-login"></div>
                    <div className="modal-content">
                        <h2>Konfirmasi Pembayaran</h2>
                        <p>Apakah Anda yakin ingin melanjutkan pembayaran?</p>
                        <button type="button" id='pay-button' className='proceed-button' onClick={() => setShowModal(false)}>Bayar</button>
                        <button className="close-modal" onClick={toggleModal} ><img src={close} alt="close" /></button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default PaymentPage;