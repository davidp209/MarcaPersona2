import { Link } from 'react-router-dom';
import logo from '../../assets/logos/mp-logoNaranja100.png'; // Importa la imagen
import Idiomas from "../idiomas/Idiomas";
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
        <div className="cabecera">
            <div className="row">
                <div className="col-1">
                    <Link to="/">
                        <img  className="logo w-100" src={logo} alt="Logo" /> 
                    </Link>
                </div>
                <div className="col-10 tituloMarcaPersonal" >
                    <p>Marca Personal FP</p>
                </div>
                <div className="col-1 ">
                    <Idiomas manejarSeleccion={manejarSeleccion} />
                </div>
            </div>  
        </div>
    )

}
export default Cabecera;