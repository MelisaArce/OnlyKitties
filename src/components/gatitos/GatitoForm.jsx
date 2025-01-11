import React, { useState } from "react";

const GatitoForm = ({ onSubmit, initialData = {} }) => {
  const [gatito, setGatito] = useState({
    nombre: initialData.nombre || "",
    imagen: initialData.imagen || "",
    color: initialData.color || "",
    edad: initialData.edad || "",
    desparasitacion: initialData.desparasitacion || false,
    vacunas: initialData.vacunas || false,
    castracion: initialData.castracion || false,
    amigable: initialData.amigable || false,
    descripcion: initialData.descripcion || "",
    estadoAdopcion: initialData.estadoAdopcion || "Disponible",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGatito({
      ...gatito,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(gatito);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={gatito.nombre}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Imagen (URL):
        <input
          type="text"
          name="imagen"
          value={gatito.imagen}
          onChange={handleChange}
        />
      </label>
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={gatito.color}
          onChange={handleChange}
        />
      </label>
      <label>
        Edad:
        <input
          type="text"
          name="edad"
          value={gatito.edad}
          onChange={handleChange}
        />
      </label>
      <label>
        Desparasitado:
        <input
          type="checkbox"
          name="desparasitacion"
          checked={gatito.desparasitacion}
          onChange={handleChange}
        />
      </label>
      <label>
        Vacunas al día:
        <input
          type="checkbox"
          name="vacunas"
          checked={gatito.vacunas}
          onChange={handleChange}
        />
      </label>
      <label>
        Castrado:
        <input
          type="checkbox"
          name="castracion"
          checked={gatito.castracion}
          onChange={handleChange}
        />
      </label>
      <label>
        Amigable:
        <input
          type="checkbox"
          name="amigable"
          checked={gatito.amigable}
          onChange={handleChange}
        />
      </label>
      <label>
        Descripción:
        <textarea
          name="descripcion"
          value={gatito.descripcion}
          onChange={handleChange}
        />
      </label>
      <label>
        Estado de Adopción:
        <select
          name="estadoAdopcion"
          value={gatito.estadoAdopcion}
          onChange={handleChange}
        >
          <option value="Disponible">Disponible</option>
          <option value="Adoptado">Adoptado</option>
        </select>
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default GatitoForm;
