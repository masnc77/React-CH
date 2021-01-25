import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom' 


const Item = ({item}) => {
    
    return(
        
        <div style={{marginBottom: 40, display: 'inline-block'}} >
            
            <img style={{width: 200, height: 200, textAlign: 'center', margin: 40}} src={item.imagen} alt={item.titulo} />
            

            <Link to={`/item/${item.id}`}>
                <p style={{fontSize: 30,color: 'red' }}>{item.titulo}</p>
            </Link>

            <p>{item.categoria}</p>
            <p>{`USD ${item.precio}`}</p>
            {/* <p>{item.description}</p> */}

            <ItemCount initial={1} stock={5}/>
        </div>
        
    );
};

export default Item;