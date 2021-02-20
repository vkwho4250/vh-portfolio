import React from "react";
import "./Projects.scss";
import ProjectPanel from "./ProjectPanel";
import ProjectInfo from "../data/ProjectInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
   return (
      <div id="projects-page">
         <div className="flex-container">
            <div className="title-content">
               <h1>Projects</h1>
            </div>
            <div className="projects-container">
               <div className="nav-links">
                  <ul>
                     <li>
                        <h6>Yahtzee</h6>
                     </li>
                     <li>
                        <h6>Rock-Paper-Scissors</h6>
                     </li>
                     <li>
                        <h6>Vue Bullet Journal</h6>
                     </li>
                     <li>
                        <h6>React BulletJournal</h6>
                        <h6>In Progress</h6>
                     </li>
                  </ul>
               </div>
               <div className="panel-container">
                  {ProjectInfo.map((project, index) => {
                     return <ProjectPanel key={index} project={project} />;
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Projects;
