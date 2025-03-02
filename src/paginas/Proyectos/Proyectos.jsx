import ListaFamiliaProfesional from "../../componentes/ListaFamiliaProfesional/ListaFamiliaProfesional";

import ResultadoBusquedaProyectos from "../../componentes/ResultadoBusquedaProyectos/ResultadoBusquedaProyectos";
import { useState } from "react";
import Empresa from "../Empresa/Empresa";

const Proyectos = (props) => {

    const [familiaId, setFamiliaId] = useState([]);

    function cambiarFamiliaId(familia) {
        setFamiliaId(familia);
        console.log(familia);
    }


    return (
        <>
            <Empresa></Empresa>
            <h3>Busqueda de Proyectos</h3>
            <ListaFamiliaProfesional cambiarFamiliaId={cambiarFamiliaId}></ListaFamiliaProfesional>
            <ResultadoBusquedaProyectos familiaId={familiaId} ></ResultadoBusquedaProyectos>
        </>

    );


}
export default Proyectos;