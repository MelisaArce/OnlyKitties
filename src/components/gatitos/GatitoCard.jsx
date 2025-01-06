import React from "react";
import "./gatitos.css"; 

const GatitoCard = ({ gatito }) => {
  return (
    <div className="gatito-card">
      <img src={gatito.imagen} alt={`Imagen de ${gatito.color}`} />
      <h3>{gatito.descripcion}</h3>
      <p>Color: {gatito.color}</p>
      <p>Edad: {gatito.edad}</p>
      <p>Desparasitación: {gatito.desparasitacion}</p>
      <p>Vacunas al día: {gatito.vacunas}</p>
      <p>Castración: {gatito.castracion}</p>
      <p>Amigable: {gatito.amigable}</p>
    </div>
  );
};

export default GatitoCard;
