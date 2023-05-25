export const setPokemons = (pokemons) => {
    return {
      type: 'SET_POKEMONS',
      payload: pokemons,
    };
  };
  
  export const removePokemon = (pokemonName) => {
    return {
      type: 'REMOVE_POKEMON',
      payload: pokemonName,
    };
  };
  