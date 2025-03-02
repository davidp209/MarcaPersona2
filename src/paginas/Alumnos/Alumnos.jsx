import { useState } from "react";
import ListaFamiliaProfesional from "../../componentes/ListaFamiliaProfesional/ListaFamiliaProfesional";
import ListaPerfilesCompetenciales from "../../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales";
import ResultadoBusquedaAlumnos from "../../componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos";
import Empresa from "../Empresa/Empresa";

const Alumnos = (props) => {

    const [familiaId, setFamiliaId] = useState([]);
    const [competenciaId, setCompetenciaId] = useState([]);
    
    function cambiarFamiliaId(familia){
        setFamiliaId(familia);
        console.log(familia);
    }
    function cambiarCompetenciaId(competencia){
        setCompetenciaId(competencia);
        console.log(competencia);
    }


    return(
        <div>
            <Empresa></Empresa>
            <h3>Busquedaa tus alumnos</h3>
            <ListaPerfilesCompetenciales cambiarCompetenciaId={cambiarCompetenciaId}></ListaPerfilesCompetenciales>
            <ListaFamiliaProfesional cambiarFamiliaId={cambiarFamiliaId}></ListaFamiliaProfesional>
            <ResultadoBusquedaAlumnos familiaId={familiaId} competenciaId={competenciaId}>  </ResultadoBusquedaAlumnos>
        </div>


    )

    };
    export default Alumnos;