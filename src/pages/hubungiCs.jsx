import React from 'react'
import '../assets/styles/hubungiCs.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from '../components/Navbar/NavbarDetail'

function HubungiCs() {
    const navigate = useNavigate()
  return (
    <div>
        <NavBar/>
            
        <div className="isi-hubungics">
            <h1>dfdd </h1>
        </div>

    </div>
  )
}

export default HubungiCs