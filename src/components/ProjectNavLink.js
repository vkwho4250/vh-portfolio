import React, { useState } from "react";
import "./ProjectNavLink.scss";
import Animations from "../animation";
import { motion } from "framer-motion";

function ProjectNavLink({ project, index, changeCursorActive }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleHover(e) {
    if (e.type === "mouseenter") {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  }

  return (
    <li
      className="project-nav-link"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a
        href={`#${project.folder}`}
        onMouseEnter={changeCursorActive}
        onMouseLeave={changeCursorActive}
      >
        <h5>{`${String(index + 1).padStart(2, "0")} / ${project.title}`}</h5>

        <motion.div
          className="details"
          layout
          variants={Animations.collapse}
          animate={showDetails ? "open" : "close"}
          initial={false}
        >
          <h6>{project.description}</h6>
          <ul>
            {project.tech.map((tech, index) => {
              return <li key={index}>{tech}</li>;
            })}
          </ul>
        </motion.div>
      </a>
    </li>
  );
}

export default ProjectNavLink;
