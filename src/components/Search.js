import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="columns is-mobile is-justify-content-center">
      <div className="column is-8-desktop is-10-mobile ">
        <div className="field">
          <form onSubmit={handleSubmit}>
            <div className="control has-icons-left">
              <input
                className="input is-rounded"
                type="text"
                value={input}
                placeholder="Digite o nome do pokemon"
                onChange={handleChange}
                onInput={(e) => props.filterPokemon(e.target.value)}
              ></input>
              <span className="icon is-left">
                <BiSearchAlt />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
