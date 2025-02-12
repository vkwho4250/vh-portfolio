import "./Projects.scss";
import React, { useState } from "react";
import ProjectPanel from "./ProjectPanel";
import ProjectInfo from "../data/ProjectInfo";
import ProjectNavLink from "./ProjectNavLink";

function Projects({ changeCursorActive, changeProjectSlider }) {
  const portfolio = {
    title: "Portfolio",
    folder: "You're already here :D",
    description: "Count me in too!",
    tech: ["React", "Sass", "Framer-Motion"],
  };

  const [allDetails, setAllDetails] = useState("expand");

  const openAllDetails = () => setAllDetails("expand");
  const closeAllDetails = () => setAllDetails("collapse");

  return (
    <div id="projects-page">
      <h1 className="page-title">
        <span>Featured Projects</span>
      </h1>
      <div className="projects-container">
        <div className="nav-links">
          <div className="project-list">
            <div className="detail-options">
              <button
                onClick={openAllDetails}
                onMouseEnter={changeCursorActive}
                onMouseLeave={changeCursorActive}
              >
                <h6 className="expand-collapse">Expand All Project Details</h6>
              </button>
              <button
                onClick={closeAllDetails}
                onMouseEnter={changeCursorActive}
                onMouseLeave={changeCursorActive}
              >
                <h6 className="expand-collapse">
                  Collapse All Project Details
                </h6>
              </button>
            </div>
            <ul>
              <ProjectNavLink
                key={0}
                project={portfolio}
                index={-1}
                changeCursorActive={changeCursorActive}
              />
              {ProjectInfo.map((project, index) => {
                return (
                  <ProjectNavLink
                    key={index}
                    project={project}
                    index={index}
                    changeCursorActive={changeCursorActive}
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
                changeCursorActive={changeCursorActive}
                changeProjectSlider={changeProjectSlider}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
