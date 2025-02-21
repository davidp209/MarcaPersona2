import React from 'react';
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import './ListaFamiliaProfesional.css'; // Importa el archivo CSS

const ListaFamiliaProfesional = () => {
  const { buscando, listaFamiliaProfesional } = useFamiliaProfesional();

  if (buscando) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="lista-familias">
      {listaFamiliaProfesional.map((familia, index) => (
        <div key={index} className="customCheckBoxHolder">
          <input type="checkbox" id={`cCB${index}`} className="customCheckBoxInput" />
          <label htmlFor={`cCB${index}`} className="customCheckBoxWrapper">
            <div className="customCheckBox">
              <div className="inner">
                <p>{familia.nombre}</p>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ListaFamiliaProfesional;