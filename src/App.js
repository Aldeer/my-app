import Navbar from './Components/Navbar';
import Pokedex from './Components/Pokedex';
import Searchbar from './Components/Searchbar';
import React, {useState, useEffect} from 'react';
import { getPokemonData, getPokemons } from './Api';

import './Styles.css';


function App() {
  
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch(err) {

    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        { loading ? 
          <div>Cargando pokemones...</div>
          :
          <Pokedex pokemons={pokemons}/>
        }
        
      </div>
    </div>
    
  );
}

export default App;
