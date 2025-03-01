import './ProyectoMinCard.css';

const ProyectoMinCard = (props) => {


    
    return (
      <div className="col-12 col-md-6 col-lg-3 mb-4">
        <div className="card p-3 shadow-sm card-custom">
          <div className="d-flex align-items-start">
            {/* Imagen a la izquierda */}
            <div className="flex-shrink-0 img-container">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Imagen representativa"
                className="img-fluid img-custom"
              />
            </div>
  
            {/* Contenido de la tarjeta */}
            <div className="flex-grow-1 ms-3 content-container">
              <h5 className="mb-1">{props.proyecto.nombre}</h5>
              <p className="small text-muted mb-1"><strong>ALUMNOS: </strong>{props.proyecto.participantes.map(participante => participante.name).join(' | ')}</p>
              <p className="mb-2"><strong>Tutor:</strong> {props.proyecto.docente_id}</p>
              <p className="mb-0"><strong>Ciclos:</strong> {props.proyecto.ciclos.map(ciclo => ciclo.codCiclo).join(' | ')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProyectoMinCard;