import React, { useContext } from 'react'
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter , Switch , Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart'
import { ContextProvider } from './components/CartContext/CartContext'

function App() {
  
  return ( 
    <div className="App">
    <BrowserRouter>
    <ContextProvider>
    
    < NavBar/>
    <p style={{fontSize:40, letterSpacing: 10,}}>BIENVENIDOS A NUESTRO E-COMMERCE</p>
  
    <Switch>

    <Route path='/cart'>
        <Cart/>
      </Route>
    
      <Route path='/item/:id'>
      < ItemDetailContainer />
      </Route>

      <Route path='/'>
      <ItemListContainer/>
      </Route>

      </Switch>            
    
    </ContextProvider>
    </BrowserRouter> 
    </div>
  );
}

export default App
