import React, {useContext} from 'react'
import carrito from '../../img/carrito.png'
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'



export const CartWidget = () =>{
    
    var cart = carrito
    
    const {cantidadDeProducto, setCantidadDeProducto} = useContext (CartContext)
    
    return(
    <Link to="/cart"><div> Carrito {cantidadDeProducto}<img id="cart"src ={cart}></img> </div> </Link>)
}