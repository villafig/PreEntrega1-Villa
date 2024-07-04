import React from 'react';

const ItemDetail = ({ item }) => {
  if (!item) {
    return <div>No se encontraron datos del item.</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <p>Location: {item.location ? item.location.name : 'Ubicación desconocida'}</p>
    </div>
  );
};

export default ItemDetail;

