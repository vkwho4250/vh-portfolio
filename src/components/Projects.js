import React, { useState } from "react";
import "./Projects.scss";
import ProjectPanel from "./ProjectPanel";
import ProjectInfo from "../data/ProjectInfo";
import ProjectNavLink from "./ProjectNavLink";

function Projects() {
   const [allDetails, setAllDetails] = useState("");

   function openAllDetails() {
      setAllDetails("expand");
   }

   function closeAllDetails() {
      setAllDetails("collapse");
   }

   return (
      <div id="projects-page">
         <div className="page-content">
            <div className="header">
               <h1>Projects</h1>
            </div>
            <div className="projects-container">
               <div className="nav-links">
                  <div className="project-list">
                     <div className="detail-options">
                        <div onClick={openAllDetails}>
                           <h6>Expand All Details</h6>
                        </div>
                        <div onClick={closeAllDetails}>
                           <h6>Collapse All Details</h6>
                        </div>
                     </div>
                     <ul>
                        {ProjectInfo.map((project, index) => {
                           return (
                              <ProjectNavLink
                                 key={index}
                                 project={project}
                                 index={index}
                              />
                           );
                        })}
                     </ul>
                  </div>
               </div>
               <div className="panel-container">
                  {ProjectInfo.map((project, index) => {
                     return (
                        <ProjectPanel
                           key={index}
                           project={project}
                           index={index}
                           allDetails={allDetails}
                           setAllDetails={setAllDetails}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Projects;
