import React from 'react';

const favoritContex = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemon: (id) => null
})

export const FavoriteProvider = favoritContex.Provider;

export default favoritContex;