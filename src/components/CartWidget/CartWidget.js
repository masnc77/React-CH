import React from 'react'
import carrito from '../../img/carrito.png'
import './CartWidget.css'

export const CartWidget = () =>{
    var cart = carrito
    
    return( <div> Carrito <img id="cart"src ={cart}></img>  </div>

    )
}