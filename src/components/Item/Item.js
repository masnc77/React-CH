import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'


const Item = ({item}) => {
    return(
        <div style={{marginBottom: 40, display: 'inline-block'}} >
            <img style={{width: 200, height: 300}} src={item.imagen} alt={item.titulo} />
            <p>{item.titulo}</p>
            <p>{item.categoria}</p>
            <p>{item.precio}</p>
            <ItemCount initial={1} stock={5}/>
        </div>
        
    );
};

export default Item;