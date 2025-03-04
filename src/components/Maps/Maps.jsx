import React from 'react'
import mapa from "../img/Maps/mapa.webp"
import "./maps.css"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Maps = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <section id='maps'> 

        
        
        <div className="maps-container">

            <div className="maps-img-container">

                <h3>Encuéntranos</h3>

                <a href="https://maps.app.goo.gl/GxUAdLzKcnLashvF6">
                    

                    <div className="maps-img-content">
                        
                        <div className="mapa-left">
                            <article className="maps-name">
                                <span className='address'>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    Florida 1213, Montevideo Uruguay
                                </span>
                            </article>

                            <div className="img-map-content">
                                <img className='img-map' src={mapa} alt="map" />
                                
                                <p>Ver en Google Maps</p>
                                
                            </div>

                            
                        </div> 


                    </div>

                    
                
                </a>
                        
                <div className="info-cont-redes">

                    <div className="info-cont-redes-1">

                        <div className="contacto-content">
                            <a href="https://wa.me/59891554406">
                                <i className="bi bi-phone"></i>
                                <div className="contacto">
                                    
                                    <article>Contacto</article>
                                    <span>+598 91 554 406</span>
                                </div>
                            </a>
                        </div>

                        <div className="horario-content">

                            <i className="bi bi-clock"></i>

                            <div className="horario">
                                <article>Horario</article>
                                <span>9:00hs - 21:00</span>
                            </div>
                            
                        </div>

                        <div className="redes-content">
                        <a href="https://www.instagram.com/ohana.petdog?igsh=MWJzZWM2cXgxbnY0Mg==">
                            <i className="bi bi-instagram"></i> 
                            <div className="redes-insta">
                                <article>Instagram</article>
                            </div>     </a>     
                        </div>

                    </div>

                    <div className="info-pago">
                        <article>Métodos de Pago</article>
                        <div className="metodos-pago">
                            <span><i className="bi bi-cash-coin"></i>Efectivo</span>
                            <span><i className="bi bi-bank"></i>Transferencia</span>
                            <span><i className="bi bi-upc-scan"></i>Mercado Pago</span>
                        </div>
                    </div>

                    
                </div>

            </div>


            <div className="preguntas">

                <h3>Preguntas Frecueentes</h3>

                <div className="preguntas-content">

                    <Accordion defaultExpanded onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        {/* <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            General settings
                        </Typography> */}
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            ¿Qué servicios ofrecen en su peluquería canina?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Ofrecemos una variedad de servicios que incluyen baño, corte de pelo, cepillado, limpieza de oídos, corte de uñas y tratamientos especiales para la piel y el pelaje.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        {/* <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            Users
                        </Typography> */}
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            ¿Necesito hacer una cita para llevar a mi perro?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Sí, recomendamos hacer una cita con anticipación para asegurar que podamos atender a su mascota en el horario que más le convenga.

                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            ¿Qué debo llevar el día de la cita de mi mascota?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Por favor, traiga cualquier documentación médica relevante de su perro, como registros de vacunación, y cualquier instrucción especial que tenga para el cuidado de su mascota.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            ¿Cómo preparo a mi perro para su visita a la peluquería?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Asegúrese de que su perro haya hecho ejercicio antes de la cita para que esté más relajado. No es necesario bañarlo antes de venir.


                        </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                           ¿Qué productos utilizan en los perros de piel sensible?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Utilizamos productos de alta calidad que son seguros para los perros, incluyendo shampoos, acondicionadores y tratamientos que se adaptan a diferentes tipos de piel y pelaje.

                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        {/* <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            Users
                        </Typography> */}
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            ¿Puedo quedarme con mi perro durante el servicio?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Para la seguridad y comodidad de todos los animales, preferimos que los dueños no estén presentes durante los servicios. Sin embargo, estamos felices de proporcionar actualizaciones sobre el progreso de su mascota.

                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        {/* <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            Advanced settings
                        </Typography> */}
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            ¿Qué hago si mi perro tiene necesidades especiales o problemas de comportamiento?
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Por favor, infórmenos de cualquier necesidad especial o problema de comportamiento con anticipación para que podamos prepararnos y asegurar que su perro reciba el mejor cuidado posible.

                        </Typography>
                        </AccordionDetails>
                    </Accordion>         

                </div>

                
                
                

            </div>
        </div>
        
      
    </section>
  )
}

export default Maps
