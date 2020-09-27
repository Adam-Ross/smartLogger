import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const Searchbar = ({ searchLogs }) => {
  const text = useRef("");

  const handleChange = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form autoComplete="off">
          <div className="input-field">
            <input
              id="search"
              type="search"
              required
              ref={text}
              placeholder="Search Logs..."
              autoComplete="off"
              onChange={handleChange}
            />
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

export default connect(null, { searchLogs })(Searchbar);
