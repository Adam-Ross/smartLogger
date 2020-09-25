import React, { useEffect } from "react";
import { connect } from "react-redux";
import PreLoader from "../layout/PreLoader";
import LogItem from "./LogItem";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <h4
          className="center"
          style={{ fontStyle: "italic", fontWeight: "300", color: "#9e9e9e" }}
        >
          No logs...
        </h4>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

// Function that takes in state
const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
