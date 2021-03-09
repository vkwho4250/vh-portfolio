import React, { useState, useEffect } from "react";
import "./Cursor.scss";
import Animations from "./animation";
import { motion, useMotionValue } from "framer-motion";

function Cursor({ cursorActive }) {
   const positionX = useMotionValue(0);
   const positionY = useMotionValue(0);

   useEffect(() => {
      const moveCursor = (e) => {
         positionX.set(e.clientX - 5);
         positionY.set(e.clientY - 5);
      };

      window.addEventListener("mousemove", moveCursor);
      return () => {
         window.removeEventListener("mousemove", moveCursor);
      };
   }, []);

   return (
      <div>
         <motion.div
            className="cursor"
            style={{
               translateX: positionX,
               translateY: positionY,
            }}
            variants={Animations.grow}
            initial="inactive"
            animate={cursorActive ? "active" : "inactive"}
         ></motion.div>
      </div>
   );
}

export default Cursor;
