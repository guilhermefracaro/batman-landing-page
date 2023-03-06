import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Contato from './pages/contato/contato';
import Comentários from './pages/comentários/comentários';
import Fotos from './pages/fotos/fotos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
      <Routes>
        <Route path='/fotos' element={<Fotos />}></Route>
      </Routes>
      <Routes>
        <Route path='/comentários' element={<Comentários />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
