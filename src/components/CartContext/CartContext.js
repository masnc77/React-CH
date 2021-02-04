import React, {useState} from 'react'


export const CartContext = React.createContext(0);


export const Context = ({children}) =>{

    const [contador, setcontador] = useState(0)

    return (
    <CartContext.Provider value={[contador, setcontador]}> 
        {children} 
    </CartContext.Provider>)
}


