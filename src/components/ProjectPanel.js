import React from "react";
// import "./ProjectPanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as BackgroundLines } from "../assets/SVG/white-lines.svg";
import { ReactComponent as TitleSquare } from "../assets/SVG/title-square.svg";

import PanelColor from "./PanelColor";

function ProjectPanel({ project }) {
   return (
      <div className="project-panel">
         {/* <PanelColor project={project} /> */}
         {/* <BackgroundLines className="bg-lines" /> */}
         {/* <TitleSquare className="title-square" /> */}
         <div className="content">
            <div className="title-text-box"></div>
            <h1>Yahtzee</h1>
            <div className="image-container">
               <img
                  src={`${process.env.PUBLIC_URL}/assets/${project}/${project}-2.png`}
               ></img>
            </div>
            <div className="tech-links">
               {/* <ul>
                  <li>HTML5,</li>
                  <li>CSS3,</li>
                  <li>JavaScript</li>
               </ul> */}
               <div className="link-icons">
                  <FontAwesomeIcon icon={["fab", "github"]} className="icons" />
                  <FontAwesomeIcon
                     icon="external-link-square-alt"
                     className="icons"
                  />
               </div>
            </div>
            <div className="description">
               <h5>Key Tech</h5>
               <p>HTML5, CSS3, JavaScript</p>
               <h5>Project involves:</h5>
               <ul>
                  <li>operations handling different inputs and outputs</li>
                  <li>simple user interaction</li>
                  <li>
                     conditional variable assignments, often dependent on user
                     selection
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default ProjectPanel;
