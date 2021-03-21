import React, { useState, useEffect } from "react";
import "./ProjectPanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Animations from "./animation";

function ProjectPanel({
   project,
   index,
   allDetails,
   setAllDetails,
   changeCursorActive,
}) {
   const [showDetails, setShowDetails] = useState(false);

   useEffect(() => {
      switch (allDetails) {
         case "expand":
            setShowDetails(true);
            break;

         case "collapse":
            setShowDetails(false);
            break;

         default:
            break;
      }

      setAllDetails("");
   }, [allDetails]);

   function handleDetails() {
      setShowDetails(!showDetails);
   }

   return (
      <div id={project.folder} className="project-panel">
         <div className="main-panel">
            <div className="project-details">
               <h2>{String(index + 1).padStart(2, "0")}</h2>
               <div className="divider">
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
            </div>
            <div className="links desktop">
               <a
                  href={project.github}
                  className={project.github === "" ? "no-display" : ""}
                  title={`${project.title} Github`}
                  target="_blank"
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               >
                  <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
               </a>
               <a
                  href={project.site}
                  className={project.site === "" ? "no-display" : ""}
                  title={`${project.title} Live Site`}
                  target="_blank"
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               >
                  <FontAwesomeIcon
                     icon="external-link-alt"
                     className="ext-link icon"
                  />
               </a>
            </div>
            <div className="project-desc">
               <div className="text">
                  <h5>{project.title}</h5>
                  <h6 className="subheading">{project.description}</h6>
                  <div className="mobile">
                     <h4 className="tech-list">
                        {project.tech.map((tech, index) => {
                           return (
                              <span key={index}>
                                 {tech +
                                    (index !== project.tech.length - 1
                                       ? ", "
                                       : "")}
                              </span>
                           );
                        })}
                     </h4>

                     <div className="links">
                        <a
                           href={project.github}
                           className={project.github === "" ? "no-display" : ""}
                           title={`${project.title} Github`}
                           target="_blank"
                           onMouseEnter={changeCursorActive}
                           onMouseLeave={changeCursorActive}
                        >
                           <FontAwesomeIcon
                              icon={["fab", "github"]}
                              className="icon"
                           />
                        </a>
                        <a
                           href={project.site}
                           className={project.site === "" ? "no-display" : ""}
                           title={`${project.title} Live Site`}
                           target="_blank"
                           onMouseEnter={changeCursorActive}
                           onMouseLeave={changeCursorActive}
                        >
                           <FontAwesomeIcon
                              icon="external-link-alt"
                              className="ext-link icon"
                           />
                        </a>
                     </div>
                  </div>
                  <p
                     className="learn-more"
                     onClick={handleDetails}
                     onMouseEnter={changeCursorActive}
                     onMouseLeave={changeCursorActive}
                  >
                     Learn more about my thought process
                  </p>
               </div>
               <div className="project-images">
                  <div className="back-images">
                     <div className="img-container">
                        <img
                           src={`${process.env.PUBLIC_URL}/assets/${project.folder}/${project.screenshots[0]}.png`}
                        ></img>
                     </div>
                     <div className="img-container">
                        <img
                           src={`${process.env.PUBLIC_URL}/assets/${project.folder}/${project.screenshots[1]}.png`}
                        ></img>
                     </div>
                  </div>
                  <div className="front-image">
                     <div className="img-container">
                        <img
                           src={`${process.env.PUBLIC_URL}/assets/${project.folder}/${project.screenshots[2]}.png`}
                        ></img>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <motion.div
            variants={Animations.collapse}
            initial="close"
            animate={showDetails ? "open" : "close"}
            className="secondary-panel"
         >
            <div onClick={handleDetails} className="closeBtn">
               <FontAwesomeIcon icon="chevron-up" className="icon" />
            </div>

            <div className="notes-container">
               <div className="reason-container">
                  <h5>Why this project?</h5>
                  <ul>
                     {project.reasons.map((point, index) => {
                        return (
                           <li key={index}>
                              <p>{point}</p>
                           </li>
                        );
                     })}
                  </ul>
               </div>
               <div className="achievements-container">
                  <h5>I learned:</h5>
                  <ul>
                     {project.achievements.map((point, index) => {
                        return (
                           <li key={index}>
                              <p>{point}</p>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
            <div className="next-steps">
               <a
                  href={project.github}
                  className={project.github === "" ? "no-display" : ""}
                  title={`${project.title} Github`}
                  target="_blank"
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               >
                  <h6>View repository</h6>
               </a>
               <a
                  href={project.site}
                  className={project.site === "" ? "no-display" : ""}
                  title={`${project.title} Live Site`}
                  target="_blank"
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               >
                  <h6>Visit Live Demo</h6>
               </a>
            </div>
         </motion.div>
      </div>
   );
}

export default ProjectPanel;
