

const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <p style={{color:"black"}}>Contador: {contador}</p>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
