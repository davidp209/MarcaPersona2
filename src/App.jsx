import './App.css';
import {useState} from 'react';
import idiomasContext from './componentes/contextos/idiomasContext';
import Home from './paginas/Home/Home';
import Empresa from './paginas/Empresa/Empresa';
import Proyectos from './paginas/Proyectos/Proyectos';
import { Routes, Route } from 'react-router-dom';



function App() {

  const [idioma, setIdioma] = useState('es');

  function manejarSeleccion(idiomaSeleccionado){
      setIdioma(idiomaSeleccionado);
  }


  return (
    <div className='container-fluid'>
      <idiomasContext.Provider value={idioma}>
      <Routes>
            <Route path="/"
                element={<Home manejarSeleccion={manejarSeleccion}  
                                idioma={idioma}></Home>} >     
            </Route>     
            <Route path="/empresa"
                element={<Empresa></Empresa>} >
            </Route>
            <Route path="/empresa/proyectos"
                element={<Proyectos></Proyectos>} >
            </Route>
        </Routes>
      </idiomasContext.Provider>
    </div>
  );
}

export default App;
         

