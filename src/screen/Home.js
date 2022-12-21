import React from "react";
import PokeApi from "../components/PokeApi";
import { AiOutlineArrowUp } from 'react-icons/ai'

const Home = () => {
  return (
    <div id="main" className="section">
      <div className="container">
        <PokeApi />
        <a href="#main" className="button is-rounded toTop">
          <span className="icon">
            <AiOutlineArrowUp />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
