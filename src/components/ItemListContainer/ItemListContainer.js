import React, {useState, useEffect} from 'react'
import {ItemList, Itemlist} from '../ItemList/ItemList'


const products = [{

    id: 1,
    titulo: "Play 2",
    categoria: "Electronicos",
    precio: 100,
    imagen:"https://www.mundokanata.com/wp-content/uploads/2019/10/450_1000.jpg",

},{

    id: 2,
    titulo: "Play 3",
    categoria: "Electronicos",
    precio: 200,
    imagen: "https://www.mundokanata.com/wp-content/uploads/2019/10/450_1000.jpg",

},{

    id: 3,
    titulo: "Play 4",
    categoria: "Electronicos",
    precio: 300,
    imagen: "https://www.mundokanata.com/wp-content/uploads/2019/10/450_1000.jpg",

},{

    id: 4,
    titulo: "Play 5",
    categoria: "Electronicos",
    precio: 400,
    imagen: "https://www.mundokanata.com/wp-content/uploads/2019/10/450_1000.jpg",

}]

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
        useEffect(()=>{

        const call = new Promise((resolve, reject) => {
            setTimeout (()=> {
                resolve(products)
            },2000)
            
        })
        
        call.then(response => {
            console.log(response)
            setItems(response)
        })

    }, [])
    return (<> < ItemList items={items}/> </>)
 }

 

