import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        } else {
            alert("Mínimo");
        }
    };

    return (
        
            <Counter contador={contador} sumar={sumar} restar={restar} />

    );
};

export default CounterContainer;



