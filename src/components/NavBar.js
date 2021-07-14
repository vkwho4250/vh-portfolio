import React, { useState } from "react";
import "./NavBar.scss";
import Animations from "../animation";
import ResumeBtn from "./ResumeBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../assets/SVG/logo.svg";
import { motion } from "framer-motion";

function NavBar({ changeCursorActive }) {
  const pages = ["home", "about", "projects", "contact"];
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);

  return (
    <motion.nav
      variants={Animations.movement}
      initial="initialY"
      custom={-100}
      animate="endingXY"
      transition={{ duration: 1, delay: 2.5 }}
    >
      <Logo className="logo" />
      <ul className={`page-nav-links ${openMenu ? "open" : null}`}>
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              onMouseEnter={changeCursorActive}
              onMouseLeave={changeCursorActive}
            >
              <a href={`/#${page}-page`}>
                <h6>{page}</h6>
              </a>
            </li>
          );
        })}
        <li onMouseEnter={changeCursorActive} onMouseLeave={changeCursorActive}>
          <ResumeBtn className="resume-btn" />
        </li>
      </ul>
      <div
        className="menu"
        onClick={handleMenu}
        onMouseEnter={changeCursorActive}
        onMouseLeave={changeCursorActive}
      >
        <motion.div
          className="menu-btn"
          initial={{ rotate: 0 }}
          animate={openMenu ? { rotate: 45 } : { rotate: 0 }}
        >
          <FontAwesomeIcon icon="ellipsis-h" className="icon" />
        </motion.div>
        <motion.div
          className="menu-btn"
          initial={{ rotate: 0 }}
          animate={openMenu ? { rotate: -45 } : { rotate: 0 }}
        >
          <FontAwesomeIcon icon="ellipsis-h" className="icon" />
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
