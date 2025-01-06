import React, { useState } from 'react';
import GatitoCard from './GatitoCard';
//import Paginado from './Paginado';

const GatitoList = ({ gatitos, onDelete, onEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedGatitos = gatitos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {paginatedGatitos.map((gatito) => (
        <GatitoCard
          key={gatito.id}
          gatito={gatito}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
      <Paginado
        totalItems={gatitos.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default GatitoList;
