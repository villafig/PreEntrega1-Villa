function Counter({sumar,contador,restar}) {
  return (
  <>
    <button onClick={sumar}>Sumar</button>
    <h2>Número de productos en tu carrito {contador}</h2>
    <button onClick={restar}>Restar</button>
    </>
  )
}


export default Counter