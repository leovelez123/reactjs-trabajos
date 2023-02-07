import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:categoriaId' element={ <ItemListContainer /> } />
            <Route path='/item/:productId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
          </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
