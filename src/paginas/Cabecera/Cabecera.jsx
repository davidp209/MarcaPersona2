import logo from '../../assets/logos/mp-logoNaranja100.png'; // Importa la imagen
import Idiomas from "../../componentes/idiomas/Idiomas";
import './Cabecera.css';    
import {useState} from 'react';


const Cabecera = (props) => {

    const [idioma, setIdioma] = useState('es');

    function manejarSeleccion(idiomaSeleccionado){
        setIdioma(idiomaSeleccionado);
        mandarSeleccion(idiomaSeleccionado);
    }
    function mandarSeleccion(idiomaSeleccionado){
        props.manejarSeleccion(idiomaSeleccionado);
    }
    return (
         <>
            <header className="cabecera">
                <div className="row">
                    <div className="col-4">
                        <img className="logo" src={logo} alt="Logo" /> 
                    </div>
                    <div className="col-4">
                        <p>Marca Personal FP</p>
                    </div>
                    <div className="col-4">
                        <Idiomas manejarSeleccion = {manejarSeleccion}></Idiomas>
                    </div>
                </div>  
            </header>
        </>
    )

}
export default Cabecera;