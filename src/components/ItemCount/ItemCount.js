import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'



export const ItemCount = ({sumar, restar, onAdd, numero}) => {

    const {contador, setContador} = useContext(CartContext)

    const initial = 0
    const stock = 5
    
    return (

        <>
        <button onClick={sumar} disabled={contador===stock} >+</button>
        <span>  {contador} </span>
        <button onClick={restar} disabled={contador===initial} > - </button>
        <></>  <button onClick={onAdd} disabled={contador===initial}>Agregar al Carrito {contador}</button>


        </>
    )
  };
 

