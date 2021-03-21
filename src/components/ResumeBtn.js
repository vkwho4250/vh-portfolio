import React, { useState } from "react";
import "./ResumeBtn.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function ResumeBtn() {
   const [showDownload, setShowDownload] = useState(false);

   const handleChange = (e) => {
      if (e.type === "mouseenter") {
         setShowDownload(true);
      } else {
         setShowDownload(false);
      }
   };

   return (
      <div
         className="resume-btn"
         onMouseEnter={handleChange}
         onMouseLeave={handleChange}
      >
         <motion.h6
            initial={{ y: 0 }}
            animate={showDownload ? { y: -25 } : { y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
         >
            Resume
         </motion.h6>
         <motion.button
            className="download"
            initial={{ y: 25 }}
            animate={showDownload ? { y: -25 } : { y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
         >
            <FontAwesomeIcon icon="download" className="icon" />
         </motion.button>
      </div>
   );
}

export default ResumeBtn;
