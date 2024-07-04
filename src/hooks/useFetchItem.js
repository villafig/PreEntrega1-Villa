import { useEffect, useState } from 'react';

const useFetchItem = (endpoint, itemId) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Esta función se ejecuta cuando cambia el valor de `endpoint` o `itemId`
    const fetchData = async () => {
      try {
        // Realiza una solicitud HTTP GET al endpoint específico del item usando el ID
        const response = await fetch(`${endpoint}/${itemId}`);
        
        // Verifica si la respuesta es exitosa (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Convierte la respuesta a formato JSON
        const data = await response.json();
        
        // Actualiza el estado `item` con los datos del producto obtenidos
        setItem(data);
      } catch (error) {
        console.error('Error fetching item data:', error);
        // Aquí puedes manejar el error si es necesario
      }
    };

    // Llama a la función fetchData para iniciar la solicitud HTTP
    fetchData();
  }, [endpoint, itemId]); // Este efecto se ejecuta cada vez que `endpoint` o `itemId` cambian

  // Retorna el estado `item`, que contiene los datos del producto o null si no se han cargado
  return item;
};

export default useFetchItem;

