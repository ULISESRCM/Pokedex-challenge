const initialState = {
    pokemons: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POKEMONS':
        return {
          ...state,
          pokemons: action.payload,
        };
      case 'REMOVE_POKEMON':
        return {
          ...state,
          pokemons: state.pokemons.filter(
            (pokemon) => pokemon.name !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  