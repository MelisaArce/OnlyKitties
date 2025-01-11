import React, { useState } from 'react';
import './Adoptanteform.css';

const AdoptanteForm = ({ onAgregarAdoptante }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [fechaAdopcion, setFechaAdopcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const nuevoAdoptante = {
      nombre,
      email,
      direccion,
      fechaAdopcion,
    };

    
    onAgregarAdoptante(nuevoAdoptante);


    setNombre('');
    setEmail('');
    setDireccion('');
    setFechaAdopcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        placeholder="Ingrese su nombre"
        required
      />
      <br />
      
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Ingrese su email"
        required
      />
      <br />
      
      <label>Dirección:</label>
      <input
        type="text"
        value={direccion}
        onChange={(event) => setDireccion(event.target.value)}
        placeholder="Ingrese su dirección"
        required
      />
      <br />
      
      <label>Fecha de Adopción:</label>
      <input
        type="date"
        value={fechaAdopcion}
        onChange={(event) => setFechaAdopcion(event.target.value)}
        required
      />
      <br />
      
      <button type="submit">Registrar Adoptante</button>
    </form>
  );
};

export default AdoptanteForm;
