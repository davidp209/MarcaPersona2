import RedesSociales from "../../componentes/RedesSociales/RedesSociales";
import './Footer.css';
import useContador from "../../hooks/useContador";
import IdiomaContext from "../../componentes/contextos/idiomasContext";
import { useContext } from "react";
import idiomas from "../../mock-idioma";


const Footer = () => {

    const contador = useContador();
    const idioma = useContext(IdiomaContext);

    return(
        <>
        <div className="footer">
                <div className="row">
                    <div className="col-12">
                        {contador.buscado ? <p>Cargando...</p> : <p>{idiomas[idioma].contador1.empresas}: {contador.contadores.numEmpresas} | {idiomas[idioma].contador1.proyectos}: {contador.contadores.numProyectos} | {idiomas[idioma].contador1.alumnos}: {contador.contadores.numAlumnos}</p>}
                        <p>{idioma}</p>
                    </div>
                </div>
                    <div className="row ">
                        <div className="col-12">
                            <h3>CIFP Carlos III</h3>
                        </div>
                    </div> 
                    <div className="row ">
                        <div className="col-12">
                            <p>C/Carlos III, 30201 - Cartagena | oaehfdpoahfepoqnrofǹqòn | 136165163</p>
                        </div>
                    </div> 
                    <div className="row ">
                        <div className="col-12">
                            <RedesSociales></RedesSociales>
                        </div>
                    </div> 
            </div>
        </>




    );





}
export default Footer;