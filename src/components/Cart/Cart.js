import React, {useContext, useEffect} from 'react'
import { CartContext } from '../CartContext/CartContext'




export const Cart = () =>{
    
    const {carrito} = useContext(CartContext)

    useEffect(() => {
        
        return () => {
            console.log(carrito)
        }
    }, [])

    return(<div><div>{carrito.map((item)=>(<div>{item.titulo}</div>))}</div>
        </div>)
}

