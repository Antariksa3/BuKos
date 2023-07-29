// import Library
import React from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'

// import Styles
import '../../assets/styles/dashboard.css'

// import Components
import NavbarDetail from '../../components/Navbar/NavbarDetail'
import KosSaya from './kosSaya'
import Verifikasi from '../profile/verifikasiAkun';
import Pengaturan from '../profile/pengaturanAkun';
import SidebarOwner from '../../components/SidebarOwner/SidebarOwner';
import Transaksi from './transaksi'
import Footer from '../../components/Footer/Footer'
import { useAuth } from '../../utils/auth/authContext'

// import Assets
// import KosSaya from '../../assets/icons/ic_kost_o.svg'

function Dashboard() {
    const navigate = useNavigate()
    // const { userRole } = useAuth();

    // console.log('userRole:', userRole);

    // const isUser = userRole === 'user';

    // // if (userRole !x== 'owner') {
    // if (!isUser) {
    //     return <Navigate to='/*' />;
    // }

    return (
        <div>
            <NavbarDetail />
            <div className="isi-profile-page">
                <SidebarOwner />
                <Routes>
                    <Route path="/kos_saya" element={<KosSaya />} />
                    <Route path="/transaksi" element={<Transaksi />} />
                    <Route path="/verifikasi" element={<Verifikasi />} />
                    <Route path="/pengaturan" element={<Pengaturan />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard