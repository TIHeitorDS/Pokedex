import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Pokedex from "./Pokedex";
import Search from "./Search";

const PokeApi = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i <= 150; i++) {
      endpoints.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    return axios.all(endpoints).then((result) => setPokemons(result));
  };

  const filterPokemon = (name) => {
    let poke = [];
    if (name === "") return getPokemons();
    for (const pokemon of pokemons) {
      if (pokemon.data.name.includes(name)) {
        poke.push(pokemon);
      }
    }

    setPokemons(poke);
  };

  return (
    <Fragment>
      <Search filterPokemon={filterPokemon} />
      <Pokedex pokemons={pokemons} />
    </Fragment>
  );
};

export default PokeApi;
