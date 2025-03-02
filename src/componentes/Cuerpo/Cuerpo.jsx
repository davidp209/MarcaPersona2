import { Link } from 'react-router-dom';
import empresa from '../../assets/apartados/empresa.jpg';
import centroEducativo from '../../assets/apartados/escuela.jpg';
import estudiantes from '../../assets/apartados/estudiantes.jpg';
import './Cuerpo.css';


const Cuerpo = () => {
  return (
    <div className="row pt-4 pb-4 fondo ">
      <div className="col-4">
        <Link to="/empresa">
          <div className='contenedorCuerpo'>
            <img className='imagen' src={empresa} alt="Imagen de empresa" />
            <h5 className='text-center titulos'>Empresa</h5>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to="/centroeducativo">
          <div className='contenedorCuerpo'>
            <img className='imagen' src={centroEducativo} alt="Imagne de Centro Educativo" />
            <h5 className='text-center titulos'>Centros Educativos</h5>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to="/alumno">
          <div className='contenedorCuerpo'>
            <img className='imagen' src={estudiantes} alt="Imagen de un estudiante" />
            <h5 className='text-center titulos'>Estudiantes</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Cuerpo;