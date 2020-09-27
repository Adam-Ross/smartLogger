import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techActions";
import Logs from "../logs/Logs";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  // const [techList, setTechList] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  // const getTechs = async () => {
  //   setLoading(true);

  //   const res = await fetch("/techs");
  //   const data = await res.json();
  //   setTechList(data);
  //   setLoading(false);
  // };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="center" style={{ color: "#2196f3" }}>
          Active Technicians
        </h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
