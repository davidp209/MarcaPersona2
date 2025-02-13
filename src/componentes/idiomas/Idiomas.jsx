import React from 'react';
import banderaEspaña from '../../assets/bandeeras/españa.svg'; 
import banderaUK from '../../assets/bandeeras/uk.svg'; // Importa la imagen
import './estilosIdiomas.css';



const Idiomas = () => {
    return (
        <>
            <img className='imagenesBanderas' src={banderaEspaña} alt="Español" />
            <img className='imagenesBanderas' src={banderaUK} alt="Inglés" />
        
        
        </>
    );
};

export default Idiomas;