import { Link } from 'react-router-dom';
import './MenuEmpresa.css';
import IdiomaContext from "../../componentes/contextos/idiomasContext";
import { useContext } from "react";
import idiomas from "../../mock-idioma";

const MenuEmpresa = () => {

    const idioma = useContext(IdiomaContext);

    

    return (
       <>
       
            <div className="row">
                <div className="col-12">
                    <nav>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" href="#Empresa">{idiomas[idioma].contador1.empresas}</a>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/empresa/proyectos">{idiomas[idioma].contador1.proyectos}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/empresa/alumnos" >{idiomas[idioma].contador1.alumnos}</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

       </>
    )
}
export default MenuEmpresa;