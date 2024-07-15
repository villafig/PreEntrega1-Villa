import React, { useState } from 'react';
import Counter from "./Counter";

const CounterContainer = ({onAdd}) => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            alert("Mínimo");
        }
    };

    return (
        <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
    );
};

export default CounterContainer;




