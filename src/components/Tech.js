import React, { useState, useEffect } from "react";
import "./Tech.scss";
import ProjectInfo from "../data/ProjectInfo";
import { motion } from "framer-motion";

function Tech({ tech, techInFocus, changeTechInFocus }) {
   const [techProjects, setTechProjects] = useState([]);
   const [showProjects, setShowProjects] = useState(false);

   useEffect(() => {
      getTechProjects();
   }, []);

   useEffect(() => {
      if (techInFocus !== tech.name) {
         setShowProjects(false);
      }
   }, [techInFocus]);

   function getTechProjects() {
      const techProjects = ProjectInfo.filter((project) =>
         tech.projects.includes(project.folder)
      );

      if (tech.projects.includes("portfolio")) {
         techProjects.push({
            title: "Portfolio",
            folder: "projects-page",
         });
      }
      setTechProjects(techProjects);
   }

   function handleDisplay() {
      changeTechInFocus(tech.name);
      setShowProjects(!showProjects);
   }

   return (
      <div onClick={handleDisplay} id={tech.name} className="tech-box">
         <div className="initial-display content">
            <img
               src={`${process.env.PUBLIC_URL}/assets/tech/${tech.svg}.svg`}
               className="tech-icon"
            ></img>
            <p>{tech.name}</p>
         </div>
         <motion.div
            className={`content ${
               tech.projects.length !== 0 ? "projects" : ""
            }`}
            initial={{ y: 0 }}
            animate={showProjects ? { y: -60 } : { y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
         >
            {techProjects.map((project, index) => {
               return (
                  <a key={index} href={`/#${project.folder}`}>
                     {project.title}
                  </a>
               );
            })}
         </motion.div>
      </div>
   );
}

export default Tech;
