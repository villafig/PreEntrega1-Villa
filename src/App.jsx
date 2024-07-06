import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Pages/ItemDetail/ItemDetailContainer.jsx';
import NavbarContainer from './Components/Navbar/NavbarContainer.jsx'; 
import CartDetailContainer from './Pages/CartDetail/CartDetailContainer.jsx'; 
import CategoryContainer from './Pages/CategoryContainer/CategoryContainer.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <NavbarContainer /> 
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
        <Route path="/Category/:category" element={<CategoryContainer />} />
        <Route path="/cart" element={<CartDetailContainer />} />
        <Route path="/*" element={<h4>Element not found</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



     







