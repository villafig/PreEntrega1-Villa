import React from 'react';
import useFetch from '../../hooks/useFetch';
import CardContainer from '../../Components/Card/CardContainer';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const { data: productos } = useFetch("https://rickandmortyapi.com/api/character");

  return (
    <div>
      <CardContainer productos={productos} />
    </div>
  );
};

export default ItemListContainer;


