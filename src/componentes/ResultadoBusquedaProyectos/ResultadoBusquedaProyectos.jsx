import { useState } from "react";
import useProyectos from "../../hooks/useProyectos";
import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";

const ResultadoBusquedaProyectos = (props) => {

    const { buscando, proyectos } = useProyectos();


    if (buscando) {
        return <div>Cargando...</div>;
    }

    function mostrarProyectos(proyecto) {
        const { familiaId } = props;

        const mostrarProyecto = familiaId.length === 0 || proyecto.ciclos.some(ciclo => familiaId.includes(ciclo.familia_id));
        //Con esata variable de arriba compruebo qeu el proyecto tenga un ciclo que coincida con la familia seleccionada
        if (mostrarProyecto) {
            return <ProyectoMinCard key={proyecto.id} proyecto={proyecto} />;
        }

        return null;
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 mt-2 bordeProyectos'>
                    <p>Resultados</p>
                </div>
            </div>
            <div className="row">
                {proyectos.map(mostrarProyectos)}
            </div>
        </>
    );
}
export default ResultadoBusquedaProyectos;

