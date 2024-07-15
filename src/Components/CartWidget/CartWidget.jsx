import { Link } from 'react-router-dom'; 
import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartStyles, NumberStyle} from './CartStyles';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Card from '@mui/material/Card';


const CarWidget = () => {

  const { cart } = useContext(CartContext);


  return (
    <div>
      <Link to="/Cart">
        <Badge badgeContent={cart.length} showZero={true} sx={NumberStyle}  >
          <ShoppingCartIcon color="action" sx={CartStyles} />
        </Badge>
      </Link>
    </div>
  );
};




export default CarWidget;
