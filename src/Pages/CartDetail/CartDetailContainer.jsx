import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {ImageStyle, containerStyle } from './CartDetailContainer';

const CartDetailContainer = () => {
  const { cart, clearCart, deleteProduct, finalizarCompra } = useContext(CartContext);

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };



  return (
    <div>
      {cart.map((item) => (
        <Card key={item.id} sx={containerStyle}>
          <CardActionArea >
            <CardMedia sx={ImageStyle}
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{color : "black"}}>
                {item.title}
              </Typography>
              <Typography variant="body1" align='center' style={{color : "black", marginTop:'30px'}}>
                {item.description}
              </Typography>
              <Typography variant="h5" color="text.secondary" style={{color : "black", marginTop:'30px'}}>
                Precio: ${item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{color : "black", marginTop:'10px'}}>
                Unidades: {item.quantity}
              </Typography>
              <button onClick={() => handleDeleteProduct(item.id)} style={{ color: 'black', marginTop:'30px'}}>
                Eliminar Producto
              </button>
       
            </CardContent>
          </CardActionArea>
        </Card>
      ))};
      <div style={{ textAlign: 'center', margin: '30px' }}>
        <button onClick={clearCart} style={{ color: 'black', marginRight: '10px', height: '40px', width: '200px'  }}>Limpiar Carrito</button>
        <button onClick={finalizarCompra} style={{ color: 'black', marginRight: '10px', height: '40px', width: '200px'}}>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default CartDetailContainer;








