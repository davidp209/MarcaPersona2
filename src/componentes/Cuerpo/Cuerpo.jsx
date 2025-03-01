import { Link } from 'react-router-dom';
import empresa from '../../assets/apartados/empresa.jpg';
import escuela from '../../assets/apartados/escuela.jpg';
import estudiantes from '../../assets/apartados/estudiantes.jpg';
import './Cuerpo.css';


const Cuerpo = () => {

 
        return (
          <div className="row">
            <div className="col-4">
              <Link to="/empresa">
              <div className="card">
                <div className="first-content">
                    <span>
                       <img className='imagen' src={empresa} alt="" />
                    </span>
                </div>
                <div className="second-content">
                    <span>Empresa</span>
                </div>
            </div>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/escuela">
              <div className="card">
                <div className="first-content">
                    <span>
                       <img className='imagen' src={escuela} alt="" />
                    </span>
                </div>
                <div className="second-content">
                    <span>Centros Educativos</span>
                </div>
            </div>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/estudiantes">
              <div className="card">
                <div className="first-content">
                    <span>
                       <img className='imagen' src={estudiantes} alt="" />
                    </span>
                </div>
                <div className="second-content">
                    <span>Estudiantes</span>
                </div>
            </div>
              </Link>
            </div>
          </div>
        );
      };
    
      
export default Cuerpo;