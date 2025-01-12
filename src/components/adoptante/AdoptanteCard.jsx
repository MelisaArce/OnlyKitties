import React from 'react';
import './Adoptantecard.css';

const AdoptanteCard = ({ nombre, email, direccion, fechaAdopcion }) => {
  return (
    <div className="adoptante-card">
      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
      <p>Dirección: {direccion}</p>
      <p>Fecha de Adopción: {fechaAdopcion}</p>
    </div>
  );
};

export default AdoptanteCard;
