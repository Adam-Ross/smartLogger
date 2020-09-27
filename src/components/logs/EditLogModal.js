import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog, clearCurrent } from "../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, updateLog, clearCurrent }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
    //eslint-disable-next-line
  }, [current]);

  const clearFields = () => {
    setMessage("");
    setTech("");
    setAttention(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech." });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(updatedLog);
      M.toast({ html: `Log updated by ${tech}` });
      clearCurrent();
      clearFields();
    }
  };

  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Edit log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <select
            name="tech"
            className="browser-default"
            value={tech}
            onChange={(e) => e.target.value}
          >
            <option value="" disabled>
              Select Tech
            </option>
            <option value="Mike Jones">Mike Jones</option>
            <option value="Slim Thug">Slim Thug</option>
            <option value="Paul Wall">Paul Wall</option>
          </select>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-light btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal
);
