import React from "react";
import "./PanelColor.scss";

function PanelColor({ project }) {
   return (
      <div className={`project-color-panels ${project}`}>
         <div className="project-color pc1"></div>
         <div className="project-color pc2"></div>
         <div className="project-color pc3"></div>
         <div className="project-color pc4"></div>
      </div>
   );
}

export default PanelColor;
