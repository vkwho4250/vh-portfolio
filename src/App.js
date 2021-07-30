import React, { useState } from "react";
import "./App.scss";

import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import NavSideBar from "./components/NavSideBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ImageSlider from "./components/ImageSlider";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faChevronLeft,
  faEnvelope,
  faDownload,
  faEllipsisH,
  faHandSpock,
  faLaptopCode,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faChevronUp,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faExternalLinkAlt,
  faDownload,
  faEnvelope,
  faEllipsisH,
  faHandSpock,
  faLaptopCode,
  faPeopleArrows,
);

function App() {
  const [cursorActive, setCursorActive] = useState(false);
  const [projectSlider, setProjectSlider] = useState({
    project: "react-ecommerce",
    totalImages: 12,
  });
  const [showProjectSlider, setShowProjectSlider] = useState(false);

  const changeProjectSlider = (project, totalImages) => {
    setProjectSlider({ project, totalImages });
    setShowProjectSlider(true);
  };

  const closeProjectSlider = (e) => {
    if (
      e.target.id === "project-image-slider" ||
      e.target.id === "project-image-container"
    ) {
      setShowProjectSlider(false);
    }
  };

  const changeCursorActive = (e) => {
    if (e.type === "mouseenter") {
      setCursorActive(true);
    } else {
      setCursorActive(false);
    }
  };

  return (
    <div className="App">
      <Cursor cursorActive={cursorActive} />
      <NavBar changeCursorActive={changeCursorActive} />
      <NavSideBar changeCursorActive={changeCursorActive} />
      <Home changeCursorActive={changeCursorActive} />
      <About changeCursorActive={changeCursorActive} />
      <Projects
        changeCursorActive={changeCursorActive}
        changeProjectSlider={changeProjectSlider}
      />
      <Contact changeCursorActive={changeCursorActive} />
      {showProjectSlider && (
        <ImageSlider
          projectSlider={projectSlider}
          closeProjectSlider={closeProjectSlider}
        />
      )}
    </div>
  );
}

export default App;
