import useFetch from '../../hooks/useFetch';
import CardContainer from '../../Components/Card/CardContainer';

const ItemListContainer = () => {

  const { data : productos  } = useFetch('https://fakestoreapi.com/products');
  return (
    <div>
      <CardContainer productos={ productos } />
    </div>
  );
 
};

export default ItemListContainer;


