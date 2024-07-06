import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';


const NavbarContainer = () => {
  return (
    <>
    <div>
    < Navbar />
    </div>
    < Outlet />
    </>
  )
}


export default NavbarContainer




