import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import useFetchItem from '../../hooks/useFetchItem'; // Asume que has importado el hook

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtén el ID de los parámetros de la URL
  const item = useFetchItem('https://rickandmortyapi.com/api/character', id); // Obtén los detalles del producto usando el hook useFetchItem

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;











