import React from 'react';
import banderaEspaña from '../../assets/bandeeras/españa.svg'; 
import banderaUK from '../../assets/bandeeras/uk.svg'; // Importa la imagen
import './estilosIdiomas.css';
import {useState} from 'react'; 



const Idiomas = (props) => {

    const [idioma, setIdioma] = useState('es'); 


    function asignarIdioma(event){

        //se usa currentTarget porque si pulsas la imagen, el event.target es la imagen,
        // pero el event.currentTarget es el botón
        setIdioma(event.currentTarget.value);   
        props.manejarSeleccion(event.currentTarget.value);        

    }


    return (
        <>

            <button value="es" onClick={asignarIdioma}><img className='imagenesBanderas' src={banderaEspaña} alt="Español" /></button>
            <button value="gb" onClick={asignarIdioma}><img className='imagenesBanderas' src={banderaUK} alt="Inglés" /></button>
        <h1>{idioma}</h1>
        
        
        </>
    );
};

export default Idiomas;