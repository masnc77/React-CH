import React, {useState, useEffect} from 'react'
import {ItemList} from '../ItemList/ItemList'
import { getFirestore } from '../../firebase/index'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{

let db = getFirestore();
let itemsFirebase = db.collection("items").orderBy("titulo", "asc");

itemsFirebase.get()
    .then((querySnapshot) => {
        querySnapshot.size === 1 && console.log("hay 1 item");

        let arrayItems = querySnapshot.docs.map((doc)=> {
            return ({
            id: doc.id,
            ...doc.data()
        })
        })
        console.log("arrayItems", arrayItems)
        setItems(arrayItems)
})
},[])

    return (<> < ItemList items={items}/> </>)
}


 

