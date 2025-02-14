import './App.css';
import Cabecera from './paginas/Cabecera/Cabecera';
import Cuerpo from './paginas/Cuerpo/Cuerpo';
import Footer from './paginas/Footer/Footer';
import {useState} from 'react';
import idiomasContext from './componentes/contextos/idiomasContext';


function App() {

  const [idioma, setIdioma] = useState('es');

  function manejarSeleccion(idiomaSeleccionado){
      setIdioma(idiomaSeleccionado);
  }


  return (
    <div className='container'>
      <idiomasContext.Provider value={idioma}>
        <Cabecera manejarSeleccion = {manejarSeleccion}></Cabecera>
        <Cuerpo ></Cuerpo>
        <Footer></Footer>
      </idiomasContext.Provider>

    </div>
  );
}

export default App;
         

