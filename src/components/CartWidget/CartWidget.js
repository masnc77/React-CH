import React, {useContext} from 'react'
import carrito from '../../img/carrito.png'
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext'

export const CartWidget = () =>{
    var cart = carrito
    
    const [contador, setcontador] = useContext (CartContext)
    
    return( <div> Carrito {contador}<img id="cart"src ={cart}></img>  </div>

    )
}