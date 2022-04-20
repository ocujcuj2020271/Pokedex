import { HashRouter, Routes, Route } from 'react-router-dom';
import Pokemons from './componets/Pokemons';
import PokemonsInfo from './componets/PokemonsInfo';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <div className="App">
          <div className='header'></div>
        </div>

      </div>
      <Routes>
        <Route path='/' element={<Pokemons />} />
        <Route path='/pokemons/:id' element={<PokemonsInfo />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
