import './App.css';
import {useState} from 'react';
import idiomasContext from './componentes/contextos/idiomasContext';
import Home from './paginas/Home/Home';
import Empresa from './paginas/Empresa/Empresa';
import Proyectos from './paginas/Proyectos/Proyectos';
import Alumnos from './paginas/Alumnos/Alumnos';
import { Routes, Route } from 'react-router-dom';
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo';
import Alumno from './paginas/Alumno/Alumno';



function App() {

  const [idioma, setIdioma] = useState('es');

  function manejarSeleccion(idiomaSeleccionado){
      setIdioma(idiomaSeleccionado);
  }

  return (
    <div className='container-fluid sin'>
      <idiomasContext.Provider value={idioma}>
      <Routes>
            <Route path="/"
                element={<Home manejarSeleccion={manejarSeleccion}  
                                idioma={idioma}></Home>} >     
            </Route>     
            <Route path="/empresa"
                element={<Empresa manejarSeleccion={manejarSeleccion}  
                idioma={idioma}></Empresa>} >
            </Route>
            <Route path="/empresa/proyectos"
                element={<Proyectos manejarSeleccion={manejarSeleccion}  
                idioma={idioma}></Proyectos>} >
            </Route>
            <Route path="/empresa/alumnos"
                element={<Alumnos manejarSeleccion={manejarSeleccion}  
                idioma={idioma}></Alumnos>} >
            </Route>
            <Route path="/centroeducativo"
                element={<CentroEducativo manejarSeleccion={manejarSeleccion}  
                idioma={idioma}></CentroEducativo>} >
            </Route>
            <Route path="/alumno"
                element={<Alumno manejarSeleccion={manejarSeleccion}  
                idioma={idioma}></Alumno>} >
            </Route>

        </Routes>
      </idiomasContext.Provider>
    </div>
  );
}

export default App;
         

