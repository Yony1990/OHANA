import React, { useState } from 'react'
import "./floating.css"
import { Link } from "react-scroll"
import adoptOne from "../img/floting/floting-3.webp"
import Button from '@mui/material/Button';



const Floating = () => {

  const [show, setShow] = useState(false)

  const showModal = (e) => {
    setShow(!show)
  }


  return (
    <section id='floating'>
  
        <div className="btn-content-whatsap">
          <a href="https://wa.me/59891554406">
            <Button className='btn-whatsapp' size='small' variant="contained"><i className="bi bi-whatsapp"></i> Agendate</Button>
          </a>
        </div>

        <div className="adoption-modal">
            <button onClick={showModal} className='adop-btn'><span>adopta</span><figure className='adop'></figure></button>
            <div onClick={showModal} className={show ? "modal active" : "modal"}>
                <div className="content-modal-adop">
                  <div className="content-info-adop">
                      <div className="linea"></div>
                      <div className="rastro-hulli-1"></div>
                      <div className="rastro-hulli-2"></div>
                      <div className="img-adop"></div>
                      <p>¿Sabés cuál es una de las labores MÁS IMPORTANTES de Ohana? Dedicamos todo nuestro ESFUERZO A AYUDAR a perritos que no tienen hogar, ofreciéndoles servicios y apoyo sin costo alguno. Tal vez tú podrías ser parte de esto COLABORANDO con nosotros, ya sea adquiriendo lo que ofrecemos o aportando algo desde tu ❤️, CADA GESTO CUENTA.</p>
                  </div>
                  <button>Colaborar</button>
                  <img src={adoptOne} alt="imagen de perritos" />
                  <div className="line"></div>
                </div>
                
            </div>
        </div>

        <div className="ir-inicio">
            <Link 
              to="inicio" 
              smooth={true} 
              duration={1000}
              offset = { -70 } 
            >
              <button><span>inicio</span><i className="bi bi-caret-up"></i></button>
            </Link>
            
        </div>
      
    </section>
  )
}

export default Floating
