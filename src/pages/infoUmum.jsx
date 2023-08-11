import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/infoUmum.css'
import ApakahMembantu from '../components/ApakahMembantu/ApakahMembantu'


function InfoUmum() {
    const navigate = useNavigate()
  return (
    <div className="infoumum">
        <header> 
        <h1>Seputar BuKos</h1>
        </header>
        <div className="isi-infoumum">
            <p>BuKos merupakan salah satu website pencari kos di Indonesia. Didirikan pada 11 juni 2023, BuKos terus berkembang dan berusaha menjadi penghubung bagi pemilik kos dan pencari kos.</p>

            <p>BuKos memanfaatkan teknologi dengan mengelola dan menyajikan daftar kos dengan penjelasan fasilitas secara terperinci dan dilengkapi dengan foto serta detail dari setiap kos.</p>

            <p>Saat ini BuKos memiliki lebih dari 2 juta kamar kos yang tersebar di lebih dari 140 kota di seluruh Indonesia. Mamikos berusaha untuk bisa terus menyajikan data ketersediaan kamar yang akurat, agar calon pencari kos mendapatkan kemudahan dalam pencarian kos.</p>
        </div>
        <ApakahMembantu/>
    </div>
  )
}

export default InfoUmum