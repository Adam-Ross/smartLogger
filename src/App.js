import React, { Fragment } from "react";
import Logs from "./components/logComponent/Logs";
import Title from "./components/titleComponent/Title";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <Title />
        <Logs />
      </div>
    </Fragment>
  );
};
export default App;
