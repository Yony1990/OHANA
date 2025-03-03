import React from 'react'
import "./baner.css"
import logo from "../img/logo/logoSinColor.png"
import biwedex from "../img/logo/Biwedex.png"

const Baner = () => {
  return (
    <div className='baner'>
      <div className="container-baner">

          <div className="sobre-ohana">
            <span>©2025 OHANA Peluquería Canina</span>
            <span>Todos los derechos reservados.</span>
            <span>Montevideo, Uruguay</span>
          </div>

          <div className="logo-ohana">
            <img src={logo} alt="logo ohana" />
          </div>

          <div className="sobre-biwedex">
            <span>Sitio Desarrollado y Alojado por</span>
            <a href="https://biwedex.com/">
            <span>Biwedex Company</span>
            <div className="biwedex-logo">
              <img src={biwedex} alt="" />
            </div></a>
          </div>

      </div>
    </div>
  )
}

export default Baner
