import React from 'react'
import "./portada.css"
import hullitas from "../img/fondo-huellitas.webp"


const Portada = () => {
  return (
    <div id='inicio' className='portada-container'>
      <img className='huellitas' src={hullitas} alt="" />

      <section className='text'>

        <p>PELUQUERIA CANINA</p>

        <h2><figure className='huella'></figure>HANA</h2>

        <article>"SIGNIFICA FAMILIA"</article>

      </section>

      <figure className='bubble'></figure>

      <figure className='bubble-2'></figure>

      <figure className='bubble-3'></figure>

      <figure className='bubble-4'></figure>

      <figure className='bubble-5'></figure>

      <figure className='bubble-6'></figure>

      <i className="bi bi-star-fill bi-1"></i>

      <i className="bi bi-star-fill bi-2"></i>

      <div className="circul"></div>

      <div className="circul-2"></div>

      <div className="circul-3"></div>

      
      
      

      <div className="figura-bajo">
        <figure className='perrito-seca'></figure>
      </div>

    </div>
  )
}

export default Portada
