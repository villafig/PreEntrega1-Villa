
import {Link} from 'react-router-dom'; 
import {Badge} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CarWidget = () => {
  return (
    <div className="carrito">
      <Link to="/Cart">
      <Badge badgeContent={1} color="primary" showZero={true}>
      <ShoppingCartIcon color="action" />
    </Badge>
      </Link>
    </div>
  );
};

export default CarWidget