import React from 'react'
import { Link } from "react-scroll"
import Button from '@mui/material/Button';
import "./header.css"
import logo from "../img/logo/Logo.webp"

const Header = () => {
  return (
    <section className='header-container'>

      <div className="header-content">
        <Link 
          className='link'     
          to="inicio" 
          smooth={true} 
          duration={500}
          offset = { 0 } 
        >
          <img src={logo} alt="logo" />
        </Link>
        

        <ul>

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
              <div className="arrow"></div>
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
        
      </div>

      
      
    </section>
  )
}

export default Header
