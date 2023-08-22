import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api, getProductDetail } from '../api/api';
import { useParams } from 'react-router-dom';

const PaymentPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [snapToken, setSnapToken] = useState('');

    useEffect(() => {
        getProductDetail(productId)
            .then((product) => {
                setProduct(product);
                console.log(product);
                setFormData(prevData => ({
                    ...prevData,
                    harga_kos: product?.harga_kos || 0,
                }));
            })
            .catch(error => {
                console.error('Error fetching product detail:', error.message);
            });
    }, [productId]);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        qty: 1,
        harga_kos: 0, // Default value
    });

    const handlePayment = async () => {
        try {
            const response = await axios.post(api() + '/checkout', formData);
            const { snapToken } = response.data;
            setSnapToken(snapToken);
        } catch (error) {
            console.error('Error processing payment:', error.message);
        }
    };

    return (
        <div>
            <h1>Payment Page</h1>
            {product && (
                <div>
                    <p>Product: {product.nama_kos}</p>
                    <p>Price: {product.harga_kos}</p>
                </div>
            )}
            <label>Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                    setFormData(prevData => ({ ...prevData, name: e.target.value }))
                }
            />
            <label>Phone:</label>
            <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                    setFormData(prevData => ({ ...prevData, phone: e.target.value }))
                }
            />
            <button onClick={handlePayment}>Proceed to Payment</button>
            {snapToken && (
                <div>
                    <iframe
                        src={`https://app.sandbox.midtrans.com/snap/v1/transactions/${snapToken}/redirect`}
                        title="Payment Frame"
                    />
                </div>
            )}
        </div>
    );
};

export default PaymentPage;