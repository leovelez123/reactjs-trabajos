import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ItemCount />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer /> } />
          <Route path='/item/:productId' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
