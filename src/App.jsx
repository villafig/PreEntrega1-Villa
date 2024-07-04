// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer.jsx';
import CartDetailContainer from './Pages/CartDetail/CartDetailContainer.jsx';
import NavbarContainer from './Components/Navbar/NavbarContainer.jsx'; // Asegúrate de que la ruta sea correcta
import ItemDetailContainer from './Pages/ItemDetail/ItemDetailContainer.jsx';
import CategoryContainer from './Components/Navbar/CategoryContainer.jsx';


function App() {
  return (
    <BrowserRouter>
      <NavbarContainer /> {/* Asegúrate de que el NavbarContainer se renderiza aquí */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category/:type" element={<CategoryContainer />} />
        <Route path="/Cart" element={<CartDetailContainer />} />
        <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
        <Route path="/*" element={<h4>Element not found</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


     






