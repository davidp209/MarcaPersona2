import React from 'react';
import { Link } from 'react-router-dom';
import empresa from '../../assets/apartados/empresa.jpg';
import escuela from '../../assets/apartados/escuela.jpg';
import estudiantes from '../../assets/apartados/estudiantes.jpg';


const Cuerpo = () => {

 
        return (
          <div className="row">
            <div className="col-4">
              <Link to="/empresa">
                <div className="card">
                  <img className="imagen img-fluid mx-auto d-block" src={empresa} alt="Imagen de la empresa" />
                  <div className="card-title">Empresa</div>
                </div>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/escuela">
                <div className="card">
                  <img className="imagen img-fluid mx-auto d-block" src={escuela} alt="Imagen de la escuela" />
                  <div className="card-title">Escuela</div>
                </div>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/estudiantes">
                <div className="card">
                  <img className="imagen img-fluid mx-auto d-block" src={estudiantes} alt="Imagen de los estudiantes" />
                  <div className="card-title">Estudiantes</div>
                </div>
              </Link>
            </div>
          </div>
        );
      };
    
      
export default Cuerpo;