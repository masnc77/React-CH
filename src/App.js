import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'
import { ItemList } from './components/ItemList/ItemList'
import { BrowserRouter , Switch , Route} from 'react-router-dom'
import  Contact  from './components/Contact/Contact'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    
    <BrowserRouter>
    <div className="App">
    < NavBar/>
    <p style={{fontSize:40, letterSpacing: 10,}}>BIENVENIDOS A NUESTRO E-COMMERCE</p>
    
  
    <Switch>

    
      <Route path='/item/:id'>
      < ItemDetailContainer />
      </Route>

      <Route path='/'>
      <ItemListContainer/>
      </Route>
      
      </Switch>            

    </div>
    </BrowserRouter> 
  );
}

export default App;
