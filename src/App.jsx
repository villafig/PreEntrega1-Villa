import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './Components/Navbar/NavbarContainer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"¡Bienvenido! =)"} />
    </>
  )
}

export default App
