import React, { useEffect, useState } from 'react';
import useFamiliaProfesional from "../../hooks/useFamiliaProfesional";
import './ListaFamiliaProfesional.css';

const ListaFamiliaProfesional = (props) => {
  const { buscando, listaFamiliaProfesional } = useFamiliaProfesional();
  const [familiaId, setFamiliaId] = useState([]);
  const [activados, setActivados] = useState({});

 
function manejaridFamilia(valor){

  if (familiaId.includes(valor)) {
    setFamiliaId(familiaId.filter((id) => id !== valor));
  }
  else{
    setFamiliaId([...familiaId, valor]);
    props.cambiarFamiliaId(familiaId);
  }  
}
useEffect(() => { props.cambiarFamiliaId(familiaId);}
, [familiaId]);




  return (
    <>
      <div className='row'>
            <div className='col-12 mt-2 bordeProyectos'>
            <p>Filtra por Familia Profesional</p>
            </div>
       </div>

      <div className="lista-familias sin">
        <ul>
        {listaFamiliaProfesional.map((familia) => (
          
          <button  key={familia.id} 
          className={activados ? 'activado' : 'desactivado'}   
          onClick={() => manejaridFamilia(familia.id)} >
          {familia.nombre}</button>

        ))}
        </ul>

      </div>
    </>
  );
};

export default ListaFamiliaProfesional;