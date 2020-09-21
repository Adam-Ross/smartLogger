import React, { Fragment, useEffect } from "react";
// import Logs from "./components/logComponent/Logs";
// import Title from "./components/titleComponent/Title";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes materialize JS... Modals
    M.AutoInit();
  });

  return (
    <Fragment>
      <h1>This is the thing.</h1>
    </Fragment>
  );
};
export default App;
