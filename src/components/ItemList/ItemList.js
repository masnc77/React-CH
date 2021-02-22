import React from 'react'
import Item from '../Item/Item'


export const ItemList = ({ items }) =>{
    return (

        <React.Fragment>
            <div style={{display:'flex'}}>
            {items && items.map(item => <Item key={item.id} item= {item} />)}
            </div>
        </React.Fragment>
        
    )
}