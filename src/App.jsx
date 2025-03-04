
import './App.css'
import Baner from './components/Baner/Baner'
import CalificationClient from './components/CalificationClient/CalificationClient'

import ClickSpark from './components/Click/ClickSpark'
import Floating from './components/Floating/Floating'
import Header from './components/Header/Header'
import InfoHair from './components/Info-hair/InfoHair'
import Maps from './components/Maps/Maps'
import Portada from './components/Portada/Portada'
import Nosotros from './components/QuienesSomos/Nosotros'
import Servicios from './components/Servicios/Servicios'




function App() {


  return (
    
    <div className='App'>
      
      
      <ClickSpark
        sparkColor='rgb(147, 77, 208)'
        sparkSize={11}
        sparkRadius={50}
        sparkCount={14}
        duration={500}
        extraScale={0.7}
      >
      
      
        <Header />
        <Portada/>
        <main className='main-app'>
        
          <Nosotros/>
 
          

          <Servicios/>

          <InfoHair/>

          <CalificationClient/>

          <Maps/>

          
          
        </main>
        <Floating/>
        <Baner/>
        
        
      </ClickSpark>
      
    </div>
  )
}

export default App
