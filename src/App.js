import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Cart/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './components/Context/CartContext'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          
          <Switch>
            <Route exact path="/">
              <ItemListConteiner  greeting="Benja"/>
            </Route>
            <Route exact path="/productos/:product">
              <ItemListConteiner  greeting="Benja"/>
            </Route>
            <Route exact path="/detalle/:id">
              <ItemDetailConteiner />  
            </Route>
            <Route exact path="/cart">
              <CartContainer />
            </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
    </CartContextProvider>    
  );
}

export default App;
