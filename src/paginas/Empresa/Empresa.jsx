import { useContext } from "react";
import Cabecera from "../../componentes/Cabecera/Cabecera"
import MenuEmpresa from "../../componentes/MenuEmpresa/MenuEmpresa"
import idiomasContext from '../../componentes/contextos/idiomasContext';

const Empresa = (props) => {

    const idioma = useContext(idiomasContext);

    function manejarSeleccion(idiomas) {
        mandarIdioma(idiomas);
    }

    function mandarIdioma(idiomas) {
        props.manejarSeleccion(idiomas);
    }
     

    return(

        <>
            <Cabecera  manejarSeleccion={manejarSeleccion}></Cabecera>
            <MenuEmpresa></MenuEmpresa>
        
        </>
    )

}
export default Empresa