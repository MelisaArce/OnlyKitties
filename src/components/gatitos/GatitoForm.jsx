import React, { useState } from 'react';

const GatitoForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    id: initialData.id || '',
    nombre: initialData.nombre || '',
    edad: initialData.edad || '',
    estadoAdopcion: initialData.estadoAdopcion || 'Disponible',
    raza: initialData.raza || '',
    color: initialData.color || '',
    descripcion: initialData.descripcion || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      id: '',
      nombre: '',
      edad: '',
      estadoAdopcion: 'Disponible',
      raza: '',
      color: '',
      descripcion: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del gatito"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="edad"
        placeholder="Edad"
        value={formData.edad}
        onChange={handleChange}
      />
      <select
        name="estadoAdopcion"
        value={formData.estadoAdopcion}
        onChange={handleChange}
      >
        <option value="Disponible">Disponible</option>
        <option value="Adoptado">Adoptado</option>
      </select>
      <input
        type="text"
        name="raza"
        placeholder="Raza"
        value={formData.raza}
        onChange={handleChange}
      />
      <input
        type="text"
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default GatitoForm;
