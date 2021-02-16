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
      
        
    )

    /* return(
    
        <div className="container" style={{width:350, height:400,}}>
            <div className="card" style={{fontFamily:'sans-serif', letterSpacing:0.05, lineHeight:1.6, borderRadius:10, margin:20, textAlign:'center',
        }}>
        <div style={{marginBottom: 40, display: 'inline-block'}} >
            
            <img style={{width: 200, height: 200, textAlign: 'center', margin: 40}} src={item.imagen} alt={item.titulo} />
            

            
                <p style={{fontSize: 40,color: 'red', textAlign:"center"}}>{item.titulo}</p>
            </Link>

            <p>{item.categoria}</p>
            <p>{`USD ${item.precio}`}</p>
            

            </div>
        </div>
        </div>
        
    ); */
};

export default Item;