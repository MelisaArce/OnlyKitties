import React from 'react';

const GatitoCard = ({ gatito, onDelete, onEdit }) => (
  <div>
    <h3>{gatito.nombre}</h3>
    <p>Edad: {gatito.edad}</p>
    <p>Estado: {gatito.estadoAdopcion}</p>
    <button onClick={() => onEdit(gatito)}>Editar</button>
    <button onClick={() => onDelete(gatito.id)}>Eliminar</button>
  </div>
);

export default GatitoCard;
