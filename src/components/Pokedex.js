import React from "react";

const Pokedex = (props) => {
  return (
    <div className="columns is-mobile is-multiline is-justify-content-center is-align-items-start">
      {props.pokemons.map((pokemon, index) => (
        <div
          className="column is-flex is-flex-direction-column is-align-items-center is-3-desktop is-5-mobile is-3-tablet box mr-3"
          key={index}
        >
          <img src={pokemon.data.sprites.front_default} />
          <p>{pokemon.data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Pokedex;
