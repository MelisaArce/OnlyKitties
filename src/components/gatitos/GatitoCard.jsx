import React from "react";
import "./gatitos.css"; 
import gatitosMock from "../../util/mockData";

const GatitoCard = () => {
  return (
    <div className="gatito-card">
      {gatitosMock
          .filter((gato) => gato.estadoAdopcion === "Disponible")
          .map((gato) => (
            <div key={gato.id} className="gatito-card">
              <img src={gato.imagen} alt={`Imagen de ${gato.nombre}`} />
              <h2>{gato.nombre}</h2>
              <p>{gato.descripcion}</p>
              <p>Color: {gato.color}</p>
              <p>Edad: {gato.edad}</p>
              <p>Desparasitado: {gato.desparasitacion ? "Sí" : "No"}</p>
              <p>Vacunas al día: {gato.vacunas ? "Sí" : "No"}</p>
              <p>Castrado: {gato.castracion ? "Sí" : "No"}</p>
              <p>Amigable: {gato.amigable ? "Sí" : "No"}</p>
            </div>
          ))}
    </div>
  );
};

export default GatitoCard;
