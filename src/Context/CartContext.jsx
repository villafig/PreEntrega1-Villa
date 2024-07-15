import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    let existe = isInCar(producto.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          const newQuantity = elemento.quantity + producto.contador; 

          return { ...elemento, quantity: newQuantity };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, { ...producto, quantity: producto.contador || 1 }]); 
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCar = (id) => {
    return cart.some((product) => product.id === id);
  };

  const deleteProduct = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    setCart(newArr);
  };

  const finalizarCompra = (onClick) => {
    if (onClick) {
      console.log("¡Gracias por su compra!");
    } else {
      console.log("No has comprado nada.");
    }
  };



  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProduct,
    finalizarCompra,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
