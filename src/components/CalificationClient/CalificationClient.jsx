import React from 'react'
import "./calificationClient.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import lila from "../img/clientes/i.webp";
import mia from "../img/clientes/k.webp";
import momo from "../img/clientes/j.webp";
import caniche from "../img/clientes/d.webp";
import timido from "../img/clientes/n.webp";
import alex from "../img/clientes/g.webp";
import golden from "../img/clientes/f.webp";


import { Pagination } from 'swiper/modules';



const CalificationClient = () => {
    return (
        <section id='calification'>
          <h3>EL CLIENTE NOS CUENTA</h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="avatar"><img className='img' src={alex} alt="img" /></div>
                <div className="name-client">Alex</div>
                <p>¡Increíble servicio! Mi perro salió feliz y hermoso. El trato fue muy profesional y cuidaron cada detalle. ¡Totalmente recomendado!</p>
                <div className="star">
                    <div className="star-containe">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i> 
                    </div>
                    
                    <span className='name-father'>Nany</span>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="avatar"><img className='img' src={golden} alt="img" /></div>
                <div className="name-client">Luka</div>
                <p>Quedé encantada con el trabajo que hicieron con mi mascota. Se nota que aman a los animales y saben cómo consentirlos. ¡Volveré seguro!</p>
                <div className="star">
                    <div className="star-containe">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i> 
                    </div>
                    
                    <span className='name-father'>Daniel</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="avatar"><img className='img' src={lila} alt="img" /></div>
                <div className="name-client">Lila</div>
                <p>¡Lila está radiante! El servicio fue rápido, eficiente y muy cuidadoso. Me encanta que siempre preguntan cómo quiero el corte. ¡Muy satisfecha!  </p>
                <div className="star">
                    <div className="star-containe">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i> 
                    </div>
                    
                    <span className='name-father'>Liliana</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="avatar"><img className='img' src={momo} alt="img" /></div>
                <div className="name-client">Momo</div>
                <p>Recomiendo esta peluquería 100%. El trato es excelente, las instalaciones están muy limpias y mi perro siempre sale feliz y hermoso. ¡Gracias por su profesionalismo!</p>
                <div className="star">
                    <div className="star-containe">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i> 
                    </div>
                    
                    <span className='name-father'>María</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="avatar"><img className='img' src={mia} alt="img" /></div>
                <div className="name-client">Mía</div>
                <p>Mi perrita siempre sale impecable de esta peluquería. El personal es muy amable y el ambiente es relajante para las mascotas. ¡Gracias por su dedicación!</p>
                <div className="star">
                    <div className="star-containe">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i> 
                    </div>
                    
                    <span className='name-father'>Carla</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="avatar"><img className='img' src={caniche} alt="img" /></div>
                <div className="name-client">Kira</div>
                <p>La mejor peluquería canina a la que he ido. Mi perra siempre sale contenta y con un look espectacular. ¡Gracias por hacerla sentir como en casa!</p>
                <div className="star">
                    <div className="star-containe">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i> 
                    </div>
                    
                    <span className='name-father'>Bruno</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="avatar"><img className='img' src={timido} alt="img" /></div>
                <div className="name-client">Benji</div>
                <p>Excelente atención y resultados. Mi perro tiene un pelaje difícil, pero lo dejaron perfecto. Además, me dieron consejos para mantenerlo en casa. ¡Genial!</p>
                <div className="star">
                    <div className="star-containe">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i> 
                    </div>
                    
                    <span className='name-father'>Benjamín</span>
                </div>
            </SwiperSlide>
          </Swiper>
        </section>
      );
}

export default CalificationClient


// <CalificationClient/>   
// import CalificationClient from './components/CalificationClient/CalificationClient'