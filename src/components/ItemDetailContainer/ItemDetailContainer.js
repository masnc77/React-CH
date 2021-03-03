import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../firebase/index'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    
    useEffect(()=>{

        let db = getFirestore();
        let itemsFirebase = db.collection("items");
        let item = itemsFirebase.doc(id)

        item.get().then((doc) => {
               setItem({id: doc.id, ...doc.data() });
            })
        },[id])

       
    
        return (<><ItemDetail getItem={item} />
    </>)
}



    


