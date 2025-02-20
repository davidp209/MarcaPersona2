import { Link } from 'react-router-dom';

const MenuEmpresa = () => {

    return (
       <>
       
            <div className="row">
                <div className="col-12">
                    <nav>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#Empresa">Empresa</a>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/empresa/proyectos">Proyectos</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Alumnos">Alumnos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

       </>
    )
}
export default MenuEmpresa;