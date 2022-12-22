import "./css/App.css";
import "bulma/css/bulma.min.css";
import Home from "./screen/Home";
import { Fragment } from "react";
import Loading from "./screen/Loading";

function App() {
  return (
    <Fragment>
      <Loading />
      <Home />
    </Fragment>
  );
}

export default App;
