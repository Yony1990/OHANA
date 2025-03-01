import React from 'react'
import "./nosotros.css"

const Nosotros = () => {
  return (
    <section id='nosotros' className='nosotros'>


      <div className="info">

        <h3>¿QUIÉNES SOMOS?</h3>

        <p className='nostros-text'>

            ¡Bienvenidos a Peluquería Canina OHANA! En nuestro salón, el bienestar y la felicidad de tu mejor amigo son nuestra prioridad. Somos un equipo de amantes de los animales, apasionados por el cuidado y la estética de perros de todas las razas y tamaños. <br />

            Con basta experiencia en el mundo de la peluquería canina, ofrecemos servicios personalizados que van desde cortes de pelo a la medida hasta baños relajantes y tratamientos especiales para la piel.. <br />

            Nos enorgullece utilizar productos de alta calidad y cuidar cada detalle para que tu peludo salga luciendo espléndido y feliz. Ven a conocernos y descubre por qué nuestros clientes siempre regresan. ¡En OHANA, tu perrito será tratado como un rey! 🐾✨
        
        </p>
        
        

        {/* <Servicios/> */}

      </div>

      <div className="contact-info">

        
            <div className="adoption">
                <div className="content-info-adop">
                    <div className="linea"></div>
                    <div className="rastro-hulli-1"></div>
                    <div className="rastro-hulli-2"></div>
                    <div className="img-adop"></div>
                    <p>¿SABÉS QUE OHANA OFRECE SERVICIOS TOTALMENTE GRATIS A PERRITOS SIN FAMILIA? </p>
                    <p>TÚ PUEDES SER PARTE DE ESE PROCESO USANDO NUESTROS SERVICIOS. COMPRANDO NUESTROS PRODUCTOS O SIMPLEMENTE DONANDO.</p>
                </div>
                <div className="answer">
                    <p>¡NO VAMOS A CAMBIAR EL MUNDO AYUDANDO A UN ANIMAL, PERO AL MENOS EL MUNDO HABRÁ CAMBIADO PARA ÉL!</p>
                    <span>I WOOF YOU</span>
                </div>
            </div>

            
      </div>

      

    </section>
  )
}

export default Nosotros
