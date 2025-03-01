import React from 'react'
import "./baner.css"
import logo from "../img/logo/Logo.webp"

const Baner = () => {
  return (
    <div className='baner'>
      <div className="container-baner">

          <div className="sobre-ohana">
            <div>ohana</div>
            <div>ohana</div>
            <div>ohana</div>
            <div>ohana</div>
            <div>ohana</div>
          </div>

          <div className="logo-ohana">
            <img src={logo} alt="logo ohana" />
          </div>

          <div className="sobre-biwedex">
          <div>biwedex</div>
            <div>biwedex</div>
            <div>biwedex</div>
            <div>biwedex</div>
            <div>biwedex</div>
          </div>

      </div>
    </div>
  )
}

export default Baner
