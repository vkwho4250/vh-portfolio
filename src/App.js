import React, { useState } from "react";
import "./App.scss";

import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavSideBar from "./components/NavSideBar/NavSideBar";
import Cursor from "./components/Cursor";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
   faExternalLinkAlt,
   faChevronDown,
   faChevronUp,
   faEnvelope,
   faDownload,
   faInfo,
} from "@fortawesome/free-solid-svg-icons";

library.add(
   fab,
   faChevronUp,
   faChevronDown,
   faExternalLinkAlt,
   faDownload,
   faEnvelope,
   faInfo
);

function App() {
   const [cursorActive, setCursorActive] = useState(false);

   function changeCursorActive(e) {
      if (e.type === "mouseenter") {
         setCursorActive(true);
         console.log("pulse");
      } else {
         setCursorActive(false);
         console.log("stop");
      }
   }

   return (
      <div className="App">
         <Cursor cursorActive={cursorActive} />
         <NavBar changeCursorActive={changeCursorActive} />
         <NavSideBar changeCursorActive={changeCursorActive} />
         <Home changeCursorActive={changeCursorActive} />
         <About changeCursorActive={changeCursorActive} />
         <Projects changeCursorActive={changeCursorActive} />
         <Contact changeCursorActive={changeCursorActive} />
      </div>
   );
}

export default App;
