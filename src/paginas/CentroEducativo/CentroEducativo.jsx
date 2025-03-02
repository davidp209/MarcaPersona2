import { useContext } from 'react';
import idiomasContext from '../../componentes/contextos/idiomasContext';
import Cabecera from '../../componentes/Cabecera/Cabecera';

const CentroEducativo = () => {

   const idioma = useContext(idiomasContext);

    function manejarSeleccion(idiomas) {
        mandarIdioma(idiomas);
    }

    function mandarIdioma(idiomas) {
        props.manejarSeleccion(idiomas);
    }
     
    return (
        <>
        <Cabecera  manejarSeleccion={manejarSeleccion}></Cabecera>
        <p>CENTRO EDUCATIVO</p>
        </>
    )


};
export default CentroEducativo