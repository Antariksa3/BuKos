import React from 'react'
import './Sidebar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import EditProfilePhotoWidget from '../EditFoto/EditFoto'
import KosanSaya from '../../pages/kosanSaya'
import DraftBooking from '../../pages/riwayatBooking'
import RiwayatBooking from '../../pages/riwayatBooking'
import RiwayatKos from '../../pages/riwayatKos'
import RiwayatTransaksi from '../../pages/riwayatTransaksi'
import VerifikasiAkun from '../../pages/verifikasiAkun'
import PengaturanAkun from '../../pages/pengaturanAkun'
import KostSaya from '../../assets/images/ic_kost_o.svg'
import HistoryBooking from '../../assets/images/ic_waiting-list_o.svg'
import HistoryKos from '../../assets/images/ic_history-kost_o.svg'
import HistoryTransaksi from '../../assets/images/ic_history-transaction_o.svg'
import VerifAkun from '../../assets/images/ic_verifikasi-akun_o.svg'
import SettingAkun from '../../assets/images/ic_setting-gear.svg'



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