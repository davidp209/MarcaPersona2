import logo from '../../assets/logos/mp-logoNaranja100.png'; // Importa la imagen
import Idiomas from "../../componentes/idiomas/Idiomas";
import './Cabecera.css';    


const Cabecera = () => {

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
                        <Idiomas></Idiomas>
                    </div>
                </div>  
            </header>
        </>
    )

}
export default Cabecera;