import React from 'react';

const PokemonCard = ({ pokemon }) => {
  const { name, image, weight, abilities } = pokemon;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Weight: {weight}</p>
      <p>
        Abilities: {abilities.map((ability) => ability.ability.name).join(', ')}
      </p>
    </div>
  );
};

export default PokemonCard;
