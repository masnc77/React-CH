import React from 'react'


export default function ItemDetail({getItem}) {
    return (
        <div>
            { getItem && getItem.titulo}<br></br>
            { getItem && <img style={{height: 300, width:500}} src={getItem.imagen}></img>}
            <br></br>
            <br></br>
            { getItem && <p>{getItem.description}</p>}
            { getItem && <p>{`USD ${getItem.precio}`}</p>}
        </div>
    )
}
