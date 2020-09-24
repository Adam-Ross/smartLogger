import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
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
      console.log("Sending post request");
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
            <label htmlFor="message" className="active">
              Edit message...
            </label>
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

export default EditLogModal;
