import React from "react";

const Searchbar = () => {
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form autoComplete="off">
          <div className="input-field">
            <input id="search" type="search" required autoComplete="off" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Searchbar;
