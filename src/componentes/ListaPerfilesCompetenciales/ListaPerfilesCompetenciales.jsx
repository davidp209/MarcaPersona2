import { useEffect, useState } from "react";
import useCompetencias from "../../hooks/useCompetencias";

const ListaPerfilesCompetenciales = (props) => {

    const { buscando, competencias } = useCompetencias();
    const [competenciaID, setCompetenciaID] = useState([]);
    const [competenciasSeleccionadas, setCompetenciasSeleccionadas] = useState([]);

  
    function añadirCompetencia(competencia, id) {

        if (!competenciasSeleccionadas.includes(competencia)) {
            setCompetenciasSeleccionadas([...competenciasSeleccionadas, competencia]);
            setCompetenciaID([...competenciaID, id]);

        } else {
            setCompetenciasSeleccionadas(competenciasSeleccionadas.filter(f => f !== competencia)); //Aquí filtro para obtener todos los diferentes al valor introducido y reemplazo el array que da filter por el array de familiasSeleccionadas

            setCompetenciaID(competenciaID.filter(f => f !== id));

        }

    }
    useEffect(() => { props.cambiarCompetenciaId(competenciaID);}, [competenciaID]);



    return (
        <>
        <div className='row'>
            <div className='col-12 mt-2 bordeProyectos'>
            <p>Filtra por perfil competencial</p>
            </div>
       </div>
        <ul>
        {competencias.map((competencia) => (
          <button  key={competencia.id}  onClick={ () => añadirCompetencia(competencia.nombre, competencia.id)}>
          {competencia.nombre}</button>
        ))}
        </ul>
        </>
    );
    }
    export default ListaPerfilesCompetenciales;