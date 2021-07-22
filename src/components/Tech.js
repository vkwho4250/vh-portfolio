import React, { useState, useEffect } from "react";
import "./Tech.scss";
import ProjectInfo from "../data/ProjectInfo";
import { motion } from "framer-motion";

function Tech({ tech, techInFocus, changeTechInFocus, changeCursorActive }) {
  const [techProjects, setTechProjects] = useState([]);

  // retrieve all tech and project links
  useEffect(() => {
    // display projects that focuses on this tech
    const getTechProjects = () => {
      const techProjects = ProjectInfo.filter((project) =>
        tech.projects.includes(project.folder),
      );

      // set reference to project page
      if (tech.projects.includes("portfolio")) {
        techProjects.push({
          title: "Portfolio",
          folder: "projects-page",
        });
      }
      setTechProjects(techProjects);
    };
    getTechProjects();
  }, []);

  const handleDisplay = () => {
    if (tech.projects.length !== 0) {
      changeTechInFocus(tech.name);
    } else {
      changeTechInFocus(null);
    }
  };

  return (
    <div
      onMouseEnter={tech.projects.length !== 0 ? changeCursorActive : null}
      onMouseLeave={tech.projects.length !== 0 ? changeCursorActive : null}
      onClick={handleDisplay}
      id={tech.name}
      className="tech-box"
    >
      <motion.div
        className="initial-display content"
        initial={{ y: 0 }}
        animate={
          techInFocus === tech.name && tech.projects.length !== 0
            ? { y: -80 }
            : { y: 0 }
        }
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/tech/${tech.svg}.svg`}
          className="tech-icon"
          alt={tech.name}
        ></img>
        <p className={tech.projects.length !== 0 ? "emphasis" : null}>
          {tech.name}
        </p>
      </motion.div>
      <motion.div
        className={`content ${tech.projects.length !== 0 ? "projects" : ""}`}
        initial={{ y: 0 }}
        animate={techInFocus === tech.name ? { y: -100 } : { y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        onClick={handleDisplay}
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
