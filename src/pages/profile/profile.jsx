// import Library
import React from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, useNavigate } from 'react-router-dom'

// import Styles
import '../../assets/styles/profile.css'

// import Components
import NavbarDetail from '../../components/Navbar/NavbarDetail'
import EditProfilePhotoWidget from '../../components/EditFoto/EditFoto'
import Sidebar from '../../components/Sidebar/Sidebar';
import KosanSaya from './kosanSaya';
import RiwayatBooking from './riwayatBooking';
import RiwayatKos from './riwayatKos';
import RiwayatTransaksi from './riwayatTransaksi';
import Verifikasi from './verifikasiAkun';
import Pengaturan from './pengaturanAkun';

// import Assets
import KosSaya from '../../assets/icons/ic_kost_o.svg'


function Profile() {
  const navigate = useNavigate()

  return (
    <div>
      <NavbarDetail/>
      <div className="isi-profile-page">
        <Sidebar/>
        <Routes>
          <Route path="/kosansaya" element={<KosanSaya/>} />
          <Route path="/riwayatbooking" element={<RiwayatBooking/>} />
          <Route path="/riwayatkos" element={<RiwayatKos/>} />
          <Route path="/riwayattransaksi" element={<RiwayatTransaksi/>} />
          <Route path="/verifikasi" element={<Verifikasi/>} />
          <Route path="/pengaturan" element={<Pengaturan/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default Profile