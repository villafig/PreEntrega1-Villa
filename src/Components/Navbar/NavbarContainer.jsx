import CarWidget from '../CarWidget/CarWidget';
import gorillaLogo from './gorilla-logo-vector.png'; 
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbarContainer">

      <img className='imagen_gorilla' src={gorillaLogo} alt="gorilla_logo" />
      
      <h2>Hoodies</h2>
      <h2>Playeras</h2>
      <h2>Calzado</h2>
      <CarWidget/>

    </div>
  )
}

export default Navbar

