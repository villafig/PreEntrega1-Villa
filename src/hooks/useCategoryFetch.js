import { useEffect, useState } from 'react';

const useCategoryFetch = (category, type) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category, type]);

  return items;
};

export default useCategoryFetch;

