import React, { useEffect } from 'react';
import { getOwnerDetail } from '../../api/api';

const OwnerDetailPage = () => {
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            getOwnerDetail(token)
                .then((ownerDetail) => {
                    console.log('Data Pemilik:', ownerDetail);
                })
                .catch((error) => {
                    console.error('Error fetching owner detail:', error);
                });

        } else {
            console.log('Token tidak ditemukan. Anda belum login atau token telah kadaluarsa.');
        }
    }, []);

    return (
        <div>
            {/* Tampilan halaman detail pemilik */}
        </div>
    );
};

export default OwnerDetailPage;