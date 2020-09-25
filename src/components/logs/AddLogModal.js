import React, { useState } from "react";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

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
      const newLog = {
        message,
        tech,
        attention,
        date: new Date(),
      };

      addLog(newLog);
      M.toast({ html: `Log added by ${tech}` });
      clearFields();
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter sytem log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Enter log message...
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Tech
              </option>
              <option value="Slim Thug">Slim Thug</option>
              <option value="Paul Wall">Paul Wall</option>
              <option value="Mike Jones">Mike Jones</option>
              <option value="Mike Watts">Mike Watts</option>
            </select>
          </div>
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
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addLog })(AddLogModal);
