import React, { useState, useEffect } from "react";
import "./Cursor.scss";
import Animations from "../animation";
import { motion, useMotionValue } from "framer-motion";

function Cursor({ cursorActive }) {
  const positionX = useMotionValue(0);
  const positionY = useMotionValue(0);
  const [hideCursor, setHideCursor] = useState(false);
  const [removeCursor, setRemoveCursor] = useState(false);

  // remove dot effect if small screen
  useEffect(() => {
    const handleDeviceLayout = () => {
      if (window.innerWidth < 414) {
        setRemoveCursor(true);
      } else {
        setRemoveCursor(false);
      }
    };

    handleDeviceLayout();

    window.addEventListener("resize", handleDeviceLayout);

    return () => {
      window.removeEventListener("resize", handleDeviceLayout);
    };
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      positionX.set(e.clientX - 5);
      positionY.set(e.clientY - 5);
    };

    const enterCursor = () => {
      setHideCursor(false);
    };

    const leaveCursor = () => {
      setHideCursor(true);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", enterCursor);
    document.addEventListener("mouseleave", leaveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", enterCursor);
      document.removeEventListener("mouseleave", leaveCursor);
    };
  }, []);

  return (
    <div>
      <motion.div
        className={`cursor ${hideCursor || removeCursor ? "no-display" : null}`}
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
