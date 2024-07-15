import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Category from './Category';


const CategoryContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        const filteredProducts = data.filter(product => product.category === category);
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [category]);

  return ( <div>
      <Category productos={products} />
    </div>
  );
};

export default CategoryContainer;


