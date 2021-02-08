import React from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {producto, borrarProducto} = CartContext()

const eliminar = (i) => {
    borrarProducto(i.id)
}

    
    return (
    <section>
        <div>
           <h2>Mis Compras</h2>
           {<Link to="/" exact>
               <button>Seguir Comprando</button>
           </Link>}
       </div>
       <div style={{justifyContent:"center"}}>
           {productos.map((item) => ( 
             <div>
                <div>
                    <img style={{width: 200,height: 250}} src={item.imagen} alt={item.id}/>
                </div>
                <h4 >{item.nombre}</h4>  

                <p>item: {item.descripcion}</p>
                
                <input style={{width:"7%",border:"none",marginLeft:"5px"}} readOnly type="text" placeholder={item.quantity}/>
                <div>
                    <button onClick={()=>eliminar(item)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <div> <p>Precio: ${item.precio}</p></div>
             </div>
             )
           )}

       </div>
    </section>)
}

