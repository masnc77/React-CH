import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'



export const ItemCount = ({sumar, restar, stock, initial, onAdd, numero}) => {
    const [contador, setcontador] = useContext(CartContext)
    console.log(numero)
    return (

        <>
        <button onClick={sumar} /* disabled={numero===stock}  */>+</button>
        <span>  {contador} </span>
        <button onClick={restar} /* disabled={numero===initial}  */>-</button>
        <></>        <button onClick={onAdd}>Agregar al Carrito {contador}</button>


        </>
    )
  };
 

