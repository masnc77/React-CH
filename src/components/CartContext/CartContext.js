import React, {useEffect, useState} from 'react'
export const CartContext = React.createContext(0);
export const ContextProvider = ({children}) =>{

    const [contador, setContador] = useState(0)
    const [carrito, setCarrito] = useState([]);
    const [cantidadDeProducto, setCantidadDeProducto] = useState(0);
    const [precioFinal, setprecioFinal] = useState(0)

    useEffect(() => {
        setprecioFinal(0)
        carrito.map(itemCarrito => setprecioFinal(precioAnterior => precioAnterior+(itemCarrito.cantidad*itemCarrito.precio)))
        },[carrito])
    
    const agregarProducto = (producto, cantidad) => {
        
         let enCarrito = carrito.find((i) => i.id === producto.id)
         let cantidadTotal = cantidadDeProducto + cantidad
         setCantidadDeProducto(cantidadTotal)

         if (enCarrito) { enCarrito.cantidad += cantidad 
            setCarrito ([...carrito])
        }
        else{ 
        
        setCarrito ([...carrito, {...producto, cantidad: cantidad}])
}}

    const borrarProducto = (id, cantidad) => {
        carrito.splice(
            carrito.find((i) => i.id === id),1        )
        setCarrito([...carrito])
        setCantidadDeProducto(cantidadDeProducto - cantidad)
    }

    const limpiarCarrito = () =>{
        setCarrito([])
        setCantidadDeProducto(0)
        setprecioFinal(0)
    }

    return (
    <CartContext.Provider value={{contador, setContador, carrito, agregarProducto, borrarProducto, cantidadDeProducto, limpiarCarrito, setprecioFinal, precioFinal}}> 
        {children} 
    </CartContext.Provider>)
}
export default CartContext
