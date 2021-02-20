import React from "react";
import "./ProjectPanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectPanel({ project }) {
   return (
      <div className="panel">
         <div className="project-details">
            <h1>01</h1>
            <div className="divider"></div>
            <ul>
               {project.tech.map((tech, index) => {
                  return (
                     <li key={index}>
                        <p>{tech}</p>
                     </li>
                  );
               })}
            </ul>
         </div>
         <div className="links">
            <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
            <FontAwesomeIcon
               icon="external-link-alt"
               className="ext-link icon"
            />
         </div>
         <div className="project-desc"></div>
      </div>
   );
}

export default ProjectPanel;
