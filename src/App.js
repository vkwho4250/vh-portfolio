import "./App.scss";

import { GlobalProvider } from "./GlobalContext";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
   faHome,
   faExternalLinkSquareAlt,
   faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faExternalLinkSquareAlt, faChevronDown);

function App() {
   return (
      <GlobalProvider>
         <div className="App">
            <Home />
            <About />
            <Projects />
         </div>
      </GlobalProvider>
   );
}

export default App;
