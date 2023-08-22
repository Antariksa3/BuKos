import React from 'react'
import './SidebarSyarat.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import KostSaya from '../../assets/icons/ic_kost_o.svg'
import HistoryBooking from '../../assets/icons/ic_waiting-list_o.svg'
import HistoryKos from '../../assets/icons/ic_history-kost_o.svg'
import HistoryTransaksi from '../../assets/icons/ic_history-transaction_o.svg'
import VerifAkun from '../../assets/icons/ic_verifikasi-akun_o.svg'

function SidebarSyarat() {
  const navigate = useNavigate()
  return (

    <div className="isi-profil-kiri-sk">

      <div className="profil-user-pp">
      </div>
      <div className="list-profile-page">
        <NavLink to={"infoumum"}>
          <div className="kosan-saya-sk">

            <p>info umum</p>
          </div>
        </NavLink>

        <NavLink to={"kebijakan"}>
          <div className="kosan-saya-sk">

            <p>Kebijakan </p>
          </div>
        </NavLink>

        <NavLink to={"syarat"}>
          <div className="kosan-saya-sk">

            <p>Syarat</p>
          </div>
        </NavLink>

        <NavLink to={"panduankeamanan"}>
          <div className="kosan-saya-sk">

            <p>Panduan Keamanan</p>
          </div>
        </NavLink>


        <div className="kosan-saya-sk" onClick={() => navigate('/hubungics')}>

          <p>Hubungi BuKos</p>
        </div>



      </div>
    </div>

  )
}

export default SidebarSyarat