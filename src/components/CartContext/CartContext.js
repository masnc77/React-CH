import React, {useState, createContext, useContext} from 'react'


export const CartContext = React.createContext(0);


export const Context = ({children}) =>{

    const [contador, setContador] = useState(0)

    const [producto, setProducto] = useState([]);

    const agregarProducto = (nombre, cantidad) => {
        const intro = producto.find((i) => i.id === nombre.id)

        if (intro) {
            intro.cantidad +- cantidad
            setProducto([...producto])
        }
        else {
        setProducto ([...producto, {...nombre, cantidad}])
    }
}

    const borrarProducto = (id) => {
        producto.splice(
            producto.findIndex((i) => i.id === id),1
        )
        setProducto([...producto])
    }





    return (
    <CartContext.Provider value={[contador, setContador, producto, agregarProducto, borrarProducto]}> 
        {children} 
    </CartContext.Provider>)
}

export default CartContext
