import { useContext, useEffect, useState } from "react";
import useCompetencias from "../../hooks/useCompetencias";
import IdiomaContext from "../contextos/idiomasContext";
import idiomas from "../../mock-idioma";


const ListaPerfilesCompetenciales = (props) => {

    const { buscando, competencias } = useCompetencias();
    const [competenciaID, setCompetenciaID] = useState([]);
    const [competenciasSeleccionadas, setCompetenciasSeleccionadas] = useState([]);
    const [activados, setActivados] = useState({});
    const idioma = useContext(IdiomaContext);
    


    
     
  
    function añadirCompetencia(competencia, id) {

        if (!competenciasSeleccionadas.includes(competencia)) {
            setCompetenciasSeleccionadas([...competenciasSeleccionadas, competencia]);
            setCompetenciaID([...competenciaID, id]);
            setActivados(prevActivados => ({
                ...prevActivados,
                [id]: true
              }));


        } else {
            setCompetenciasSeleccionadas(competenciasSeleccionadas.filter(f => f !== competencia)); //Aquí filtro para obtener todos los diferentes al valor introducido y reemplazo el array que da filter por el array de familiasSeleccionadas

            setCompetenciaID(competenciaID.filter(f => f !== id));
            setActivados(prevActivados => ({
                ...prevActivados,
                [id]: false
              }));
            

        }

    }
    useEffect(() => { props.cambiarCompetenciaId(competenciaID);}, [competenciaID]);



    return (
        <>
        <div className='row'>
            <div className='col-12 mt-2 bordeProyectos'>
            <p>{idiomas[idioma].listaCompetencias}</p>
            </div>
       </div>
        <ul>
        {competencias.map((competencia) => (
        <li key={competencia.id}>
          <button 
          className={activados[competencia.id] ? 'activado' : 'desactivado'}
           onClick={ () => añadirCompetencia(competencia.nombre, competencia.id)}>
          {competencia.nombre}</button>
          </li>
        ))}
        </ul>
        </>
    );
    }
    export default ListaPerfilesCompetenciales;
    