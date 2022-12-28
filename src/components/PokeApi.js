import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokedex from "./Pokedex";

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

  return <Pokedex pokemons={pokemons} />;
};

export default PokeApi;
