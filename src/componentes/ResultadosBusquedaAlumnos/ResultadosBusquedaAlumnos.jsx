import React from 'react';
import { useState } from 'react';
import useAlumnos from '../../hooks/useAlumnos';
import AlumnosMinCard from '../AlumnosMinCard/AlumnosMinCard';



const ResultadoBusquedaAlumnos = (props) => {
    const { buscando, alumnos } = useAlumnos();


    if (buscando) {
        return <div>Cargando...</div>;
    }

    function MostrarAlunnos(alumno) {

    
        const tieneFamilia = alumno.ciclos.some(ciclo => props.familiaId?.includes(ciclo.familia_id));
        const tieneCompetencia = alumno.competencias.some(competencia => props.competenciaId?.includes(competencia.id));
    
        if (props.familiaId?.length === 0 && props.competenciaId?.length === 0) {
            return <AlumnosMinCard key={alumno.id} alumno={alumno} />;
        }
    
        if (tieneFamilia && tieneCompetencia) {
            return <AlumnosMinCard key={alumno.id} alumno={alumno} />;
        }
    
        if (tieneFamilia && props.competenciaId?.length === 0) {
            return <AlumnosMinCard key={alumno.id} alumno={alumno} />;
        }
    
        if (tieneCompetencia && props.familiaId?.length === 0) {
            return <AlumnosMinCard key={alumno.id} alumno={alumno} />;
        }
    
        return null;
    }

    
    return (

        <>
        <div className="row">
                {alumnos.map(MostrarAlunnos)}
        </div>
        </>
    );



}
export default ResultadoBusquedaAlumnos;