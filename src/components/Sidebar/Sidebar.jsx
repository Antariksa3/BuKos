// import Library
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

// import Styles
import './Sidebar.css'

// import Components
import EditProfilePhotoWidget from '../EditFoto/EditFoto'
import KosanSaya from '../../pages/profile/kosanSaya'
import RiwayatBooking from '../../pages/profile/riwayatBooking'
import RiwayatKos from '../../pages/profile/riwayatKos'
import RiwayatTransaksi from '../../pages/profile/riwayatTransaksi'
import VerifikasiAkun from '../../pages/profile/verifikasiAkun'
import PengaturanAkun from '../../pages/profile/pengaturanAkun'

// import Assets
import KostSaya from '../../assets/icons/ic_kost_o.svg'
import HistoryBooking from '../../assets/icons/ic_waiting-list_o.svg'
import HistoryKos from '../../assets/icons/ic_history-kost_o.svg'
import HistoryTransaksi from '../../assets/icons/ic_history-transaction_o.svg'
import VerifAkun from '../../assets/icons/ic_verifikasi-akun_o.svg'
import SettingAkun from '../../assets/icons/ic_setting-gear.svg'


function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="isi-page-profile-kiri">
        
    <div className="isi-profil-kiri">

    <div className="profil-user-pp">
      <EditProfilePhotoWidget/>
    </div>
    <div className="list-profile-page">
          <NavLink to={"kosansaya"}>
        <div className="kosan-saya">
        <img src={KostSaya} alt="" />
        <p>Kos Saya</p>
        </div>
          </NavLink>

          <NavLink to={"riwayatbooking"}>
        <div className="kosan-saya">
        <img src={HistoryBooking} alt="" />
        <p>Riwayat dan Draft Booking</p>
        </div>
          </NavLink>

          <NavLink to={"riwayatkos"}>
        <div className="kosan-saya">
        <img src={HistoryKos} alt="" />
        <p>Riwayat Kos</p>
        </div>
          </NavLink>

          <NavLink to={"riwayattransaksi"}>
        <div className="kosan-saya">
        <img src={HistoryTransaksi} alt="" />
        <p>Riwayat Transaksi</p>
        </div>
          </NavLink>

          <NavLink to={"verifikasi"}>
        <div className="kosan-saya">
        <img src={VerifAkun} alt="" />
        <p>Verifikasi Akun</p>
        </div>
          </NavLink>

          <NavLink to={"pengaturan"}>
        <div className="pengaturan-profil">
        <img src={SettingAkun} alt="" />
        <p>Pengaturan</p>
        </div>
          </NavLink>
        
        
    </div>
    </div>
        </div>
  )
}

export default Sidebar