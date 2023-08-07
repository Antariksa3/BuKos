import React from 'react'
import '../assets/styles/syaratKetentuan.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Icon } from "@iconify/react";
import NavbarDetail from '../components/Navbar/NavbarDetail'
import SidebarSyarat from '../components/SidebarSyarat/SidebarSyarat';
import InfoUmum from './infoUmum';
import Kebijakan from './kebijakan';
import Syarat from './syarat';
import PanduanKeamanan from './panduanKeamanan';
import Footer from '../components/Footer/Footer';


function SyaratKetentuan() {
    const navigate = useNavigate()
  return (
    <div>
        <NavbarDetail/>
      <div className="isi-profile-page">
        <SidebarSyarat/>

        <Routes>
        <Route path="/infoumum" element={<InfoUmum/>} />
        <Route path="/kebijakan" element={<Kebijakan/>} />
        <Route path="/syarat" element={<Syarat/>} />
        <Route path="/panduankeamanan" element={<PanduanKeamanan/>} />

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default SyaratKetentuan