import React, { useState, useContext, useEffect } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'


export default function ItemDetail({getItem}) {
        console.log({getItem})
        const {contador, setContador, agregarProducto} = useContext(CartContext)
        
        const initial = 0
        const stock = 5

        const [numero, setNumero] = useState(initial)
        const [add, setAdd] = useState(false)
        const [cantidad, setCantidad] = useState(0)
        
        const sumar = () => {
            if (contador < stock ) {
                 setContador(contador + 1)   
                                   
            }
        }
    
        const restar = () =>{
            if ( contador > initial ) {
                setContador(contador - 1)
                
            }
        }    

    const onAdd = () => {
           
        contador <= stock || initial ? alert (`Agregaste ${contador} al carrito`):alert("No Hay")
        if (contador > 0) {
            setAdd(true)
            setCantidad(contador)     
            
        }

    }

    
    return (
        
        <div>
            
            { getItem && getItem.titulo}<br></br>
            { getItem && <img style={{height: 300, width:500}} src={getItem.imagen}></img>}
            <br></br>
            <br></br>
            { getItem && <p >{getItem.description}</p>}
            { getItem && <p>{`USD ${getItem.precio}`}</p>}

            
            <br></br>


            { add ?     
            <Link to="/cart">

            <button onClick={()=> agregarProducto(getItem, contador)}>Terminar mi compra {contador}! </button>
            </Link> : <ItemCount sumar={sumar} restar={restar} onAdd={onAdd} numero={numero}/>
            
            }
            
            
        </div>
    )
}
