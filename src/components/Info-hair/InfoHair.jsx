import React from 'react'
import "./infoHair.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import cute_1 from "../img/galery-consejos/sin_fondo/cute_1.png";
import cute_3 from "../img/galery-consejos/sin_fondo/cute_3.png";
import cute_4 from "../img/galery-consejos/sin_fondo/cute_4.png";
import fre_1 from "../img/galery-consejos/sin_fondo/fre_1.png";
import fondo_slider from "../img/galery-consejos/fondo-slider.webp";

import { EffectCards } from 'swiper/modules';



const InfoHair = () => {
  return (
    <section id='info-hair'>
      
      <div className="container-infoHair">

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          
          <SwiperSlide className='swiperSlide'>
            
            <img className='fondoSlider' src={fondo_slider} alt="fondo" />
           
            <article className='article-swiper'>
                {/* Si tu perro pudiera hablar <span>¡HABLARÍA DE NOSOTROS!</span> <br />
                Porque su apariencia también refleja el amor que le tienes.
                <br /><br />
                <span>‘OHANA SIGNIFICA FAMILIA’</span><br />
                "Donde cada corte es un ladrido de felicidad."<br /><br /> */}
                <span>¿SABES QUE ES LO MEJOR PARA EL PELO DE TU PELUDITO?</span><br /><br />
                Existen muchísimas razas de perros, cada una es única y responde a una morfología especial con una funcionalidad específica.

                El pelo del animal debe ser tenido en cuenta a la hora de escoger una mascota, sobretodo sabiendo que nos va acompañar durante muchos años. Saber el tipo de pelo de nuestro perro y el trabajo que necesita puede ser clave para evitar problemas futuros y hasta posibles rapados innecesarios que perjudican a todos.Existen muchísimas razas de perros, cada una es única y responde a una morfología especial con una funcionalidad específica.



                Dependiendo del tipo de pelo serán los tipos de cuidados y el material para ello también variará, así como el trabajo en peluquería.
            </article>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <img className='img-info' src={cute_1} alt="img" />
            <p className='swiper-p'>
              <span>PELO CORTO</span> <br /><br /> Se considera pelo corto cuando la extensión del pelaje no supera los 4cm. Requieren ser cepillados una vez a la semana, a excepción de las épocas de muda que lo harán dos o tres veces por semana.Es quizás el manto más fácil de mantener, pero aun así requiere un mantenimiento 
              <span className='span-parent'> NUNCA DEBEMOS RAPAR EL PELO CORTO.</span>
            </p>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <img className='img-info' src={fre_1} alt="img" />
            <p className='swiper-p-2'>
              <span>PELO SEMILARGO</span> <br /> <br /> Requieren más cuidados y visitas a la peluquería.Hay dos tipos según el grosor, fino como por ejemplo el Golden Retriever y grueso como por ejemplo el Pastor Alemán. Debemos cepillarlo una vez a la semana y en la peluquería se utilizara la técnica de deslanado. <span className='span-parent'>NUNCA DEBEMOS RAPARLO.</span>
              
            </p>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
            <img className='img-info' src={cute_3} alt="img" />
            <p className='swiper-p-3'>
              <span>PELO LARGO</span> <br /> <br /> Requieren un cuidado del manto muy importante, su pelaje suele medir más de 6cm. Se enreda con facilidad si no se peina a diario acabará presentando los molestos nudos que pueden crear gran malestar al animal. <br />
              Hay razas que tienen subpelo lanoso que lo pierden con facilidad <span className='span-parent'>(solo requerirán un buen cepillado a diario con un deslanado)</span>
              La frecuencia del baño dependiendo de la raza varía desde los 15dias al mes y medio.
            </p>
          </SwiperSlide>

          <SwiperSlide className='swiperSlide'>
          <img className='img-info' src={cute_4} alt="img" />
           <p className='swiper-p-4'>
              <span>PELO RIZADO</span> <br /> <br /> Este tipo de pelo tiene unas características muy diferentes al resto de razas, nunca deja de crecer, no muda y por ello, si no se cepilla a diario, se enreda y anuda.Son perros que necesitan pasar por peluquería más a menudo ya que deben cortarle o arreglar el pelo cada cierto tiempo especifico. <br /> 
              Al no tener capa lanosa pueden ser bañados con mayor frecuencia sin ningún problema, 15 días a un mes.
            </p>
          </SwiperSlide>
          
        </Swiper>

      </div>
    </section>
  )
}

export default InfoHair
