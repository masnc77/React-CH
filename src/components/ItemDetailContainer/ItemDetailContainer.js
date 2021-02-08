import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../firebase/index'

useEffect(()=>{

let db = getFirestore();
let itemsFirebase = db.collection("items");
itemsFirebase.get()
    .then((querySnapshot)=>{
        querySnapshot.size === 0 && console.log("hay 1 item");

        let arrayItems = querySnapshot.docs.map((doc)=> {
            return ({
            id: doc.id,
            ...doc.data()
        })
        })
        console.log("arrayItems", arrayItems)
        setItemsdb(arrayItems)
})
},[])





const itemList = [{

    id: 2,
    titulo: "Play 2",
    categoria: "Electronicos",
    precio: 100,
    imagen:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/25/15878228713236.jpg",
    description: "PlayStation 2 es el sucesor de PlayStation (PS1), y compite contra la consola Dreamcast de Sega, la consola Nintendo GameCube de Nintendo y el sistema Xbox de Microsoft."

},{

    id: 3,
    titulo: "Play 3",
    categoria: "Electronicos",
    precio: 200,
    imagen: "https://i.blogs.es/4ca923/ps3_superslim-580x436/1366_2000.jpeg",
    description: "La PlayStation 3 tiene una forma convexa de su lado izquierdo cuando está en la posición vertical, y tiene un elegante acabado negro con el logotipo de PlayStation 3 en el lado izquierdo."

},{

    id: 4,
    titulo: "Play 4",
    categoria: "Electronicos",
    precio: 300,
    imagen: "https://blog.latam.playstation.com/tachyon/sites/3/2013/08/ps41.jpg",
    description: "PlayStation 4 cuenta con un procesador AMD de 8 núcleos bajo la arquitectura x86-64. Estas instrucciones x86-64 están diseñados para hacer más fácil el desarrollo de videojuegos en la consola de nueva generación, que atrae a un mayor número de desarrolladores."

},{

    id: 5,
    titulo: "Play 5",
    categoria: "Electronicos",
    precio: 400,
    imagen: "https://cnet4.cbsistatic.com/img/3VkJwvQr279cDNFZtFMI7Bkcrms=/1200x675/2020/06/14/5d28ba20-1eea-4dbe-a5ec-3ddc81ced029/ps5-render-cropped.jpg",
    description: "El auténtico corazón de esta consola, el circuito integrado que aglutina tanto la CPU como la GPU, ha salido de los laboratorios de una AMD que parece estar en mejor forma que nunca."
}]


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() =>{ 

    const call = new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(itemList)
        },100)
    })

    call.then(response => {
        console.log(response)
        setItem(response[id -2])
    })

    

    
}, [])
    return (<><ItemDetail getItem={item}/></>)
}