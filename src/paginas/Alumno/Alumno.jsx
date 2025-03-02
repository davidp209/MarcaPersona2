import { useContext } from 'react';
import idiomasContext from '../../componentes/contextos/idiomasContext';
import Cabecera from '../../componentes/Cabecera/Cabecera';

const Alumno = () => {

    const idioma = useContext(idiomasContext);

    function manejarSeleccion(idiomas) {
        mandarIdioma(idiomas);
    }

    function mandarIdioma(idiomas) {
        props.manejarSeleccion(idiomas);
    }

    return (
        <>
            <Cabecera manejarSeleccion={manejarSeleccion}></Cabecera>
            <p>ALUMNOS</p>
        </>

    )


};
export default Alumno;