import React, { Fragment, useEffect } from "react";
import Searchbar from "./components/layout/Searchbar";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css/dist/js/materialize.min.js";
import Logs from "./components/logs/Logs";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes materialize JS... Modals
    M.AutoInit();
  });

  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};
export default App;
