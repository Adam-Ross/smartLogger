import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech, deleteTech }) => {
  const handleDelete = () => {
    deleteTech(tech.id);
  };

  return (
    <div className="collection-item">
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text" onClick={handleDelete}>
          delete
        </i>
      </a>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
