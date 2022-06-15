import Navbar from './Components/Navbar';
import Pokedex from './Components/Pokedex';
import Searchbar from './Components/Searchbar';
import React, {useState, useEffect} from 'react';
import { getPokemonData, getPokemons } from './Api';

import './Styles.css';


function App() {
  
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch(err) {

    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
          <Pokedex 
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
      </div>
    </div>
    
  );
}

export default App;
