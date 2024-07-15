import counterStyle from './counterStyle'; // Asegúrate de que la ruta sea correcta y coincida con el nombre del archivo


const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={counterStyle}>
      <button onClick={sumar} style={{color: "black"}}>Sumar</button>
      <h2 style={{color: "black", margin:"10px"}}>{contador}</h2>
      <button onClick={restar} style={{color: "black"}}>Restar</button>
      <button onClick={()=>onAdd(contador)} style={{color: "black", padding:"10px", margin:"30px"}}>Agregar al Carrito</button>
    </div>
  );
};

export default Counter;





