import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';


const Pokedex = (props) => {
    const { pokemons } = props;

    return(
        <div>
            <div className='header'>
                <h1>Pokedex</h1>
                <Pagination
                    page={1}
                    totalPage={111}
                    onLeftClick={console.log}
                    onRightClick={console.log} 
                />
            </div>
            <div className='pokedex-grid'>
                {pokemons.map( (pokemon, index) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name}/>
                })}
            </div>
        </div>
    );
}

export default Pokedex;