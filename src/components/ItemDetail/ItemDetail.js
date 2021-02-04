import React, { useState, useContext } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

export default function ItemDetail({getItem}) {

        const [contador, setcontador] = useContext(CartContext)

        const initial = 0
        const stock = 5

        const [numero, setNumero] = useState(initial)
        const [add, setAdd] = useState(false)

        const sumar = () => {
            if (contador < stock ) {
                 setcontador(contador + 1)   
                                   
            }
        }
    
        const restar = () =>{
            if ( contador > initial ) {
                setcontador(contador - 1)
                
            }
        }    

    const onAdd = () => {
           
        numero <= stock ? alert ("Agregado $(`contador`) Articulos"):alert("No Hay")
        if (numero > 0) {
            setAdd(true)     
            
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
            <Link to={"/cart/"}>

            <button>Terminar mi compra {contador}! </button>
            </Link> : <ItemCount sumar={sumar} restar={restar} onAdd={onAdd} initial={initial} stock={stock} numero={numero}/>

            }
            
            
        </div>
    )
}
