import React, { useState } from "react";
import GatitoForm from "../../components/gatitos/GatitoForm";
import GatitoList from "../../components/gatitos/GatitoList";

const GatitosPage = () => {
  const [gatitos, setGatitos] = useState([]);

  const handleAddOrUpdate = (gatito) => {
    if (gatito.id) {
      setGatitos((prev) =>
        prev.map((g) => (g.id === gatito.id ? gatito : g))
      );
    } else {
      setGatitos((prev) => [
        ...prev,
        { ...gatito, id: Date.now().toString() },
      ]);
    }
  };

  const handleDelete = (id) => {
    setGatitos((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <div>
      <h1>Gestión de Gatitos</h1>
      <GatitoForm onSubmit={handleAddOrUpdate} />
      <GatitoList
        gatitos={gatitos}
        onDelete={handleDelete}
        onEdit={(gatito) => handleAddOrUpdate(gatito)}
      />
    </div>
  );
};

export default GatitosPage;
