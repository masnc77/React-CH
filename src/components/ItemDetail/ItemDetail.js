import React, {useState} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'



export default function ItemDetail({getItem}) {

        const initial = 0
        const stock = 5
        const [numero, setNumero] = useState(initial)
        const [add, setAdd] = useState(false)

    
        const sumar = () => {
            if (numero < stock ) {
                 setNumero(numero + 1)
                            
            }
        }
    
        const restar = () =>{
            if ( numero > initial ) {
                setNumero(numero - 1)
            }
        }

    

    const onAdd = () => {
           
        numero <= stock ? alert("Agregado"):alert("No Hay")
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

            <button>Terminar mi compra</button>
            </Link> : <ItemCount sumar={sumar} restar={restar} onAdd={onAdd} initial={initial} stock={stock} numero={numero}/>

            }
            
            
        </div>
    )
}
