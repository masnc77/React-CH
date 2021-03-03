import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../CartContext/CartContext'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { getFirestore } from '../../firebase/index'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles({

    root: {
      maxWidth: 300,
      display: 'flex'
    },
    media: {
      height: 140,
    },
  });

export const Cart = () =>{
    
    const {carrito, borrarProducto, limpiarCarrito} = useContext(CartContext)
    const classes = useStyles();

    const [precioFinal, setprecioFinal] = useState(0)
    const [ordenId, setOrdenId] = useState('')
    const [order, setOrder] = useState({})
    const [datos, setDatos] = useState({})
    
    useEffect(() => {
      
      carrito.map(itemCarrito => setprecioFinal(precioAnterior => precioAnterior+(itemCarrito.cantidad*itemCarrito.precio)))
      },[carrito])

    useEffect (() => {
      setOrder({
          Nombre: datos, 
          Producto: carrito, 
          Fecha: firebase.firestore.Timestamp.fromDate(new Date()),
          Total: precioFinal
        })
        },[])
  
        const compra = () => { 
          const db = getFirestore();
          const Ordenes = db.collection('ordenes')  ;
          Ordenes.add(order).then(({id}) => {
              setOrdenId(id)
              alert (`Tu Numero de Orden es: ${id}`)
          }).finally(() => {
            limpiarCarrito()
          }
          )}


    return( 
      <>
      { carrito.length >0 ? 
    <div>
      <div style={{display:'flex'}}>{carrito.map((item)=>(
      <div>
        <Card className={classes.root} style={{margin:20, borderRadius:20, backgroundColor:"lightgrey"}}>
        <CardActionArea>
        <CardMedia className={classes.media} image={item.imagen}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h1" style={{color:'blue'}} >
          {item.titulo}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{color:"black"}}>
            <p style={{color:"red"}}>{`U$D  ${item.precio}`}</p>
            <p>Se agrego {item.cantidad} al carrito</p>
            <div>
              <button className="btn" onClick={()=>borrarProducto(item, item.cantidad)}>
              <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
        </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
    </div>))}
    </div>  
    <div>
        <form onSubmit={setDatos} style={{alignItems:'center'}}>
            <div><input type="text" placeholder="Nombre y Apellido"  ></input></div>
            <div><input type="number" placeholder="Telefono"  ></input></div>
            <div><input type="email" placeholder="Dirección de E-Mail"  ></input></div>
            <div><input type="email" placeholder="Repetir Dirección de E-Mail" ></input></div>
            <br></br>
            <Link to="/">
            <div><button type="submit" onClick={compra} >Finalizar</button></div>
            </Link> 
        </form>  
             <h1>Precio Total $ {precioFinal} </h1>
    </div>
    </div>
    :
    <div>
      <h2 style={{color:'red'}}>NO HAY ITEMS EN EL CARRITO</h2>
    </div>
      }
      </>
)}
    
  
    



  

 