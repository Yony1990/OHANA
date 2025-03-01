import React from 'react'
import "./servicios.css"
import { Button } from '@mui/material'

const Servicios = () => {
  return (
    <section id='servicios'>

        <h3>NUESTROS SERVICIOS</h3>
        <div className="servicios-cards">
            <ul>
                <li>
                    <div className="esquina"></div>
                    <span>Baño y Secado</span>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8b3ffcb1" d="M42,-56.6C57.6,-46.5,75.7,-38.5,84.8,-24.3C94,-10.1,94.1,10.3,88,28.4C81.8,46.4,69.2,62.2,53.5,69.5C37.8,76.7,18.9,75.3,2.5,71.9C-13.8,68.4,-27.7,62.8,-42.6,55.3C-57.5,47.8,-73.4,38.4,-80.4,24.3C-87.5,10.3,-85.7,-8.5,-78.8,-24.3C-71.9,-40.1,-59.9,-53,-45.9,-63.7C-31.9,-74.3,-16,-82.8,-1.4,-80.9C13.2,-78.9,26.4,-66.7,42,-56.6Z" transform="translate(100 100)" />
                    </svg>
                    <figure className='img-1'></figure>
                    <p>Con un shampoo de limpieza extrema y acondicionador acorde a el pelaje de tu peludito aportaremos brillo y suavidad, luego secaremos hasta la última gotita.</p>
                    <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
                    
                </li>
                <li>
                    <div className="esquina"></div>
                    <span>Corte de Raza</span>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8b3ffcb1" d="M39.3,-53.1C54.6,-42.9,73.3,-36.4,79.1,-24.3C85,-12.2,78,5.4,71.1,22C64.2,38.5,57.2,53.9,45.4,60C33.5,66.2,16.8,63.2,-0.3,63.6C-17.3,64,-34.7,67.8,-44.5,60.9C-54.4,54.1,-56.9,36.7,-60.8,20.7C-64.6,4.7,-69.9,-9.8,-66.1,-21.4C-62.3,-33,-49.4,-41.7,-36.9,-52.7C-24.4,-63.8,-12.2,-77.3,-0.1,-77.1C12,-77,23.9,-63.2,39.3,-53.1Z" transform="translate(100 100)" />
                    </svg>
                    <figure className='img-2'></figure>
                    <p>Tu peludito va a necesitar un corte para lucir hermoso, nuestras tijeras y máquinas profesionales acompañadas de nuestras manos se asegurarán de este proceso. </p>
                    <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
                    
                </li>
                <li>
                    <div className="esquina"></div>
                    <span>Corte de Uñas</span>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8b3ffcb1" d="M46.3,-69.5C56.5,-56.3,58.9,-38.1,65.4,-20.7C71.8,-3.2,82.4,13.5,77.4,24C72.3,34.4,51.7,38.6,36.2,43.6C20.7,48.7,10.4,54.5,-0.8,55.6C-11.9,56.7,-23.9,53,-34.8,46.5C-45.6,39.9,-55.4,30.6,-58.1,19.6C-60.7,8.5,-56.2,-4.1,-52.3,-17.2C-48.3,-30.2,-44.9,-43.7,-36.3,-57.4C-27.7,-71.1,-13.8,-85,2.1,-87.9C18.1,-90.8,36.1,-82.7,46.3,-69.5Z" transform="translate(100 100)" />
                    </svg>
                    <figure className='img-3'></figure>
                    <p>Una uña demasiado larga le causa dolor a nuestro peludo, así que nos aseguraremos de brindarle este servicio para que esté siempre saludable. </p>
                    <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
                </li>
                <li>
                    <div className="esquina"></div>
                    <span>Limpieza de Orejas</span>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                       <path fill="#8A3FFC" d="M37.7,-47.3C51.8,-41.5,68.5,-34.6,70.6,-23.9C72.8,-13.2,60.5,1.2,52.7,14.6C44.9,28,41.6,40.3,33.5,48.8C25.5,57.2,12.8,61.8,-3.3,66.2C-19.3,70.7,-38.6,75.2,-46.8,66.8C-55.1,58.4,-52.4,37.3,-51.6,21.1C-50.8,5,-52,-6.1,-52.7,-21.3C-53.5,-36.4,-53.8,-55.5,-45,-63C-36.1,-70.5,-18.1,-66.4,-3.2,-62C11.7,-57.7,23.5,-53.1,37.7,-47.3Z" transform="translate(100 100)" />
                    </svg>
                    <figure className='img-4'></figure>
                    <p><br />Nuestras mascotas también necesitan mantener una higiene en sus orejitas y con este servicio se las dejaremos como nuevas. </p>
                    <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
                </li>
                <li>
                    <div className="esquina"></div>
                    <span>Deslanado</span>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8A3FFC" d="M39.2,-55.2C52,-44.7,64.3,-34.8,65.8,-23.1C67.3,-11.3,57.9,2.2,53.3,17.6C48.7,33,48.8,50.2,40.7,56.1C32.6,62,16.3,56.6,0.1,56.5C-16.1,56.3,-32.2,61.4,-44,56.7C-55.8,52,-63.3,37.5,-67.5,22.4C-71.7,7.3,-72.7,-8.3,-68.9,-23.1C-65.1,-38,-56.6,-52,-44.3,-62.7C-32,-73.4,-16,-80.7,-1.4,-78.8C13.2,-76.9,26.4,-65.7,39.2,-55.2Z" transform="translate(100 100)" />
                    </svg>
                    <figure className='img-5'></figure>
                    <p>Retiramos la lana que se generó durante los cambios de temperatura y todo el pelo que se va cayendo en casita para dejar un pelaje de estrella de cine. </p>
                    <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
                </li>
                <li>
                    <div className="esquina"></div>
                    <span>Corte Higiénico</span>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8A3FFC" d="M44.9,-65.6C52.5,-56.4,49,-35.6,51,-19C53,-2.5,60.6,9.9,61.7,24.1C62.7,38.4,57.1,54.6,45.7,65.6C34.3,76.5,17.2,82.2,4,76.7C-9.2,71.3,-18.5,54.7,-27,42.8C-35.5,30.9,-43.3,23.8,-51.8,13.2C-60.3,2.5,-69.5,-11.5,-67.3,-22.9C-65,-34.4,-51.4,-43.1,-38.3,-50.6C-25.2,-58.1,-12.6,-64.2,3.1,-68.4C18.7,-72.6,37.4,-74.9,44.9,-65.6Z" transform="translate(100 100)" />
                    </svg>
                    <figure className='img-6'></figure> 
                    <p><br />Cortamos todo ese pelo sobrante de las zonas íntimas lo suficiente para mantener a nuestro peludo lo más limpio posible. </p>
                    <a href="https://wa.me/59891554406"><Button size='small' variant="contained">Consultar</Button></a>
                </li>
            </ul>
        </div>
        
      
    </section>
  )
}

export default Servicios
