import { useContext, useState } from "react";
import ListaFamiliaProfesional from "../../componentes/ListaFamiliaProfesional/ListaFamiliaProfesional";
import ListaPerfilesCompetenciales from "../../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales";
import ResultadoBusquedaAlumnos from "../../componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos";
import Empresa from "../Empresa/Empresa";
import IdiomaContext from "../../componentes/contextos/idiomasContext";
import idiomas from "../../mock-idioma";


const Alumnos = (props) => {

    const [familiaId, setFamiliaId] = useState([]);
    const [competenciaId, setCompetenciaId] = useState([]);
    const idioma = useContext(IdiomaContext);

    
    function cambiarFamiliaId(familia){
        setFamiliaId(familia);
        console.log(familia);
    }
    function cambiarCompetenciaId(competencia){
        setCompetenciaId(competencia);
        console.log(competencia);
    }

    function manejarSeleccion(idiomas) {
        mandarIdioma(idiomas);
    }

    function mandarIdioma(idiomas) {
        props.manejarSeleccion(idiomas);
    }
     


    return(
        <div>
            <Empresa manejarSeleccion={manejarSeleccion} ></Empresa>
            <h3>{idiomas[idioma].tituloAlumnos}</h3>
            <ListaPerfilesCompetenciales cambiarCompetenciaId={cambiarCompetenciaId}></ListaPerfilesCompetenciales>
            <ListaFamiliaProfesional cambiarFamiliaId={cambiarFamiliaId}></ListaFamiliaProfesional>
            <ResultadoBusquedaAlumnos familiaId={familiaId} competenciaId={competenciaId}>  </ResultadoBusquedaAlumnos>
        </div>


    )

    };
    export default Alumnos;