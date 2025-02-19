import RedesSociales from "../../componentes/RedesSociales/RedesSociales";
import './Footer.css';
import useContador from "../../hooks/useContador";
import IdiomaContext from "../../componentes/contextos/idiomasContext";
import { useContext } from "react";
import idiomas from "../../mock-idioma";


const Footer = () => {

    const contador = useContador();
    const idioma = useContext(IdiomaContext);

    return (
      <div className="footer">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="contenedor">
              {contador.buscado ? (
                <p>Cargando...</p>
              ) : (
                <p>{idiomas[idioma].contador1.empresas}: {contador.contadores.numEmpresas}</p>
              )}
            </div>
          </div>
          <div className="col-auto">
            <div className="contenedor">
              {contador.buscado ? (
                <p>Cargando...</p>
              ) : (
                <p>{idiomas[idioma].contador1.proyectos}: {contador.contadores.numProyectos}</p>
              )}
            </div>
          </div>
          <div className="col-auto">
            <div className="contenedor">
              {contador.buscado ? (
                <p>Cargando...</p>
              ) : (
                <p>{idiomas[idioma].contador1.alumnos}: {contador.contadores.numAlumnos}</p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 white-letter">
            <h3>CIFP Carlos III</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 white-letter">
            C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <RedesSociales />
          </div>
        </div>
        <div className="row">
          <div className="col-12 white-letter">
                 Marca PersonalMarca Personal FP | Diseño Web CFGS Desarrollo de Aplicaciones Web © 2024
          </div>
        </div>
      </div>
    );
  };
export default Footer;