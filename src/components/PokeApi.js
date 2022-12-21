import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Pokedex from "./Pokedex";

const PokeApi = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let data = [];
    for (let i = 1; i <= 150; i++) {
      data.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    const response = axios
      .all(data.map((id) => axios.get(id)))
      .then((result) => setPokemons(result));
    return response;
  };

  return (
    <div className="columns is-mobile is-multiline is-justify-content-center is-align-items-start">
      {pokemons.map((pokemon, index) => (
        <Fragment key={index}>
          <Pokedex
            img={pokemon.data.sprites.front_default}
            name={pokemon.data.name}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default PokeApi;
