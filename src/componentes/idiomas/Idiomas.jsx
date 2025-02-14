import React from 'react';
import banderaEspaña from '../../assets/bandeeras/españa.svg'; 
import banderaUK from '../../assets/bandeeras/uk.svg'; // Importa la imagen
import './estilosIdiomas.css';
import {useState} from 'react'; 



const Idiomas = (props) => {

    const [idioma, setIdioma] = useState('es'); 


    function asignarIdioma(event){

        props.manejarSeleccion(event.target.value);        
        setIdioma(event.target.value);
    }


    return (
        <>
            <button value="es" onClick={asignarIdioma}><img className='imagenesBanderas' src={banderaEspaña} alt="Español" /></button>
            <button value="gb" onClick={asignarIdioma}><img className='imagenesBanderas' src={banderaUK} alt="Inglés" /></button>
        
        
        </>
    );
};

export default Idiomas;