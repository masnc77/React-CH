import React from "react";

export const ItemCount = ({sumar, restar, stock, initial, onAdd, numero}) => {

console.log(numero)
    return (

        <>
        <button onClick={sumar} disabled={numero===stock} >+</button>
        <span>  {numero} </span>
        <button onClick={restar} disabled={numero===initial} >-</button>
        <button onClick={onAdd}>Agregar al Carrito</button>


        </>
    )
  };
 

