import "./App.scss";

import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import NavSideBar from "./components/NavSideBar/NavSideBar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
   faHome,
   faExternalLinkAlt,
   faChevronDown,
   faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faChevronUp, faHome, faChevronDown, faExternalLinkAlt);

function App() {
   return (
      <div className="App">
         <NavBar />
         <NavSideBar />
         <Home />
         <About />
         <Projects />
      </div>
   );
}

export default App;
