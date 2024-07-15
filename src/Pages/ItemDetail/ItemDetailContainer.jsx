import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  
  let {addToCart, CounterContainer} = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);


  const onAdd = (contador) => {
    let objetoFinal = { ...product, contador: contador };
    addToCart(objetoFinal);
  };
 
  
  return (<div>
      <ItemDetail producto={product} onAdd = {onAdd} />
    </div>
  );
};

export default ItemDetailContainer;


 














