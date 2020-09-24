import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";
import Logs from "../logs/Logs";

const TechListModal = () => {
  const [techList, setTechList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch("/techs");
    const data = await res.json();
    setTechList(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="center" style={{ color: "#2196f3" }}>
          Active Technicians
        </h4>
        <ul className="collection">
          {!loading &&
            techList.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
