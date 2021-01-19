import React, { useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {

    const [numero, setNumero] = useState(initial)

    const sumar = () => {
        if (numero < stock ) {
             setNumero(numero + 1)
                        
        }
    }

    const restar = () =>{
        if ( numero > initial ) {
            setNumero(numero - 1)
        }
    }

    return (
        <>
        <button onClick={sumar} >+</button>
        <span>{numero}</span>
        <button onClick={restar}>-</button>
        </>
    )
  };
 

