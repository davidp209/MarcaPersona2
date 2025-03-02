import React from 'react';
import avatar from "../../assets/avatar/avatar.png";
import banderas from "../../mock-banderas";
import './AlumnosMinCard.css'; // Asegúrate de importar la hoja de estilos

const AlumnosMinCard = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card p-3 shadow-sm fondoCard m-1 card-border-radius">
        <div className="align-items-start">
          <div className="row">
            <div className="col-3 sin">
              <img
                src={avatar}
                alt={`Avatar de ${props.nombre}`}
                className="img-fluid avatar-img"
              />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="col-9 sin p-1 fondoInteriorCard">
              <h5 className="mb-1 text-start">{props.alumno.name}</h5>

              <div className="row sin mb-2">
                {props.alumno.idiomas?.map((idioma, index) => (
                  <div key={index} className="col-6 sin text-start">
                    <img
                      src={banderas[idioma.alpha2.toUpperCase()].url}
                      alt={idioma.native_name}
                      title={idioma.native_name}
                      className="idioma-img"
                    />
                    <p className="sin">{idioma.nivel}</p>
                    <p
                      title={idioma.certificado ? "Certificado" : "Sin certificar"}
                      className="sin"
                    >
                      {idioma.certificado ? "C" : "SC"}
                    </p>
                  </div>
                ))}

                {/* Perfiles */}
                <div className="mb-2 text-start sin">
                  <p className="mb-1"><strong>Perfiles:</strong></p>
                  {/* Add profile content here */}
                </div>

                {/* Ciclos */}
                <div className="text-start sin mb-2">
                  <p className="mb-1"><strong>Ciclos:</strong> {props.alumno.ciclos?.map((ciclo, index) => (
                    <span key={index} title={ciclo.nombre} className="me-2">
                      {ciclo.codCiclo} |
                    </span>
                  ))}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-2">
            <p className="text-start">{props.alumno.sobre_mi}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumnosMinCard;