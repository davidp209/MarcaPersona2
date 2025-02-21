import React from 'react';
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";

const ListaFamiliaProfesional = () => {
  const { buscando, listaFamiliaProfesional } = useFamiliaProfesional();

  if (buscando) {
    return <div>Cargando...</div>;
  }
  const handleButtonClick = (nombre) => {
    console.log(nombre); // Muestra el valor del botón en la consola
  };
  return (

      <div className="lista-familias">
        {listaFamiliaProfesional.map((familia) => (
          <div key={familia.id} >
                     <button onClick={() => handleButtonClick(familia.nombre)} value={familia.nombre}>
                     {familia.nombre}</button>
          </div>
        ))}


      </div>

  );
};

export default ListaFamiliaProfesional;