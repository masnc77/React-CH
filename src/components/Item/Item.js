import React, {useContext} from 'react'
import { Link } from 'react-router-dom' 
import { CartContext } from '../CartContext/CartContext'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 300,
            
    },
    media: {
      height: 140,
    },
  });

const Item = ({item}) => {
    
    const {contador, setContador} = useContext(CartContext)
    const classes = useStyles();
    
    return(
        
            <div>
        <Card className={classes.root} style={{margin:20, borderRadius:20, backgroundColor:"lightgrey"}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.imagen}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1" >
            <Link to={`/item/${item.id}`} style={{color:"blue"}}>
              {item.titulo}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{color:"black"}}>
            <p style={{color:"red"}}>{`U$D  ${item.precio}`}</p>
              {item.description}
              
            </Typography>
          </CardContent>
        </CardActionArea>
       
      </Card>
      
      </div>
        
    )};

export default Item;