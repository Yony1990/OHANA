import React from 'react'
import './paquetes.css'

import peque from "../img/paquetes/peque-6.webp"
import medio from "../img/paquetes/medio-sisi.webp"
import grande from "../img/paquetes/grande-si.webp"
import gigan from "../img/paquetes/gigante-si.webp"
import siluPeque from "../img/paquetes/silueta-peque.webp"
import siluMedio from "../img/paquetes/silueta-medio.webp"
import siluGrande from "../img/paquetes/silueta-grande.webp"
import siluGiga from "../img/paquetes/silueta-gigante.webp"
import flecha from "../img/paquetes/flecha.webp"

import { Button } from '@mui/material'

const Paquetes = () => {
  return (
    <section id='ofertas' className='paquetes-container'>
    <h3>PAQUETES Y OFERTAS</h3>
      <div className="paquetes-content">
        <div className="paque paquete-1">
            <div className="top-paque">
              <div className="span-top-paque">
                <span>Pequeños</span>
                <span>Desde $800</span>
              </div>
              <div className="images-paque">
                {/* <img src={marco} alt="" className="marco" /> */}
                <img className='avatar-paque' src={peque} alt="Raza pequeña" />
              </div>
              
            </div>
            
            <p>Servicio completo para perritos pequeños de menos de 10kg. <br /> 
            (DEPENDIENDO DEL TIPO DE MANTO)</p>
            <ul>
              <li><i className="bi bi-check2-all"></i><span>Baño</span></li>
              <li><i className="bi bi-check2-all"></i><span>Secado</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Raza</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte Higienico</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Uñas</span></li>
              <li><i className="bi bi-check2-all"></i><span>Limpieza de Orejas</span></li>
            </ul>
            <div className="silueta">
              <img className='silu-peque' src={siluPeque} alt="" />
              <div className="medid">
                <span>45cm</span>
                <img src={flecha} alt="" className="flecha" />
              </div>
            </div>
            
            <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
        </div>
        <div className="paque paquete-2">
            <div className="top-paque">
              <div className="span-top-paque">
                <span>Medianos</span>
                <span>Desde $1100</span>
              </div>
              <img className='avatar-paque' src={medio} alt="Raza medio" />
            </div>
            <p>Servicio completo para perritos mediano de 10kg a 20kg. <br />
            (DEPENDIENDO DEL TIPO DE MANTO)</p>
            <ul>
              <li><i className="bi bi-check2-all"></i><span>Baño</span></li>
              <li><i className="bi bi-check2-all"></i><span>Secado</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Raza</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte Higienico</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Uñas</span></li>
              <li><i className="bi bi-check2-all"></i><span>Limpieza de Orejas</span></li>
            </ul>
            <div className="silueta silueta-medio">
              <img className='silu-medio' src={siluMedio} alt="" />
              <div className="medid">
                <span>58cm</span>
                <img src={flecha} alt="" className="flecha" />
              </div>
            </div>
            <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
        </div>
        <div className="paque paquete-3">
            <div className="top-paque">
              <div className="span-top-paque">
                <span>Grande</span>
                <span>Desde $1500</span>
              </div>
              <img className='avatar-paque' src={grande} alt="Raza grande" />
            </div>
            <p>Servicio completo para perros grande de 20kg a 40kg.</p>
            <ul>
              <li><i className="bi bi-check2-all"></i><span>Baño</span></li>
              <li><i className="bi bi-check2-all"></i><span>Secado</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Raza</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte Higienico</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Uñas</span></li>
              <li><i className="bi bi-check2-all"></i><span>Limpieza de Orejas</span></li>
            </ul>
            <div className="silueta silueta-grande">
              <img className='silu-grande' src={siluGrande} alt="" />
              <div className="medid">
                <span>70cm</span>
                <img src={flecha} alt="" className="flecha" />
              </div>
            </div>
            <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
        </div>
        <div className="paque paquete-4">
            <div className="top-paque">
              <div className="span-top-paque">
                <span>Gigante</span>
                <span>Desde $2000</span>
              </div>
              <img className='avatar-paque' src={gigan} alt="Raza gigante" />
            </div>
            <p>Servicio completo para perros conciderados Gigantes  de +40kg.</p>
            <ul>
              <li><i className="bi bi-check2-all"></i><span>Baño</span></li>
              <li><i className="bi bi-check2-all"></i><span>Secado</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Raza</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte Higienico</span></li>
              <li><i className="bi bi-check2-all"></i><span>Corte de Uñas</span></li>
              <li><i className="bi bi-check2-all"></i><span>Limpieza de Orejas</span></li>
            </ul>
            <div className="silueta silueta-giga">
              <img className='silu-giga' src={siluGiga} alt="" />
              <div className="medid">
                <span>76cm</span>
                <img src={flecha} alt="" className="flecha" />
              </div>
            </div>
            <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
        </div>
      </div>
     
      
    </section>
  )
}

export default Paquetes
