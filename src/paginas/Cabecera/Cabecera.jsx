import Menu from "../../componentes/Menu/Menu";
import logo from '../../assets/logos/mp-logoNaranja100.png'; // Importa la imagen

const Cabecera = () => {

    return (

        <header className="cabecera</header>">
            <div className="row</div>">
                <div className="col-4">
                    <img className="logo" src={logo} alt="Logo" /> 
                </div>
                <div className="col-4">
                    <p>hOLAAAAAAAAA</p>
                </div>
                <div className="col-4">
                    <p>hOLAAAAAAAAA</p>
                </div>
            </div>  
        </header>
    )

}
export default Cabecera;