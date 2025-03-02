import ListaFamiliaProfesional from "../../componentes/ListaFamiliaProfesional/ListaFamiliaProfesional";
import idiomas from "../../mock-idioma";
import ResultadoBusquedaProyectos from "../../componentes/ResultadoBusquedaProyectos/ResultadoBusquedaProyectos";
import { useContext, useState } from "react";
import Empresa from "../Empresa/Empresa";
import IdiomaContext from "../../componentes/contextos/idiomasContext";

const Proyectos = (props) => {

    const [familiaId, setFamiliaId] = useState([]);
    const idioma = useContext(IdiomaContext);


    function cambiarFamiliaId(familia) {
        setFamiliaId(familia);
        console.log(familia);
    }

    function manejarSeleccion(idiomas) {
        mandarIdioma(idiomas);
    }

    function mandarIdioma(idiomas) {
        props.manejarSeleccion(idiomas);
    }

    return (
        <>
            <Empresa manejarSeleccion={manejarSeleccion}></Empresa>
            <h3>{idiomas[idioma].tituloProyectos}</h3>
            <ListaFamiliaProfesional cambiarFamiliaId={cambiarFamiliaId}></ListaFamiliaProfesional>
            <ResultadoBusquedaProyectos familiaId={familiaId} ></ResultadoBusquedaProyectos>
        </>

    );


}
export default Proyectos;