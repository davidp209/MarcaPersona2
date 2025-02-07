import datosRM from '../../mock-rm.js';
import '../../App.css';
import {useParams } from "react-router-dom";
const FichaRM = (props) => {

    let {ciudad} = useParams();

    return (
        <div>
            <div className="datosCiudad">
                <h1>{ciudad.toUpperCase()}</h1>
                <p><span className="destacado">Población:</span> {datosRM[ciudad].poblacion}</p>
                <p><span className="destacado">Superficie:</span> {datosRM[ciudad].superficie} m<sup>2</sup></p>
                <p><span className="destacado">Elevación:</span> {datosRM[ciudad].elevacion} m</p>
            </div>
            <div >
            <img className="banderaCiudad" src={datosRM[ciudad].bandera} alt="bandera"></img> 
            </div>
        </div>
    )
}
export default FichaRM;