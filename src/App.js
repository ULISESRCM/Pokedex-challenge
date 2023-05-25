import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons, removePokemon } from './redux/actions';
import PokemonGallery from './components/PokemonGallery';

const App = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    // Realizar la llamada a la API para obtener los pokemons
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => {
        // Mapear los datos de los pokemons
        const pokemonPromises = data.results.map((result) =>
          fetch(result.url).then((response) => response.json())
        );

        Promise.all(pokemonPromises).then((pokemonData) => {
          // Guardar los datos de los pokemons en el estado global
          dispatch(setPokemons(pokemonData));
        });
      });
  }, [dispatch]);

  const handleRemovePokemon = (pokemonName) => {
    dispatch(removePokemon(pokemonName));
  };

  return (
    <div>
      <h1>Pokemon Gallery</h1>
      <PokemonGallery pokemons={pokemons} />
      <button onClick={() => handleRemovePokemon('Pikachu')}>
        Remove Pikachu
      </button>
    </div>
  );
};

export default App;
