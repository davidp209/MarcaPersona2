import React, { useState, useEffect, useContext } from 'react';
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import './ListaFamiliaProfesional.css';
import IdiomaContext from "../contextos/idiomasContext";
import idiomas from "../../mock-idioma";

const ListaFamiliaProfesional = (props) => {
  const { buscando, listaFamiliaProfesional } = useFamiliaProfesional();
  const [familiaId, setFamiliaId] = useState([]);
  const [activados, setActivados] = useState({});
  const idioma = useContext(IdiomaContext);

  useEffect(() => {
    props.cambiarFamiliaId(familiaId);
  }, [familiaId, props]);

  function manejaridFamilia(id) {
    if (familiaId.includes(id)) {
      setFamiliaId(familiaId.filter((fid) => fid !== id));
      setActivados(prevActivados => ({
        ...prevActivados,
        [id]: false
      }));
    } else {
      setFamiliaId([...familiaId, id]);
      setActivados(prevActivados => ({
        ...prevActivados,
        [id]: true
      }));
    }
  }

  if (buscando) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className='row'>
        <div className='col-12 mt-2 bordeProyectos'>
        <p>{idiomas[idioma].listaFamilia}</p>
        </div>
      </div>

      <div className="lista-familias sin">
        <ul>
          {listaFamiliaProfesional.map((familia) => (
            <li key={familia.id}>
              <button
                className={activados[familia.id] ? 'activado' : 'desactivado'}
                onClick={() => manejaridFamilia(familia.id)}
              >
                {familia.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaFamiliaProfesional;