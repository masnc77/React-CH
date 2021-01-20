import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'
import { ItemList } from './components/ItemList/ItemList'


function App() {
  return (
    <div className="App">

      < NavBar />
      < ItemListContainer greeting={'Bienvenirijillo'} />
      <ItemCount initial={1} stock={5}/>
            
    </div>
  );
}

export default App;
