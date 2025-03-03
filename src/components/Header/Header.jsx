import React, { useState } from 'react'
import { Link } from "react-scroll"
import Button from '@mui/material/Button';
import "./header.css"
import logo from "../img/logo/Logo.webp"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const showMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <section className='header-container'>

      <div className={menuOpen ? "header-content active" : "header-content"}>
        <Link 
          className={menuOpen ? 'link active' : 'link' }    
          to="inicio" 
          smooth={true} 
          duration={1000}
          offset = { 0 } 
        >
          <img className={menuOpen ? 'img active' : 'img' } src={logo} alt="logo" />
        </Link>
        

        <ul className='ul-1'>

          <li>
            <Link 
              to="nosotros" 
              smooth={true} 
              duration={1000}
              offset = { -70 } 
            >
              Sobre mí
              <div className="arrow"></div>
            </Link>
            
          </li>

          <li>
            <Link 
              to="servicios" 
              smooth={true} 
              duration={1000}
              offset = { -70 } 
            >
              Servicios
              <div className="arrow"></div>
            </Link>
            
          </li>

          <li>
            <Link 
              to="calification" 
              smooth={true} 
              duration={1000}
              offset = { -100 } 
            >
              Clientes
              <div className="arrow-S"></div>
            </Link>
            
          </li>
          
          <li>
            <Link 
              to="maps" 
              smooth={true} 
              duration={1000}
              offset = { -70 } 
            >
              Encuéntranos
              <div className="arrow-L"></div>
            </Link>
            
          </li>

        </ul>
        <a href="https://wa.me/59891554406">
          <Button size='small' variant="contained"><i className="bi bi-whatsapp"></i> Agendate</Button>
        </a>

        <div onClick={showMenu} className="menu-x">
            <svg onClick={showMenu} id="menux" className="ham ham6" viewBox="0 0 100 100" >
                <path 
                      className={menuOpen ? "line top active" : "line top"}
                      d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
                <path 
                      className={menuOpen ? "line middle active" : "line middle"}
                      d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
                <path 
                      className={menuOpen ? "line bottom active" : "line bottom"}
                      d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
            </svg>
        </div>

        <div onClick={showMenu} className={menuOpen ? "menuOpenAll active" : "menuOpenAll"}>
        <ul onClick={showMenu}>

          <li>
            <Link 
              to="nosotros" 
              smooth={true} 
              duration={1500}
              offset = { -70 } 
              onClick={showMenu}
            >
              Sobre mí
              <div className="arrow"></div>
            </Link>
            
          </li>

          <li>
            <Link 
              to="servicios" 
              smooth={true} 
              duration={1500}
              offset = { -70 } 
              onClick={showMenu}
            >
              Servicios
              <div className="arrow"></div>
            </Link>
            
          </li>

          <li>
            <Link 
              to="calification" 
              smooth={true} 
              duration={1500}
              offset = { -100 } 
              onClick={showMenu}
            >
              Clientes
              <div className="arrow"></div>
            </Link>
            
          </li>

          <li>
            <Link 
              to="maps" 
              smooth={true} 
              duration={1500}
              offset = { -70 } 
              onClick={showMenu}
            >
              Encuéntranos
              <div className="arrow-XL"></div>
            </Link>
            
          </li>

        </ul>
        </div>
        
      </div>

      
      
    </section>
  )
}

export default Header
