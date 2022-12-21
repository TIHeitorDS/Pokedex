import React from "react";

const Pokedex = (props) => {
  return (
    <div className="column is-flex is-flex-direction-column is-align-items-center is-3-desktop is-5-mobile is-3-tablet box mr-3">
      <img src={props.img}></img>
      <p className="is-capitalized">{props.name}</p>
    </div>
  );
};

export default Pokedex;
