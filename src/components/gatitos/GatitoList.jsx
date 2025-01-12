import React, { useState } from "react";
import mockGatitos from "../../util/mockData";
import GatitoCard from "./GatitoCard";

const GatitoList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGatitos = mockGatitos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mockGatitos.length / itemsPerPage);

  return (
    <div>
      <div className="gatitos-grid">
        {currentGatitos.map((gatito) => (
          <GatitoCard key={gatito.id} gatito={gatito} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default GatitoList;
