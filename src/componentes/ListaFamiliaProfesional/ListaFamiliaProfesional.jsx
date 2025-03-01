import React from 'react';
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import './ListaFamiliaProfesional.css';

const ListaFamiliaProfesional = () => {
  const { buscando, listaFamiliaProfesional } = useFamiliaProfesional();

  if (buscando) {
    return <div>Cargando...</div>;
  }

  return (

      <div className="lista-familias">
        <ul>
        {listaFamiliaProfesional.map((familia) => (
          <div key={familia.id} >
                     <button onClick={() => handleButtonClick(familia.nombre)} value={familia.nombre}>
                     {familia.nombre}</button>
          </div>
        ))}
        </ul>

      </div>

  );
};

export default ListaFamiliaProfesional;