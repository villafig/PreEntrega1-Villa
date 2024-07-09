import useFetch from '../../hooks/useFetch';
import CardContainer from '../../Components/Card/CardContainer';
import ItemListStyle from './ItemList'


const ItemListContainer = () => {

  const { data : productos  } = useFetch('https://fakestoreapi.com/products');
  return (
    <div style={ItemListStyle}>
      <CardContainer productos={ productos } />
    </div>
  );
 
};

export default ItemListContainer;


