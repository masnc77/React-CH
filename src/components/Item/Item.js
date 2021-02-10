import React, {useContext} from 'react'
import { Link } from 'react-router-dom' 
import { CartContext } from '../CartContext/CartContext'


const Item = ({item}) => {
    
    const {contador, setContador} = useContext(CartContext)

    return(
        
        <div style={{marginBottom: 40, display: 'inline-block'}} >
            
            <img style={{width: 200, height: 200, textAlign: 'center', margin: 40}} src={item.imagen} alt={item.titulo} />
            

            <Link to={`/item/${item.id}`}>
                <p style={{fontSize: 30,color: 'red' }}>{item.titulo}</p>
            </Link>

            <p>{item.categoria}</p>
            <p>{`USD ${item.precio}`}</p>
            

            
        </div>
        
    );
};

export default Item;