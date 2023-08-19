import React from 'react'
import '../BoxJenis/BoxJenis.css'
import Img1 from '../../assets/images/BgFjxmDl-540x720.jpg.png'

const Jenis = (props) => {
  return (
    <div className="isi-box-jenis">
      <p>{props.tipe_kamar}</p>
    </div>
  )
}

export default Jenis