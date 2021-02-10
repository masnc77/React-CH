import React, {useState, createContext, useContext} from 'react'


export const CartContext = React.createContext(0);


export const ContextProvider = ({children}) =>{

    const [contador, setContador] = useState(0)

    const [carrito, setCarrito] = useState([]);
    const [cantidadDeProducto, setCantidadDeProducto] = useState(0);

    
    const agregarProducto = (producto, cantidad) => {

        setCantidadDeProducto(cantidadDeProducto + cantidad)
        setCarrito ([...carrito, {...producto, cantidad: cantidad}])
        






        /* const intro = carrito.find((i) => i.id === producto.id)

        if (intro) {
            intro.cantidad +- cantidad
            setCarrito([...carrito])
        }
        else {
        
    } */
}

    const borrarProducto = (id) => {
        carrito.splice(
            carrito.findIndex((i) => i.id === id),1
        )
        setCarrito([...carrito])
    }





    return (
    <CartContext.Provider value={{contador, setContador, carrito, agregarProducto, borrarProducto, cantidadDeProducto}}> 
        {children} 
    </CartContext.Provider>)
}

export default CartContext
