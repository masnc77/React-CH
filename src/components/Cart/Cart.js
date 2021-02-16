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
import { useParams } from 'react-router-dom';


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
    
    const {carrito} = useContext(CartContext)
    const classes = useStyles();

    useEffect(() => {
        
        return () => {
            console.log(carrito)
        }
    }, [])

    return(<div><div>{carrito.map((item)=>(<div>
        <Card className={classes.root} style={{margin:20, borderRadius:20, backgroundColor:"lightgrey"}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.imagen}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1" >
            
              {item.titulo}
              
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{color:"black"}}>
            <p style={{color:"red"}}>{`U$D  ${item.precio}`}</p>
              <p>Se han agregado {item.cantidad}</p>
              
            </Typography>
          </CardContent>
        </CardActionArea>
       
      </Card>
    </div>))}</div>
                
        </div>)

    

 
const crearOrden = () => {

    const [ordenId, setOrdenId] = useState('')
    const [loading, setLoading] = useState('')
    const {id} = useParams()

    useEffect(() => {

    let db = getFirestore()
    let Ordenes = db.collection('ordenes')
        
    const nuevaOrden = {
        /* cliente: userInfo, */
        /* producto: carrito, */
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        /* precio: total(), */
    }  
    Ordenes.add(nuevaOrden).then(({id}) => {
        setOrdenId(id)
        
    }).finally(() => {
        setLoading(false)
    })
        
    }, [])
    return (<></>)}}
