import { Link } from 'react-router-dom'; 
import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartStyles, NumberStyle } from './CartStyles';

const CarWidget = () => {
  return (
    <div className="carrito">
      <Link to="/Cart">
        <Badge badgeContent={0} showZero={true} sx={NumberStyle}>
          <ShoppingCartIcon color="action" sx={CartStyles} />
        </Badge>
      </Link>
    </div>
  );
};

export default CarWidget;
